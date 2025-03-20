export default function Resume() {
  const technologies = [
    {
      name: "AWS",
      url: "https://aws.amazon.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
      name: "CSS3",
      url: "https://www.w3schools.com/css/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Express",
      url: "https://expressjs.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
      name: "Google Cloud",
      url: "https://cloud.google.com",
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "HTML5",
      url: "https://www.w3.org/html/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Linux",
      url: "https://www.linux.org/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "Nginx",
      url: "https://www.nginx.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "React",
      url: "https://reactjs.org/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Sass",
      url: "https://sass-lang.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Java",
      url: "https://www.java.com/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg",
    },
  ];

  const certificates = [
    {
      title: "Full-Stack Jr JavaScript Developer",
      provider: "Kodemia",
      year: "2024",
      location: "Mexico City, Mexico",
    },
    {
      title: "Scrum Fundamentals Certified (SFC™)",
      provider: "SCRUMstudy",
      year: "2024",
      location: "Mexico City, Mexico",
    },
    {
      title: "Google Cloud Essentials",
      provider: "Google",
      year: "2024",
      location: "Mexico City, Mexico",
    },
    {
      title: "EF SET English Certificate 62/100 (C1 Advanced)",
      provider: "EF SET",
      year: "2024",
      location: "Mexico City, Mexico",
    },
  ];
  return (
    <section
      id="resume"
      className="h-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-6 md:pt-2 lg:pt-16"
    >
      <h2 className="text-3xl md:text-5xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Resume
      </h2>

      <div className="flex flex-col md:flex-row gap-4 my-3 md:my-6">
        <a
          href="/resume.pdf"
          download="Resume.pdf"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume (EN)
        </a>
        <a
          href="/cv.pdf"
          download="CV.pdf"
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Descargar CV (ES)
        </a>
      </div>

      <h3 className="text-2xl md:text-3xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Languages and Tools
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6  my-3 lg:my-6">
        {technologies.map((tech) => (
          <a key={tech.name} href={tech.url} target="_blank" rel="noreferrer">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 md:w-24 md:h-24 hover:scale-110 transition-transform bg-white dark:bg-slate-500 rounded p-4"
            />
          </a>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Certifications
      </h3>

      <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md my-3 md:my-6">
        
        <ul className="space-y-4">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="text-gray-700 dark:text-gray-300 text-center"
            >
              <strong>{cert.title}</strong> <br />
              {cert.provider} | {cert.year}, {cert.location}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
