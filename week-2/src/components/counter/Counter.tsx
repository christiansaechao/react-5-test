import React, { useState } from "react";
import "./styles.css";

/**
 * Build a Counter component that increments by a step value passed in as a prop.
 * - Create a state variable
 * - Display the current count
 * - Create 3 buttons
 *      - button 1 increases count by 1
 *      - button 2 decreases count by 1
 *      - button 3 resets count to 0
 */

export const Counter = () => {
  const [currentCount, setCurrentCount] = useState("");

  function handleIncreaseCount() {
    setCurrentCount((Number(currentCount) + 1).toString());
  }

  return (
    <div>
      <button className="button" onClick={handleIncreaseCount}>Increase Count</button>
      <button
        onClick={() =>
          setCurrentCount(JSON.stringify(Number(currentCount) - 1))
        }
      >
        Decrease
      </button>
      Counter: {currentCount}
      <button onClick={() => setCurrentCount(JSON.stringify(Number(0)))}>
        Reset
      </button>
    </div>
  );
};
