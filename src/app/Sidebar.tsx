import { useState } from "react";

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => (
  <div
    className={`fixed top-0 left-0 w-[250px] h-full bg-white text-black transition-transform z-50 ${
      isOpen ? "transform translate-x-0" : "transform -translate-x-full"
    } md:hidden`}  // Ensures sidebar is only visible on mobile
  >
    <button onClick={toggleSidebar} className="absolute top-4 right-4 text-black text-3xl">
      ×
    </button>
    <nav className="flex flex-col gap-6 mt-16 px-4 text-center">
      <a href="#about" className="text-black hover:text-gray-300">
        About
      </a>
      <a href="#videos" className="text-black hover:text-gray-300">
        Videos
      </a>
      <a href="#contact" className="text-black hover:text-gray-300">
        Contact
      </a>
    </nav>
  </div>
);

export default Sidebar;
