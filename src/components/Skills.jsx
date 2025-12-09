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
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
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
        logo: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png",
      },
      {
        name: "Clerk",
        logo: "https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logo.png&w=96&q=75",
      },
      {
        name: "Drizzle",
        logo: "https://avatars.githubusercontent.com/u/108468352?s=200&v=4",
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
    <section id="skills" className="pt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white tracking-wide">
        Skills
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center mb-4">
        The languages, frameworks, and tools that I trust to build fast, modern,
        and secure web solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Frontend Card - Full Width */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-400">
                {SkillsInfo[0].title}
              </h3>
              <Marquee
                pauseOnHover={true}
                speed={40}
                direction="right"
                gradient={true}
                gradientColor={[30, 30, 30]}
                gradientWidth={100}
                autoFill={true}
              >
                {SkillsInfo[0].skills.map(({ name, logo }) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center mx-4 cursor-pointer group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-800 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      <img
                        src={logo}
                        alt={name}
                        className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 mt-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </Marquee>
            </div>
          </Tilt>
        </motion.div>

        {/* Backend & DB Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-500 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-400">
                {SkillsInfo[1].title}
              </h3>
              <Marquee
                pauseOnHover={true}
                speed={35}
                direction="left"
                gradient={true}
                gradientColor={[30, 30, 30]}
                gradientWidth={100}
                autoFill={true}
              >
                {SkillsInfo[1].skills.map(({ name, logo }) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center mx-4 cursor-pointer group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border-2 border-indigo-800 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      <img
                        src={logo}
                        alt={name}
                        className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 mt-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </Marquee>
            </div>
          </Tilt>
        </motion.div>

        {/* Tools & Others Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-500 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-400">
                {SkillsInfo[2].title}
              </h3>
              <Marquee
                pauseOnHover={true}
                speed={30}
                gradient={true}
                gradientColor={[30, 30, 30]}
                gradientWidth={100}
                autoFill={true}
              >
                {SkillsInfo[2].skills.map(({ name, logo }) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center mx-4 cursor-pointer group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-800 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      <img
                        src={logo}
                        alt={name}
                        className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 mt-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </Marquee>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
