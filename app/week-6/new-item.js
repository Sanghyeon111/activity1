"use client";
import { useState } from "react";

function NewItem({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };
    setName("");
    setQuantity(1);
    setCategory("Produce");

    console.log(newItem);
    addItem({ ...newItem, category: newItem.category.toLowerCase() });
  };

  const handleClick = () => {
    quantity < 100
      ? `Added item: ${name}, quantity: ${quantity}, category: ${category}`
      : console.log("Quantity must be less than 100");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div className="flex items-center justify-left mb-4">
        <div className="w-full max-w-md bg-white mt-5 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl text-gray-800 font-bold mb-4">
            Create New Item
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-800">Item name:</span>
              <input
                required
                type="text"
                onChange={handleNameChange}
                value={name}
                placeholder="Item name"
                className="mt-1 p-1 w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>
            <label className="inline-block">
              <span className="text-gray-800">Quantity:</span>
              <input
                required
                type="number"
                max="99"
                onChange={handleQuantityChange}
                value={quantity}
                className="ml-1 mr-12 w-12 rounded-md text-right text-black bg-gray-100 focus-bg-white"
              />
            </label>
            <label className="inline-block">
              <span className="ml-0 mr-1 rounded-md text-gray-800 ">
                Category:
              </span>
              <select
                onChange={handleCategoryChange}
                value={category}
                className="text-black bg-gray-100 rounded-md mb-6 focus-bg-white"
              >
                <option disabled value="">
                  Category
                </option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
              onClick={handleClick}
            >
              +
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default NewItem;
