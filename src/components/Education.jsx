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
    <section
      id="education"
      className="py-10 px-6 md:px-20 bg-gradient-to-tr from-[#f0f0f0] via-white to-[#e0e7ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl md:font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
          Education
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto">
          My academic background that shaped my foundation and critical thinking
          as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-indigo-400/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-indigo-600 text-3xl" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {edu.degree}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              <strong>Institution:</strong> {edu.institute}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              <strong>Year:</strong> {edu.year}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Result:</strong> {edu.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
