import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BannerImg from "./../../assets/bannerimg.jpg";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function HomeBanner() {
  return (
    <>
      <Container
        sx={{
          height: { xs: "auto", md: 550 },
          mt: 15,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: "#2a51be",
            color: "#fff",
            p: 3,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: { xs: "10px", md: 0 },
            borderBottomLeftRadius: { md: "10px", xs: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontWeight: 500,
              fontSize: { md: "2.8rem", xs: "1.8rem" },
            }}
          >
            Find great work
          </Typography>
          <Box
            sx={{
              width: { md: "80%", xs: "90%" },
              mt: 4,
            }}
          >
            <Typography
              variant="p"
              sx={{ fontFamily: "'Lexend Deca', sans-serif" }}
            >
              Find jobs that best suit you and your skillset and take your
              career or business to new heights.
            </Typography>
          </Box>
          <Divider
            sx={{
              color: "#fff",
              background: "#fff",
              mt: 10,
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            borderTopRightRadius: { md: "10px", xs: 0 },
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={BannerImg}
            alt="banner-img"
          />
        </Box>
      </Container>
    </>
  );
}
