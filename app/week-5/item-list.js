"use client";

import { useState } from "react";
import Item from "./item.js";
import itemData from "./items.json";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let items = [...itemData];

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));

    // Another way to sort by name
    // items.sort((a, b) => {
    //   const nameA = a.name.toLowerCase();
    //   const nameB = b.name.toLowerCase();

    //   if (nameA < nameB) {
    //     return -1; // a should come before b
    //   }
    //   if (nameA > nameB) {
    //     return 1; // a should come after b
    //   }
    //   return 0; // names are equal
    // });
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <>
    <div className="grid grid-flow-col gap-5">
      <button
        type="submit"
        className=" py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        type="submit"
        className=" py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
      </div>
      <ul className="mb-4">
        {items.map((item) => (
          <li key={item.id}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ItemList;
