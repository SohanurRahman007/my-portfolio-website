import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaEnvelope,
  FaAward,
  FaUser,
} from "react-icons/fa";

const navLinks = [
  { id: 1, name: "Home", to: "home", icon: FaHome },
  { id: 2, name: "About", to: "about", icon: FaUser },
  { id: 3, name: "Skills", to: "skills", icon: FaCode },
  { id: 4, name: "Education", to: "education", icon: FaGraduationCap },
  { id: 5, name: "Projects", to: "projects", icon: FaLaptopCode },
  { id: 6, name: "Contact", to: "contact", icon: FaEnvelope },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Better active section detection using react-scroll events
  useEffect(() => {
    const checkActiveSection = () => {
      const sections = navLinks.map((link) => link.to);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    checkActiveSection();
    window.addEventListener("scroll", checkActiveSection);

    return () => window.removeEventListener("scroll", checkActiveSection);
  }, []);

  const isActive = (to) => activeSection === to;

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
          onSetActive={() => setActiveSection("home")}
          className="cursor-pointer flex items-center gap-2"
        >
          <img
            className="h-10"
            src="https://i.ibb.co.com/Hf4yzSfh/Brown-Creative-Elegant-Studio-Photo-Logo-1-removebg-preview.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map(({ id, name, to, icon: Icon }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(to)}
                className={`cursor-pointer transition flex items-center gap-2 px-4 py-2 rounded-lg relative ${
                  isActive(to)
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="text-lg" />
                {name}
                {isActive(to) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border-2 border-indigo-500 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Rewards Button with Enhanced Infinity Border Animation & Glow */}
          {/* Rewards Button with Minimal Border Animation */}
          <a
            href="https://drive.google.com/file/d/1aKTHKEwD_cQZu9RgoASKgrY99KLWiQyg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full items-center gap-2 shadow-lg font-medium transition-colors duration-300 relative"
            style={{
              border: "2px solid",
              borderColor: "transparent",
              animation: "borderColor 4s ease-in-out infinite",
            }}
          >
            <FaAward className="text-lg" />
            <span>Rewards</span>
            <style>{`
              @keyframes borderColor {
                0%, 100% {
                  border-color: #8b5cf6;
                }
                50% {
                  border-color: #ec4899;
                }
              }
            `}</style>
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
          className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 border-t shadow flex flex-col gap-3"
        >
          {navLinks.map(({ id, name, to, icon: Icon }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(to)}
                onClick={() => setMenuOpen(false)}
                className={`block font-medium transition flex items-center gap-3 px-4 py-3 rounded-lg ${
                  isActive(to)
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 font-semibold border-l-4 border-indigo-500"
                    : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="text-xl" />
                {name}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            {/* Rewards Button with Infinity Border Animation */}
            <a
              href="https://drive.google.com/file/d/1aKTHKEwD_cQZu9RgoASKgrY99KLWiQyg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full items-center gap-2 shadow-lg font-medium transition-colors duration-300 relative overflow-hidden"
              style={{
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(#6366f1, #6366f1), linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                animation: "borderRotate 3s linear infinite",
              }}
            >
              <FaAward className="text-lg" />
              <span>Rewards</span>
              <style>{`
              @keyframes borderRotate {
                0% {
                  background-position: 0% 0%, 0% 0%;
                }
                100% {
                  background-position: 0% 0%, 400% 0%;
                }
              }
            `}</style>
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
