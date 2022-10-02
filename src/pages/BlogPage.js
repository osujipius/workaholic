import { Container } from "@mui/material";
import React from "react";
import { FadeIn } from "../components/helperFunctions/FadeIn";
import BlogMolecule from "../components/molecules/BlogMolecule";

function BlogPage() {
  return (
    <Container>
      <FadeIn>
        <BlogMolecule />
      </FadeIn>
    </Container>
  );
}

export default BlogPage;
