import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bannerImg from "../assets/banner.jpg"; // ensure image exists

function Banner() {
  return (
    <Box
      sx={{
        height: 300,
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        mb: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Welcome to My React Boilerplate
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}

export default Banner;
