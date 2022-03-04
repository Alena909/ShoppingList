import React from "react";

import Item from "./Item";

function ShoppingList({ items, editItem, toggleCompleted,deleteItem }) {
  return (
    <div style={{backgroundColor:'#eoeoeo'}}>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          item={item.neededItem}
          completed={item.completed}
          editItem={editItem}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}
export default ShoppingList;
