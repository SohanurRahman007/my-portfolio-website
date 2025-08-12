import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Fetches project data from projects.json.
    // This version assumes the file contains an 'images' array.
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err)); // Added error handling
  }, []);

  // Closes the modal when clicking outside of it.
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      setSelected(null);
    }
  };

  return (
    <section id="projects" className="pt-16 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
          Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
          Explore my featured web applications and development work.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            onClick={() => setSelected(project)}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer hover:scale-[1.03] transition-all duration-300 h-full"
          >
            <Swiper
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="rounded-t-2xl h-48"
            >
              {project.images &&
                project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Project ${project.title} - Slide ${i}`}
                      className="h-48 w-full object-cover rounded-t-2xl"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="card-body px-8 py-8 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {project.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide text-left">
                <span className="inline-block border-l-4 border-indigo-500 pl-4">
                  {project.description}
                </span>
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            id="modal-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 bg-opacity-10 backdrop-blur-md flex items-center justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-gray-200 rounded-3xl w-full max-w-6xl h-full max-h-[90vh] relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevents backdrop click from closing modal
            >
              <button
                onClick={() => setSelected(null)} // FIX: Replaced onClose with setSelected(null)
                className="absolute top-4 right-5 text-4xl text-gray-400 hover:text-indigo-500 z-10"
              >
                &times;
              </button>

              <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="rounded-t-2xl h-72 mb-4"
              >
                {selected.images &&
                  selected.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${selected.title} - Slide ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="p-4 pt-0">
                <h3 className="text-3xl text-center font-bold text-white">
                  {selected.title}
                </h3>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="flex flex-col space-y-6 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Description
                      </h4>
                      <p className="text-gray-300 leading-tight text-md">
                        {selected.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-indigo-600/20 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selected.challenges && (
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Challenges Faced
                        </h4>
                        <p className="text-gray-300 leading-tight text-md">
                          {selected.challenges}
                        </p>
                      </div>
                    )}
                    {selected.futurePlans && (
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Future Plans
                        </h4>
                        <p className="text-gray-300 leading-tight text-md">
                          {selected.futurePlans}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href={selected.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold px-4 py-3 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        {/* SVG icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-link"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        Live Site
                      </a>
                      <a
                        href={selected.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white text-center font-bold px-4 py-3 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        {/* GitHub icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22s-4 1-5-1v-2" />
                          <path d="M12 11V7" />
                          <path d="M11 19c-3.5-1-6-3-6-8.5a4 4 0 0 1 1-3.5a3.7 3.7 0 0 1-.5-3.5s1.5-.5 3 1.5a10 10 0 0 1 5 0c1.5-2 3-1.5 3-1.5a3.7 3.7 0 0 1-.5 3.5a4 4 0 0 1 1 3.5c0 5.5-2.5 7.5-6 8.5" />
                        </svg>
                        GitHub (Client)
                      </a>
                      {selected.githubServer && (
                        <a
                          href={selected.githubServer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gray-700 hover:bg-gray-600 text-white text-center font-bold px-4 py-3 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          {/* GitHub icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                          >
                            <path d="M15 22s-4 1-5-1v-2" />
                            <path d="M12 11V7" />
                            <path d="M11 19c-3.5-1-6-3-6-8.5a4 4 0 0 1 1-3.5a3.7 3.7 0 0 1-.5-3.5s1.5-.5 3 1.5a10 10 0 0 1 5 0c1.5-2 3-1.5 3-1.5a3.7 3.7 0 0 1-.5 3.5a4 4 0 0 1 1 3.5c0 5.5-2.5 7.5-6 8.5" />
                          </svg>
                          GitHub (Server)
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
