import React from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartIcon({ count = 0, onClick }) {
  return (
    <IconButton color="inherit" onClick={onClick}>
      <Badge badgeContent={count} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartIcon;
