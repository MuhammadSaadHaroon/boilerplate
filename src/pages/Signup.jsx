import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">Signup</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" type="submit">Signup</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
