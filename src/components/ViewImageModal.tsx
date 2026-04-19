import {
  ChevronLeft,
  ChevronRight,
  Github,
  GalleryHorizontal,
  Mouse,
  Smartphone,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  projectName: string;
  imageUrl: string;
  detailMedia: {
    type: "image" | "video";
    src: string;
  }[];
  title: string;
  type: string;
  technologies: string[];
  description: string;
  backendLink: string;
  frontendLink: string;
  nativeLink?: string;
};

export default function ViewImageModal({
  isOpen,
  project,
  onClose,
}: {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = useMemo(
    () => (project?.detailMedia?.length ? project.detailMedia : []).filter((m) => !!m?.src),
    [project]
  );

  useEffect(() => {
    if (!isOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPaddingRight;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  if (!media.length) {
    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#02060dcc] p-3 backdrop-blur-sm sm:p-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          className="card-surface relative flex h-[90vh] w-full max-w-5xl items-center justify-center rounded-3xl p-10"
        >
          <p className="text-center text-slate-300">No media available for this project.</p>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-500/60 bg-slate-950/95 p-2.5 text-slate-100 transition hover:border-slate-300"
            aria-label="Close modal"
          >
            <X className="size-4" />
          </button>
        </motion.div>
      </motion.div>,
      document.body
    );
  }

  const goPrev = () => setCurrentIndex((i) => (i - 1 + media.length) % media.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % media.length);
  const active = media[currentIndex];

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-[#02060dcc] p-2 backdrop-blur-sm sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.985 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="card-surface relative mx-auto flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-slate-700/40 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-30 rounded-full border border-slate-500/60 bg-slate-950/95 p-2.5 text-slate-100 transition hover:border-slate-300 sm:right-4 sm:top-4"
            aria-label="Close modal"
          >
            <X className="size-4" />
          </button>

          <div className="hide-scrollbar flex-1 overflow-y-auto overscroll-contain">
            <div className="relative flex h-[72vh] min-h-68 w-full items-center justify-center bg-black">
              <AnimatePresence mode="wait">
                {active.type === "image" ? (
                  <motion.img
                    key={`${active.src}-${currentIndex}`}
                    src={active.src}
                    alt={`${project.title} - ${currentIndex + 1}/${media.length}`}
                    className="h-full w-full object-contain"
                    draggable={false}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.28 }}
                  />
                ) : (
                  <motion.video
                    key={`${active.src}-${currentIndex}`}
                    src={active.src}
                    controls
                    playsInline
                    className="max-h-full max-w-full rounded-md"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.28 }}
                  />
                )}
              </AnimatePresence>

              {media.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-400/40 bg-black/55 p-2 text-white transition hover:border-slate-200/65"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-400/40 bg-black/55 p-2 text-white transition hover:border-slate-200/65"
                    aria-label="Next"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    {currentIndex + 1} / {media.length}
                  </div>
                </>
              )}
            </div>

            <div className="border-t border-slate-700/45 bg-[#0b121d] px-5 py-5 sm:px-8 sm:py-7">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h1 className="font-[Sora] text-base font-semibold text-slate-100 sm:text-lg">
                    {project.title}
                  </h1>
                  <div className="mt-1 flex items-center gap-2 text-slate-400">
                    <Mouse size={16} />
                    <span className="text-xs tracking-[0.14em]">{project.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-600/50 bg-white/5 px-3 py-2 text-xs tracking-[0.16em] text-slate-300">
                  <GalleryHorizontal className="size-4 text-[#f5c55d]" />
                  SLIDE GALLERY
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{project.description}</p>

              <div className="mt-5">
                <h2 className="mb-2 text-sm tracking-[0.16em] text-slate-300">TECHNOLOGIES</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="cursor-default rounded-full border border-slate-600/55 bg-[#122038] px-3 py-1.5 text-xs tracking-[0.08em] text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {project.frontendLink && (
                  <Link
                    to={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-600/55 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-300/70"
                  >
                    <Github size={18} />
                    Frontend
                  </Link>
                )}
                {project.backendLink && (
                  <Link
                    to={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-600/55 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-300/70"
                  >
                    <Github size={18} />
                    Backend
                  </Link>
                )}
                {project.nativeLink && (
                  <Link
                    to={project.nativeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-600/55 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-300/70"
                  >
                    <Smartphone size={18} />
                    Mobile
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
