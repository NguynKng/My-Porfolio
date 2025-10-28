import { ArrowUpRight } from "lucide-react";
import ViewImageModal from "./ViewImageModal";
import { useState } from "react";

type Project = {
  projectName: string;
  imageUrl: string;
  title: string;
  type: string;
  technologies: string[];
  detailMedia: {
    type: "image" | "video";
    src: string;
  }[];
  description: string;
  backendLink: string;
  frontendLink: string;
  nativeLink?: string;
};

export default function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(
    {} as Project
  );
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const projectData: Project[] = [
    {
      projectName: "FlixZone",
      imageUrl: "/logo/netflix-clone.jpg",
      detailMedia: [
        { type: "image", src: "/personal-project/project1-1.jfif" },
        { type: "image", src: "/personal-project/project1-2.jfif" },
        { type: "image", src: "/personal-project/project1-3.jfif" },
        { type: "image", src: "/personal-project/project1-4.jfif" },
        { type: "image", src: "/personal-project/project1-5.jfif" },
        { type: "image", src: "/personal-project/project1-6.jfif" },
        { type: "video", src: "/personal-project/project1_video.mp4" },
      ],
      type: "Website",
      description:
        "Modern web app for browsing movies and TVshows, with search, trailers, and summaries powered by the IMDb API.",
      title: "FlixZone - Movie Discovery",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
        "Zustand",
        "Restful API",
        "JWT",
      ],
      backendLink: "https://github.com/NguynKng/NetflixClone-nodejs",
      frontendLink: "https://github.com/NguynKng/NetflixClone-react",
    },
    {
      projectName: "FriendSpace",
      imageUrl: "/logo/facebook-clone.jfif",
      detailMedia: [
        { type: "image", src: "/personal-project/project2-1.jfif" },
        { type: "image", src: "/personal-project/project2-2.jfif" },
        { type: "image", src: "/personal-project/project2-3.jfif" },
        { type: "image", src: "/personal-project/project2-4.jfif" },
        { type: "video", src: "/personal-project/project2_video.mp4" },
      ],
      type: "Website / Mobile",
      description:
        "A full-stack web and mobile app based on core basic Facebook features. User can chat 1vs1, add friend,create/like/comment post, customize personal profile.",
      title: "FriendSpace - Social Network",
      technologies: [
        "React",
        "React Native",
        "Typescript",
        "MongoDB",
        "Tailwind CSS",
        "Fastify",
        "Zustand",
        "Restful API",
        "Socket.IO",
        "Drizzle ORM",
        "JWT",
        "Expo"
      ],
      backendLink: "https://github.com/NguynKng/FacebookClone-frontend",
      frontendLink: "https://github.com/NguynKng/FacebookClone-backend",
      nativeLink: "https://github.com/NguynKng/FacebookClone-react-native",
    },
    {
      projectName: "GPTalk",
      imageUrl: "/logo/ChatGPT-clone.png",
      detailMedia: [
        { type: "image", src: "/personal-project/project3-1.jfif" },
        { type: "image", src: "/personal-project/project3-2.jfif" },
        { type: "image", src: "/personal-project/project3-3.jfif" },
        { type: "video", src: "/personal-project/project3_video.mp4" },
      ],

      type: "Website / Mobile",
      title: "GPTalk - AI Chatbot",
      description:
        "A Chat bot website and mobile app based on basic Chat-GPT features, using Gemini API to generate content.",
      technologies: [
        "React",
        "Typescript",
        "MySQL",
        "Tailwind CSS",
        "Fastify",
        "Zustand",
        "Restful API",
        "React Native",
        "Drizzle ORM",
        "JWT",
        "Expo"
      ],
      backendLink: "https://github.com/NguynKng/ChatGPTClone-backend",
      frontendLink: "https://github.com/NguynKng/ChatGPTClone-frontend",
      nativeLink: "https://github.com/NguynKng/ChatGPTClone-native",
    },
    {
      projectName: "TechZon",
      imageUrl: "/logo/e-commerce.svg",
      detailMedia: [
        { type: "image", src: "/personal-project/project4-1.jfif" },
        { type: "image", src: "/personal-project/project4-2.jfif" },
        { type: "image", src: "/personal-project/project4-3.jfif" },
        { type: "image", src: "/personal-project/project4-4.jfif" },
        { type: "video", src: "/personal-project/project4_video.mp4" },
      ],

      type: "Website",
      title: "TechZon- E-commerce Platform",
      backendLink: "https://github.com/NguynKng/EcommerceApp-backend",
      description:
        "Developed TechZon, a full-featured e-commerce web application allowing users to browse products, manage their cart and wishlist. Built an intuitive admin dashboard for managing inventory, users, and sales analytics. Focused on creating a responsive, seamless shopping experience using modern web technologies.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
        "Zustand",
        "Restful API",
        "Ant Design",
        "JWT",
        "Puppeteer",
      ],
      frontendLink: "https://github.com/NguynKng/EcommerceApp-frontend",
    },
    {
      projectName: "BingBong",
      imageUrl: "/logo/BingBong.ico",
      detailMedia: [
        { type: "image", src: "/personal-project/project5-1.jfif" },
        { type: "image", src: "/personal-project/project5-2.jfif" },
        { type: "image", src: "/personal-project/project5-3.jfif" },
        { type: "image", src: "/personal-project/project5-4.jfif" },
        { type: "image", src: "/personal-project/project5-5.jfif" },
        { type: "video", src: "/personal-project/project5-video.mp4" },
      ],

      type: "Website / Mobile",
      description:
        "Developed a modern social networking platform that provides a friendly environment by using AI to detect and manage toxic content. Users can enjoy 1-on-1 video calls with real-time translation, group chats, play interactive quizzes, and stay updated with daily tech news. The platform also allows users to create posts, like, comment, and even open their own online shops to sell products. Includes a dedicated admin dashboard for system and content management.",
      title: "BingBong - AI-Powered Social Network (In Progress)",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
        "Zustand",
        "Restful API",
        "WebRTC",
        "Socket.IO",
        "Python",
        "Flask",
        "JWT",
        "YOLO",
        "Puppeteer",
        "S3"
      ],
      backendLink: "https://github.com/NguynKng/BingBongApp-backend",
      frontendLink: "https://github.com/NguynKng/BingBongApp-frontend",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 py-20 border-b-[1px] border-gray-700 px-4">
      <h1 className="tracking-[0.3em] text-white">RECENT WORKS</h1>
      <p className="mt-8 text-6xl font-bold text-white font-[DM_Serif_Display]">
        Here are some of my personal projects I have done lately. Feel free to
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
