/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component mount. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

//https://pokeapi.co/
import { useEffect, useState } from "react";

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export const PokeApi = () => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
      } catch (err: unknown) {
        console.error("Error getting data" + err);
      }
    };

    fetchPoke();
  }, []);

  if (loading) return <div>Loading . . .</div>;

  return (
    <>
      <div>
        {pokemon && pokemon.name}
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  );
};
