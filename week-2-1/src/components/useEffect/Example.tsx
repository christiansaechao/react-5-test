import React, { useEffect } from "react";

export const Example = () => {
  /**
   * Common use cases:
   * - Fetching data from an API
   * - Subscribing/unsubscribing to events (resize, keydown, websockets)
   * - Timers/intervals
   * - Reading/writing localStorage
   */

  /**
   * 1. Empty Dependency Array, []
   */

  // fetchweather.api

  const [cities, setCities] = React.useState([{ chicago }, { new york }]);
  const [search, setSearch] = React.useState("New York");

  async function fetchWeather() {
    try {
      // fetch request
      const { data } = await fetch(`http://www.weatherapi/${city}`);
      setCities([...cities, data]);
    } catch (err: unknown) {
      throw new Error("This is an error: " + err);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [search]);

  return (
    <div>
      <div>
        <input value={search} onChange={() => setSearch("New York")} />
        {cities.map((city) => <City city={city}/>)}
      </div>
    </div>
  );
};
