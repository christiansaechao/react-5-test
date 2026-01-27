import React from "react";
import ProblemCard from "../components/ProblemCard";

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];
  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        {/* TODO:
            - total via reduce
            - max via reduce
            - average = total / nums.length
        */}
        {nums.reduce((acc: number, num: number) => (acc += num), 0)}
        {/* Total [4, 9, 2, 10, 7] */}
        {nums.reduce((acc: number, num: number) => (num > acc ? num : acc), 0)}
        {/* Max  [4, 9, 2, 10, 7] */}

        {/* total / number of elements */}

        {/* acc: 0 , num: 4 -> acc: .2, num: 9 */}
        {nums.reduce((acc: number, num: number) => {
          return (acc += num);
        }, 0) / nums.length}
        {/* Average */}
      </div>
    </ProblemCard>
  );
};
