import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

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
      ? "bg-white/40  shadow-md mt-3 border-gray-200"
      : "bg-transparent mt-6 border-white/40"
  }`}
      >
  {/* Logo */}
<div className="flex items-center gap-3">

  {/* Logo Image */}
  <div className="w-10 h-10 flex items-center justify-center 
                  rounded-full overflow-hidden border border-white/30">
    <img
      src="/logo.png"
      alt="Aashraya Logo"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Brand Text */}
  <div className="leading-tight">
    
    {/* Brand Name */}
    <h1 className="text-lg font-semibold text-white md:text-black">
      Aashraya
    </h1>

    {/* Tagline */}
    <p className="text-[10px] tracking-widest text-white/70 md:text-green-900">
      FIND • LIVE • BELONG
    </p>

  </div>

</div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-white md:text-gray-700">
          <a className="hover:text-black cursor-pointer">Search</a>
          <a className="hover:text-black cursor-pointer">How It Works</a>
          <a className="hover:text-black cursor-pointer">Why Us</a>
          <a className="hover:text-black cursor-pointer">FAQ</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-white md:text-gray-700">Login</button>

          <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-full bg-white/70 backdrop-blur">
            List Property
          </button>

          <button className="px-5 py-2 text-sm bg-black text-white rounded-full">
            Find Room
          </button>
        </div>
      </div>
    </div>
  );
}
