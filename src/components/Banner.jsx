/**
 * Banner Component:
 * This component represents the main hero section of a portfolio.
 * It features a profile image, professional title, a brief summary,
 * and social media links. The component uses Framer Motion for
 * subtle entry animations and includes a resume download button with a
 * unique animated border effect. The overall design is clean and
 * responsive, adapting to different screen sizes.
 */
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
} from "react-icons/fa";
import profileImage from "../assets/image/sohanur.jpg";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 "
    >
      <style>{`
        /* Animated border effect for the download button */
        @keyframes glow-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animated-button-border {
          position: relative;
          padding: 2px; /* Creates the border width */
          background: #111827;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        .animated-button-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: conic-gradient(transparent 0%, #60a5fa 20%, transparent 40%, transparent 60%, #818cf8 80%, transparent 100%);
          animation: glow-border 4s linear infinite;
          z-index: 1;
          filter: blur(2px);
          transition: filter 0.3s ease;
        }
        .animated-button-border:hover::before {
          animation-duration: 2s;
          filter: blur(4px);
        }
        
        /* Styling for the button's inner content */
        .download-button-inner {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #111827;
          border-radius: 9999px;
        }

        /* Professional Social Icons Styling */
        .social-icon-wrapper {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }

        .social-icon-wrapper a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          color: #fff;
          background-color: #374151; /* Default background color */
          transition: all 0.3s ease-in-out;
        }

        .social-icon-wrapper a:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-icon-wrapper a.linkedin:hover {
          background-color: #0e76a8; /* LinkedIn blue */
        }
        
        .social-icon-wrapper a.github:hover {
          background-color: #171515; /* GitHub dark gray */
        }

        .social-icon-wrapper a.facebook:hover {
          background-color: #3b5998; /* Facebook blue */
        }
      `}</style>
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I'm <br />{" "}
            <span className=" text-indigo-400 ">Sohanur Rahman</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer | MERN Stack Enthusiast
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed">
            As a skilled Full Stack Developer, I specialize in crafting dynamic
            and responsive web applications using a modern tech stack. I am
            proficient in JavaScript and the React.js framework, with hands-on
            experience utilizing various React Component Libraries to build
            intuitive user interfaces. My backend expertise includes developing
            robust and secure APIs with Node.js and Express.js, and managing
            data effectively with MongoDB. I am passionate about delivering
            seamless, end-to-end solutions that are both high-performing and
            user-friendly.
          </p>

          {/* Buttons and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="social-icon-wrapper">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/SohanurRahman007"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/sohanurrahman007/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/profile.php?id=100080957303185"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook />
              </motion.a>
            </div>
            {/* Download Resume Button with Animated Border */}
            <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/uc?export=download&id=1GJNwcoBlDqkboGTVN1PcrNKu0iJGf0GR"
                download
                className="animated-button-border flex items-center justify-center relative z-10 px-6 py-2 rounded-full dark:text-indigo-400 bg-white dark:bg-gray-800 transition-colors duration-300 shadow-lg font-semibold"
              >
                <motion.div
                  className="download-button-inner relative z-20 flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaFileDownload /> Resume Download
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image (without animated border) */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 backdrop-blur-xl bg-gray-800/30">
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
