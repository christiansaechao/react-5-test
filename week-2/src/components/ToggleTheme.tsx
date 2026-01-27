import React, { useState } from "react";

/**
 * Create an App component that toggles between "light" and "dark" theme and passes theme as a prop to a child component.
 * Requirements
 *      - State: theme
 *      - Button toggles theme
 *      - Child component <ProfileCard theme={theme} />
 *      - ProfileCard changes className based on theme
 */

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  function onClick() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div
      className={`p-4 rounded ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <p>{theme}</p>
      <button onClick={onClick}>Change Theme</button>
    </div>
  );
};
