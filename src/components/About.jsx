import React from "react";

const cardData = [
  {
    title: "My Programming Journey",
    content:
      "Driven by curiosity and creativity, I started building web interfaces before diving deep into the MERN stack. It’s been a journey of turning ideas into full-fledged applications.",
  },
  {
    title: "My Work Style",
    content:
      "I focus on clean code, modern UI, and seamless user experiences. Whether it’s the frontend design or backend logic, I prioritize performance and maintainability.",
  },
  {
    title: "Beyond Code",
    content:
      "Away from the screen, I enjoy photography, hiking, and exploring new ideas. These passions help me stay inspired and bring fresh perspectives to my projects.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] px-6 pt-10 bg-gradient-to-tr from-[#f0f0f0] via-white to-[#e0e7ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-900 dark:text-white tracking-wide">
        About Me
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center">
        I enjoy every part of the development process.
      </p>
      <div className="max-w-7xl mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cardData.map(({ title, content }, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
