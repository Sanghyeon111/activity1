"use client";

import { useState } from "react";
import Item from "./item.js";
import itemData from "./items.json";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let items = [...itemData];


  items = items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  // if (sortBy === "name") {
  //   items.sort((a, b) => a.name.localeCompare(b.name));

  //   // Another way to sort by name
  //   // items.sort((a, b) => {
  //   //   const nameA = a.name.toLowerCase();
  //   //   const nameB = b.name.toLowerCase();

  //   //   if (nameA < nameB) {
  //   //     return -1; // a should come before b
  //   //   }
  //   //   if (nameA > nameB) {
  //   //     return 1; // a should come after b
  //   //   }
  //   //   return 0; // names are equal
  //   // });
  // } else if (sortBy === "category") {
  //   items.sort((a, b) => a.category.localeCompare(b.category));
  // }

  const renderButtons = () => {
    const buttons = [
      { key: "name", label: "Sort by Name", color: 'bg-sky-600' },
      { key: "category", label: "Sort by Category", color: 'bg-orange-600' },
      { key: "category", label: "Sort by Category1", color: 'bg-green-600' }
    ];

    return buttons.map((button) => (
      <button
        key={button.key}
        className={`py-2 px-4 ${button.color} hover:bg-sky-500 rounded-md text-white`}
        onClick={() => setSortBy(button.key)}
      >
        {button.label}
      </button>
    ));
  }

  const renderItems = () => {
    // if(sortBy === "category") {
    //   const result = items.reduce((groupedItems,item) => {
    //     if(!groupedItems[item.category]) {
    //       groupedItems[item.category] = [];
    //     }
    //     groupedItems[item.category].push(item);
    //     return groupedItems;
    //   })
    // }
    return items.map((item) => (
      <li key={item.id}>
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
        </li>
    ));

  }

  return (
    <>
    <div className="grid grid-flow-col gap-5">
      {renderButtons()}
      </div>
      <ul className="mb-4">
        {renderItems()}
      </ul>
    </>
  );
}
export default ItemList;
