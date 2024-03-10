"use client";

import { useState } from "react";
import Item from "./item.js";
import itemData from "./items.json";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items = items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  const renderButtons = () => {
    const buttons = [
      { key: "name", label: "Sort by Name", color: "bg-sky-600" },
      { key: "category", label: "Sort by Category", color: "bg-orange-600" },
    ];

    return buttons.map((button) => (
      <button
        key={button.key}
        className={`py-2 px-4 max-w-sm ${button.color} rounded-md text-white`}
        onClick={() => setSortBy(button.key)}
      >
        {button.label}
      </button>
    ));
  };

  const renderItems = () => {
    return items.map((item) => (
      <li key={item.id}>
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      </li>
    ));
  };

  return (
    <>
      <div className="grid grid-cols-4">{renderButtons()}</div>
      <ul className="mb-4">{renderItems()}</ul>
    </>
  );
}
export default ItemList;
