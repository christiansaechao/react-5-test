import "./App.css";
import { Api } from "./components/useEffect/Api";
import { PokeApi } from "./components/useEffect/PokeApi";
import { OwenApi } from "./components/useEffect/OwenApi";

function App() {
  return (
    <>
      <OwenApi />
      {/* <PokeApi /> */}
    </>
  );
}

export default App;
