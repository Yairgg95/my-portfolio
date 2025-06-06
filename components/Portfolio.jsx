import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FAIREFAC Web",
    description:
      "App for quoting and purchasing auto parts, connecting customers with suppliers.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
    image: "/assets/FAIREFAC-Web.png",
    liveUrl: "https://fairefac.vercel.app",
    repoUrl: "https://github.com/Yairgg95/FAIREFAC-web",
    status: "Completed",
  },
  {
    id: 2,
    title: "FAIREFAC API",
    description:
      "A backend system for managing automotive parts quotations, streamlining the connection between customers and suppliers.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "Stripe", "AWS"],
    image: "/assets/FAIREFAC-API.png",
    liveUrl: "https://fairefac-api.onrender.com",
    repoUrl: "https://github.com/Yairgg95/FAIREFAC-API-V1",
    status: "Completed",
  },
  {
    id: 3,
    title: "3D-Garden Web",
    description:
      "A responsive web interface for browsing, selecting, and purchasing custom 3D-printed planters.",
    tags: ["HTML", "JavaScript", "Bootstrap", "CSS3"],
    image:
      "https://raw.githubusercontent.com/Yairgg95/3D-Garden-web/refs/heads/develop/assets/principal-img.png",
    liveUrl: "#",
    repoUrl: "https://github.com/Yairgg95/3D-Garden-web",
    status: "Completed",
  },
  {
    id: 4,
    title: "3D-Garden API",
    description:
      "Java backend service managing products, orders, users, and admin tools for a 3D-printed planters marketplace.",
    tags: ["MySQL", "Java", "Spring Boot", "AWS", "Gradle"],
    image:
      "https://www.alvantia.com/wp-content/uploads/2018/05/imagen-spring-boot-ENGLISH.jpg",
    liveUrl: "#",
    repoUrl: "https://github.com/Yairgg95/3D-Garden-API",
    status: "Completed",
  },
  {
    id: 5,
    title: "Spiderman API",
    description:
      "Backend for managing multiverse characters with authentication, image uploads, data persistence, and error handling.",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "AWS S3", "Docker", "Maven"],
    image: "/assets/spiderman-api.png",
    liveUrl: "#",
    repoUrl: "https://github.com/Yairgg95/spiderman-api",
    status: "Completed",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="h-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-20 md:pt-24 lg:pt-36"
    >
      <h2 className="text-3xl md:text-5xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-8 md:mt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform flex flex-col max-h-[400px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-start space-x-4 mt-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <Github size={20} />
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
