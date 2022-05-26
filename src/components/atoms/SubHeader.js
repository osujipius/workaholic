import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const subPages = [
  "Development & IT",
  "Design & Creative",
  "Sales & Marketing",
  "Writing & Translation",
  "Admin & Customer Support",
];

export default function SubHeader() {
  return (
    <>
      <Container
        sx={{
          height: 70,
          display: { lg: "flex", md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {subPages.map((subPage) => (
          <Link
            href="#"
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "'Lexend Deca', sans-serif",
                color: "#5e6d55",
                transition: ".3s",

                "&:hover": {
                  color: "#14a800",
                },
              }}
            >
              {subPage}
            </Typography>
          </Link>
        ))}
      </Container>
    </>
  );
}
