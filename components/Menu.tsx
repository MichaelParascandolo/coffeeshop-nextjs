import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiCoffeeTogo, BiCoffee } from "react-icons/bi";
import Menuitem from "./Menuitem";
import { db } from "./Firebase";
import Link from "next/link";

const Menu = ({ fullMenu }: { fullMenu?: boolean }) => {
  const [coffee, setCoffee] = useState([]);
  const [tea, setTea] = useState([]);
  const [shakes, setShakes] = useState([]);

  useEffect(() => {
    const data = query(collection(db, "drinks"));
    onSnapshot(data, (querySnapshot) => {
      let coffeeArr = [];
      let teaArr = [];
      let shakesArr = [];
      // sort each menu item into coffee,tea,or shakes
      querySnapshot.forEach((doc) => {
        if (doc.data().type === "coffee") {
          coffeeArr.push({ ...doc.data() });
        } else if (doc.data().type === "tea") {
          teaArr.push({ ...doc.data() });
        } else {
          shakesArr.push({ ...doc.data() });
        }
        // arr.push({ ...doc.data(), id: doc.id });
      });
      // set each state to sorted array
      setCoffee(coffeeArr.sort((a, b) => (a.price > b.price ? 1 : -1)));
      setTea(teaArr.sort((a, b) => (a.price > b.price ? 1 : -1)));
      setShakes(shakesArr.sort((a, b) => (a.price > b.price ? 1 : -1)));
    });
  }, []);

  const styles = {
    label:
      "text-gray-800 font-nav text-2xl text-center tracking-widest font-bold select-none",
  };
  return (
    <div
      className="shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-5 mt-5"
      id="menu"
    >
      {!fullMenu ? (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center select-none">
          <div className="hidden md:flex justify-center my-auto">
            <BiCoffeeTogo size={100} className="text-lightBrown" />
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-mono tracking-widest text-white">
                Menu
              </h2>
              <p className="pt-2 text-gray-400 tracking-wide">
                Made with love.
              </p>
              <Link href={"menu"}>
                <button className="text-white border-2 border-lightBrown bg-black py-2 px-10 my-4 rounded-xl font-nav tracking-widest hover:bg-black/10 hover:px-14 transition-all ease-in-out duration-500">
                  View Full Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center my-auto">
            <BiCoffee size={100} className="text-lightBrown" />
          </div>
        </div>
      ) : null}
      <div
        className={
          !fullMenu
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2"
            : "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-2"
        }
      >
        <div className="bg-[#212121]/60 rounded-2xl p-3 border-solid border-4 border-darkBrown shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-darkBrown">Coffee</span>
          </p>
          <div className="h-0.5 bg-darkBrown rounded-xl" />
          {coffee.map((item) => (
            <Menuitem
              name={item.name}
              price={item.price}
              key={item.id}
              fullMenu={fullMenu}
            />
          ))}
        </div>
        <div className="bg-[#212121]/60 rounded-2xl p-3 border-solid border-4 border-[#21955F] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#21955F]">Tea</span>
          </p>
          <div className="h-0.5 bg-[#21955F] rounded-xl" />
          {tea.map((item) => (
            <Menuitem
              name={item.name}
              price={item.price}
              key={item.id}
              fullMenu={fullMenu}
            />
          ))}
        </div>
        <div
          className={
            !fullMenu
              ? "bg-[#212121]/60 rounded-2xl md:col-span-2 p-3 lg:col-span-1 border-solid border-4 border-[#DC515F] shadow-lg shadow-black"
              : "bg-[#212121]/60 rounded-2xl md:col-span-1 p-3 lg:col-span-1 border-solid border-4 border-[#DC515F] shadow-lg shadow-black"
          }
        >
          <p className={styles.label}>
            <span className="text-[#DC515F]">Shakes</span>
          </p>
          <div className="h-0.5 bg-[#DC515F] rounded-xl" />
          {shakes.map((item) => (
            <Menuitem
              name={item.name}
              price={item.price}
              key={item.id}
              fullMenu={fullMenu}
            />
          ))}
        </div>
      </div>
      {!fullMenu ? (
        <p className="text-gray-600 text-center py-2 -mb-4">
          *medium size prices shown*
        </p>
      ) : null}
    </div>
  );
};

export default Menu;
