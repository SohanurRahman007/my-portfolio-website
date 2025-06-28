import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      setSelected(null);
    }
  };

  return (
    <section
      id="projects"
      className="py-10 px-6 md:px-20 bg-gradient-to-tr from-[#f0f0f0] via-white to-[#e0e7ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl md:font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
          Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Explore my featured web applications and development work.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="bg-[#1f1f2e] hover:bg-[#29293d] border border-purple-600/20 rounded-2xl shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-indigo-400/40 transition-all duration-300"
          >
            <Swiper
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="rounded-t-2xl h-48"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Project ${i}`}
                    className="h-48 w-full object-cover rounded-t-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-800/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          id="modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        >
          <div className="bg-[#111] rounded-2xl max-w-3xl w-full shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-3xl text-white hover:text-purple-400 z-10"
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
                {selected.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${selected.title} - Slide ${i}`}
                      className="w-full h-60 object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="text-gray-300">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-900/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={selected.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center px-4 py-2 rounded-md"
                >
                  GitHub (Client)
                </a>
                {selected.githubServer && (
                  <a
                    href={selected.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center px-4 py-2 rounded-md"
                  >
                    GitHub (Server)
                  </a>
                )}
                <a
                  href={selected.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center px-4 py-2 rounded-md"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
