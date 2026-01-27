// /**
//  * Goal: Fetch when dependency changes.
//     - Task: fetch from a public API on component mount. Store the data in state, map over data and display users, style component
//     - Constraints:
//         - Show loading state.
//         - Show error state.
//  */

// // https://api.magicthegathering.io/v1/cards

/**
 * 1. Some state to store your data
 * 2. A useEffect to fetch data at the start
 * 3. Display data using map
 */

import { useState, useEffect } from "react";

const URL = "https://api.magicthegathering.io/v1/cards";

type Card = {
  id: string;
  name: string;
  type: string;
  text: string;
};

export const OwenApi = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setCards(data.cards);
      } catch (err) {
        console.error("Failed to fetch cards" + err);
        setError("Error fetching cards: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
                               
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Cards</h1>
      <div>
        {cards.map((card) => (
          <div key={card["id"]}>
            <h2>Card Name: {card.name}</h2>
            <h2>Card Type: {card.type}</h2>
            <h2>Card Description: {card.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
