import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FAIREFAC Web",
    description:
      "App for quoting and purchasing auto parts, connecting customers with suppliers.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQFbjqPb24YXtg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733890388663?e=1743055200&v=beta&t=7M8eLwbjkJtklVP3KMvQCtl6jSnlzOPfDcq9EYqvegI",
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
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQFy_SnC1G3orw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733891420700?e=1743055200&v=beta&t=xTwDyut4P-elYK0jSR1YecGTTo5MjznAg50OWaZAyAI",
    liveUrl: "https://fairefac-api.onrender.com",
    repoUrl: "https://github.com/Yairgg95/FAIREFAC-API-V1",
    status: "Completed",
  },
  {
    id: 3,
    title: "3D-Garden Web",
    description:
      "App for a marketplace selling 3D-printed planters, currently in development.",
    tags: ["HTML", "JavaScript", "Bootstrap", "CSS3"],
    image:
      "https://raw.githubusercontent.com/Yairgg95/3D-Garden-web/refs/heads/develop/assets/principal-img.png",
    liveUrl: "#",
    repoUrl: "https://github.com/Yairgg95/3D-Garden-web",
    status: "In Progress",
  },
  {
    id: 4,
    title: "3D-Garden API",
    description:
      "Backend for a marketplace managing inventory, order fulfillment, and the buying and selling of 3D-printed planters. Currently in the planning stage.",
    tags: ["MySQL", "Java", "Spring Boot", "AWS"],
    image:
      "https://www.alvantia.com/wp-content/uploads/2018/05/imagen-spring-boot-ENGLISH.jpg",
    liveUrl: "#",
    repoUrl: "https://github.com/Yairgg95/3D-Garden-API",
    status: "In Progress",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8 md:mt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
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
