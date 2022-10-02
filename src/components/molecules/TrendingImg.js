import React from "react";
import { Container, Box } from "@mui/material";
import Img1 from "../../assets/trendingimg1.svg";
import Img2 from "../../assets/trendingimg2.svg";
import Img3 from "../../assets/trendingimg3.svg";
import { FadeIn } from "../helperFunctions/FadeIn.js";

export default function trendingImg() {
  return (
    <>
      <Container>
        <FadeIn>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "center",
            }}
          >
            <img style={{ height: "20em" }} src={Img1} alt="img1" />
            <img style={{ height: "20em" }} src={Img2} alt="img2" />
            <img style={{ height: "20em" }} src={Img3} alt="img3" />
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
