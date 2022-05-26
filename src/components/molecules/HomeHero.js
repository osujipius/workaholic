import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroImg from "./../../assets/heroimg1.jpg";
import Typography from "@mui/material/Typography";
import HomeButton from "../atoms/HomeButton";

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
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Bebas Neue', cursive",
                color: "#14a800",
                fontSize: { md: "5rem", xs: "2.5rem" },
              }}
            >
              The Best Jobs all in one Place
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: { md: "22px", xs: "19px" },
                lineHeight: "26px",
                letterSpacing: "-.002em",
                fontWeight: 500,
                fontFamily: "'Lexend Deca', sans-serif",
                color: "#5e6d55",
              }}
            >
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </Typography>
            <HomeButton
              text="Find Work"
              style={{
                padding: "0.8em 2em",
                background: "#14a800",
                margin: "2em 0",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%" },
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img style={{ height: "100%", width: "95%" }} src={HeroImg} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
