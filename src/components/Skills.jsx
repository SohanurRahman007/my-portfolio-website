import React from "react";
import Tilt from "react-parallax-tilt";

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg",
      },

      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "React Router",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] px-6 pt-10 bg-gradient-to-tr from-[#f0f0f0] via-white to-[#e0e7ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-6"
    >
      <h2 className=" text-2xl md:text-3xl md:font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
        Skills
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center mb-3 ">
        The languages, frameworks, and tools that I trust to build fast, modern,
        and secure web solutions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* First Card - Full Width on all screens */}
        <div className="md:col-span-2">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={500}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-lg border border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400  ">
                {SkillsInfo[0].title}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {SkillsInfo[0].skills.map(({ name, logo }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center space-y-2 p-3 w-20 rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="w-12 h-12 object-contain"
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>

        {/* Second Card - Half Width */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={500}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-lg border border-gray-300 dark:border-gray-700 h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400 ">
              {SkillsInfo[1].title}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {SkillsInfo[1].skills.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-2 p-3 w-20 rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Tilt>

        {/* Third Card - Half Width */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={500}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-lg border border-gray-300 dark:border-gray-700 h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400 ">
              {SkillsInfo[2].title}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {SkillsInfo[2].skills.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-2 p-3 w-20 rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Skills;
