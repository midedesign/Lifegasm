import React, { useState } from "react";
import HamburgerButton from "./icons/HamburgerButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Logo from "../assets/lifegasmlogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
        {/* Left: Hamburger */}
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />

        {/* Logo */}
        <img src={Logo} alt="Lifegasm Logo" />

        {/* Right: Cart Icon */}
        <button>
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu - rendered outside header */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default NavBar;
