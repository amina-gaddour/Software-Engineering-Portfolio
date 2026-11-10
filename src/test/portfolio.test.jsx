import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { LanguageProvider } from "../hooks/useLanguage.jsx";
import { useTheme } from "../hooks/useTheme";

function renderWithLanguage(component) {
  return render(<LanguageProvider>{component}</LanguageProvider>);
}

function ThemeHarness() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}

function NavbarHarness() {
  const [theme, setTheme] = useState("light");
  return <Navbar theme={theme} onToggleTheme={() => setTheme("dark")} />;
}

describe("portfolio interactions", () => {
  it("switches the interface from French to English", async () => {
    const user = userEvent.setup();
    renderWithLanguage(<NavbarHarness />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(document.documentElement).toHaveAttribute("lang", "en");
    expect(screen.getByRole("button", { name: "Projects" })).toBeInTheDocument();
    expect(document.title).toContain("Software Development & AI");
  });

  it("filters projects and exposes only verified repository links", async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Projects />);

    expect(screen.getByRole("heading", { name: /DocIA/i })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Intelligence artificielle" }));

    expect(screen.getByRole("heading", { name: /RiskInsight/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole("heading", { name: /Event Planner/i })).not.toBeInTheDocument();
    });
  });

  it("keeps the critical CV and contact actions available", () => {
    renderWithLanguage(<Hero />);

    expect(screen.getByRole("link", { name: /Télécharger CV/i })).toHaveAttribute(
      "href",
      expect.stringContaining("cv-amina-gaddour.pdf"),
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amina-gaddour-a6a633340/",
    );
  });

  it("persists the selected theme", async () => {
    const user = userEvent.setup();
    render(<ThemeHarness />);

    await user.click(screen.getByRole("button", { name: "light" }));

    expect(screen.getByRole("button", { name: "dark" })).toBeInTheDocument();
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
