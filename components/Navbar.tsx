import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent hover:border-lightBrown ease-in-out duration-300 transition-all",
    mobileItem: "py-2 ml-4 font-nav text-white text-md",
    container:
      "bg-black/90 rounded-lg text-white mt-5 shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]",
  };
  return (
    <>
      <div
        className={
          nav
            ? `h-[280px] md:h-[100px] duration-300 ease-in-out transition-all ${styles.container}`
            : `h-[100px] md:h-[100px] duration-300 ease-in-out transition-all ${styles.container}`
        }
      >
        <div className="flex justify-between">
          <div className="ml-4 p-3">
            <Logo size={"text-4xl"} sub={true} />
          </div>
          <button
            className="flex md:hidden mr-3 my-auto text-lightBrown" // white or lightbrown for icon color
            onClick={() => setNav(!nav)}
          >
            {nav ? <ImMenu4 size={35} /> : <ImMenu3 size={35} />}
          </button>
          <div className="hidden my-auto mr-5 md:flex">
            <span className={styles.item}>
              <a href="#about" className={styles.link}>
                About
              </a>
            </span>
            <span className={styles.item}>
              <a href="#reviews" className={styles.link}>
                Reviews
              </a>
            </span>
            <span className={styles.item}>
              <a href="#menu" className={styles.link}>
                Menu
              </a>
            </span>
            <span className={styles.item}>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </span>
          </div>
        </div>
        {/* mobile navbar start */}
        <div
          className={
            nav
              ? "opacity-100 ease-in-out duration-300 transition-all"
              : "opacity-0 ease-in-out duration-300 transition-all"
          }
        >
          <ul className="pb-4 visible md:hidden">
            <li className={styles.mobileItem}>
              <a href="#about" onClick={() => setNav(!nav)}>
                About
              </a>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <a href="#reviews" onClick={() => setNav(!nav)}>
                Reviews
              </a>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <a href="#menu" onClick={() => setNav(!nav)}>
                Menu
              </a>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <a href="#contact" onClick={() => setNav(!nav)}>
                Contact
              </a>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
          </ul>
        </div>
        {/* mobile navbar end */}
      </div>
    </>
  );
};

export default Navbar;
