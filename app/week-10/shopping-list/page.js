"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdea from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service.js";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  console.log("user is ", user);
  console.log(user.uid);

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
  };

  useEffect(() => {
    loadItems();
  }, [items]);

  const handleAddItem = async (newItem) => {
    try {
      await addItem(user.uid, newItem);
      loadItems(); // Update items after adding
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
  if (!user) {
    return <p>Go away!</p>;
  }

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
