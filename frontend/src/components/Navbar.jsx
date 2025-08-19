import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <header className="fixed left-0 top-0 z-50 w-full shadow-md">
      {/* -------- Desktop Navbar -------- */}
      <div className="hidden bg-[#C5CFA0] lg:block">    {/* bg-[#C5CFA0]*/}
        <div className="mx-[1.5%] flex items-center justify-between px-5 xl:px-7 py-4 text-sm">
          {/* Logo */}
          <p className="text-2xl text-gray-950 font-bold cursor-pointer">LOGO</p>

          {/* Nav Items Centered */}
          <ul className="flex items-center gap-20 font-semibold text-[18px] text-black">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={scrollTop}
                className={({ isActive }) =>
                  `flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-black hover:font-bold  ${
                    isActive
                      ? "underline underline-offset-8 decoration-2 decoration-gray-950"
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
      <div className="block bg-white lg:hidden">
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-xl font-bold">LOGO</p>
          <FaBars
            onClick={() => setShowMenu(true)}
            className="my-2 text-2xl cursor-pointer"
          />
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${showMenu ? "fixed inset-0 z-40" : "hidden"}`}>
          {/* Dark background */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowMenu(false)}
          />

          {/* Side Panel */}
          <div className="absolute right-0 top-0 h-full w-2/3 min-w-[250px] max-w-[300px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <p className="text-xl font-bold">LOGO</p>
              <button
                type="button"
                onClick={() => setShowMenu(false)}
                className="text-3xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="mt-5 flex flex-col gap-2 px-4 font-medium text-lg">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => {
                    setShowMenu(false);
                    scrollTop();
                  }}
                  className={({ isActive }) =>
                    `block w-full rounded px-2 py-2 hover:bg-gray-100 ${
                      isActive ? "underline" : ""
                    }`
                  }
                >
                  {label.toUpperCase()}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
