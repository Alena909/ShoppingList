import { v4 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";

export default (initialItems) => {
  const [items, setItems] = useLocalStorage("shoppingList", initialItems);

//   const addItem = (newItem) => {
//     setItems([...items, { id: uuid(), neededItem: newItem, completed: false }]);
//   };
  return { items };
};
