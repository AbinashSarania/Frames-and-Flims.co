import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavbarLogo from "../../assets/Navbar Logo Black.png"; // Import your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const leftLinks = [
    { name: "OFFERINGS", path: "/offerings" },
    { name: "GALLERIES", path: "/gallery" },
  ];

  const rightLinks = [
    { name: "ABOUT", path: "/aboutus" },
    { name: "CONTACT", path: "/contactus" },
  ];

  return (
    <nav className="w-full top-0 left-0 z-50 relative">
      {/* Announcement Bar */}
      <div className="bg-[#EFE9DD] text-center text-sm py-2 border-b border-[#7A5A32]">
        <p className="text-black">
          Now booking Spring 2025 weddings.{" "}
          <Link to="/contact" className="underline font-medium">
            Secure your spot.
          </Link>
        </p>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#EFE9DD] px-6 py-4 border-b border-[#7A5A32]">
        <div className="flex items-center justify-between">
          {/* Desktop Links - Left */}
          <ul className="hidden md:flex space-x-8 text-black font-thin">
            {leftLinks.map(({ name, path }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="hover:text-[#7A5A32] transition-colors duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Brand Logo - Center (Desktop) */}
          <Link to="/" className="hidden md:block">
            <img
              src={NavbarLogo}
              alt="Frames and Films Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Links - Right */}
          <ul className="hidden md:flex space-x-8 text-black font-thin">
            {rightLinks.map(({ name, path }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="hover:text-[#7A5A32] transition-colors duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon - Right Side */}
          <div className="md:hidden ml-auto z-50">
            {menuOpen ? (
              <FiX
                size={28}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <FiMenu
                size={28}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[100px] right-0 w-full h-[calc(100vh-100px)] bg-[#EFE9DD] border-t border-[#7A5A32] z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-6 -mt-16 text-black font-medium text-lg tracking-widest">
          {[...leftLinks, ...rightLinks].map(({ name, path }, index) => (
            <Link
              key={index}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#7A5A32]"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
