import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent hover:border-lightBrown ease-in-out duration-300 transition-all",
    mobileItem: "py-2 ml-4 font-nav text-white text-md",
  };
  return (
    <>
      <div className="bg-black/90 rounded-lg text-white mt-5 shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <div className="flex justify-between">
          <div className="ml-4 p-3">
            <Logo size={"text-4xl"} sub={true} />
          </div>
          {/* mobile navbar start */}
          <button
            className="flex md:hidden mr-3 my-auto text-white"
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
        {nav ? (
          <div>
            <ul className="pb-4">
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
        ) : null}
        {/* mobile navbar end */}
      </div>
    </>
  );
};

export default Navbar;
