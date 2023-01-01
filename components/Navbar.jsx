import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent hover:border-[#CA955F]",
    mobileItem: "py-3 font-nav text-white text-xl",
  };
  return (
    <>
      <div className="bg-black/90 rounded-lg text-white mt-5 flex justify-between shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <div className="ml-4 p-3">
          <Logo size={"text-4xl"} sub={true} />
        </div>
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
                <a href="#" onClick={() => setNav(!nav)}>
                  About
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#" onClick={() => setNav(!nav)}>
                  Menu
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#" onClick={() => setNav(!nav)}>
                  Reviews
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a href="#" onClick={() => setNav(!nav)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : null}

        <div className="hidden my-auto mr-5 md:flex">
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
    </>
  );
};

export default Navbar;
