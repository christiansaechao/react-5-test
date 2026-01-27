import "./App.css";
import { UserCard } from "./components/UserCard";

function App() {
  const components = [];

  for (let i = 0; i < 100; i++) {
    components.push(<UserCard />);
  }

  const fruits = ["apple", "orange", "banana"];

  return (
    <>
      <div>{[<div>apple</div>, <div>orange</div>, <div>banana</div>]}</div>
      <div>{components}</div>
    </>
  );
}

export default App;
