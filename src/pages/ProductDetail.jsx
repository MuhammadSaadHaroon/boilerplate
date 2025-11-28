import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();

  return (
    <Box p={3}>
      <Typography variant="h4">Product Detail - {id}</Typography>
      <Typography variant="body1">This is the detail page for product ID: {id}</Typography>
    </Box>
  );
}

export default ProductDetail;