import { Container, Typography } from "@mui/material";
import CategoryCard from "../atoms/CategoryCard";
import { FadeIn } from "../helperFunctions/FadeIn.js";

function HomeJobCategory() {
  return (
    <>
      <Container>
        <FadeIn>
          <Typography
            variant="h3"
            sx={{
              mt: "2em",
              fontFamily: "Merriweather",
              fontWeight: "bold",
              fontSize: { md: "3rem", xs: "1.6rem" },
            }}
          >
            Browse work by category
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: "2em" }}>
            Looking for work ? {""}
            <Typography
              variant="span"
              color="#317773"
              sx={{
                "&:hover": {
                  color: "darkgreen",
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              }}
            >
              Browse Jobs
            </Typography>
          </Typography>
        </FadeIn>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CategoryCard
          categoryName={"Development & IT"}
          categoryRating={` 4.85/5`}
          jobCount={`1,853 jobs`}
          style={{ background: "#FFBE7BFF" }}
        />

        <CategoryCard
          categoryName={"Design and Creative"}
          categoryRating={` 4.91/5`}
          jobCount={`995 jobs`}
          style={{ background: "#A7BEAE" }}
        />
        <CategoryCard
          categoryName={"Sales & Marketing"}
          categoryRating={` 4.77/5`}
          jobCount={`392 jobs`}
          style={{ background: "#C5FAD5" }}
        />
        <CategoryCard
          categoryName={"Writing & Translation"}
          categoryRating={` 4.11/5`}
          jobCount={`505 jobs`}
          style={{ background: "#DDC3A5" }}
        />
        <CategoryCard
          categoryName={"Admin & Customer Support"}
          categoryRating={` 4.32/5`}
          jobCount={`508 jobs`}
          style={{ background: "#E0A96D" }}
        />
        <CategoryCard
          categoryName={"Finance & Accounting"}
          categoryRating={` 4.91/5`}
          jobCount={`214 jobs`}
          style={{ background: "#317773" }}
        />
        <CategoryCard
          categoryName={"Engineering & Architecture"}
          categoryRating={` 4.56/5`}
          jobCount={`133 jobs`}
          style={{ background: "#00539CFF" }}
        />
        <CategoryCard
          categoryName={"Legal"}
          categoryRating={` 4.79/5`}
          jobCount={`650 jobs`}
          style={{ background: "#FC766AFF" }}
        />
        <CategoryCard
          categoryName={"Music & Literature"}
          categoryRating={` 4.39/5`}
          jobCount={`1,232 jobs`}
          style={{ background: "#EEA47FFF" }}
        />
      </Container>
    </>
  );
}

export default HomeJobCategory;
