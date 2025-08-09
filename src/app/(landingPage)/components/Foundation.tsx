import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Foundation = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Foundation Partnership (NGO)"
      subtitle={
        <ul className="flex flex-col gap-3">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      }
      imgSrc="/foundation.svg"
    />
  );
};

export default Foundation;

const lists = [
  "Amplifies social impact goals by offering practical, scalable skills to beneficiaries.",
  "Promotes sustainable development goals such as education, innovation, and employment.",
  "Shared platforms for awareness campaigns, events, and workshops.",
];
