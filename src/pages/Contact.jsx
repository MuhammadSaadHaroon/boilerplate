import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Contact Form:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" mt={5}>Contact Us</Typography>
        <Box component="form" mt={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
          <TextField label="Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
          <TextField label="Email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
          <TextField label="Message" multiline rows={4} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
          <Button type="submit" variant="contained">Send Message</Button>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
