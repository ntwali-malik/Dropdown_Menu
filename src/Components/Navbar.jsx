import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the delay as needed
    setTimeoutId(id);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Brand</div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-400 transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400 transition-colors duration-300">About</a>
          </li>
          <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              Services
            </a>
            {dropdownOpen && (
              <ul className="absolute bg-gray-800 text-white mt-2 rounded-lg shadow-lg w-48 left-0 z-10">
                <li>
                  <a href="/services/service1" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">Service 1</a>
                </li>
                <li>
                  <a href="/services/service2" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">Service 2</a>
                </li>
                <li>
                  <a href="/services/service3" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">Service 3</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
