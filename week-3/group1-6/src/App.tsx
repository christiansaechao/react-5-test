import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useUser } from "./store/user.store";

import "./App.css";

function App() {
  const setUser = useUser((state: any) => state.setUser);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();

        // data.results[0]

        const userObj = {
          gender: data.results[0].gender,
          name: data.results[0].name,
          phone: data.results[0].phone,
          image: data.results[0].picture.large,
        };
        
        setUser(userObj);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Home />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
