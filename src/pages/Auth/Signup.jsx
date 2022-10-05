import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, googleSignIn, user } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match");
  //   }
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError("Failed to create account");
  //   }

  //   setLoading(false);
  // }

  // console.log(emailRef, passwordRef, passwordConfirmRef);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/About");
    }
  }, [user, navigate]);

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {/* {error && <h2>{error}</h2>}

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          ref={passwordConfirmRef}
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form> */}

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
