import React from "react";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
        name: "Material UI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
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
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "JWT",
        logo: "https://www.vectorlogo.zone/logos/jwtio/jwtio-icon.svg",
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
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className=" pt-16 px-4 ">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
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
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400">
                {SkillsInfo[0].title}
              </h3>
              <Marquee
                pauseOnHover={true}
                speed={60}
                direction="right"
                gradient={true}
                gradientColor={[255, 255, 255]}
                gradientWidth={100}
                autoFill={true}
              >
                {SkillsInfo[0].skills.map(({ name, logo }) => (
                  <motion.a
                    key={name}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 w-14 h-14 rounded-full cursor-pointer bg-gray-900 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-transform duration-200 mr-6" // Using mr-6 for spacing
                    whileHover={{ scale: 1.01 }}
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.a>
                ))}
              </Marquee>
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
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400">
              {SkillsInfo[1].title}
            </h3>
            <Marquee
              pauseOnHover={true}
              speed={50}
              gradient={false}
              autoFill={true}
            >
              {SkillsInfo[1].skills.map(({ name, logo }) => (
                <motion.a
                  key={name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 w-14 h-14 rounded-full cursor-pointer bg-gray-900 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-transform duration-200 mr-6" // Using mr-6 for spacing
                  whileHover={{ scale: 1.01 }}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-8 h-8 object-contain"
                  />
                </motion.a>
              ))}
            </Marquee>
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
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-indigo-600 dark:text-indigo-400">
              {SkillsInfo[2].title}
            </h3>
            <Marquee
              pauseOnHover={true}
              speed={50}
              gradient={false}
              autoFill={true}
            >
              {SkillsInfo[2].skills.map(({ name, logo }) => (
                <motion.a
                  key={name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 w-14 h-14 rounded-full cursor-pointer bg-gray-900 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-transform duration-200 mr-6" // Using mr-6 for spacing
                  whileHover={{ scale: 1.01 }}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-8 h-8 object-contain"
                  />
                </motion.a>
              ))}
            </Marquee>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Skills;
