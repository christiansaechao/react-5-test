import "../App.css";
import { SearchIcon, ArrowRight, User, Navigation } from "lucide-react";
import { Button } from "./button";

export function Header() {
  return (
    <div>
      <h3 className="text-xl">DOORDASH</h3>
      <h2 className="text-2xl font-bold">$0 Delivery Fee On First Order</h2>
      <h5 className="font-semibold">Other fees apply</h5>
      <div className="bg-white rounded-full text-black flex justify-center items-center gap-3 p-4">
        <SearchIcon />
        <input type="text" placeholder="Enter delivery address" />
        <button className="text-white bg-orange-600 p-3 rounded-full">
          <ArrowRight />
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 py-4">
        <Button text="Login" Icon={User} />
        <Button text="Use current Location" Icon={Navigation} />
      </div>
    </div>
  );
}
