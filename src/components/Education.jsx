import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Social Science (MSS) in Political Science",
    institute: "National University, Bangladesh",
    year: "2021 - 2023",
    result: "Graduated",
  },
  {
    degree: "Bachelor of Social Science (BSS) in Political Science",
    institute: "National University, Bangladesh",
    year: "2017 - 2021",
    result: "Graduated",
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-[80vh] py-10 px-6 md:px-20 ">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
          Education
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>

        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center mb-4">
          My academic background that shaped my foundation and critical thinking
          as a developer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // This staggers the animation
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700 h-full"
          >
            <div className="flex-shrink-0 mr-6 pt-1">
              <FaGraduationCap className="text-indigo-600 text-4xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-indigo-600 dark:text-indigo-400">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Institution:</span>{" "}
                {edu.institute}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Year:</span> {edu.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Result:</span> {edu.result}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
