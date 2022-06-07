import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";

const styles = {
  list_item: {
    width: "90%",
    textAlign: "center",
    color: "#d1d1d1",
    margin: "20px 0",
  },
  i: {
    color: "#ffff",
    marginTop: "5px",
    marginRight: "15px",
  },
  footer_text: {
    color: "#6d6d6d",
    textAlign: "center",
  },
  span: {
    color: "#ffff",
  },
};

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: { md: 500, xs: "auto" },
          mt: 15,
          background: "#001E00",
          overflow: "hidden",
        }}
      >
        <Container sx={{ height: "80%" }}>
          <Grid
            container
            sx={{
              height: "100%",
              borderBottom: "1px solid #8a8a8a",
            }}
          >
            <Grid
              item
              sx={{
                display: "block",
                textAlign: "center",
                pt: 7,
              }}
              lg={4}
              md={6}
              xs={12}
            >
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  fontSize: { md: "30px", xs: "25px" },
                  fontWeight: "bolder",
                  color: "#e6e6e6",
                  mb: 1,
                  fontFamily: "Merriweather",
                  letterSpacing: "5px",
                }}
              >
                WORKAHOLIC
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#d1d1d1",
                }}
              >
                Track and Recover your
                <br /> stolen and missing vehicles
                <br /> from the comfort and convience <br />
                of your home.
              </Typography>
              <Box>
                <FacebookIcon sx={{ color: "#ffff", margin: 1 }} />
                <TwitterIcon sx={{ color: "#ffff", margin: 1 }} />
                <GitHubIcon sx={{ color: "#ffff", margin: 1 }} />
                <RedditIcon sx={{ color: "#ffff", margin: 1 }} />
                <TelegramIcon sx={{ color: "#ffff", margin: 1 }} />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "block",
                pt: 7,
              }}
              lg={4}
              md={6}
              xs={12}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "27px", xs: "25px" },
                  fontWeight: "bold",
                  color: "#ffff",
                  textAlign: "center",
                  fontFamily: "Merriweather",
                }}
              >
                Our Branches
              </Typography>
              <ul>
                <li style={styles.list_item}>
                  <i className="fas fa-map-marker-alt" style={styles.i}></i>
                  Nigeria
                </li>
                <li style={styles.list_item}>
                  <i className="fas fa-map-marker-alt" style={styles.i}></i>
                  Ghana
                </li>
                <li style={styles.list_item}>
                  <i className="fas fa-map-marker-alt" style={styles.i}></i>
                  Algeria
                </li>
                <li style={styles.list_item}>
                  <i className="fas fa-map-marker-alt" style={styles.i}></i>
                  Eygpt
                </li>
              </ul>
            </Grid>
            <Grid item sx={{ display: "block", pt: 7 }} lg={4} md={6} xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "27px", xs: "25px" },
                  fontWeight: "bold",
                  color: "#ffff",
                  textAlign: "center",
                  fontFamily: "Merriweather",
                }}
              >
                Contact Info
              </Typography>
              <ul>
                <li style={styles.list_item}>
                  <i className="fas fa-mobile" style={styles.i}></i>
                  +2347039240546
                </li>
                <li style={styles.list_item}>
                  <i className="fas fa-mobile" style={styles.i}></i>
                  +2348175425494
                </li>
                <li style={styles.list_item}>
                  <i className="fas fa-envelope-open-text" style={styles.i}></i>
                  workaholic@info.com
                </li>
              </ul>
            </Grid>
          </Grid>
          <Box
            sx={{
              pb: { xs: "10px", md: "0" },
            }}
          >
            <p style={styles.footer_text}>Copyright@2022</p>
            <p style={styles.footer_text}>
              Made by <span style={styles.span}>Okereke Chinweotito</span> &{" "}
              <span style={styles.span}>Pius Osuji</span>
            </p>
          </Box>
        </Container>
      </Box>
    </>
  );
}
