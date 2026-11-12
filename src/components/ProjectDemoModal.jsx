import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

function ProjectDemoModal({ project, onClose, labels }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="demo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="demo-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="demo-modal__header">
              <div>
                <h3 id="demo-modal-title">{project.title}</h3>
                <p>{labels.description}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="button button--primary demo-modal__close"
                onClick={onClose}
              >
                {labels.close} <FiX />
              </button>
            </div>

            <video
              className="demo-modal__video"
              src={project.demoVideo}
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              {labels.unsupported}
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ProjectDemoModal;
