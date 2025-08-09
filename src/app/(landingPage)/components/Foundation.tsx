import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Foundation = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Foundation Partnership (NGO)"
      subtitle={
        <>
          Amplifies social impact goals by offering practical, scalable skills
          to beneficiaries.
          <br />
          Attracts funding and donor interest through measurable outcomes like
          employment.
          <br />
          Promotes sustainable development goals such as education, innovation,
          and employment.
          <br />
          Shared platforms for awareness campaigns, events, and workshops.
        </>
      }
      imgSrc="/foundation.svg"
    />
  );
};

export default Foundation;
