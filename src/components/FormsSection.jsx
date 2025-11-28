import React, { useState } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";

function FormsSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box sx={{ my: 4, display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width:"100%" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Forms Section
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{width:"700px"}}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default FormsSection;
