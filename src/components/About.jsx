import { motion } from "framer-motion";
import { FaCode, FaRocket, FaGlobeAmericas } from "react-icons/fa";

const cardData = [
  {
    title: "My Programming Journey",
    content:
      "Though my academic background is in Political Science, my career path is driven by a passion for technology. I entered the programming world last year and quickly fell in love with the MERN stack. I enjoy the process of turning a simple concept into a dynamic, well-crafted web application.",
    icon: FaCode,
  },
  {
    title: "My Work Style",
    content:
      "My work is defined by a commitment to quality. I specialize in developing performant, maintainable, and scalable applications. I consistently prioritize clean code standards, effective state management, and a seamless user experience across the entire stack.",
    icon: FaRocket,
  },
  {
    title: "Beyond Code",
    content:
      "When I'm not coding, I'm often on the move. I love traveling and exploring new places, which provides me with a broader perspective. I'm also an avid badminton player and enjoy trying new foods. These activities are my way of recharging and staying creative.",
    icon: FaGlobeAmericas,
  },
];

const About = () => {
  return (
    <section id="about" className="pt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-white tracking-wide">
        About Me
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
        I enjoy every part of the development process.
      </p>
      <div className="max-w-7xl mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardData.map(({ title, content, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="card card-compact bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out min-h-[250px] rounded-2xl border border-gray-700 group"
          >
            <div className="card-body flex flex-col justify-center px-8 py-8 text-center">
              {/* Icon with animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="w-14 h-14 bg-indigo-900 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500 transition-colors duration-300"
              >
                <Icon className="text-2xl text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </motion.div>

              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                {title}
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-300 tracking-wide">
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
