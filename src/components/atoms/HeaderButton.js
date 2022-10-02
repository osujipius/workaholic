import React from "react";
import Button from "@mui/material/Button";

function HeaderButton({ text }) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        background: "#265a57",
        fontFamily: "'Lexend Deca', sans-serif",
        fontSize: { xs: "small", xl: "medium" },
        borderRadius: 2,
        mt: { xs: 1 },
        transition: ".5s",

        "&:hover": {
          background: "#317773",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default HeaderButton;
