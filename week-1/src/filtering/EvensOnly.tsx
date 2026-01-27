// nums.filter(() => conditional) => [num, num].map(() => <div></div>)
import ProblemCard from "../components/ProblemCard";
export const EvensOnly = () => {
  const nums = [1, 2, 3, 4, 5];

  return (
    <ProblemCard
      title="Filter 01 — Even numbers only"
      method="filter"
      question="Filter the array to only even numbers, then render them."
      dataPreview={nums}
    >
      <ul>
        {nums
          .filter((num) => num % 2 === 0)
          .map((res) => (
            <div key={res}>{res}</div>
          ))}
      </ul>
    </ProblemCard>
  );
};
