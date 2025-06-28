// src/pages/ProjectDetails.jsx

import { useParams } from "react-router-dom";

const projectDetails = {
  "parcel-delivery": {
    name: "Parcel Delivery Web App",
    stack: ["React", "Tailwind CSS", "Firebase", "MongoDB", "Express"],
    description:
      "A full-stack parcel delivery platform supporting region-based pricing, parcel tracking, and authentication.",
    live: "https://parcel-delivery.web.app",
    github: "https://github.com/yourusername/parcel-client",
    challenges: "Dynamic rate calculation and delivery area filtering.",
    future:
      "Adding real-time tracking, SMS notifications, and admin dashboard.",
    image: "/images/project1.jpg",
  },
  "garden-tips": {
    name: "Garden Tips Blog",
    stack: ["React", "Firebase", "Express", "MongoDB"],
    description:
      "A blog site where users can post gardening tips, comment on blogs, and explore gardener profiles.",
    live: "https://garden-tips-blog.web.app",
    github: "https://github.com/yourusername/garden-client",
    challenges: "Managing blog ownership and secure commenting.",
    future: "Add categories, tags, and like/favorite system.",
    image: "/images/project2.jpg",
  },
  "plant-shop": {
    name: "Plant Selling E-Commerce",
    stack: ["React", "Tailwind", "Express", "MongoDB", "JWT"],
    description:
      "An e-commerce platform for buying and selling plants with secure login and payment system.",
    live: "https://plant-shop.web.app",
    github: "https://github.com/yourusername/plant-client",
    challenges: "Implementing cart logic and secure checkout flow.",
    future: "Integrate payment gateway, and implement search & filter.",
    image: "/images/project3.jpg",
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const data = projectDetails[slug];

  if (!data) return <p className="text-center p-10">Project not found</p>;

  return (
    <div className="min-h-screen py-20 px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-lg mb-8 w-full object-cover h-64"
        />
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

        <p className="text-lg mb-2">
          <strong>Tech Stack:</strong> {data.stack.join(", ")}
        </p>
        <p className="mb-4">
          <strong>Description:</strong> {data.description}
        </p>
        <p className="mb-4">
          <strong>Challenges:</strong> {data.challenges}
        </p>
        <p className="mb-6">
          <strong>Future Plans:</strong> {data.future}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
          >
            Live Site
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
