import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const navLinks: { name: string; link: string }[] = [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Reviews",
      link: "/#reviews",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  const containerStyle: string =
    "bg-black/90 rounded-lg text-white mt-5 shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]";
  return (
    <>
      <div // when nav is open it will be 280px height and when closed it will be 100px height
        className={
          nav
            ? `h-[280px] md:h-[100px] duration-300 ease-in-out transition-all ${containerStyle}`
            : `h-[100px] md:h-[100px] duration-300 ease-in-out transition-all ${containerStyle}`
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
            {navLinks.map((item, index) => (
              <Link href={item.link} key={index}>
                <span
                  className={
                    "border-b-2 px-4 font-nav text-white tracking-widest border-transparent cursor-pointer hover:border-lightBrown ease-in-out duration-300 transition-all"
                  }
                >
                  {item.name}
                </span>
              </Link>
            ))}
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
          {nav ? (
            <ul className="pb-4 visible md:hidden">
              {navLinks.map((item, index) => (
                <>
                  <Link href={item.link} key={index}>
                    <li
                      className={"py-2 ml-4 font-nav text-white text-md"}
                      onClick={() => setNav(!nav)}
                    >
                      {item.name}
                    </li>
                  </Link>
                  <div className="h-1 bg-darkBrown/70 w-[100%]" />
                </>
              ))}
            </ul>
          ) : null}
        </div>
        {/* mobile navbar end */}
      </div>
    </>
  );
};

export default Navbar;
