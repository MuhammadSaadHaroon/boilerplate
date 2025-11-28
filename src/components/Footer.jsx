import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ mt: 4, py: 3, bgcolor: "#1976d2", color: "#fff", textAlign: "center" }}>
      <Typography variant="body1">© 2025 My React Boilerplate. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
