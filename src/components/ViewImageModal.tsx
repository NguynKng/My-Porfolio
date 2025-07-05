import { Mouse, X } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  imageUrl: string;
  title: string;
  description: string;
  type: string;
  link: string;
};

// components/ViewImageModal.tsx
export default function ViewImageModal({
  isOpen,
  project,
  onClose,
}: {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative lg:h-[90vh] lg:w-[45vw] w-[90vw] bg-white">
        <Link to={project.link} className="absolute top-8 hover:bg-black left-8 bg-black/40 flex items-center justify-center py-2 px-4">
            <h1 className="text-white">Project link</h1>
        </Link>
        <img
          src={project.imageUrl}
          alt="View"
          className="h-[70%] w-full shadow-lg"
        />
        <div className="h-[30%] w-full p-10 text-black">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="mt-2 text-gray-400 text-lg">{project.description}</p>
          <div className="flex items-center mt-4 gap-2">
            <Mouse />
            <span className="text-gray-500">{project.type}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
