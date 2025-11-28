import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIconMUI from "@mui/icons-material/WhatsApp";

function WhatsAppIcon() {
  return (
    <Fab
      color="success"
      sx={{ position: "fixed", bottom: 20, right: 20 }}
      onClick={() => window.open("https://wa.me/923001234567", "_blank")}
    >
      <WhatsAppIconMUI />
    </Fab>
  );
}

export default WhatsAppIcon;
