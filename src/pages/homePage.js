import React from "react";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/WhyUs";
import HomeJobCategory from "../components/molecules/HomeJobCategory";
import HomeReview from "../components/molecules/Reviews";
import TrendingTab from "../components/molecules/TrendingTab";
import Faq from "../components/molecules/Faq";
import Pricing from "../components/molecules/Pricing";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeJobCategory />
      <TrendingTab />
      <Pricing />
      <HomeReview />
      <Faq />
    </>
  );
}