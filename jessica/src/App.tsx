import { useState } from "react";
import { Card } from "./components/pokemon/card";
import { useDebounce, useGetData } from "./hooks/useGetData";

import "./App.css";

// https://pokeapi.co/api/v2/pokemon?results=9

// fetching data
// subscriptions
// websockets => chat rooms => connection line
// 1. empty array []
// 2. [with values]
// 3. you don't have a dependency array;

function App() {
  const [favorites, setFavorites] = useState();
  const [value, setValue] = useState("Charmander");
  const [pokemons, loading] = useGetData(
    `https://pokeapi.co/api/v2/pokemon?${value}`,
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <input value={value} onChange={(e) => useDebounce(e.target.value)} />
      {pokemons.map((pokemon) => (
        <Card name={pokemon} />
      ))}

      {/* Favorites */}
    </>
  );
}

export default App;
