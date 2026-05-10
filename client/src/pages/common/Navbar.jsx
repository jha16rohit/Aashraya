import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex justify-center z-50">
      <div
        className={`w-[95%] max-w-7xl flex items-center justify-between px-6 py-3 
        transition-all duration-300 border-2 rounded-full
        ${
          scrolled
            ? "bg-white/40 shadow-md mt-3 border-gray-200 backdrop-blur"
            : "bg-transparent mt-6 border-white/40"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30">
            <img src="/logo.png" alt="Aashraya Logo" />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-white md:text-black">
              Aashraya
            </h1>
            <p className="text-[10px] tracking-widest text-white/70 md:text-green-900">
              FIND • LIVE • BELONG
            </p>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-white md:text-gray-700">
          <Link to="/search" className="hover:text-black">Search</Link>
          <Link to="/how-it-works" className="hover:text-black">How It Works</Link>
          <Link to="/why-us" className="hover:text-black">Why Us</Link>
          <Link to="/faq" className="hover:text-black">FAQ</Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Register */}
          <Link to="/register">
            <button className="text-sm text-white">
              Register
            </button>
          </Link>

          {/* List Property */}
          <Link to="/list-property">
            <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-full bg-white/70 backdrop-blur">
              List Property
            </button>
          </Link>

          {/* Find Room */}
          <Link to="/search">
            <button className="px-5 py-2 text-sm bg-black text-white rounded-full">
              Find Room
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}