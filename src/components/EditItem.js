import React from "react";
import TextField from "@mui/material/TextField";

import useInput from "../hooks/useInput";

function EditItem({ id, item, editItem, toggleItem }) {
  const [value, handleChange, reset] = useInput(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(id, value);
    reset();
    toggleItem();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} autoFocus />
    </form>
  );
}
export default EditItem;
