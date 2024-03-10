"use client";
import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./items.json";
import MealIdea from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    var itemName = item.name.toLowerCase();
    itemName = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    itemName = itemName.split(",")[0];
    setSelectedItemName(itemName);
    console.log("selectedItemName is " + selectedItemName);
  };
  return (
    <main className="m-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl m-3">Shopping List</h1>
          <NewItem addItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdea ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
