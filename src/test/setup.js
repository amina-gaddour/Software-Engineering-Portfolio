import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

vi.mock("framer-motion", async () => {
  const React = await import("react");
  const ignoredProps = new Set([
    "animate", "exit", "initial", "layout", "transition", "viewport", "whileHover", "whileInView",
  ]);
  const motion = new Proxy({}, {
    get: (_, tag) => React.forwardRef(({ children, ...props }, ref) => {
      const domProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !ignoredProps.has(key)),
      );
      return React.createElement(tag, { ...domProps, ref }, children);
    }),
  });

  return {
    AnimatePresence: ({ children }) => children,
    MotionConfig: ({ children }) => children,
    motion,
    useReducedMotion: () => true,
  };
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

window.HTMLElement.prototype.scrollIntoView = vi.fn();
