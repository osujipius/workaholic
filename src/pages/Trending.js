import React from "react";
import TrendingTab from "../components/molecules/TrendingTab.js";
import TrendingImg from "../components/molecules/TrendingImg.js";
import TrendingSkills from "../components/molecules/TrendingSkills.js";

export default function Trending() {
  return (
    <>
      <TrendingTab />
      <TrendingSkills />
      <TrendingImg />
    </>
  );
}
