import ProblemCard from "../components/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized."
      dataPreview={animals}
    >
      <ul>
        {animals.map((animal) => (
          <div>{animal.charAt(0).toUpperCase() + animal.slice(1)}</div>
        ))}
      </ul>
    </ProblemCard>
  );
};
