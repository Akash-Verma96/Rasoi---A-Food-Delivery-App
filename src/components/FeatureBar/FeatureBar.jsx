import React from "react";
import { Home, Grid, ShoppingCart, User } from "lucide-react";

function FeatureBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] z-50">
      <ul
        className="flex justify-around items-center 
        bg-white/10 backdrop-blur-lg 
        border border-orange-400/40 
        shadow-[0_0_25px_rgba(255,140,0,0.6)] 
        rounded-2xl px-4 py-3"
      >
        <li className="flex flex-col items-center text-orange-400 hover:text-orange-300 transition duration-300 cursor-pointer hover:scale-110">
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </li>

        <li className="flex flex-col items-center text-orange-400 hover:text-orange-300 transition duration-300 cursor-pointer hover:scale-110">
          <Grid size={22} />
          <span className="text-xs mt-1">Category</span>
        </li>

        <li className="flex flex-col items-center text-orange-400 hover:text-orange-300 transition duration-300 cursor-pointer hover:scale-110">
          <ShoppingCart size={22} />
          <span className="text-xs mt-1">Cart</span>
        </li>

        <li className="flex flex-col items-center text-orange-400 hover:text-orange-300 transition duration-300 cursor-pointer hover:scale-110">
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default FeatureBar;
