import React, { useEffect } from "react";

export const Example = () => {
  /**
     * Common use cases:
        - Fetching data from an API
        - Subscribing/unsubscribing to events (resize, keydown, websockets)
        - Timers/intervals
        - Reading/writing localStorage
   */

  // dependency array
  // empty dependency array, run function on first render

  const [name, setName] = React.useState("Maria");

  useEffect(() => {
    alert("Running");
  }, [name]);

  // 1. empty dependency array []
  // 2. some value in dependency array [name]
  // 3. no dependency runs on every render

  return (
    <div>
      {name}
      <button onClick={() => setName("Truong")}>Update Name</button>
    </div>
  );
};
