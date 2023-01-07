import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent hover:border-[#CA955F] ease-in-out duration-300 transition-all",
    mobileItem: "py-3 font-nav text-white text-xl",
  };
  return (
    <>
      <div className="bg-black/90 rounded-lg text-white mt-5 flex justify-between shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
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
        {nav ? (
          <div className="absolute bg-black/95 border-2 border-[#14261D] p-10 right-10 top-20 rounded-xl shadow-lg shadow-gray-900">
            <ul>
              <li className={styles.mobileItem}>
                <a href="#about" onClick={() => setNav(!nav)}>
                  About
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#reviews" onClick={() => setNav(!nav)}>
                  Reviews
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#menu" onClick={() => setNav(!nav)}>
                  Menu
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#contact" onClick={() => setNav(!nav)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : null}
        {/* mobile navbar end */}
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
    </>
  );
};

export default Navbar;
