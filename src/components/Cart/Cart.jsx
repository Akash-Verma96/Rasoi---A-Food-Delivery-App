import React from 'react'

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
  }
];

function Cart() {
  return (
    <div className="w-full min-h-screen px-4 py-8 ">
      
      <h2 className="text-2xl font-bold text-orange-400 mb-8">
        Your Cart 🔥
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-orange-400 rounded-2xl shadow-md hover:shadow-xl 
                       transition duration-300 overflow-hidden group"
          >
            
            {/* Image */}
            <div className="h-40 overflow-hidden relative">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover 
                           group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-sm md:text-base">
                {meal.name}
              </h3>

              <p className="text-white font-bold mt-1">
                {`${meal.price} Rs`}
              </p>

              {/* Quantity Section */}
              <div className="mt-4 space-y-3">
                
                {/* Dropdown */}
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-orange-500/50 
                               border border-gray-200 rounded-lg 
                               px-3 py-2 text-sm 
                               focus:outline-none 
                               focus:ring-2 focus:ring-orange-400"
                  >
                    <option>Quantity: 1</option>
                    <option>Quantity: 2</option>
                    <option>Quantity: 3</option>
                    <option>Quantity: 4</option>
                    <option>Quantity: 5</option>
                  </select>

                  {/* Custom Dropdown Icon */}
                  <div className="absolute inset-y-0 right-3 
                                  flex items-center pointer-events-none 
                                  text-gray-500">
                    ▼
                  </div>
                </div>

                {/* + - Controls */}
                <div className="flex items-center justify-between 
                                bg-gray-100 rounded-xl px-4 py-2">
                  
                  <button
                    className="w-9 h-9 flex items-center justify-center 
                               bg-white rounded-full shadow-sm 
                               text-orange-500 text-xl font-bold 
                               hover:bg-orange-50 transition"
                  >
                    −
                  </button>

                  <span className="font-semibold text-gray-700 text-base">
                    1
                  </span>

                  <button
                    className="w-9 h-9 flex items-center justify-center 
                               bg-white rounded-full shadow-sm 
                               text-orange-500 text-xl font-bold 
                               hover:bg-orange-50 transition"
                  >
                    +
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}


export default Cart
