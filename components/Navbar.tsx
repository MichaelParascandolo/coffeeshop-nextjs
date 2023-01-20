import Link from "next/link";
import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const styles = {
    item: "px-4 font-nav text-white tracking-widest",
    link: "border-b-2 border-transparent cursor-pointer hover:border-lightBrown ease-in-out duration-300 transition-all",
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
          <Link href="/">
            <div className="ml-4 p-3 cursor-pointer">
              <Logo size={"text-4xl"} sub={true} />
            </div>
          </Link>
          <button
            className="flex md:hidden mr-3 my-auto text-lightBrown" // white or brown for icon color
            onClick={() => setNav(!nav)}
          >
            {nav ? <ImMenu4 size={35} /> : <ImMenu3 size={35} />}
          </button>
          <div className="hidden my-auto mr-5 md:flex">
            <span className={styles.item}>
              <Link href="/#about">
                <span className={styles.link}>About</span>
              </Link>
            </span>
            <span className={styles.item}>
              <Link href="/#reviews">
                <span className={styles.link}>Reviews</span>
              </Link>
            </span>
            <span className={styles.item}>
              <Link href="/menu">
                <span className={styles.link}>Menu</span>
              </Link>
            </span>
            <span className={styles.item}>
              <Link href="/#contact">
                <span className={styles.link}>Contact</span>
              </Link>
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
              <Link href="/#about" onClick={() => setNav(!nav)}>
                About
              </Link>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <Link href="/#reviews" onClick={() => setNav(!nav)}>
                Reviews
              </Link>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <Link href="/menu" onClick={() => setNav(!nav)}>
                Menu
              </Link>
            </li>
            <div className="h-1 bg-darkBrown/70 w-[100%]" />
            <li className={styles.mobileItem}>
              <Link href="/#contact" onClick={() => setNav(!nav)}>
                Contact
              </Link>
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
