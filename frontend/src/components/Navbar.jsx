import { GlobeIcon } from "lucide-react";
import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

const Navbar = () => {
  const logOutUser = () => {
    localStorage.removeItem("user");
  };
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <GlobeIcon className="h-6 w-6 text-green-600" />
        <span className="ml-2 text-2xl font-bold text-gray-900">
          GreenPATH learning
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to={"/quiz"}
        >
          Quiz
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to={"https://nemesisas14.itch.io/sdg-game-1"}
        >
          Play
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to={"/achivements"}
        >
          Achivements
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to={"/sign"}
          onClick={logOutUser}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
