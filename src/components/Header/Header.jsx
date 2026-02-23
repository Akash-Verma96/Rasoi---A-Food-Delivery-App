import React from "react";
import rasoiLogo from "../../assets/Rasoi Logo.png";
import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between gap-4">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={rasoiLogo}
          alt="Rasoi Logo"
          className="w-14 sm:w-16 md:w-20 object-contain mix-blend-lighten"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative hidden sm:flex">
        <Search
          size={18}
          className="absolute z-10 left-4 top-1/2 -translate-y-1/2 text-orange-400"
        />
        <input
          type="text"
          placeholder="Search dishes..."
          className="w-full pl-10 pr-4 py-2 rounded-2xl 
          bg-white/10 backdrop-blur-md
          border border-orange-400/40
          text-white placeholder-orange-300
          focus:outline-none
          focus:shadow-[0_0_15px_rgba(255,140,0,0.7)]"
        />
      </div>

      {/* Notification */}
      <div className="relative">
        <Bell
          size={24}
          className="text-orange-400 
          drop-shadow-[0_0_8px_rgba(255,140,0,0.8)] 
          cursor-pointer hover:scale-110 transition"
        />
      </div>
    </header>
  );
}

export default Header;