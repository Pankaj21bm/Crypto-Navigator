import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center md:ml-10">
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="h-6 mr-2" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:flex md:items-start md:justify-end ${isOpen ? "block" : "hidden"
            } ${isOpen ? 'absolute -top-2 right-0' : ""} md:absolute md:-top-2 md:right-0`}
          onClick={toggleMenu}
        >
          <div className="md:flex md:items-center md:justify-end md:gap-4 lg:gap-10">
            <a
              href="#crypto-taxes"
              className="text-lg font-bold text-black hover:text-blue-600 block md:inline-block p-0 md:px-2 md:py-1"
            >
              Crypto Taxes
            </a>
            <a
              href="#free-tools"
              className="text-lg font-bold text-black hover:text-blue-600 block md:inline-block p-0 md:px-2 md:py-1"
            >
              Free Tools
            </a>
            <a
              href="#resource-center"
              className="text-lg font-bold text-black hover:text-blue-600 block md:inline-block p-0 md:px-2 md:py-1"
            >
              Resource Center
            </a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 md:mt-0 md:ml-10">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;