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
    // Static projects data with your team project added
    const staticProjects = [
      {
        id: 1,
        title: "Bytestory - AI Blogging Platform",
        description:
          "Team project with AI-powered blogging features including real-time notifications, admin dashboard, two-step registration, email generator, and AI content generation with clean UI and smooth UX.",
        images: [
          "https://res.cloudinary.com/bytestore/image/upload/v1763314065/ai-project_oeqo8o.png",
          "https://res.cloudinary.com/bytestore/image/upload/v1763314065/ai-project-3_mtosjl.png",
          "https://res.cloudinary.com/bytestore/image/upload/v1763314065/ai-project-2_dbgg19.png",
        ],
        tags: [
          "Next.js",
          "React.js",
          "TailwindCSS",
          "MongoDB",
          "Socket.io",
          "Gemini AI",
          "shadcn/ui",
          "Framer Motion",
        ],
        challenges:
          "Implementing real-time features with Socket.io while maintaining performance, integrating AI API for content generation, and ensuring secure two-step authentication process with proper validation.",
        futurePlans:
          "Add more AI-powered writing assistants, implement collaborative editing features, expand admin analytics dashboard, and add multi-language support.",
        webapp: "https://byte-story.vercel.app",
        githubClient: "https://github.com/shahnewaz5646455/ByteStory",
        githubServer: "https://github.com/shahnewaz5646455/ByteStory",
        isTeamProject: true,
      },
      {
        id: 2,
        title: "FitSphere",
        images: [
          "https://i.ibb.co.com/wTVNQvB/fitness-1.png",
          "https://i.ibb.co.com/8gMqXsnB/fitness-2.png",
          "https://i.ibb.co.com/hx3xZYcB/fitness-3.png",
          "https://i.ibb.co.com/VWb9kZFJ/fitness-4.png",
          "https://i.ibb.co.com/8LDY6bxk/fitness-5.png",
          "https://i.ibb.co.com/hRRB7BqW/fitness-6.png",
          "https://i.ibb.co.com/ZpPgdzRX/fitness-7.png",
        ],
        description:
          "FitSphere is a role-based fitness tracking web application that connects Admins, Trainers, and Members on a single platform. It enables trainer bookings, class management, forum discussions, activity tracking, and online payments — designed with a professional dashboard for each role.",
        tags: [
          "React",
          "Node.js",
          "Tailwind.css",
          "Firebase",
          "Stripe",
          "jwt",
          "MongoDB",
          "Express.js",
        ],
        githubClient:
          "https://github.com/SohanurRahman007/assingnment-12-polishing-client",
        webapp: "https://fitsphere-e30b9.web.app/",
        challenges:
          "Building the FitSphere app was challenging, mainly due to securing Stripe payment integration, managing different user roles on the dashboard, and implementing backend API security using a role-based access control system and JWT authentication.",
        futurePlans:
          "Future enhancements for FitSphere could include a dedicated mobile app, a nutrition and meal planning feature, and more detailed trainer analytics to better track client progress.",
        isTeamProject: false,
      },
      {
        id: 3,
        title: "Idea Canvas",
        images: [
          "https://i.ibb.co.com/gLS7FZRK/idea-1.png",
          "https://i.ibb.co.com/3mGNGtNx/idea-2.png",
          "https://i.ibb.co.com/0yWM1CHB/idea-3.png",
          "https://i.ibb.co.com/HLPLMj5H/idea-5.png",
          "https://i.ibb.co.com/J47SJPQ/idea-4.png",
          "https://i.ibb.co.com/RpjbLQbS/idea-6.png",
        ],
        description:
          "This dynamic platform is designed for visually organizing and managing creative ideas. It allows users to perform CRUD operations on idea cards, which include details, goals, and collaboration notes. A secure commenting system and JSON Web Tokens (JWT) ensure a safe and collaborative environment for all users.",
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Firebase",
          "Framer Motion",
          "Tailwind.css",
        ],
        githubClient:
          "https://github.com/SohanurRahman007/assignment-11-polishing",
        webapp: "https://idea-canvas-88aaf.web.app/",
        challenges:
          "Building the platform was challenging due to the need for a secure and dynamic environment. The main hurdles were implementing robust CRUD operations on idea cards and creating a safe collaborative space using a secure commenting system and JWT authentication",
        futurePlans:
          "The Idea Canvas is a structured feature that helps users develop their creative concepts by defining a problem statement, identifying a target audience, and outlining a proposed solution. This approach moves beyond simple note-taking, turning the platform into a strategic planning tool for fleshing out ideas.",
        isTeamProject: false,
      },
      {
        id: 4,
        title: "Green Connected",
        images: [
          "https://i.ibb.co/NdkVW3rd/a-10-image-1.png",
          "https://i.ibb.co/yntgxr6B/a-10-image-2.png",
          "https://i.ibb.co/v49wRqH1/a-10-image-3.png",
          "https://i.ibb.co.com/jZG7jVFY/green1.png",
          "https://i.ibb.co.com/Fbs6WTxg/green2.png",
          "https://i.ibb.co.com/DDKc2LXs/green3.png",
        ],
        description:
          "This is a full-featured gardening tips web app where users can share and explore useful tips about plant care, indoor/outdoor gardening, composting, and more. It includes authentication, live tip filtering, and CRUD functionality using Firebase and MongoDB. The UI is built with Tailwind CSS and fully responsive across all devices.",
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Firebase",
          "Tailwind.css",
        ],
        githubClient:
          "https://github.com/SohanurRahman007/grow-together-client-new",
        webapp: "https://grow-together-auth.web.app/",
        challenges:
          "Building Green Connected required handling real-time data synchronization between Firebase and MongoDB. I also needed to implement a secure authentication system and a fast live filtering feature for tips without compromising performance.",
        futurePlans:
          "Future plans include creating a community forum for users to ask and answer questions. I also want to develop a personalized dashboard where users can save tips and create a gardening calendar.",
        isTeamProject: false,
      },
    ];

    setProjects(staticProjects);
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white tracking-wide">
          Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
          Explore my featured web applications and development work.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
            className="bg-gray-800 border border-gray-700 rounded-2xl cursor-pointer hover:scale-[1.03] transition-all duration-300 h-full relative"
          >
            {/* Team Project Badge */}
            {project.isTeamProject && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Team Project
                </span>
              </div>
            )}

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
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                {project.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-300 tracking-wide text-left">
                <span className="inline-block border-l-4 border-indigo-500 pl-4">
                  {project.description}
                </span>
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/20 text-indigo-400 text-xs px-3 py-1 rounded-full"
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
                <div className="flex items-center justify-center gap-4 mb-2">
                  <h3 className="text-3xl text-center font-bold text-white">
                    {selected.title}
                  </h3>
                  {selected.isTeamProject && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Team Project
                    </span>
                  )}
                </div>
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
