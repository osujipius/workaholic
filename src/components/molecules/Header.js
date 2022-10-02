import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HeaderButton from "../atoms/HeaderButton";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoginImg from "../../assets/login.svg";

const pages = ["Work", "About", "Blog"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { logOut, user } = useAuth();

  console.log(user);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "#fff",
          borderBottom: "2px solid #ebebeb",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Bebas Neue', cursive",
                fontWeight: 700,
                fontSize: "27px",
                letterSpacing: ".3rem",
                color: "#317773",
              }}
            >
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "#317773",
                }}
              >
                workaholic
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "#317773",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ fontFamily: "'Lexend Deca', sans-serif" }}
                    >
                      <Link
                        component={RouterLink}
                        style={{ textDecoration: "none", color: "#5e6d55" }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                mt: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "'Bebas Neue', cursive",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#317773",
              }}
            >
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                workaholic
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                mr: 12,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    display: "block",
                    fontSize: "16px",
                    fontFamily: "'Lexend Deca', sans-serif",
                    textTransform: "capitalize",

                    "&:hover": {
                      background: "none",
                    },
                  }}
                >
                  <Link
                    component={RouterLink}
                    sx={{
                      textDecoration: "none",
                      color: "#5e6d55",
                      p: 1,
                      borderRadius: 2,
                      transition: ".3s",
                      "&:hover": { background: "#4ec4be", color: "#fff" },
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {user !== null ? (
                <Button
                  onClick={handleSignOut}
                  sx={{
                    background: "#265a57",
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontSize: { xs: "small", xl: "medium" },
                    borderRadius: 2,
                    mt: { xs: 1 },
                    transition: ".5s",
                    color: "#fff",
                    p: 1,

                    "&:hover": {
                      color: "#fff",
                      background: "#317773",
                    },
                  }}
                >
                  logOut
                </Button>
              ) : (
                <Link
                  component={RouterLink}
                  to="/Signin"
                  sx={{
                    background: "#265a57",
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontSize: { xs: "small", xl: "medium" },
                    borderRadius: 2,
                    mt: { xs: 1 },
                    transition: ".5s",
                    color: "#fff",
                    p: 1,

                    "&:hover": {
                      color: "#fff",
                      background: "#317773",
                    },
                  }}
                >
                  {/* <img
                    style={{ height: 20, width: 20 }}
                    src={LoginImg}
                    alt=""
                  /> */}
                  Login
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
