import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  return (
    <footer className="bg-[#C5CFA0] text-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2">
            {/* <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            /> */}
            <span className="text-xl font-medium">
              Unity Associates
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-800 leading-relaxed">
            Helping businesses achieve sustainable growth through eco-friendly
            strategies, green innovations, and responsible practices.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="hover:text-gray-900 hover:font-medium transition-colors"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center  gap-4">
            <a
              href="#"
              className="p-2 bg-[#878f6c] rounded-full hover:bg-[#707758] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-[#878f6c] rounded-full hover:bg-[#707758] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-[#878f6c] rounded-full hover:bg-[#707758] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-[#878f6c] rounded-full hover:bg-[#707758] transition-colors"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="mx-7 text-gray-600" />
      <div className="bg-[#C5CFA0] py-6 text-center text-sm font-medium text-black">
        © {new Date().getFullYear()} Unity Associates. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
