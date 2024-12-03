export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
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
      <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="absolute bottom-1/2 left-20 flex flex-col gap-6 text-left transform translate-y-1/2">
          {/* Title */}
          <h1 className="text-white text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 rounded-md shadow-lg animate-fadeIn">
            Welcome to Desi Leaked Videos
          </h1>
          {/* Subtitle */}
          <p className="text-white text-lg max-w-2xl bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 px-4 py-2 rounded-md shadow-md animate-fadeIn">
            Discover the latest and most exclusive leaked videos, reimagined for your entertainment with a touch of desi vibes.
          </p>
          {/* Call-to-Action Button */}
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
        {/* Social Media Icons */}
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
