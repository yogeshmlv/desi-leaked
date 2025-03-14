// Mobile Header Component
export const MobileHeader = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
    <div className="md:hidden fixed left-0 right-0 z-50 flex items-center justify-between px-6 bg-white text-black shadow-[0px_2px_8px_0px_rgba(0,0,0,.06)] h-[60px] md:h-[80px]">
      <div
        onClick={toggleSidebar}
        className="text-black text-xl font-bold cursor-pointer"
      >
        Desi Leaked
      </div>
      <button
        onClick={toggleSidebar}
        className="text-black text-3xl"
      >
        ☰
      </button>
    </div>
  );
  
  // Desktop Header Component (No Change Needed)
  export const DesktopHeader = () => (
    <header className="absolute top-0 left-0 w-full p-6 bg-white text-black shadow-[0px_2px_8px_0px_rgba(0,0,0,.06)] z-10 hidden md:flex justify-between items-center">
      <div className="text-black text-xl sm:text-2xl font-bold">Desi Leaked</div>
      <nav className="flex gap-6">
        <a href="#about" className="text-black hover:text-gray-500">
          About
        </a>
        <a href="#videos" className="text-black hover:text-gray-500">
          Videos
        </a>
        <a href="#contact" className="text-black hover:text-gray-500">
          Contact
        </a>
      </nav>
    </header>
  );
  
  // Main Header Component (No Change Needed)
  export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    return (
      <>
        <DesktopHeader />
        <MobileHeader toggleSidebar={toggleSidebar} />
      </>
    );
}