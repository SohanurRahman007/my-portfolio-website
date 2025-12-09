import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/SohanurRahman007", // Your GitHub URL
      label: "GitHub Profile",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sohanurrahman007",
      label: "LinkedIn Profile",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 border-t border-gray-700 py-10 px-4 mt-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between sm:flex-row-reverse">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 sm:mb-0">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="text-2xl">{link.icon}</div>
            </motion.a>
          ))}
        </div>

        {/* Copyright and Name */}
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white mb-1">Sohanur Rahman</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sohanur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
