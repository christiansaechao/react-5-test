import React, { useState } from "react";

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
  const [number, setNumber] = useState(0);

  function decrease() {
    setNumber(number - 1);
  }

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
};
