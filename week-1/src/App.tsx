import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const { success, data } = await fetch("http://localhost:5000/foods", {
        method: "post",
        body: { name: "pizza" },
      }).then((res) => res.json());
      setFoods(data);
    })();
  }, []);

  // https://randomuser.api/user?result=10

  return (
    <>
      <div>
        {foods?.map((food: any) => (
          <div>
            {food.name} {food.price}
          </div>
        ))}
      </div>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={deleteFood}>Delete Food</button>
    </>
  );
}

export default App;
