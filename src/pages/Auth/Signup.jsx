import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const { googleSignIn, user, createUser } = useAuth();
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

  // useEffect(() => {
  //   if (user !== null) {
  //     navigate("/jobs");
  //   }
  // }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/jobs");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>

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
          paddingTop: 20,
        }}
      >
        <Button onClick={handleGoogleSignIn} class="google-button">
          <span>Continue with Google</span>
        </Button>
      </Box>
    </Container>
  );
}
