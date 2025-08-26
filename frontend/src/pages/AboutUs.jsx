import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const AboutUs = () => {


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
      className="py-20 px-6 md:px-20 mt-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        About <span className="text-[#1494a0]">Unity Associates</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-600 max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Building a sustainable future through innovation, design, and expert consultancy.
      </motion.p>

      {/* Company Overview */}
      <motion.div
        className="max-w-6xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-justify"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p>
          At <strong>Unity Associates</strong>, we are passionate about creating a cleaner,
          greener, and more sustainable future. As a <em>Sustainable Development
            Consultancy</em>, our mission is to guide businesses, communities, and organizations
          in adopting eco-friendly strategies that balance growth with environmental responsibility.
        </p>

        <p>
          We specialize in helping clients integrate sustainability into their operations through
          <em> green building consultancy</em>, <em>renewable energy planning</em>,
          <em> environmental compliance</em>, and <em>climate action strategies</em>.
        </p>

        <p>
          Our services span <strong>policy advisory</strong>, <strong>carbon footprint assessments</strong>,
          <strong> sustainable urban planning</strong>, and <strong>resource efficiency programs</strong> —
          delivering measurable impact for both the environment and business growth.
        </p>

        <p>
          What sets us apart is our <strong>holistic approach</strong>: we align sustainability goals
          with innovation, technology, and business objectives—ensuring clients not only comply with
          standards but also gain long-term competitive advantages.
        </p>

        <p>
          Whether you are an enterprise aiming for net-zero targets, a developer planning eco-friendly
          projects, or a public institution driving green initiatives, Unity Associates provides the
          expertise to turn sustainability vision into reality.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {/* Mission */}
        <motion.div
          className="bg-white shadow-lg shadow-gray-400 rounded-2xl p-8  flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img
            src={assets.mission}
            alt="Mission"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed text-justify">
            To empower businesses, communities, and institutions in adopting sustainable strategies
            that balance growth with environmental responsibility. Our mission is to deliver
            impactful, innovative, and practical solutions that promote ecological harmony
            and long-term prosperity.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-white mt-4 md:mt-0 shadow-lg shadow-gray-400 rounded-2xl p-5 md:p-8  flex flex-col items-center text-center"
          initial={isMobile ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img
            src={assets.vision}
            alt="Vision"
            className="w-full h-48 md:object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed text-justify">
            To be a global leader in sustainable development consultancy—shaping resilient
            systems, eco-friendly infrastructure, and innovative solutions that inspire
            communities to live in harmony with nature while driving inclusive growth.
          </p>
        </motion.div>
      </motion.div>




      {/* Founder Profile */}
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-5 md:p-9 border-t-4 border-[#1494a0] mt-15 md:mt-18"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Meet Our Founder – <span className="text-[#1494a0]">Sachin Jadhav</span>
        </h2>

        <p className="text-gray-700 text-lg mb-6 text-justify">
          Sachin Jadhav is a seasoned professional with 15+ Years of experience in construction industry with extensive
          expertise in <strong>Site Execution</strong>, <strong>Estimation</strong>, <strong>Billing</strong>,
          <strong> Tendering</strong>, <strong>Valuation</strong>, and <strong>Design Consulting</strong>.
          Worked on world-class projects (Residential, Industrial, Institutional & Commercial)
          under Reliance Industries Ltd. and others.
          His journey spans from small-scale firms to bring this diversify experience & different professionals under one roof; 
          establish the organization “UNITY ASSOCIATES”.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Contributions</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-md">
          <li>India’s largest Multiple Data Centres – <strong>Reliance Jio</strong></li>
          <li>World’s biggest vaccine producer/exporter – <strong>Covishield (Serum Institute of India)</strong></li>
          <li><strong>Antilia</strong>, residence of India’s richest family</li>
          <li>World’s biggest Reliance Petrochemical Refinery</li>
          <li><strong>Magarpatta Township</strong>, recipient of India’s Best Infrastructure Award</li>
        </ul>

        <p className="text-gray-700 text-lg mt-6 text-justify">
          His contributions have directly impacted millions of lives through national assets like
          Covishield and Jio’s digital ecosystem. With hands-on experience across public, residential,
          institutional, and commercial structures, Sachin combines speed, quality, and accuracy with
          unmatched dedication.
        </p>

        <p className="text-gray-700 text-lg mt-4 text-justify">
          Today, with a vision to unify his vast knowledge and professional acumen, he leads Unity Associates—
          offering comprehensive, high-standard construction and design services under one roof.
        </p>
      </motion.div>





      {/* Team Members */}
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-5 md:p-9 border-t-4 border-[#1494a0] mt-15 md:mt-18"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Executive <span className="text-[#1494a0]">Team</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-8">

          {/* Vishwas Avalaskar */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#1494a0] mb-2">
              Vishwas Avalaskar (B.E. Mech)
            </h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              Ex. Assistant Vice President of Core Engg. MEP group of Reliance Industries Ltd.
              Started career from TATA Group & worked in more than 10 countries with
              consultants/contractors of international repute.
              Over 35 years of experience in design, detail engineering & execution of projects
              like hospitals, office complexes, malls, hotels, pharma Industry, Data centers, Refineries, etc.
              Member of ISHRAE and well-known for energy-efficient MEP design.
            </p>
          </motion.div>

          
          {/* Dr. Alka Y. Pisal */}
         <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-[#1494a0] mb-2">
              Dr. Alka Y. Pisal (Ph.D – IIT Bombay)
            </h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              Completed M.Tech in Earthquake Engineering (IIT Roorkee) & Ph.D in Civil Engineering (IIT Bombay).
              10+ years combined experience in Industry, Research & Teaching.
              Expertise in vibration control, seismic & blast-resistant design, industrial and cold-formed structures,
              with proficiency in latest standards and software.
            </p>
          </motion.div>

          
          {/* Gorakh Bhalekar */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h3 className="text-xl font-semibold text-[#1494a0] mb-2">
              Sh. Gorakh Bhalekar (B.E. Civil)
            </h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              Experienced in engineering design & preparation of drawings,
              responsible for Design Basis Reports, design calculations & specifications as per Indian codes.
              Also involved in tender documentation. Plays an important role in delivering quality services with speed & accuracy.
            </p>
          </motion.div>
  


          {/* Sachin Pokale */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-semibold text-[#1494a0] mb-2">
              Sh. Sachin Pokale (B.E. Ele.)
            </h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              Retired from MSEDCL with 35 years of experience in electrical design, execution & maintenance
              across private and government sectors.
              Specialized in power distribution & consumption optimization.
            </p>
          </motion.div>




        </div>



      </motion.div>





      {/* Certificates */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.img
            src={assets.c1}
            alt="Certificate 1"
            className="rounded-xl shadow-lg w-full md:w-auto h-auto md:h-[400px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.img
            src={assets.c2}
            alt="Certificate 2"
            className="rounded-xl shadow-lg w-full md:w-auto h-auto md:h-[400px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.img
            src={assets.c3}
            alt="Certificate 3"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </div>
      </motion.div>





      {/* Closing Statement */}
      <motion.p
        className="text-center text-xl text-gray-800 mt-16 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        Join us in shaping a future where sustainability is not just an option, but a way of life.
      </motion.p>


    </motion.section>
  );
};

export default AboutUs;
