import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(login(email, password)) navigate("/dashboard");
    else alert("Invalid credentials!");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
