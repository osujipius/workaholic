import AboutHero from "../components/molecules/AboutHero";
import { FadeIn } from "../components/molecules/helperFunctions/FadeIn";
import NewsLetter from "../components/molecules/Newsletter";
import Stats from "../components/molecules/Stats";
import TrustedBy from "../components/molecules/TrustedBy";
import { useUser } from "../contexts/UserContext";

export default function About() {
  const { user } = useUser();
  return (
    <>
      <FadeIn>
        <AboutHero user={user} />
        <TrustedBy />
        <Stats />
        <NewsLetter />
      </FadeIn>
    </>
  );
}
