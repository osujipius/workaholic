import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BannerImg from "./../../assets/bannerimg.jpg";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import HomeButton from "../atoms/HomeButton.js";
import { FadeIn } from "../molecules/helperFunctions/FadeIn.js";

export default function HomeBanner() {
  return (
    <>
      <FadeIn>
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
              background: "#E0A96D",
              color: "#fff",
              p: 3,
              pb: 5,
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
                mt: { md: 25, xs: 15 },
              }}
            />
            <Grid container spacing={2} sx={{ height: "auto", mt: 2 }}>
              <Grid item lg={4} md={6}>
                <Typography
                  variant="p"
                  sx={{ fontFamily: "'Lexend Deca', sans-serif" }}
                >
                  Find opportunities for every stage of your career
                </Typography>
              </Grid>
              <Grid item lg={4} md={6}>
                <Typography
                  variant="p"
                  sx={{ fontFamily: "'Lexend Deca', sans-serif" }}
                >
                  Control when, where, and how you work
                </Typography>
              </Grid>
              <Grid item lg={4} md={6}>
                <Typography
                  variant="p"
                  sx={{ fontFamily: "'Lexend Deca', sans-serif" }}
                >
                  Explore different ways to earn
                </Typography>
              </Grid>
            </Grid>
            <HomeButton
              text="Find Opportunities"
              style={{
                background: "#fff",
                color: "#2a51be",
                marginTop: "20px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={BannerImg}
              alt="banner-img"
            />
          </Box>
        </Container>
      </FadeIn>
    </>
  );
}
