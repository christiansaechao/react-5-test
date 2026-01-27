ch/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component mount. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

//https://pokeapi.co/
import { useEffect, useState } from "react"

interface PokemonData {
    id: number;
    name: string;
    Image: string;
}

export const ApiPo = () => {
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonData[]>([]);

    function fetchData () {
          const fetchPoke = async () => {
            setLoading(true);
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
          }
    }

    useEffect(() => {
        fetchData();
    },[]);


    if(loading) return <div>Loading . . .</div>
    
    return (
    <>
    <div>
        <ul>
            return {pokemon.map(poke => 
                (<li key={poke.id}>
                    <img src="{poke.iamge}" alt="{poke.name}" />
                    <span>{poke.name}</span>
                </li>))}  
        </ul>

    </div>
    </>
    )
}


