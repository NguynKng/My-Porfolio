import {
  Mouse,
  X,
  Github,
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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

  // Bảo vệ khi mảng rỗng
  const media = useMemo(
    () =>
      (project?.detailMedia?.length ? project.detailMedia : []).filter(
        (m) => !!m?.src
      ),
    [project]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [project, isOpen]);

  if (!isOpen) return null;
  if (!media.length) {
    // Không có media -> có thể hiển thị fallback hoặc return null
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <div className="relative lg:h-[70vh] lg:w-[60vw] w-[90vw] bg-white rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-gray-600 p-6 text-center">
            No media available for this project.
          </p>
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-3 right-3 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition"
            aria-label="Close modal"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    );
  }

  const goPrev = () =>
    setCurrentIndex((i) => (i - 1 + media.length) % media.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % media.length);

  const active = media[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative h-[90vh] lg:w-[60vw] w-[90vw] bg-white overflow-y-scroll hide-scrollbar rounded-lg shadow-lg">
        {/* Main media area */}
        <div className="relative h-[60vh] w-full bg-black rounded-t-lg flex items-center justify-center">
          {active.type === "image" ? (
            <img
              src={active.src}
              alt={`${project.title} - ${currentIndex + 1}/${media.length}`}
              className="h-full w-full object-contain"
              draggable={false}
            />
          ) : (
            <video
              src={active.src}
              controls
              playsInline
              className="max-h-full max-w-full rounded-md"
              // Tùy chọn: autoPlay muted nếu muốn tự chạy
              // autoPlay
              // muted
            />
          )}

          {/* Prev / Next controls */}
          {media.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition"
                aria-label="Previous"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition"
                aria-label="Next"
              >
                <ChevronRight className="size-5" />
              </button>

              {/* Counter badge */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {currentIndex + 1} / {media.length}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="w-full p-6 text-black space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold">{project.title}</h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">{project.description}</p>

          {/* Type */}
          <div className="flex items-center gap-2 text-gray-500">
            <Mouse size={18} />
            <span className="text-sm">{project.type}</span>
          </div>

          {/* Technologies */}
          <div className="mt-1">
            <h2 className="font-semibold text-gray-700 mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r cursor-pointer from-blue-500 to-indigo-500 text-white text-base font-medium rounded-full shadow-md hover:scale-105 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repo Links */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {project.frontendLink && (
              <Link
                to={project.frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
              >
                <Smartphone size={18} />
                Native
              </Link>
            )}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed cursor-pointer top-3 right-3 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition"
          aria-label="Close modal"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
