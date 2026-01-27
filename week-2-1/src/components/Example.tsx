// import React, { useState, useEffect } from "react";

function useState<T>(initialValue: T) {
  let state = initialValue; // state = 0

  function setState(newValue: T) {
    state = newValue;
  }

  return [state, setState] as const;
}

export const Example = () => {
  const [num, setNum] = useState(0); // const [num, setNum] = [state, setState]
  
  return <div>{num}</div>;
};
