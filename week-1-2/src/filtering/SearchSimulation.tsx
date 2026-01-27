import React from "react";
import ProblemCard from "../components/ProblemCard";

export const SearchSimulation = ({ searchTerm }: { searchTerm: string }) => {
  const items = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node",
    "CSS",
    "Node Modules",
    "Node Library",
  ];
  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm }}
    >
      <ul>
        {items
          .filter((item) => item.includes(searchTerm))
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </ProblemCard>
  );
};
