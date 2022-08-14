import React from "react";
import About from "./About";
import Logo from "./Logo";

const Main = () => {
  return (
    <>
      {/* <div className="h-screen bg-[url('/assets/cover.jpg')]"> */}
      <div className="pt-3">
        <div className="bg-black/90 rounded-lg text-white flex justify-between shadow-lg shadow-gray-900 border-solid border-2 border-gray-300">
          <Logo size={"3xl"} />
          <ul className="pt-4 pr-3 hidden md:flex">
            <li className="px-4 font-nav">About</li>
            <li className="px-4 font-nav">Menu</li>
            <li className="px-4 font-nav">Reviews</li>
            <li className="px-4 font-nav">Contact</li>
          </ul>
        </div>
        <h3 className="text-gray-00 flex justify-center text-2xl mt-2 tracking-widest font-nav">
          Coffee | Tea | Shakes
        </h3>
      </div>
    </>
  );
};

export default Main;
