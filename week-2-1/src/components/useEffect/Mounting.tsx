import React, { useEffect } from "react";

/**
 * Goal: Run an effect once on mount.
   Task: When the component first renders, alert("Mounted!").
   Constraints:
    - Must not log again on re-renders.
    - Stretch: also log "Unmounted!" on cleanup.
 */

export const Mounting = () => {
  useEffect(() => {
    alert("Mounted!");
  }, []);

  return <div>something else</div>;
};
