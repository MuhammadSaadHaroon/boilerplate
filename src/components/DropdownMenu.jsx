import React, { useState } from "react";
import { Button, Menu } from "@mui/material";

function DropdownMenu({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onClick: () => { child.props.onClick(); handleClose(); } })
        )}
      </Menu>
    </>
  );
}

export default DropdownMenu;
