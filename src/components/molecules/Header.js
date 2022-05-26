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
import HomeButton from "../atoms/HomeButton";
import SubHeader from "../atoms/SubHeader";

const pages = ["Find Work", "Why Workaholic", "Blog", "Trending Skills"];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Bebas Neue', cursive",
                fontWeight: 700,
                fontSize: "27px",
                letterSpacing: ".3rem",
                color: "#14a800",
                textDecoration: "none",
              }}
            >
              workaholic
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "#14a800",
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
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                mt: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "'Bebas Neue', cursive",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#14a800",
                textDecoration: "none",
              }}
            >
              workaholic
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
                    color: "#5e6d55",
                    fontSize: "16px",
                    fontFamily: "'Lexend Deca', sans-serif",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <HomeButton text="Find Work" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SubHeader />
    </>
  );
};
export default ResponsiveAppBar;
