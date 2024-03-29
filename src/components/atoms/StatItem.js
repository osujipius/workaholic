import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StatItem({ title, icon, info, style }) {
  return (
    <>
      <Box
        style={style}
        component="div"
        sx={{
          width: { md: "70%", xs: "100%" },
          height: "auto",
          my: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>{icon}</Box>
          <Typography
            variant="h4"
            className="!font-mono"
            sx={{
              ml: 1,
              fontSize: { md: "1.8rem", xs: "1.5rem" },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            px: { md: 4, xs: 2 },
            mt: 1,
          }}
        >
          <Typography
            variant="p"
            className="!font-mono"
            sx={{
              color: "#5e6d55",
            }}
          >
            {info}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
