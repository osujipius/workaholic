import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
import { FadeIn } from "../atoms/FadeIn.js";

<Box
  component="span"
  sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
>
  •
</Box>;

export default function BasicCard({ categoryName, categoryRating, jobCount }) {
  return (
    <FadeIn>
      <Card
        sx={{
          width: "15em",
          minWidth: { xs: "10em", md: "19em" },
          background: "#f2f7f2",
          margin: { md: "1em 1em", xs: "1em 0" },
          padding: "1em",
          cursor: "pointer",
          borderRadius: "10px",
          "&:hover": {
            background: "#E4EBE4",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              fontFamily: "Merriweather",
              fontSize: 20,
            }}
          >
            {categoryName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mt: "1em",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Star fontSize="small" sx={{ mr: "0.3em", color: "#14A800" }} />
              <Typography color="text.secondary"> {categoryRating} </Typography>
            </Box>
            <Typography color="text.secondary">{jobCount}</Typography>
          </Box>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
