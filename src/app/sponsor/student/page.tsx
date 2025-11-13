import Companies from "@/components/shared/Companies";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Why from "./components/Why";

const SponsorStudent = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Why />

      <h1 className="text-primary-400 text-max-45  mt-18 px-5 text-center font-medium">
        Our Sponsors
      </h1>
      <Companies />
    </>
  );
};

export default SponsorStudent;
