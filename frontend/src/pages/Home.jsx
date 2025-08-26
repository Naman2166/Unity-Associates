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
          style={{ backgroundImage: `url(${assets.b1_copy})` }}
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
            className="italic text-[#1494a0] text-4xl md:text-[75px] xl:text-[100px] font-bold"
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
          About <span className="text-[#1494a0]">Us</span>
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
            At <span className="font-semibold text-[#1494a0]">Unity Associates</span>,
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
              className="text-[#1494a0] font-semibold hover:underline"
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
            Why Choose <span className="text-[#1494a0]">Unity Associates</span>?
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
              <ShieldCheck className="w-10 h-10 text-[#1494a0] mx-auto mb-4" />
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
              <Lightbulb className="w-10 h-10 text-[#1494a0] mx-auto mb-4" />
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
              <Leaf className="w-10 h-10 text-[#1494a0] mx-auto mb-4" />
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
              <Users className="w-10 h-10 text-[#1494a0] mx-auto mb-4" />
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
          Our <span className="text-[#1494a0]">Services</span>
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





      {/* Projects Section */}
      <motion.section
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 my-12">
          Projects <span className="text-[#1494a0]">Involved</span>
        </h2>

        {/* Individual Projects with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ALGATH TOWER */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              ALGATH TOWER, UAE – 63 Story 2 Buildings
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
              A landmark high-rise residential and commercial project in UAE.
            </p>
            <img
              src={assets.p1}
              alt="Algath Tower"
              className="rounded-xl shadow-lg w-auto max-w-md h-[300px] sm:h-[400px] md:h-[450px] object-cover"
            />
          </motion.div>

          {/* ANTILIA */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              ANTILIA, Residence of RIL CMD, Mumbai
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
              One of the most iconic private residences in the world.
            </p>
            <img
              src={assets.p2}
              alt="Antilia"
              className="rounded-xl shadow-lg w-auto max-w-md h-[300px] sm:h-[400px] md:h-[450px] object-cover"
            />
          </motion.div>
        </div>


        {/* MAGARPATTA CITY */}
        <motion.div
          className="grid grid-cols-1 gap-8 items-center mt-10 md:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold my-4">
              MAGARPATTA CITY, Pune – 600 Acre Township
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              A large-scale township project that redefined urban living in Pune.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-6">
            <div className="flex justify-center">
              <img
                src={assets.p3}
                alt="Magarpatta City 1"
                className="rounded-xl shadow-lg w-auto h-[200px] sm:h-[200px] md:h-[350px]"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={assets.p4}
                alt="Magarpatta City 2"
                className="rounded-xl shadow-lg w-auto h-[200px] sm:h-[200px] md:h-[350px]"
              />
            </div>
          </div>
        </motion.div>


        {/* Major Projects List */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y:0 }}
          whileInView={{ opacity: 1, y:0}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Major <span className="text-[#1494a0]">Projects</span>
           <p className="text-center font-normal text-lg mt-2">The Major Projects in which we were involved under roof of Different Organizations</p>
          </h3>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              "Algath Tower, UAE – 63 Story 2 Buildings",
              "UAE University, Al Ain – 12 Acre Campus",
              "Magarpatta Township, Pune – 600 Acre Township",
              "Antilia, Residence of RIL CMD, Mumbai",
              "Reliance Twin Tower, at RCP, Navi Mumbai",
              "RCP Infra Project – 500 Acre RIL Campus, Navi Mumbai",
            ].map((project, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Project Name */}
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                  {project}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.section>




      {/* Renowned Clients Section */}
      <motion.section
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 my-12">
          Renowned <span className="text-[#1494a0]">Clients</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center p-2 sm:p-4">
          {[
            "Reliance Industries Ltd.",
            "Adani Group, Ahmedabad.",
            "Lodha Group, Mumbai.",
            "UTI Ltd, BKC Mumbai.",
            "IOCL, Odisha.",
            "Shapoorji Pallonji Group.",
            "Pitambari Products Pvt. Ltd.",
            "EMIL Pharma Ltd. Mumbai.",
          ].map((client, idx) => (
            <motion.div
              key={idx}
              className="p-3 sm:p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <p className="font-medium text-sm sm:text-base md:text-lg text-gray-800">
                {client}
              </p>
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
