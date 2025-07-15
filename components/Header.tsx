"use client";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About Us", "Apartments", "Contact Us", "Planning"];

  return (
    <header className="w-full flex flex-col mx-auto items-center z-50 fixed top-4">
      <div className="flex flex-col justify-center  backdrop-blur-md bg-white/10 px-6 py-4 rounded-[2.5rem] w-[95%] max-w-5xl text-background shadow-inner shadow-white/10 z-50 transition-all duration-300 border-white/20">
        <div className="flex justify-between items-center w-full mx-auto">
          {/* Left side */}
          <p className="text-lg font-semibold text-white">
            Park<span className="text">view</span>
          </p>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-white">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:underline transition"
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden md:inline-block px-3 py-2 rounded-[1.9375rem] border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition duration-300 cursor-pointer lg:px-6">
            Get Consultation
          </button>

          {/* Mobile menu toggle icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-lg transition-transform duration-300"
            aria-label="Toggle Menu"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? <RxCross1 /> : <HiOutlineMenuAlt3 className="text-primary text-2xl"/>}
            </span>
          </button>
        </div>

        {/* Always mounted mobile nav with animation */}
        <div className="relative ">
          <nav
            className={`md:hidden relative top-4 flex flex-col space-y-2 text-white border-t transform transition-all duration-300 ease-in-out px-4 ${
              menuOpen
                ? "h-[200px] opacity-100 translate-y-0 pointer-events-auto"
                : "h-0 opacity-0 -translate-y-4 pointer-events-none overflow-hidden"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:underline transition duration-200 relative top-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="md:hidden px-6 py-2 rounded-[1.9375rem] border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition duration-300 cursor-pointer mt-2">
              Get Consultation
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
