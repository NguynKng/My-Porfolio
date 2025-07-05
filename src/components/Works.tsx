import { ArrowUpRight } from "lucide-react";
import ViewImageModal from "./ViewImageModal";
import { useState } from "react";

type Project = {
  imageUrl: string;
  title: string;
  description: string;
  type: string;
  link: string;
};

export default function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>({} as Project);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const projectData: Project[] = [
    {
      imageUrl: "/project-1.jpg",
      type: "Website",
      title: "Retro Camera",
      description:
        "A vintage camera website showcasing retro designs and photography.",
      link: "#",
    },
    {
      imageUrl: "/project-2.jpg",
      type: "Product Design",
      title: "The White Lamp",
      description:
        "A sleek and modern lamp design that blends functionality with aesthetics.",
      link: "#",
    },
    {
      imageUrl: "/project-3.jpg",
      type: "Branding",
      title: "Rucksuck.",
      description:
        "A branding project for a backpack company, focusing on adventure and style.",
      link: "#",
    },
    {
      imageUrl: "/project-4.jpg",
      type: "Website",
      title: "Since Day One.",
      description:
        "A personal blog website that chronicles experiences and insights since the beginning.",
      link: "#",
    },
    {
      imageUrl: "/project-5.jpg",
      type: "Illustration",
      title: "Sand Dunes.",
      description:
        "An illustration project capturing the beauty and serenity of sand dunes.",
      link: "#",
    },
    {
      imageUrl: "/project-6.jpg",
      type: "Branding",
      title: "Minimalismo.",
      description:
        "A branding project focused on minimalistic design principles and aesthetics.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 py-20 border-b-[1px] border-gray-700 px-4">
      <h1 className="tracking-[0.3em] text-white">RECENT WORKS</h1>
      <p className="mt-8 text-6xl font-bold text-white font-[DM_Serif_Display]">
        Here are some of my favorite projects I have done lately. Feel free to
        check them out.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 py-20 gap-12">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="flex gap-8 group cursor-pointer"
            onClick={() => handleProjectClick(item)}
          >
            <img
              src={item.imageUrl}
              className="w-36 h-40 object-cover group-hover:opacity-50"
            />
            <div className="border-t-[1px] border-gray-700 py-4 w-full relative">
              <h1 className="text-gray-500 mt-2">{item.type}</h1>
              <h2 className="text-white lg:text-3xl text-xl group-hover:text-yellow-500">
                {item.title}
              </h2>
              <ArrowUpRight className="absolute top-4 right-0 text-white size-5" />
            </div>
          </div>
        ))}
      </div>
      <ViewImageModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
