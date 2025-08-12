import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const ProjectModal = ({ selected, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  if (!selected) return null;

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-opacity-10 backdrop-blur-md flex items-center justify-center overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-gray-200 rounded-3xl w-full max-w-6xl h-full max-h-[90vh] relative overflow-y-auto"
      >
        <button
          onClick={onClose}
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
                <h4 className="text-xl font-semibold mb-2">Description</h4>
                <p className="text-gray-300 leading-tight text-md">
                  {selected.description}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Technology Stack</h4>
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
                  <h4 className="text-xl font-semibold mb-2">Future Plans</h4>
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
    </div>
  );
};

export default ProjectModal;
