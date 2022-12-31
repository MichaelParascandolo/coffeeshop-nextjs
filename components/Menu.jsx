import React from "react";
import Menuitem from "./Menuitem";
const styles = {
  label:
    "text-gray-800 font-nav text-2xl text-center tracking-widest font-bold",
  // menu: "bg-gray-300/70 rounded-2xl p-3 border-solid border-2 border-black shadow-lg shadow-black",
  bar: "h-1 bg-gray-800 rounded-xl",
};
const Menu = () => {
  return (
    <div className="shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-5 mt-5">
      <h2 className="text-4xl font-mono tracking-widest text-white">Drinks</h2>
      <p className="pt-2 text-gray-400 tracking-wide">Made with love.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <div className="bg-gray-300/70 rounded-2xl p-3 border-solid border-4 border-[#88542D] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#88542D]">Coffee</span>
          </p>
          <div className={styles.bar} />
          <div>
            <Menuitem name={"Expresso"} price={"3.00"} />
            <Menuitem name={"Americano"} price={"4.25"} />
            <Menuitem name={"Cappuccino"} price={"4.75"} />
            <Menuitem name={"Latte"} price={"4.75"} />
            <Menuitem name={"Flat White"} price={"3.75"} />
            <Menuitem name={"Caramel Macchiato"} price={"5.75"} />
            <Menuitem name={"Mocha"} price={"5.75"} />
            <Menuitem name={"Cold Brew"} price={"4.75"} />
            <Menuitem name={"Nitro Cold Brew"} price={"6.00"} />
            <Menuitem name={"Iced Latte"} price={"5.75"} />
          </div>
        </div>
        <div className="bg-gray-300/70 rounded-2xl p-3 border-solid border-4 border-[#21955F] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#21955F]">Tea</span>
          </p>
          <div className={styles.bar} />
          <div>
            <Menuitem name={"Tea"} price={"4.00"} />
            <Menuitem name={"Matcha Latte"} price={"5.50"} />
            <Menuitem name={"Green Tea Latte"} price={"4.00"} />
            <Menuitem name={"Turmeric Latte"} price={"5.50"} />
            <Menuitem name={"Vanilla Chai Latte"} price={"5.00"} />
            <Menuitem name={"Spiced Chai Latte"} price={"5.00"} />
            <Menuitem name={"Fresh Iced Tea"} price={"3.50"} />
            <Menuitem name={"Iced Macha Latte"} price={"5.75"} />
            <Menuitem name={"Iced Turmeric Latte"} price={"5.75"} />
            <Menuitem name={"Iced Green Tea Latte"} price={"4.25"} />
          </div>
        </div>
        <div className="bg-gray-800/70 rounded-2xl p-3 border-solid border-4 border-[#DC515F] shadow-lg shadow-black">
          <p className={styles.label}>
            <span className="text-[#DC515F]">Smoothies</span>
          </p>
          <div className={styles.bar} />
          <div>
            <Menuitem name={"Acai Energy"} price={"8.75"} />
            <Menuitem name={"Berry Burst"} price={"8.75"} />
            <Menuitem name={"Chunky Monkey"} price={"8.75"} />
            <Menuitem name={"Green Goddess"} price={"8.75"} />
            <Menuitem name={"Java Nut"} price={"8.75"} />
            <Menuitem name={"Macha Madness"} price={"8.75"} />
            <Menuitem name={"Pitaya Passion"} price={"8.75"} />
            <Menuitem name={"Protein Power"} price={"8.75"} />
            <Menuitem name={"Wellness Colada"} price={"8.75"} />
            <Menuitem name={"Custom Smoothie"} price={"9.50"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
