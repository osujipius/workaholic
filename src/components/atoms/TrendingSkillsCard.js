import React from "react";
import { Box, Typography } from "@mui/material";

export default function TrendingSkillsCard({ src, intro, title }) {
  return (
    <>
      <Box
        sx={{
          my: 5,
          width: "18em",
          height: "21em",
          position: "relative",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={src}
          alt="skill-img"
        />
        <Typography
          sx={{
            position: "absolute",
            top: 15,
            left: 10,
            fontFamily: "'Lexend Deca', sans-serif",
            color: "#fff",
            fontSize: ".8em",
          }}
        >
          {intro}
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: 30,
            left: 10,
            fontFamily: "'Lexend Deca', sans-serif",
            fontWeight: "bold",
            fontSize: "1.3em",
            color: "#fff",
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
}
