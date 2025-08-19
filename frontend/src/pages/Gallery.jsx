import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    alt: "Consultants Discussing Sustainable Project",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Teamwork and Sustainable Planning",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1716479852874-22742b84fef5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VzdGFpbmFibGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Architects Planning Eco-Friendly Buildings",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Solar Energy Project",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1c3RhaW5hYmxlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    alt: "Sustainability Consultancy Meeting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    alt: "Eco City Development Model",
  },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Our <span className="text-green-600">Gallery</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into our vision of sustainable development — from 
          eco-friendly designs and renewable energy projects to 
          collaborative consultancy and innovative solutions.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                {image.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
