import React,{useEffect,useState} from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // Professional icons


const ContactUs = () => {

  
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // wait until hydration
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // set immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // 👈 prevent wrong initial animation



  return (
    <motion.section
      className="py-20 px-6 md:px-16 bg-gray-50 mt-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s <span className="text-[#1494a0]">Connect</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Partner with us to build sustainable solutions that drive meaningful
        change. We’d love to hear from you.
      </motion.p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* Left Side - Contact Info */}
        <motion.div
          className="order-2 md:order-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out through any of the following channels, and we’ll get back
            to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-[#1494a0] w-6 h-6" />
              <a
                href="mailto:info@unityassociates.com"
                className="text-gray-700 "
              >
                info@unityassociates.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-[#1494a0] w-6 h-6" />
              <a
                href="tel:+911234567890"
                className="text-gray-700 "
              >
                +91 12345 67890
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#1494a0] w-6 h-6" />
              <span className="text-gray-700">
                123 Green Avenue, Eco City, India
              </span>
            </div>
          </div>

          {/* Map / Illustration */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Indore Location"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368144.6734825252!2d75.45726272718143!3d22.7242287359021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd61f3e7b26d%3A0x8b1e5d6741a4e9a4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1692301234567!5m2!1sen!2sin"
            />



          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="order-1 md:order-2 bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100"
          initial={isMobile ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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

            {/* Subject */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number...."
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
    </motion.section>
  );
};

export default ContactUs;
