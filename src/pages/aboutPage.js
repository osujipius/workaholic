import AboutHero from "../components/molecules/AboutHero";
import { FadeIn } from "../components/molecules/helperFunctions/FadeIn";
import NewsLetter from "../components/molecules/Newsletter";
import Stats from "../components/molecules/Stats";
import TrustedBy from "../components/molecules/TrustedBy";
import { useAuth } from "../contexts/AuthContext";

export default function About() {
  const { user } = useAuth();
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
