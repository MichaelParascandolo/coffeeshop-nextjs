import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiCoffeeTogo, BiCoffee } from "react-icons/bi";
import Menuitem from "./Menuitem";
import { db } from "./Firebase";

const Menu = () => {
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
    // menu: "bg-gray-300/70 rounded-2xl p-3 border-solid border-2 border-black shadow-lg shadow-black",
    // bar: "h-1 bg-gray-800 rounded-xl",
  };
  return (
    <div
      className="shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-5 mt-5"
      id="menu"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center select-none">
        <div className="hidden md:flex justify-center my-auto">
          <BiCoffeeTogo size={100} className="text-[#CA955F]" />
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-mono tracking-widest text-white">
              {/* <h2 className="text-4xl font-mono tracking-widest text-[#CA955F]"> */}
              Menu
            </h2>
            <p className="pt-2 text-gray-400 tracking-wide">Made with love.</p>
            <button className="text-white border-2 border-[#CA955F] bg-black py-2 px-10 my-4 rounded-xl font-nav tracking-widest hover:bg-black/10 hover:px-14 transition-all ease-in-out duration-500">
              Order Online
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center my-auto">
          <BiCoffee size={100} className="text-[#CA955F]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <div className="bg-[#212121]/60 rounded-2xl p-3 border-solid border-4 border-[#88542D] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#88542D]">Coffee</span>
          </p>
          <div className="h-0.5 bg-[#88542D] rounded-xl" />
          {coffee.map((item) => (
            <Menuitem name={item.name} price={item.price} key={item.id} />
          ))}
          {/* <Menuitem name={"Espresso"} price={"3.00"} />
          <Menuitem name={"Americano"} price={"4.25"} />
          <Menuitem name={"Cappuccino"} price={"4.75"} />
          <Menuitem name={"Latte"} price={"4.75"} />
          <Menuitem name={"Flat White"} price={"3.75"} />
          <Menuitem name={"Caramel Macchiato"} price={"5.75"} />
          <Menuitem name={"Mocha"} price={"5.75"} />
          <Menuitem name={"Cold Brew"} price={"4.75"} />
          <Menuitem name={"Nitro Cold Brew"} price={"6.00"} />
          <Menuitem name={"Iced Latte"} price={"5.75"} /> */}
        </div>
        <div className="bg-[#212121]/60 rounded-2xl p-3 border-solid border-4 border-[#21955F] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#21955F]">Tea</span>
          </p>
          <div className="h-0.5 bg-[#21955F] rounded-xl" />
          {tea.map((item) => (
            <Menuitem name={item.name} price={item.price} key={item.id} />
          ))}
          {/* <Menuitem name={"Tea"} price={"4.00"} />
          <Menuitem name={"Matcha Latte"} price={"5.50"} />
          <Menuitem name={"Green Tea Latte"} price={"4.00"} />
          <Menuitem name={"Turmeric Latte"} price={"5.50"} />
          <Menuitem name={"Vanilla Chai Latte"} price={"5.00"} />
          <Menuitem name={"Spiced Chai Latte"} price={"5.00"} />
          <Menuitem name={"Fresh Iced Tea"} price={"3.50"} />
          <Menuitem name={"Iced Matcha Latte"} price={"5.75"} />
          <Menuitem name={"Iced Turmeric Latte"} price={"5.75"} />
          <Menuitem name={"Iced Green Tea Latte"} price={"4.25"} /> */}
        </div>
        <div className="bg-[#212121]/60 rounded-2xl md:col-span-2 p-3 lg:col-span-1 border-solid border-4 border-[#DC515F] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#DC515F]">Shakes</span>
          </p>
          <div className="h-0.5 bg-[#DC515F] rounded-xl" />
          {shakes.map((item) => (
            <Menuitem name={item.name} price={item.price} key={item.id} />
          ))}
          {/* <Menuitem name={"Acai Energy"} price={"8.75"} />
          <Menuitem name={"Berry Burst"} price={"8.75"} />
          <Menuitem name={"Chunky Monkey"} price={"8.75"} />
          <Menuitem name={"Green Goddess"} price={"8.75"} />
          <Menuitem name={"Java Nut"} price={"8.75"} />
          <Menuitem name={"Matcha Madness"} price={"8.75"} />
          <Menuitem name={"Pitaya Passion"} price={"8.75"} />
          <Menuitem name={"Protein Power"} price={"8.75"} />
          <Menuitem name={"Wellness Colada"} price={"8.75"} />
          <Menuitem name={"Custom Smoothie"} price={"9.50"} /> */}
        </div>
      </div>
      <p className="text-gray-600 text-center">
        * prices shown are medium; large is $0.25 more *
      </p>
    </div>
  );
};

export default Menu;
