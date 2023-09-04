import AboutHero from "../components/molecules/AboutHero";
import { FadeIn } from "../components/molecules/helperFunctions/FadeIn";
import NewsLetter from "../components/molecules/Newsletter";
import Stats from "../components/molecules/Stats";
import TrustedBy from "../components/molecules/TrustedBy";

export default function About() {
  return (
    <>
      <FadeIn>
        <AboutHero />
        <TrustedBy />
        <Stats />
        <NewsLetter />
      </FadeIn>
    </>
  );
}
