import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="h-16 flex items-center justify-between px-11 z-[999] shadow-lg bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl fixed rounded-xl top-5 text-white">
        <ul className="h-full flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link
              href="https://blog-tech-delta.vercel.app/users/lakshaymovies"
              target="_blank"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
