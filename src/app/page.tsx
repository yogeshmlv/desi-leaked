"use client"; // Ensure this is included at the top for client-side rendering

import { useState, useEffect } from "react";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Function to handle video progress with proper type annotation for the event
  const handleVideoProgress = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = event.target as HTMLVideoElement;

    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(0); // Get the end of the buffered range
      const duration = video.duration;

      // Calculate the percentage of the video that is buffered
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

  // Handle video loading error
  const handleVideoError = () => {
    console.error("Video failed to load");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
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
                transform: `rotate(${progress * 3.6}deg)`, // Adjust rotation based on the progress
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        onCanPlayThrough={handleCanPlay}
        onProgress={handleVideoProgress}
        onError={handleVideoError}
      ></video>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 bg-black bg-opacity-50 z-10 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Desi Leaked</div>
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

      {/* Content */}
      <div className="relative min-h-screen p-8 pb-20 sm:p-20">
        <main className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-6 text-center sm:left-20 sm:transform-none">
          <h1 className="text-white text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 rounded-md shadow-lg animate-fadeIn">
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
