import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroImg from "../../assets/hero-img.jpg";
import BtnImg from "../../assets/btn-logo.png";
import Typography from "@mui/material/Typography";
import HomeButton from "../atoms/HomeButton";
import { FadeIn } from "../helperFunctions/FadeIn.js";

export default function HomeHero() {
  return (
    <>
      <Container
        sx={{
          mt: { xs: "2rem" },
        }}
      >
        <Box
          sx={{
            height: { md: 500, xs: "auto" },
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "start" },
              textAlign: { xs: "center", md: "start" },
              mt: { xs: "1em", md: "0" },
            }}
          >
            {" "}
            <FadeIn>
              <Typography
                variant="p"
                sx={{
                  fontSize: { md: "22px", xs: "19px" },
                  lineHeight: "26px",
                  letterSpacing: "-.002em",
                  fontWeight: 500,
                  fontFamily: "'Lexend Deca', sans-serif",
                  color: "#317773",
                }}
              >
                Forget the old rules. You can have the best people. Right now.
                Right here.
              </Typography>
            </FadeIn>
            <FadeIn>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Bebas Neue', cursive",
                  color: "#201e20",
                  fontSize: { md: "5rem", xs: "2.7rem" },
                  marginTop: 3,
                }}
              >
                The Best Jobs all in one Place
              </Typography>
            </FadeIn>
            <FadeIn>
              <HomeButton
                text="Find Work"
                style={{
                  padding: "0.8em 2em",
                  background: "#317773",
                  margin: "2em 0",
                }}
                src={BtnImg}
              />
            </FadeIn>
          </Box>
          <Box
            sx={{
              width: { xs: "100%" },
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "100%", width: "95%" }}
              src={HeroImg}
              alt="Hero-Img"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
