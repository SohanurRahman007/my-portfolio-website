import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 3, name: "Skills", to: "skills" },
    { id: 4, name: "Education", to: "education" },
    { id: 5, name: "Projects", to: "projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-indigo-600 dark:text-white">
          <Link to="/" className="text-2xl font-extrabold tracking-widest">
            <span className="text-white">Sohan</span>
            <span className="text-purple-500">.</span>
          </Link>
        </div>

        {/* Center - NavLinks */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map(({ id, name, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Resume + Theme */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition flex items-center gap-1"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 border-t shadow flex flex-col gap-4">
          {navLinks.map(({ id, name, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 dark:text-white font-medium hover:text-indigo-600"
              >
                {name}
              </Link>
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="block text-indigo-600 dark:text-indigo-400  font-medium"
            >
              <FaDownload className="inline mr-1" />
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
