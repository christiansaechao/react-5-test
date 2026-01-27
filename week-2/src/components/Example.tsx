// import React, { useState } from "react";

function useState<T>(initialValue: T) {
  let state = initialValue;

  function setState(newValue: T) {
    state = newValue;
  }

  return [state, setState] as const;
}


export const Example = () => {
  const [num, setNum] = useState(0); // 0 -> 1

  return <div>{num}</div>;
};
