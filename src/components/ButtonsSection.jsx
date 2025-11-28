import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

function ButtonsSection() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign:"center" }}>
        Buttons Section
      </Typography>
      <Stack direction="row" spacing={2} sx={{justifyContent:"center"}}>
        <Button variant="contained">Primary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>
    </Box>
  );
}

export default ButtonsSection;
