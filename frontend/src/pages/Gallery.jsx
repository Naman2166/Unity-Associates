import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const galleryImages = [
  assets.g2_unsplash, assets.g3_unsplash, assets.g4_unsplash,
  assets.g1, assets.g2, assets.g3, assets.g4, assets.g5, assets.g6,
  assets.g7, assets.g8, assets.g9, assets.g10,
  assets.g11, assets.g12, assets.g13, assets.g14, assets.g15, assets.g16, assets.g17,
];

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Gallery = () => {
  return (
    <motion.section
      className="py-16 mt-7 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-green-600">Gallery</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A glimpse into our vision of sustainable development — from 
          eco-friendly designs and renewable energy projects to 
          collaborative consultancy and innovative solutions.
        </motion.p>

        {/* Gallery Grid with Stagger Animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                className="w-full h-40 md:h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
