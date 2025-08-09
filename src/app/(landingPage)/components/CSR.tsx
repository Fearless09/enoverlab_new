import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const CSR = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Corporate Social Responsibility (CSR) Partnership"
      subtitle={
        <>
          Enhances brand image and public trust by contributing to youth
          development and digital literacy.
          <br />
          Fulfills CSR objectives through skill-building and employment
          empowerment.
          <br />
          Opportunities to co-host impactful tech events and social impact
          projects.
          <br />
          Tax incentives or CSR-related recognitions from industry bodies.
        </>
      }
      imgSrc="/csr.svg"
    />
  );
};

export default CSR;
