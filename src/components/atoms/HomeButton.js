import React from "react";
import Button from "@mui/material/Button";

function HomeButton({ style, text, src }) {
  return (
    <Button
      style={style}
      variant="contained"
      disableElevation
      sx={{
        background: "#001e00",
        fontFamily: "'Lexend Deca', sans-serif",
        fontSize: { xs: "small", xl: "large" },
        borderRadius: 2,
        mt: { xs: 1 },
        transition: ".5s",

        "&:hover": {
          background: "#14a800",
        },
      }}
    >
      <img
        style={{ height: "30px", width: "30px", marginRight: 2 }}
        src={src}
        alt=""
      />
      {text}
    </Button>
  );
}

export default HomeButton;
