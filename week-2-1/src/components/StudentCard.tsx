import React, { useState } from "react";

/**
 * Goal: Add some state, so that when we click the button
 * user is set to active
 */

export const StudentCard = ({ name }: { name: string }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <p>
        {name} {toggle ? <p>Active</p> : <p>Offline</p>}
      </p>
      <button onClick={() => setToggle(!toggle)}>Toggle User</button>
    </div>
  );
};
