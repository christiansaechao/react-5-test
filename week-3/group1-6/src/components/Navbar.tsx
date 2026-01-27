import React from "react";
import { NavLink } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              BrandLogo
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({
                isActive,
              }) => `hover:text-indigo-600 font-medium transition-colors
                ${isActive ? "text-red-500" : "text-slate-600"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({
                isActive,
              }) => `hover:text-indigo-600 font-medium transition-colors
                ${isActive ? "text-red-500" : "text-slate-600"}`}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({
                isActive,
              }) => `hover:text-indigo-600 font-medium transition-colors
                ${isActive ? "text-red-500" : "text-slate-600"}`}
            >
              About
            </NavLink>
          </div>

          <div className="md:hidden">
            <button className="text-slate-600 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
