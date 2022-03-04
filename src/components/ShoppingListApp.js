import React from "react";
import { v4 as uuid } from "uuid";

import ShoppingList from "./ShoppingList";
import ShoppingListForm from "./ShoppingListForm";

import useLocalStorage from "../hooks/useLocalStorage";

function ShoppingListApp() {
  const initialValues = [
    { id: uuid(), neededItem: "Milk", completed: true },
    { id: uuid(), neededItem: "Eggs", completed: true },
    { id: uuid(), neededItem: "Bread", completed: false },
  ];
  const [items, setItems] = useLocalStorage("shoppingList", initialValues);

  const addItem = (newItem) => {
    setItems([...items, { id: uuid(), neededItem: newItem, completed: false }]);
  };

  const editItem = (itemId, newItem) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, neededItem: newItem } : item
      )
    );
  };

  const toggleCompleted = (itemId) => {
    const checkedItems = items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setItems(checkedItems);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <h1 style={{ color: "#1976d2" }}>My Shopping List</h1>

      <ShoppingListForm addItem={addItem} />
      <ShoppingList
        items={items}
        editItem={editItem}
        toggleCompleted={toggleCompleted}
        deleteItem={deleteItem}
      />
    </div>
  );
}
export default ShoppingListApp;
