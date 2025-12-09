import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Social Science (BSS) in Political Science",
    institute: "National University, Bangladesh",
    year: "2017 - 2021",
    result: "Graduated",
    type: "honors",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Debigonj College, Debigonj, Panchagarh",
    year: "2015 - 2017",
    result: "Completed",
    type: "hsc",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-16 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white tracking-wide">
          Education
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
          My academic background that shaped my foundation and critical thinking
          as a developer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-gray-700 h-full"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {edu.type === "honors" ? (
                    <FaGraduationCap className="text-indigo-400 text-3xl mt-1" />
                  ) : (
                    <FaSchool className="text-indigo-400 text-3xl mt-1" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-indigo-400">
                    {edu.degree}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-300 min-w-[100px]">
                        Institution:
                      </span>
                      <span className="text-gray-300">{edu.institute}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-300 min-w-[100px]">
                        Year:
                      </span>
                      <span className="text-gray-300">{edu.year}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-300 min-w-[100px]">
                        Status:
                      </span>
                      <span className="text-gray-300">{edu.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
