import React, { useState } from "react";

/**
 * Goal: Add some state, so that when we click the button
 * user is set to active
 */

interface StudentCardType {
  name: string
}

export const StudentCard = ({ name }: StudentCardType) => {
  //    current state value, setter function
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <p>{name} user is active: {isActive ? "Active" : "Offline"}</p>
      <button onClick={handleOnClick}>Toggle User</button>
    </div>
  );
};
