import ProblemCard from "../components/ProblemCard";

export function FruitList() {
  const fruits = ["Watermelon", "Banana", "Orange"];

  return (
    <ProblemCard
      title="Map 01 — Render a list of strings"
      method="map"
      question="Render each fruit inside an <li>."
      dataPreview={fruits}
    >
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </ProblemCard>
  );
}
