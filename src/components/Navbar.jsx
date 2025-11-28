import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Hamburger Menu */}
        <IconButton edge="start" color="inherit" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>

        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          My React Boilerplate
        </Typography>

        {/* Search Bar */}
        <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
          <SearchBar />
        </Box>

        {/* Cart Icon */}
        <IconButton color="inherit" onClick={() => alert("Cart clicked")}>
          <Badge badgeContent={3} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        {/* Mobile Hamburger Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { navigate("/dashboard"); handleClose(); }}>Dashboard</MenuItem>
          <MenuItem onClick={() => { navigate("/products"); handleClose(); }}>Products</MenuItem>
          <MenuItem onClick={() => { navigate("/about"); handleClose(); }}>About</MenuItem>
          <MenuItem onClick={() => { navigate("/contact"); handleClose(); }}>Contact</MenuItem>
          <MenuItem onClick={() => { navigate("/profile"); handleClose(); }}>Profile</MenuItem>
          <MenuItem onClick={() => { logout(); navigate("/login"); handleClose(); }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
