"use client";
import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemData);
  console.log(items);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="m-4">
      <h1 className="text-4xl m-3">Shopping List</h1>

      <NewItem addItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
