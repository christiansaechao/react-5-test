import React, { useState, useEffect } from "react";

/**
 * Goal: Run an effect when state changes.
    - Task: Build a counter. Whenever count changes, set document.title = "Count: X".
    - Constraints:
        - Title updates only when count changes (not on unrelated state).
        - Stretch: reset title to "React App" on unmount.
 */

export const DocumentTitle = () => {
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    document.title = `Count: ${countState}`;
  }, [countState]);

  return (
    <div>
      <button onClick={() => setCountState(countState + 1)}>
        Update Document Count
      </button>
      DocumentTitle
    </div>
  );
};
