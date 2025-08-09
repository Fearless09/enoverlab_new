import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Interns = () => {
  return (
    <SectionCard
      variant="primary"
      title="Partnership for Internship Placement"
      subtitle={
        <>
          Access to a pool of trained and job-ready product management, design,
          and development talent.
          <br />
          Reduces recruitment costs and training time.
          <br />
          Fresh ideas and innovative approaches from interns.
          <br />
          Strengthens your talent pipeline for future hires.
        </>
      }
      imgSrc="/interns.svg"
    />
  );
};

export default Interns;
