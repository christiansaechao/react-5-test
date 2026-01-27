import React, { useState } from "react";

/**
 * Build a NameForm component that tracks input using state and displays a greeting.
 * Requirements
 *      - State: name
 *      - Input updates name
 *      - Show: Hello, {name}
 *      - Parent passes defaultName="Christian"
 */

export const Form = ({ defaultName }: { defaultName: string }) => {
  const [name, setName] = useState(defaultName);

  const updateName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Hello, {name}</p>

      <form>
        <label htmlFor="Update name">Update name</label>
        <input
          type="text"
          name="Update name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
    </div>
  );
};
