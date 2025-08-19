import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      className="py-20 px-6 md:px-20 mt-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-green-600">Unity Associates</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-600 max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Building a sustainable future through innovation, design, and expert consultancy.
      </motion.p>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-justify"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          At <strong>Unity Associates</strong>, we are passionate about creating a cleaner,
          greener, and more sustainable future. Our mission is to provide
          forward-thinking architectural and environmental solutions that balance
          functionality, aesthetics, and eco-conscious design.
        </p>
        <p>
          With a team of experienced professionals, we specialize in{" "}
          <em>Architecture Design</em>, <em>Green Building Design</em>, and{" "}
          <em>Sustainable Building Consultancy</em>. We partner with organizations,
          developers, and communities to implement strategies that reduce
          environmental impact while maximizing operational efficiency.
        </p>
        <p>
          By combining cutting-edge design principles with sustainable practices, we
          help our clients not only meet but exceed environmental standards. Together,
          we turn sustainability into a competitive advantage—delivering value for
          both business and the planet.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
