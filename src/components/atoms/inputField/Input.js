import { Box } from "@mui/material";
import React from "react";
import "./input.css";

function Input({ placeholder, name, type, onChange }) {
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </Box>
  );
}

function Submit() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input type="submit" value="Submit" />
    </Box>
  );
}

export { Input, Submit };
