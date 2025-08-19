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
        className="max-w-6xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-justify"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          At <strong>Unity Associates</strong>, we are passionate about creating a cleaner,
          greener, and more sustainable future. As a <em>Sustainable Development
            Consultancy</em>, our mission is to guide businesses, communities, and
          organizations in adopting eco-friendly strategies that balance growth with
          environmental responsibility.
        </p>

        <p>
          We specialize in helping clients integrate sustainability into their core
          operations through <em>green building consultancy</em>, <em>renewable energy
            planning</em>, <em>environmental compliance</em>, and <em>climate action
              strategies</em>. Our expert team works closely with stakeholders to identify
          opportunities, reduce risks, and deliver measurable impact.
        </p>

        <p>
          From <strong>policy advisory</strong> and <strong>carbon footprint
            assessments</strong> to <strong>sustainable urban planning</strong> and
          <strong> resource efficiency programs</strong>, we provide end-to-end
          consultancy services that drive both environmental and economic value.
        </p>

        <p>
          What sets us apart is our holistic approach: we align sustainability goals
          with innovation, technology, and business objectives. This ensures that our
          clients not only comply with environmental standards but also unlock
          long-term competitive advantages in their industries.
        </p>

        <p>
          At <strong>Unity Associates</strong>, we believe sustainable development is
          more than a responsibility—it is an opportunity to build resilient systems,
          stronger communities, and a legacy of positive change for future generations.
        </p>

        <p>
          Whether you are an enterprise aiming to achieve net-zero targets, a developer
          planning an eco-friendly project, or a public institution committed to green
          initiatives, our consultancy provides the guidance and expertise you need to
          turn your sustainability vision into reality.
        </p>


        <p>
          Join us in shaping a future where sustainability is not just an option, but
          a way of life.
        </p>

      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
