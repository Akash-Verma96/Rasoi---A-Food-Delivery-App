import React from "react";

const meal = {
  name: "Paneer Butter Masala",
  description:
    "Rich creamy tomato-based curry with soft paneer cubes. Perfectly paired with naan or jeera rice.",
  price: 249,
  rating: 4.6,
  category: "North Indian",
  image:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200",
};

const MealDetail = () => {
  

  return (
    <div className="min-h-screen  flex justify-center items-center p-4">
      
      <div className="max-w-5xl w-full md:max-h-130 bg-white/90 rounded-2xl shadow-lg overflow-hidden md:flex">

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">

          <div>
            <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
              {meal.category}
            </span>

            <h1 className="text-3xl font-bold mt-3 text-gray-800">
              {meal.name}
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {meal.description}
            </p>

            <div className="flex items-center mt-4 gap-4">
              <span className="text-yellow-500 font-semibold">
                ⭐ {meal.rating}
              </span>

              <span className="text-2xl font-bold text-orange-500">
                ₹{meal.price}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            disabled
           
            className="mt-6 w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300 disabled:bg-gray-500 "
          >
            Add to Cart
          </button>

        </div>
      </div>

    </div>
  );
};

export default MealDetail;