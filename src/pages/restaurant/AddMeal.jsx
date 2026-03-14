import React, { useState } from "react";
import { Upload } from "lucide-react";

function AddMeal() {
  const [meal, setMeal] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(meal);
  };

  return (
    <div className="min-h-screen  flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Add New Meal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Meal Name */}
          <div>
            <label className="block text-gray-600 mb-1">Meal Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter meal name"
              value={meal.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 mb-1">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={meal.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 mb-1">Category</label>
            <select
              name="category"
              value={meal.category}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">Select Category</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
              <option value="snacks">Snacks</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Meal description"
              value={meal.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-600 mb-2">Upload Image</label>

            <div className="flex items-center justify-center border-2 border-dashed border-orange-300 rounded-lg p-6 cursor-pointer hover:bg-orange-50 transition">
              <Upload className="text-orange-500 mr-2" size={20} />
              <span className="text-gray-500">Upload Meal Image</span>
              <input
                type="file"
                className="hidden"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            Add Meal
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddMeal;
