import React from "react";
import Menuitem from "./Menuitem";
const style = {
  label: "text-gray-800 font-nav text-xl text-center tracking-wide",
  menu: "bg-gray-300/70 rounded-3xl p-3 border-solid border-2 border-gray-900 shadow-lg shadow-gray-800",
};
const Menu = () => {
  return (
    <div className="shadow-lg shadow-gray-900 border-solid border-2 border-gray-300 rounded-lg bg-black/90 p-5 mt-5">
      <div className="text-white mt-3">
        <h2 className="text-3xl font-mono">Drinks</h2>
        <p className="pt-2 text-gray-400">Made with love.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
          <div className={style.menu}>
            <p className={style.label}>Coffee</p>
            <div className="h-0.5 bg-gray-800 rounded-xl" />
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
          <div className={style.menu}>
            <p className={style.label}>Tea</p>
            <div className="h-0.5 bg-gray-800 rounded-xl" />
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
          <div className={style.menu}>
            <p className={style.label}>Smoothies</p>
            <div className="h-0.5 bg-gray-800 rounded-xl" />
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
    </div>
  );
};

export default Menu;
