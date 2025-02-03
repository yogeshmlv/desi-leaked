"use client";

import { useState, useEffect } from "react";
import './styles.css'; // Adjust the path according to your project structure
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Function to handle video progress
  const handleVideoProgress = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = event.target as HTMLVideoElement;

    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(0);
      const duration = video.duration;

      if (duration > 0) {
        const percentage = (bufferedEnd / duration) * 100;
        setProgress(percentage);
      }
    }
  };

  // Set video loaded when it can play
  const handleCanPlay = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide the modal
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Modal for Age Verification */}
      {isModalVisible && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-red-500">
              Warning: Explicit Content
            </h2>
            <p className="text-black mb-6">
              You are about to enter a website that contains explicit material (pornography).
              This website should only be accessed if you are at least 18 years old or of legal
              age to view such material in your local jurisdiction, whichever is greater. You
              represent and warrant that you will not allow any minor access to this site or services.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
            >
              I am 18+ | Enter
            </button>
          </div>
        </div>
      )}

      {/* Loader with Percentage */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 flex justify-center items-center text-white font-bold">
              <span>{Math.round(progress)}%</span>
            </div>
            <div
              className="w-full h-full border-4 border-gray-300 border-t-white rounded-full animate-spin"
              style={{
                transform: `rotate(${progress * 3.6}deg)`,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Background Video (Only visible on larger screens) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] hidden md:block"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        onCanPlayThrough={handleCanPlay}
        onProgress={handleVideoProgress}
        onError={handleVideoError}
      ></video>

      {/* Static background for mobile devices */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1] md:hidden" style={{ backgroundImage: "url('/mobile.jpg')" }}></div>

      {/* Sidebar Navbar for mobile */}
      <div
        className={`fixed  inset-0 z-50 md:hidden bg-black bg-opacity-75 transition-all transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 custom-navbar right-0 w-64 h-full bg-gray-900 text-white z-50 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform`}
      >
        <div className="flex justify-between items-center p-6">
          <div className="text-white text-2xl font-bold">Desi Leaked</div>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-start p-6">
          <a href="#about" className="text-white py-2 hover:text-gray-300">
            About
          </a>
          <a href="#videos" className="text-white py-2 hover:text-gray-300">
            Videos
          </a>
          <a href="#contact" className="text-white py-2 hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>

      {/* Header (visible on larger screens) */}
      <header className="absolute top-0 left-0 w-full p-6 bg-black bg-opacity-50 z-10 hidden md:flex justify-between items-center">
        <div className="text-white text-xl sm:text-2xl font-bold">Desi Leaked</div>
        <nav className="flex gap-6">
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#videos" className="text-white hover:text-gray-300">
            Videos
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Hamburger Menu Button and "Desi Leaked" Text (visible on mobile) */}
      {!isModalVisible && (
        <div className="md:hidden fixed top-6 left-6 z-50 flex items-center justify-between w-full px-6">
          {/* Text on the left */}
          <div
            onClick={toggleSidebar}
            className="text-white text-xl font-bold cursor-pointer"
          >
            Desi Leaked
          </div>
          {/* Hamburger icon on the right */}
          <button
            onClick={toggleSidebar}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative min-h-screen p-8 pb-20 sm:p-20">
        <main className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-6 text-center sm:left-20 sm:transform-none">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 rounded-md shadow-lg animate-fadeIn">
            Welcome to Desi Leaked Videos
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-2xl bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 px-4 py-2 rounded-md shadow-md animate-fadeIn">
            Discover the latest and most exclusive leaked videos, reimagined for your entertainment with a touch of desi vibes.
          </p>
          <a
            href="#videos"
            className="mt-4 inline-block text-lg text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-md transition duration-300 animate-bounce"
          >
            Explore Now
          </a>
        </main>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Desi Leaked. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
