import React from "react";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/HomeStats";
import HomeJobCategory from "../components/molecules/HomeJobCategory";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeJobCategory />
      <HomeStats />
    </>
  );
}
