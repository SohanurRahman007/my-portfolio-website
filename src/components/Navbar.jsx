import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { id: 1, name: "Home", to: "home", icon: FaHome },
  { id: 2, name: "Skills", to: "skills", icon: FaCode },
  { id: 3, name: "Education", to: "education", icon: FaGraduationCap },
  { id: 4, name: "Projects", to: "projects", icon: FaLaptopCode },
  { id: 5, name: "Contact", to: "contact", icon: FaEnvelope },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <img
            className="h-10"
            src="https://i.ibb.co.com/Hf4yzSfh/Brown-Creative-Elegant-Studio-Photo-Logo-1-removebg-preview.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map(({ id, name, to, icon: Icon }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition flex items-center gap-2"
              >
                <Icon className="text-xl" />
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1KsseenqW9PJr33GIU1MjFF2W12D5wfx6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition items-center gap-2 shadow"
          >
            <FaDownload />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-white md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 border-t shadow flex flex-col gap-4"
        >
          {navLinks.map(({ id, name, to, icon: Icon }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 dark:text-white font-medium hover:text-indigo-600 transition flex items-center gap-2"
              >
                <Icon className="text-xl" />
                {name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1GJNwcoBlDqkboGTVN1PcrNKu0iJGf0GR/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium hover:text-indigo-600 transition cursor-pointer"
            >
              <FaDownload />
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
