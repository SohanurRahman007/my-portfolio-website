import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "My Programming Journey",
    content:
      "Though my academic background is in Political Science, my career path is driven by a passion for technology. I entered the programming world last year and quickly fell in love with the MERN stack. I enjoy the process of turning a simple concept into a dynamic, well-crafted web application.",
  },
  {
    title: "My Work Style",
    content:
      "My work is defined by a commitment to quality. I specialize in developing performant, maintainable, and scalable applications. I consistently prioritize clean code standards, effective state management, and a seamless user experience across the entire stack.",
  },
  {
    title: "Beyond Code",
    content:
      "When I'm not coding, I'm often on the move. I love traveling and exploring new places, which provides me with a broader perspective. I'm also an avid badminton player and enjoy trying new foods. These activities are my way of recharging and staying creative.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-900 dark:text-white tracking-wide">
        About Me
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
        I enjoy every part of the development process.
      </p>
      <div className="max-w-7xl mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cardData.map(({ title, content }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // This staggers the animation
              ease: "easeOut",
            }}
            viewport={{ once: false }} // This is the key change!
            className="card card-compact bg-base-100 dark:bg-gray-800 shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out min-h-[250px] rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="card-body flex flex-col justify-center px-8 py-8 text-center">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide">
                <span className="inline-block border-l-4 border-indigo-500 pl-4 text-left">
                  {content}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
