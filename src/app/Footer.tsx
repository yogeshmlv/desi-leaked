import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => (
    <footer className=" bottom-0 left-0 w-full p-6 bg-black  text-white flex flex-col sm:flex-row justify-between items-center gap-4">
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
  );
  