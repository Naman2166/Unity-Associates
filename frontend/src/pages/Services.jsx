import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaDraftingCompass, FaLeaf, FaSolarPanel, FaHardHat, FaCity } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="text-green-600 text-5xl" />,
      title: "Sustainable Building Design",
      description: "We create eco-friendly building designs that balance aesthetics, functionality, and environmental responsibility."
    },
    {
      icon: <FaDraftingCompass className="text-green-600 text-5xl" />,
      title: "Architectural Consultation",
      description: "Expert advice on building layouts, space utilization, and compliance with modern construction standards."
    },
    {
      icon: <FaLeaf className="text-green-600 text-5xl" />,
      title: "Environmental Compliance",
      description: "Guidance on using energy-efficient, sustainable, and durable construction materials."
    },
    {
      icon: <FaSolarPanel className="text-green-600 text-5xl" />,
      title: "Renewable Energy Integration",
      description: "Planning and integration of solar panels, rainwater harvesting, and other sustainable technologies."
    },
    {
      icon: <FaHardHat className="text-green-600 text-5xl" />,
      title: "Corporate ESG Reporting",
      description: "End-to-end supervision ensuring timely delivery, quality standards, and sustainable practices."
    },
    {
      icon: <FaCity className="text-green-600 text-5xl" />,
      title: "Community & Social Impact",
      description: "Advisory services for sustainable urban infrastructure and smart city development."
    },
  ];

  return (
    <div className="py-20 mt-6 px-6 ">
      {/* Heading */}
      <motion.h1
        className="text-6xl md:text-7xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our <span className="text-green-600">Services</span>
      </motion.h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-6 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
