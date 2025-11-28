import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Products", icon: <ShoppingCartIcon />, path: "/products" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <IconButton onClick={() => setOpen(!open)}>
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => navigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
