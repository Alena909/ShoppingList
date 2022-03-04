import React from "react";
import useInput from "../hooks/useInput";

import TextField from "@mui/material/TextField";
import "../newStyles.css";

function ShoppingListForm({ addItem }) {
  const [value, handleChange, reset] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField className="form_item"
        value={value}
        onChange={handleChange}
        label="Add new item"
        variant="outlined"
        style={{ maxWidth: "360px", backgroundColor: "#ffff7b" }}
        fullWidth
      />
    </form>
  );
}

export default ShoppingListForm;
