import React from "react";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 mt-7">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Join <span className="text-[#1494a0]">Us</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        Build your future with us
      </motion.p>

      {/* Centered Form */}
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <form className="space-y-8">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
            </div>

            {/* Current Location */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Current Location
              </label>
              <input
                type="text"
                placeholder="Enter your current location..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            {/* Preferred Location */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Preferred Location
              </label>
              <input
                type="text"
                placeholder="Enter your preferred location"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-green-700 hover:to-green-600 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
