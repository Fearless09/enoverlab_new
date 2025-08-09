import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Church = () => {
  return (
    <SectionCard
      variant="secondary"
      title="Church Partnership"
      subtitle={
        <ul className="flex flex-col gap-3">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      }
      imgSrc="/church.svg"
    />
  );
};

export default Church;

const lists = [
  "Empowers church youth and members with market-relevant skills.",
  "Aligns with church missions of equipping members for life and career.",
  "Offers faith-based communities an opportunity for professional development.",
  "Encourages value-driven tech talent rooted in strong moral principle",
];
