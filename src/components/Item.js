import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import useToggle from "../hooks/useToggle";
import EditItem from "./EditItem";

import "../newStyles.css";

export default function Item({
  id,
  item,
  completed,
  editItem,
  toggleCompleted,
  deleteItem,
}) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <List
      className="list_item"
      sx={{
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
        color: "primary.main",
        lineHeight: "1rem",
      }}
    >
      <ListItem>
        {isEditing ? (
          <EditItem
            editItem={editItem}
            id={id}
            key={id}
            item={item}
            toggleItem={toggle}
          />
        ) : (
          <>
            <Checkbox
              edge="start"
              checked={completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": id }}
              onClick={() => toggleCompleted(id)}
              style={{
                color: completed ? "green" : " #1976d2",
                opacity: completed ? "0.5" : " 1",
              }}
            />

            <ListItemText
              style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "green" : " #1976d2",
                opacity: completed ? "0.5" : " 1",
                overflowWrap: "break-word",
              }}
            >
              {item}
            </ListItemText>
            <IconButton
              edge="end"
              aria-label="edit"
              style={{
                color: completed ? "green" : " #1976d2",
                opacity: completed ? "0.5" : " 1",
                marginRight: "0.7rem",
              }}
              onClick={toggle}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              style={{
                color: completed ? "green" : " #1976d2",
                opacity: completed ? "0.5" : " 1",
              }}
              onClick={() => deleteItem(id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </ListItem>
    </List>
  );
}
