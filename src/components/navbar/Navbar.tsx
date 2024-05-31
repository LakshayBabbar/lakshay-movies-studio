const Navbar = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="h-16 flex items-center justify-between px-11 z-[999] shadow-lg bg-[rgba(14,13,13,0.32)] backdrop-blur-2xl fixed rounded-xl top-5 text-white">
        <ul className="h-full flex gap-4 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
