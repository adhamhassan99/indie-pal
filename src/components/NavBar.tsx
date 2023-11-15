import React from "react";
import useSessionStore from "../stores/useSessionStore";
import { Avatar } from ".";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { session } = useSessionStore();
  return (
    <div className="bg-white h-20 px-4 flex justify-between items-center">
      <div>
        <span className="font-bold text-xl">Indie Pal</span>
      </div>
      <div className="">
        {session ? (
          <Avatar />
        ) : (
          <div className="flex gap-5">
            <Link to={"signIn"}>Sign In</Link>
            <Link to={"signUp"}>Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
