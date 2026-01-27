import React, { useEffect, useState } from "react";
/**
 * Goal: Run an effect when state changes.
    - Task: Build a counter. Whenever count changes, set document.title = "Count: X".
    - Constraints:
        - Title updates only when count changes (not on unrelated state).
        - Stretch: reset title to "React App" on unmount.
 */

export const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      {count}
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
