import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import type { UserInfoType } from "../types/user-types";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar/>
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
