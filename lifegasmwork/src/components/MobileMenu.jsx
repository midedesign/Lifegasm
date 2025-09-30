import React from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop - only show when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-25 z-30"
          onClick={onClose}
        />
      )}

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b shadow-lg transform transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        {/* Menu Content */}
        <nav className="py-4">
          <a
            href="#"
            className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
            onClick={onClose}
          >
            Products
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
            onClick={onClose}
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
            onClick={onClose}
          >
            Cart
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
