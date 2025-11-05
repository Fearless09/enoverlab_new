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

      <h1 className="text-primary-400 px-5 text-center text-[45px] mt-18 font-medium">
        Our Sponsors
      </h1>
      <Companies />
    </>
  );
};

export default SponsorStudent;
