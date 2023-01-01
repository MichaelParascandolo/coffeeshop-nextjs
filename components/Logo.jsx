import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = ({ size, sub }) => {
  return (
    <>
      <div className="justify-center select-none">
        {/* <h1 className={`text-4xl p-3 tracking-widest font-logo flex`}> */}
        <h1 className={`${size} tracking-widest font-logo flex`}>
          <span className="text-[#CA955F]">CoolBeans</span>
          <span className="text-[#88542D]">
            <GiCoffeeBeans />
          </span>
        </h1>
        {/* <p className="text-[#21955F] text-xl -mt-0 tracking-widest font-nav">
          <span className="text-[#88542D]">Coffee</span>
          <span className="text-[#CA955F]"> | </span>Tea
          <span className="text-[#CA955F]"> | </span>
          <span className="text-[#DC515F]">Smoothies</span>
        </p> */}
        {sub ? (
          <p className="text-[#88542D] text-xl -mt-1 tracking-widest font-nav">
            Coffee | Tea | Shakes
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Logo;
