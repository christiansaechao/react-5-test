import React, { useEffect, useState } from "react";

// https://randomuser.me/api/?results=10
// https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=f30f8a7c50af2832bfbcab966c2b9f99&units=metric

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component mount. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

export const Api = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f30f8a7c50af2832bfbcab966c2b9f99&units=metric"
      ).then((res) => res.json());

      setData(response);
      console.log(response);
    } catch (err) {
      throw new Error("Error: " + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          Temp Min: {data.main.temp_min}, Temp: {data.main.temp}, Temp Max:{" "}
          {data.main.temp_max}, Humidity: {data.main.humidity}
        </div>
      )}
    </div>
  );
};
