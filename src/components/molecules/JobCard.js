import { Box, Typography } from "@mui/material";
import React from "react";

function JobCard({ title, company, location, time, img, easyApply }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2em",
        padding: "1em",
        background: " #fff",
        cursor: "pointer",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",

        "&:hover": {
          background: "#E2F0FE",
        },
      }}
    >
      <Box
        sx={{
          width: "56px",
          height: "56px",
          backgroundImage: `url( ${img})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat ",
        }}
      ></Box>

      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
        <Typography variant="h5" sx={{ color: "#0A66C4" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: "#C99966" }}>
          {company}
        </Typography>

        <Typography variant="h6" sx={{ color: "#5A759C" }}>
          {location}
        </Typography>

        <Typography variant="i" sx={{ color: "#057642" }}>
          {time}
          <Typography variant="hi" sx={{ color: "#5A759C" }}>
            &nbsp; &nbsp; {easyApply ? "Easy Apply" : ""}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default JobCard;
