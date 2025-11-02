import Companies from "@/components/shared/Companies";
import CTA from "./components/Cta";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <Sponsors />
      <Partners />
      <CTA />
      <Companies />
    </>
  );
}
