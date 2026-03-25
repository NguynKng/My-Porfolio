import { ArrowUpRight } from "lucide-react";
import ViewImageModal from "./ViewImageModal";
import { useState } from "react";
import { motion } from "framer-motion";

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
        { type: "image", src: "/personal-project/project5-1.png" },
        { type: "image", src: "/personal-project/project5-2.png" },
        { type: "image", src: "/personal-project/project5-3.png" },
        { type: "image", src: "/personal-project/project5-4.png" },
        { type: "image", src: "/personal-project/project5-5.png" },
        { type: "image", src: "/personal-project/project5-6.png" },
        { type: "image", src: "/personal-project/project5-7.png" },
        { type: "image", src: "/personal-project/project5-8.png" },
        { type: "video", src: "/personal-project/project5-video.mp4" },
      ],    

      type: "Website / Mobile",
      description:
        "Developed a modern social networking platform that provides a friendly environment by using AI to detect and manage toxic content. Users can enjoy 1-on-1 video calls with real-time translation, group chats, play interactive quizzes, and stay updated with daily tech news. The platform also allows users to create posts, like, comment, and even open their own online shops to sell products. Includes a dedicated admin dashboard for system and content management.",
      title: "BingBong - Advanced Social Network",
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
        "Cloudinary"
      ],
      backendLink: "https://github.com/NguynKng/BingBongApp-backend",
      frontendLink: "https://github.com/NguynKng/BingBongApp-frontend",
      nativeLink: "https://github.com/dattr09/BingBongApp"
    },
  ];

  return (
    <section className="section-shell border-y border-slate-700/45">
      <h1 className="section-kicker">RECENT WORKS</h1>
      <p className="mt-7 max-w-4xl font-[Sora] text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
        Selected personal projects focused on real-world products, scalability, and polished user experience.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projectData.map((item, index) => {
          const previewMedia = item.detailMedia.find((media) => media.type === "image");
          const previewSrc = previewMedia?.src || item.imageUrl;
          const isFeatured = index === 0;

          return (
            <motion.button
              key={item.projectName}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              className="card-surface group flex w-full max-w-3xl cursor-pointer flex-col overflow-hidden rounded-2xl text-left md:w-[calc(50%-0.75rem)] md:max-w-none xl:w-[calc((100%-3rem)/3)]"
              onClick={() => handleProjectClick(item)}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden border-b border-slate-700/45 bg-slate-900/60">
                <img
                  src={previewSrc}
                  alt={item.projectName}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = item.imageUrl;
                  }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                {isFeatured && (
                  <span className="absolute left-4 top-4 rounded-full border border-amber-300/45 bg-[#0d141f]/75 px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-amber-200">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                <span className="text-xs tracking-[0.18em] text-slate-400">{item.type}</span>
                <h2 className="mt-2 pr-7 text-lg font-medium text-slate-100 transition-colors duration-300 group-hover:text-[#f5c55d] sm:text-xl">
                  {item.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <ArrowUpRight className="absolute right-5 top-5 size-5 text-slate-200 transition duration-300 group-hover:text-[#f5c55d]" />
              </div>
            </motion.button>
          );
        })}
      </div>

      <ViewImageModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
