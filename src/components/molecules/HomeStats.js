import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StatItem from "../atoms/StatItem";
import StarsIcon from "@mui/icons-material/Stars";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StatsImg from "./../../assets/statsimg.png";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { FadeIn } from "../molecules/helperFunctions/FadeIn.js";

export default function HomeStats() {
  return (
    <>
      <FadeIn>
        <Container
          sx={{
            height: "auto",
            mt: 15,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              background: "#f1f2f4",
              flex: 1,
              borderRadius: "10px",
              borderBottomRightRadius: { md: "10px", xs: 0 },
              borderBottomLeftRadius: { md: "10px", xs: 0 },
              p: 2,
            }}
          >
            <Typography
              variant="h3"
              className="!font-mono !font-semibold !text-4xl !tracking-tight"
              sx={{
                fontWeight: 500,
              }}
            >
              Why talents turn to Workaholic
            </Typography>

            <StatItem
              title="Job Opportunities"
              icon={<StarsIcon />}
              info="We provide an unlimited pool of jobs for talented individuals in every field possible"
            />
            <StatItem
              title="Totally Free"
              icon={<MonetizationOnIcon />}
              info="Application process and interview scheduling are all cost free"
            />
            <StatItem
              title="Safe & Secure"
              icon={<CheckCircleIcon />}
              info="Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it"
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "10px",
              borderTopRightRadius: { md: "10px", xs: 0 },
              borderTopLeftRadius: { md: "10px", xs: 0 },
              background: "#317773",
              display: "flex",
              p: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: "43%" },
              }}
            >
              <img
                style={{ height: "90%", width: "95%" }}
                src={StatsImg}
                alt="stat-img"
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                className="!font-mono"
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: { md: "2rem", xs: "1.5rem" },
                  color: "#fff",
                  mt: 10,
                }}
              >
                We’re the world’s work marketplace
              </Typography>
              <StatItem
                style={{ color: "#fff" }}
                title="4.9/5 Employer Rate"
                icon={
                  <StarIcon
                    style={{
                      fontSize: "35px",
                    }}
                  />
                }
              />

              <StatItem
                style={{ color: "#fff" }}
                title="G'2s Award Winner"
                icon={
                  <EmojiEventsIcon
                    style={{
                      fontSize: "35px",
                    }}
                  />
                }
              />
            </Box>
          </Box>
        </Container>
      </FadeIn>
    </>
  );
}
