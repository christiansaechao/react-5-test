import { useState } from "react";

/**
 * Create an App component that toggles between "light" and "dark" theme and passes theme as a prop to a child component.
 * Requirements
 *      - State: theme
 *      - Button toggles theme
 *      - Child component <ProfileCard theme={theme} />
 *      - ProfileCard changes className based on theme
 * light = white
 * dark = black
 */

export const ToggleTheme = () => {
  const [lightToggle, setLightToggle] = useState(false);

  return (
    <div className={`p-4 ${lightToggle ? "bg-white text-black" : "bg-black text-white"}`}>
      <p>{lightToggle ? "sun" : "moon"}</p>
      <div onClick={() => setLightToggle(!lightToggle)}>ToggleTheme</div>
    </div>
  );
};
