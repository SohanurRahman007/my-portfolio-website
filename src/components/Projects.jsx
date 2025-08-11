import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Fetches project data from projects.json.
    // This version assumes the file contains an 'images' array.
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
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

      {selected && (
        <div
          id="modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl max-w-3xl w-full relative overflow-hidden"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-3xl text-gray-700 dark:text-white hover:text-indigo-500 z-10"
            >
              &times;
            </button>

            <div className="p-6 space-y-4">
              <Swiper
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="rounded-xl h-60"
              >
                {selected.images &&
                  selected.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${selected.title} - Slide ${i}`}
                        className="w-full h-60 object-cover rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {selected.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={selected.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white text-center px-4 py-2 rounded-md transition-colors"
                >
                  Live Site
                </a>
                <a
                  href={selected.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-center px-4 py-2 rounded-md transition-colors"
                >
                  GitHub (Client)
                </a>
                {selected.githubServer && (
                  <a
                    href={selected.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-center px-4 py-2 rounded-md transition-colors"
                  >
                    GitHub (Server)
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
