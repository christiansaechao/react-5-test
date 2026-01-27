import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import { useUser } from "./store/user-store";

// https://randomuser.me/api/

function App() {
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    async function getUserData() {
      try {
        const res = await fetch("https://randomuser.me/api/").then((data) =>
          data.json()
        );
        setUser(res.results[0]);
      } catch (err) {
        console.log("Error: " + err);
      }
    }

    getUserData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* index for default page */}
        {/* Home is a default page */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


