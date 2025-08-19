import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Leaf, Users } from "lucide-react";
import { assets } from "../assets/assets";

const Home = () => {

  const [expanded, setExpanded] = useState(false);
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
    <div className="bg-white font-sans">


      {/* Hero Section */}
      <div className="relative h-[450px] sm:h-[680px] w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{ backgroundImage: `url(${assets.b1})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Foreground content */}
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-[100px] xl:text-[145px] font-bold sm:font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time 30% is visible
          >
            Unity Associates
          </motion.h1>

          <motion.h2
            className="italic text-green-600 text-4xl md:text-[75px] xl:text-[100px] font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span>Build Sustainable</span>
          </motion.h2>

          <motion.p
            className="text-md md:text-xl xl:text-2xl font-medium md:font-semibold mt-4 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Driving sustainable growth through innovative solutions and expert consultancy.
          </motion.p>
        </div>

      </div>






      {/* About Section */}
      <motion.section
        className="py-16 pb-10 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">
          About <span className="text-green-600">Us</span>
        </h2>
        <motion.div
          className="max-w-6xl mx-auto p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-lg shadow-gray-500 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p
            className={`text-base md:text-xl text-gray-700 leading-relaxed text-justify transition-all duration-300 ${expanded ? "line-clamp-none" : "line-clamp-7 md:line-clamp-none"
              }`}
          >
            At <span className="font-semibold text-green-600">Unity Associates</span>,
            we are passionate about creating a cleaner, greener, and more sustainable future.
            Our expert consultancy services help organizations adopt eco-friendly strategies,
            optimize operational efficiency, and drive innovation that benefits both business and the planet.
            Together, we turn sustainability into a competitive advantage.
            <br />
            <br />
            From sustainable architecture and green building design to renewable energy integration
            and environmental compliance, we provide end-to-end guidance that transforms vision into reality.
            <br />
            <br />
            By partnering with us, you gain access to cutting-edge solutions, industry best practices,
            and a commitment to building a legacy of environmental stewardship for generations to come.
          </p>

          {/* Mobile-only Read More button */}
          <div className="mt-3 flex justify-center md:hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-green-600 font-semibold hover:underline"
            >
              {expanded ? "Read Less ▲" : "Read More ▼"}
            </button>
          </div>
        </motion.div>

      </motion.section>





      {/*Why Choose Us*/}
      <section className="py-16 mb-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-green-600">Unity Associates</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            As a new-age sustainable development consultancy, we are driven by
            values, knowledge, and commitment rather than past numbers.
            Here’s what sets us apart:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {/* Point 1 */}
            <motion.div
              initial={isMobile ? { opacity: 0, y: -30 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0 }}
              className="bg-gray-50 shadow-md rounded-2xl p-3 py-4 md:p-6 hover:shadow-xl transition"
            >
              <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-[15px] md:text-lg mb-2">Trusted Expertise</h3>
              <p className="text-gray-600 text-[12px] md:text-[15px]">
                A team of passionate consultants with strong academic and
                industry knowledge in sustainability and green solutions.
              </p>
            </motion.div>

            {/* Point 2 */}
            <motion.div
              initial={isMobile ? { opacity: 0, y: -30 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0 }}
              className="bg-gray-50 shadow-md rounded-2xl p-3 py-4 md:p-6  hover:shadow-xl transition"
            >
              <Lightbulb className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-[15px] md:text-lg mb-2">Innovative Approach</h3>
              <p className="text-gray-600 text-[12px] md:text-[15px]">
                We stay updated with global frameworks (LEED, ISO, ESG) and
                deliver fresh, modern solutions tailored to your needs.
              </p>
            </motion.div>

            {/* Point 3 */}
            <motion.div
              initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0 }}
              className="bg-gray-50 shadow-md rounded-2xl p-3 py-4 md:p-6  hover:shadow-xl transition"
            >
              <Leaf className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-[15px] md:text-lg mb-2">Sustainability First</h3>
              <p className="text-gray-600 text-[12px] md:text-[15px]">
                Every recommendation is designed to reduce costs, minimize
                environmental impact, and promote long-term growth.
              </p>
            </motion.div>

            {/* Point 4 */}
            <motion.div
              initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0 }}
              className="bg-gray-50 shadow-md rounded-2xl p-3 py-4 md:p-6  hover:shadow-xl transition"
            >
              <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-[15px] md:text-lg mb-2">Client-Centered</h3>
              <p className="text-gray-600 text-[12px] md:text-[15px]">
                We focus on building long-lasting relationships, ensuring
                transparency and support at every step of your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>





      {/* Image Below Hero Text */}
      <motion.div className="flex justify-center items-center gap-x-6 md:gap-x-10 xl:gap-x-28">
        <motion.img
          src={assets.image1}
          alt="Sustainable Development"
          className="w-auto h-[150px] xl:h-[380px]"
          initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />
        <motion.img
          src={assets.image2}
          alt="Sustainable Development"
          className="w-auto h-[150px] xl:h-[380px]"
          initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </motion.div>





      {/* Services Section */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >

        <h2 className="text-4xl font-bold text-center text-gray-800 my-12">
          Our <span className="text-green-600">Services</span>
        </h2>

        <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Sustainability Consultancy",
              desc: "Guiding businesses and projects with strategies to achieve eco-friendly and socially responsible growth.",
              icon: "🌿",
            },
            {
              title: "Green Building Solutions",
              desc: "Designing and implementing energy-efficient, sustainable building practices for long-term benefits.",
              icon: "🏡",
            },
            {
              title: "Environmental Compliance",
              desc: "Ensuring your projects meet global sustainability standards, certifications, and regulatory requirements.",
              icon: "📑",
            },
            {
              title: "Renewable Energy Integration",
              desc: "Helping organizations adopt solar, wind, and other clean energy solutions for reduced carbon impact.",
              icon: "⚡",
            },
            {
              title: "Corporate ESG Reporting",
              desc: "Assisting companies in preparing transparent Environmental, Social, and Governance reports.",
              icon: "📊",
            },
            {
              title: "Community & Social Impact",
              desc: "Developing initiatives that empower communities while promoting ethical and sustainable growth.",
              icon: "🤝",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#d5e0b1] shadow-gray-400 shadow-md p-3 py-4 md:p-6 rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-md">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>



      {/* Last image */}
      <motion.img
        src={assets.b3}
        alt="Sustainable Development"
        className="w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />




    </div>
  );
};

export default Home;
