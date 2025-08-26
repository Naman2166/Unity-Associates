import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/career", label: "Career" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const scrollTop = () => window.scrollTo(0, 0);


  // Scroll detection only for desktop (lg+ screens)
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      if (location.pathname === "/") {
        const handleScroll = () => setScrolled(window.scrollY > 100);

        handleScroll(); // run once
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        setScrolled(true); // non-home pages always solid
      }
    } else {
      setScrolled(true); // ✅ always solid on mobile
    }
  }, [location]);




  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 
        ${scrolled ? "bg-[#C5CFA0] shadow-md" : "bg-transparent"}`}
    >
      {/* -------- Desktop Navbar -------- */}
      <div className="hidden lg:block">
        <div className="mx-[1.5%] flex items-center justify-between px-5 xl:px-7 py-3 text-sm">
          
          {/* Logo */}
          <img src={assets.Logo_withoutBackground} className="h-10 w-auto" alt='LOGO'/>
          {/* <p
            className={`text-2xl ${scrolled ? "text-gray-950" : "text-gray-50"
              } font-bold cursor-pointer`}
          >
            LOGO
          </p> */}


          {/* Nav Items Centered */}
          <ul
            className={`flex items-center lg:gap-12 xl:gap-20 font-bold text-[18px] ${scrolled ? "text-black" : "text-white"
              }`}
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={scrollTop}
                className={({ isActive }) =>
                  `flex flex-col items-center transition-all duration-300 hover:scale-110 ${isActive
                    ? `underline underline-offset-8 decoration-2 ${scrolled
                      ? "decoration-gray-950"
                      : "decoration-gray-50"
                    }`
                    : ""
                  }`
                }
              >
                <span>{label}</span>
              </NavLink>
            ))}
          </ul>

          {/* Empty right space for balance */}
          <div className="w-20" />
        </div>
      </div>




      {/* -------- Mobile Navbar -------- */}
      <div className="block lg:hidden bg-[#C5CFA0] shadow-md">
        <div className="flex items-center justify-between px-3 py-2">
          <img src={assets.Logo_withoutBackground} className="h-10 w-auto" alt=""/>
          <FaBars
            onClick={() => setShowMenu(true)}
            className="my-2 text-2xl cursor-pointer"
          />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black"
                onClick={() => setShowMenu(false)}
              />

              {/* Side Panel */}
              <motion.div
                key="side-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="fixed right-0 top-0 h-full w-2/3 min-w-[250px] max-w-[300px] 
                     bg-[#C5CFA0] shadow-lg overflow-y-auto scroll-smooth z-50"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <img src={assets.Logo_withoutBackground} className="h-10 w-auto" alt=""/>
                <button
                    type="button"
                    onClick={() => setShowMenu(false)}
                    className="text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>

                {/* Nav Links */}
                <ul className="mt-5 flex flex-col gap-2 font-medium text-lg">
                  {navItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => {
                        setShowMenu(false);
                        scrollTop();
                      }}
                      className={({ isActive }) =>
                        `block w-full rounded px-5 py-2 hover:bg-gray-100 ${isActive ? " bg-white" : ""
                        }`
                      }
                    >
                      {label.toUpperCase()}
                    </NavLink>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>


    </header>
  );
};

export default Navbar;
