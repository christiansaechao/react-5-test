import React from "react";
import ProblemCard from "../components/ProblemCard";

export const CountItems = () => {
  const items = ["a", "b", "c", "d", 12];
  return (
    <ProblemCard
      title="Reduce 02 — Count items"
      method="reduce"
      question="Use reduce() to count how many items are in the array (without using .length)."
      dataPreview={items}
    >
      {items.reduce((acc: number) => (acc += 1), 0)}
    </ProblemCard>
  );
};
