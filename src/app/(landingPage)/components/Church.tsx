import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Church = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Church Partnership"
      subtitle={
        <>
          Empowers church youth and members with market-relevant skills.
          <br />
          Aligns with church missions of equipping members for life and career.
          <br />
          Offers faith-based communities an opportunity for professional
          development.
          <br />
          Encourages value-driven tech talent rooted in strong moral principle
        </>
      }
      imgSrc="/church.svg"
    />
  );
};

export default Church;
