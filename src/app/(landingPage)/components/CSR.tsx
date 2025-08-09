import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const CSR = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Corporate Social Responsibility (CSR) Partnership"
      subtitle={
        <ul className="flex flex-col gap-3">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      }
      imgSrc="/csr.svg"
    />
  );
};

export default CSR;

const lists = [
  "Enhances brand image and public trust by contributing to youth development and digital literacy.",
  "Fulfills CSR objectives through skill-building and employment empowerment.",
  "Opportunities to co-host impactful tech events and social impact projects.",
  "Tax incentives or CSR-related recognitions from industry bodies.",
];
