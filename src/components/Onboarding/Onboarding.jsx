import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {

  const text = "Fresh Food Delivered Fast";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 70); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative w-full h-screen flex flex-col justify-center items-center text-white px-6 pb-16 md:px-16">

        <div className="max-w-2xl bg-slate-700/30 p-2 rounded-2xl">

          <h1 className="text-4xl md:text-5xl text-center font-bold leading-tight backdrop-blur-lg rounded-2xl">
            {displayText}
          </h1>

          <p className="mt-4 text-gray-200 text-center text-lg">
            Discover the best meals from your favorite restaurants.
            Order easily and enjoy delicious food anytime with Rasoi.
          </p>

        </div>

        <Link
          to={"/Onboarding2"}
          className="mt-8 bg-orange-400 hover:bg-orange-500 transition px-8 py-3 rounded-xl font-semibold text-white shadow-lg"
        >
          Get Started
        </Link>

      </div>
    </div>
  );
};

export default Onboarding;