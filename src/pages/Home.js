import React from "react";
import HomeBanner from "../components/molecules/HomeBanner";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/HomeStats";
import HomeJobCategory from "../components/molecules/HomeJobCategory";
import HomeReview from "../components/molecules/review.js";
import TrendingTab from "../components/molecules/TrendingTab.js";
import TrendingSkills from "../components/molecules/TrendingSkills.js";
import SubHeader from "../components/atoms/SubHeader.js";

export default function Home() {
  return (
    <>
      <SubHeader />
      <HomeHero />
      <HomeJobCategory />
      <HomeStats />
      <HomeBanner />
      <HomeReview />
      <TrendingSkills />
      <TrendingTab />
    </>
  );
}
