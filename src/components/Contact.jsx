import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
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

  // EmailJS configuration
  const emailConfig = {
    serviceID: "service_gl0bwtq",
    templateID: "template_t56s7k7",
    publicKey: "UuQq3HuKxVtFPez7a",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Sohanur Rahman",
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      );

      console.log("Email sent successfully!", response);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Specific error handling
      if (error.text?.includes("Invalid grant") || error.status === 412) {
        toast.error(
          <div>
            Email service needs reconnection.
            <br />
            <a
              href="https://dashboard.emailjs.com/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Reconnect in EmailJS dashboard
            </a>
          </div>,
          { duration: 8000 }
        );
      } else {
        // Fallback: Open email client
        const subject = `Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:sohanuractive007@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        toast.error(
          <div>
            Form submission failed.
            <br />
            <a href={mailtoLink} className="underline font-semibold">
              Click to email directly
            </a>
          </div>,
          { duration: 10000 }
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: (
        <FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl" />
      ),
      title: "LinkedIn",
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/sohanurrahman007",
    },
    {
      icon: (
        <FaFacebook className="text-blue-600 dark:text-blue-400 text-2xl" />
      ),
      title: "Facebook",
      value: "Facebook",
      link: "https://www.facebook.com/SohanurRahman0007",
    },
    {
      icon: (
        <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-2xl" />
      ),
      title: "Email",
      value: "sohanuractive007@gmail.com",
      link: "mailto:sohanuractive007@gmail.com",
    },
    {
      icon: (
        <FaWhatsapp className="text-green-600 dark:text-green-400 text-2xl" />
      ),
      title: "WhatsApp",
      value: "+8801889794766",
      link: "https://wa.me/8801889794766",
    },
  ];

  return (
    <section id="contact" className="pt-16 px-4">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-indigo-500 mx-auto mt-3 mb-4"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Send me a message or reach out through social links!
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Contact Form - Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm w-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="space-y-6 flex-1">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-3 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-3 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-gray-700 dark:text-gray-300 mb-3 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white py-3 rounded-xl font-bold transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-800 dark:text-amber-200 text-center">
                If the form doesn't work, please email me directly at{" "}
                <a
                  href="mailto:sohanuractive007@gmail.com"
                  className="font-semibold underline hover:text-amber-900 dark:hover:text-amber-100"
                >
                  sohanuractive007@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards - Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm w-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>

            <div className="grid grid-cols-1 gap-4 flex-1">
              {contactCards.map((card, i) => (
                <motion.a
                  key={i}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-5 flex items-center gap-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 cursor-pointer group flex-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {card.title}
                    </p>
                    <p className="text-base text-gray-800 dark:text-white font-medium truncate">
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Quick Response Guaranteed
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                I typically respond within 2-4 hours during business days. Feel
                free to reach out through any platform!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "10px",
          },
        }}
      />
    </section>
  );
};

export default Contact;
