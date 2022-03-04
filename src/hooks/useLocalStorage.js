import { useState, useEffect } from "react";

function useLocalStorage(key, initialValues) {
  const [items, setItems] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(initialValues)
      );
    } catch (e) {
      val = initialValues;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(items));
  }, [items]);

  return [items, setItems];
}
export default useLocalStorage;
