import React from "react";

const meals = [
  {
    id: 1,
    name: "Creamy Pasta",
    price: 249,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 179,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 299,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: 269,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 5,
    name: "Breakfast Platter",
    price: 199,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 6,
    name: "Healthy Veg Bowl",
    price: 189,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
  {
    id: 7,
    name: "Classic Pancakes",
    price: 149,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
  },
  {
    id: 8,
    name: "Sushi Combo",
    price: 349,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
  },
  {
    id: 9,
    name: "Grilled Steak",
    price: 499,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  },
  {
    id: 10,
    name: "Fresh Garden Salad",
    price: 139,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 11,
    name: "Veg Momos",
    price: 129,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
  },
  {
    id: 12,
    name: "Club Sandwich",
    price: 159,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
  },
  {
    id: 13,
    name: "Vanilla Ice Cream",
    price: 99,
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0",
  },
  {
    id: 14,
    name: "Mexican Tacos",
    price: 219,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },
  {
    id: 15,
    name: "Hakka Noodles",
    price: 179,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 16,
    name: "Crispy French Fries",
    price: 119,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
  },
  {
    id: 17,
    name: "Chicken Curry",
    price: 289,
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
  },
  {
    id: 18,
    name: "Belgian Waffles",
    price: 169,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
  },
  {
    id: 19,
    name: "Chicken Shawarma",
    price: 199,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 20,
    name: "Chocolate Cake",
    price: 149,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop",
  },
];

function Meals() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-orange-400 mb-4">
        Meals 🔥
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={`${meal.image}?w=600&auto=format&fit=crop`}
              alt={meal.name}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white w-full">
              
              <h2 className="text-lg font-semibold mb-2">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-orange-500/40 -rotate-2 rounded-md"></span>
                  <span className="relative px-2 py-1 text-white">
                    {meal.name}
                  </span>
                </span>
              </h2>

              <div className="flex items-center justify-between mt-2">
                
                <span className="relative inline-block font-bold text-xl">
                  <span className="absolute inset-0 bg-black/70 -rotate-1 rounded-md"></span>
                  <span className="relative px-3 py-1 text-orange-400">
                    ₹{meal.price}
                  </span>
                </span>

                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded-lg transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
