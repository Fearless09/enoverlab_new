import Advisors from "./components/Advisors";
import Hero from "./components/Hero";
import TrainingPrograms from "./components/TrainingPrograms";
import TrainWithUs from "./components/TrainWithUs";
import Waitlist from "./components/Waitlist";

const HirePage = () => {
  return (
    <>
      <Hero />
      <TrainWithUs />
      <TrainingPrograms />
      <Waitlist />
      <Advisors />
    </>
  );
};

export default HirePage;
