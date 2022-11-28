import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Input, Submit } from "../../components/atoms/inputField/Input";

export default function Signin() {
  const { signIn, googleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          border: "2px solid #cdcdcd",
          height: 550,
          width: 450,
          minWidth: 350,
          mt: 10,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Submit />
        </form>
        <hr
          style={{
            width: "90%",
            margin: "20px auto",
          }}
        />
        <Button onClick={handleGoogleSignIn} class="google-button">
          <span>Continue with Google</span>
        </Button>
      </Box>
    </Container>
  );
}
