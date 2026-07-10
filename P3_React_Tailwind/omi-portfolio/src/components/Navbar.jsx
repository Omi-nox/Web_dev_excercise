import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const link_names = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f2937]">
      <div className="max-w-4xl mx-auto px-2 py-6 flex justify-around items-center gap-2 relative sm:justify-between md:justify-between">
        
        {/* Logo */}
        <span className="text-xl md:text-2xl font-bold text-[#6366f1] flex-shrink-0">
          Omi<span className="text-[#06b6d4]">-Nox</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-[#f1f5f9] text-sm ">
          {link_names.map((name, index) => (
            <li key={index}>
              <a href={`#${name.toLowerCase()}`} className="hover:text-[#6366f1] transition-colors duration-300">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - ab fixed nahi, normal flow mein hai */}
        <button
          className="md:hidden text-[#f1f5f9] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1f2937] transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-6 flex items-center justify-center text-center text-xl">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu - hamesha render hoga, sirf classes change hongi smooth transition ke liye */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-[#111827] px-6 border-t border-[#1f2937]
        `}
      >
        <div className="py-4 flex flex-col gap-4">
          {link_names.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="text-[#f1f5f9] hover:text-[#6366f1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;