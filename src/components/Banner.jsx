import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profileImage from "../assets/image/sohanur.jpg";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-tr from-[#f0f0f0] via-white to-[#e0e7ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Hi, I'm <br />{" "}
            <span className="text-indigo-600 dark:text-indigo-400 ">
              Sohanur Rahman
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Full Stack Developer | MERN Stack Enthusiast
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed">
            I build secure and scalable web apps with React, Node.js, and
            MongoDB. Passionate about clean code and smooth user experiences.
          </p>

          {/* Buttons and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4 text-2xl text-gray-700 dark:text-white mt-2">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/SohanurRahman007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/sohanur-rahman-4b4285333/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/profile.php?id=100080957303185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 backdrop-blur-xl bg-white/30 dark:bg-gray-800/30">
            <img
              src={profileImage}
              alt="Sohanur Rahman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
