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
      name: "GitHub",
      url: "https://github.com",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
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
      certificateURL:
        "https://app.openbadges.me/view/#!/badge?badgeid=62a25ace-463c-492e-8fa3-8f54c46fa383",
    },
    {
      title: "Scrum Fundamentals Certified (SFC™)",
      provider: "SCRUMstudy",
      year: "2024",
      location: "Mexico City, Mexico",
      certificateURL:
        "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-YairGodofredoGuadarramaGonzaga-1023249.pdf",
    },
    {
      title: "Google Cloud Essentials",
      provider: "Google",
      year: "2024",
      location: "Mexico City, Mexico",
      certificateURL:
        "https://www.cloudskillsboost.google/public_profiles/7c779784-d573-4b01-a4d4-dfda88d7df3a/badges/9936251",
    },
    {
      title: "EF SET English Certificate 62/100 (C1 Advanced)",
      provider: "EF SET",
      year: "2024",
      location: "Mexico City, Mexico",
      certificateURL: "https://cert.efset.org/en/sfoW7z",
    },
    {
      title: "Introduccion Java (POO)",
      provider: "Accenture",
      year: "2025",
      location: "Mexico City, Mexico",
      certificateURL:
        "https://www.linkedin.com/in/yair-guadarrama-gg95/details/certifications/1742011644482/single-media-viewer/?profileId=ACoAAE0e0RYBXQD0gu7GRVvZVZ9Q7WjvE_DZkws",
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
          href="/Resume-2025.pdf"
          download="Yair-resume.pdf"
          className="px-6 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume (EN)
        </a>
        <a
          href="/CV-2025.pdf"
          download="Yair-CV.pdf"
          className="px-6 py-2 bg-gray-700 text-white text-center rounded-lg hover:bg-gray-800 transition"
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
        <ul className="space-y-6">
          {certificates.map((cert, index) => (
            <a href={cert.certificateURL} target="_blank">
              <li
                key={index}
                className="text-gray-700 dark:text-gray-300 text-center my-3"
              >
                <strong className="hover:text-blue-700 dark:hover:text-[#6f42c1]">
                  {cert.title}
                </strong>{" "}
                <br />
                {cert.provider} | {cert.year}, {cert.location}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
