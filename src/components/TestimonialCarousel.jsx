import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const testimonials = [
  { id: 1, name: "John Doe", text: "This is an amazing boilerplate!" },
  { id: 2, name: "Jane Smith", text: "Highly recommend for React projects!" },
  { id: 3, name: "Ali Khan", text: "Very easy to customize and extend." },
];

function TestimonialCarousel() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign:"center" }}>Testimonials</Typography>
      <Box sx={{ display: "flex", justifyContent:"center", overflowX: "auto", gap: 2 }}>
        {testimonials.map((t) => (
          <Paper key={t.id} sx={{ p: 2, minWidth: 250, flexShrink: 0 }}>
            <Typography variant="subtitle1">{t.name}</Typography>
            <Typography variant="body2">{t.text}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default TestimonialCarousel;
