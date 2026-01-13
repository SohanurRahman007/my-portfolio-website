import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import profileImage from "../assets/image/sohanur_rahman.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const techIcons = [
    {
      icon: FaJs,
      name: "JavaScript",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: FaReact,
      name: "React.js",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-white",
      bgColor: "bg-gray-500/20",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      icon: SiExpress,
      name: "Express.js",
      color: "text-gray-300",
      bgColor: "bg-gray-400/20",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-400",
      bgColor: "bg-green-600/20",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-cyan-300",
      bgColor: "bg-cyan-400/20",
    },
    {
      icon: SiFirebase,
      name: "Firebase",
      color: "text-yellow-500",
      bgColor: "bg-yellow-600/20",
    },
  ];

  // Handle mobile touch and desktop hover
  const handleImageInteraction = () => {
    setIsHovering(true);
  };

  const handleImageLeave = () => {
    setIsHovering(false);
  };

  // For mobile devices, show icons on click/touch
  const shouldShowIcons = isMobile ? isHovering : isHovering;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-transparent relative overflow-hidden mt-20 md:mt-2"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Hello, I'm{" "}
            </span>
            <br />
            <span className="text-white">Sohanur Rahman</span>
          </h1>

          <div className="mb-6">
            <h2 className="text-xl md:text-3xl text-white font-semibold mb-2">
              MERN Stack Developer
            </h2>
            <div className="text-lg md:text-xl text-indigo-300 font-medium">
              <TypeAnimation
                sequence={[
                  "React.js | Next.js Developer",
                  2000,
                  "Node.js | Express.js Backend",
                  2000,
                  "MongoDB | Firebase Expert",
                  2000,
                  "Building Scalable Web Apps",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-lg">
            Frontend Developer with{" "}
            <strong className="text-indigo-400">MERN stack</strong> expertise,
            seeking to transition into
            <strong className="text-indigo-400"> Full-Stack development</strong>
            . Eager to contribute to scalable projects and grow into a technical{" "}
            <strong className="text-indigo-400">leadership role</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/SohanurRahman007",
                  color: "hover:bg-indigo-900",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/sohanurrahman007",
                  color: "hover:bg-indigo-900",
                  label: "LinkedIn",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/SohanurRahman0007",
                  color: "hover:bg-indigo-900",
                  label: "Facebook",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-gray-800 shadow-md flex items-center justify-center text-indigo-400 border border-indigo-800 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/Resume of Sohanur Rahman.pdf"
              download="Resume of Sohanur Rahman.pdf"
              className="group relative bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold flex items-center gap-3 shadow-lg transition-all duration-300 overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaFileDownload className="text-lg" />
              </motion.div>
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Image with Perfect Orbiting Icon's */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div
            className="relative cursor-pointer"
            onMouseEnter={!isMobile ? handleImageInteraction : undefined}
            onMouseLeave={!isMobile ? handleImageLeave : undefined}
            onClick={isMobile ? handleImageInteraction : undefined}
            onTouchStart={isMobile ? handleImageInteraction : undefined}
          >
            {/* Perfect Circle Container */}
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] flex items-center justify-center rounded-full border border-transparent mx-auto">
              {/* Main Profile Image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-800 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-gray-800/10 to-gray-800/5 z-10">
                <img
                  src={profileImage}
                  alt="Sohanur Rahman - MERN Stack Developer"
                  className="w-full h-full object-cover"
                />

                {/* Hint text when not hovering effect */}
                {!shouldShowIcons && (
                  <div className="absolute inset-0 flex items-end justify-center pb-4 lg:pb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-indigo-300 text-xs lg:text-sm font-medium bg-gray-800/80 px-3 lg:px-4 py-1 lg:py-2 rounded-full backdrop-blur-sm border border-indigo-800 text-center"
                    >
                      {isMobile ? "Tap to see skills" : "Hover to see skills"}
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Perfectly Balanced Orbiting Tech Icon's */}
              {techIcons.map((tech, index) => {
                const totalIcons = techIcons.length;
                const angle = (index / totalIcons) * 2 * Math.PI;
                const radius = isMobile ? 140 : 190; // Smaller radius for mobile

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    className={`absolute w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 border-indigo-800 shadow-xl backdrop-blur-sm ${tech.bgColor} ${tech.color} z-20`}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: shouldShowIcons ? 1 : 0,
                      opacity: shouldShowIcons ? 1 : 0,
                      x: shouldShowIcons ? x : 0,
                      y: shouldShowIcons ? y : 0,
                      rotate: shouldShowIcons ? 360 : 0,
                    }}
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: shouldShowIcons ? index * 0.1 : 0,
                      },
                      y: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: shouldShowIcons ? index * 0.1 : 0,
                      },
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: shouldShowIcons ? index * 0.1 : 0,
                      },
                      opacity: {
                        duration: 0.3,
                        delay: shouldShowIcons ? index * 0.1 : 0,
                      },
                      rotate: {
                        duration: 20,
                        repeat: shouldShowIcons ? Infinity : 0,
                        ease: "linear",
                      },
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 30,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: isMobile ? "-20px" : "-24px",
                      marginTop: isMobile ? "-20px" : "-24px",
                    }}
                  >
                    <tech.icon className="text-base lg:text-lg" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-indigo-400 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-indigo-700 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
