import { Star } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";

function ReviewCard({ name, description, occupation, avatarImage }) {
  return (
    <Box
      sx={{
        width: { xs: "13em", xl: "25em" },
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "2em",
        alignItems: "center",
        boxSizing: "content-box",
        padding: { xs: "30px 2em", md: "30px 2em" },
        boxShadow:
          "0px 10px 10px 10px rgba(1, 41, 112, 0.08), 10px -10px 5px 0px rgba(1, 41, 112, 0.08)",
        textAlign: "center",
        margin: { xs: "0 0em 5em -2.0em", sm: "0 em 5em 0em" },
        transition: "0.5s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(0.9)",
        },
      }}
    >
      <Box>
        <Star sx={{ color: " #ffc107  " }} />
        <Star sx={{ color: " #ffc107  " }} />
        <Star sx={{ color: " #ffc107  " }} />
        <Star sx={{ color: " #ffc107  " }} />
        <Star sx={{ color: " #ffc107  " }} />
      </Box>

      <Box>{description}</Box>

      <Box
        sx={{
          width: "10em",
          height: "10em",
          borderRadius: "50%",
          backgroundImage: `url(${avatarImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box>
        {name}
        <br /> <Box sx={{ color: "#14A800" }}>{occupation}</Box>
      </Box>
    </Box>
  );
}

export default ReviewCard;
