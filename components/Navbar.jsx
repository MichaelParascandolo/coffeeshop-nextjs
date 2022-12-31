import React from "react";
import { GrMenu } from "react-icons/gr";
import Logo from "./Logo";

const Navbar = () => {
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent hover:border-[#14261D]",
  };
  return (
    <>
      {/* <div className="h-screen bg-[url('/assets/cover.jpg')]"> */}
      <div className="bg-black/90 rounded-lg text-white mt-5 flex justify-between shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <Logo />
        {/* <GrMenu /> */}
        <div className="hidden mt-5 mr-5 md:flex">
          <span className={styles.item}>
            <a href="#" className={styles.link}>
              About
            </a>
          </span>
          <span className={styles.item}>
            <a href="#" className={styles.link}>
              Menu
            </a>
          </span>
          <span className={styles.item}>
            <a href="#" className={styles.link}>
              Reviews
            </a>
          </span>
          <span className={styles.item}>
            <a href="#" className={styles.link}>
              Contact
            </a>
          </span>
        </div>
      </div>
      {/* <h3 className="text-gray-00 flex justify-center text-2xl mt-2 tracking-widest font-nav">
          Coffee | Tea | Smoothies
        </h3> */}
    </>
  );
};

export default Navbar;
