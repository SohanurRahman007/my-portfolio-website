import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true);

    // emailjs service and template IDs and public key
    const serviceID = "service_gl0bwtq";
    const templateID = "template_t56s7k7";
    const publicKey = "UuQq3HuKxVtFPez7a";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  const contactCards = [
    {
      icon: (
        <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl" />
      ),
      title: "Email",
      value: "sohanuractive007@gmail.com",
    },
    {
      icon: (
        <FaPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
      ),
      title: "Phone",
      value: "+8801731468538",
    },
    {
      icon: (
        <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
      ),
      title: "WhatsApp",
      value: "+8801889794766",
    },
    {
      icon: <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sohanurrahman007",
      link: "https://www.linkedin.com/in/sohanur-rahman-4b4285333/",
    },
  ];

  return (
    <section id="contact" className="pt-16 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center mb-3">
          Feel free to send me a message or reach out through social links!
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-10 mt-4">
        {/* Contact Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 gap-5 w-full md:w-1/2"
        >
          {contactCards.map((card, i) => {
            const Wrapper = card.link ? "a" : "div";
            const props = card.link
              ? {
                  href: card.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center gap-4 border border-gray-200 dark:border-gray-700 hover:scale-[1.03] transition-all duration-300"
              >
                <Wrapper {...props} className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0">{card.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {card.title}
                    </p>
                    <p className="text-base text-gray-800 dark:text-white">
                      {card.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white transition"
              placeholder="Your name"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white transition"
              placeholder="Your email"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white transition"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white py-3 rounded-xl font-bold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      <Toaster position="top-center" />
    </section>
  );
};

export default Contact;
