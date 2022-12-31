import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = ({ size }) => {
  return (
    <>
      {/* <h1 className={`text-${size} p-3 tracking-widest font-logo flex`}> */}
      <h1 className={`text-4xl p-3 tracking-widest font-logo`}>
        <span className="flex">
          <span className="text-[#CA955F]">TheCoolBean</span>
          <span className="text-[#88542D]">
            <GiCoffeeBeans />
          </span>
        </span>
        {/* is this center??????????????????/ */}
        <p className="text-[#21955F] text-xl -mt-0 tracking-widest font-nav">
          <span className="text-[#88542D]">Coffee</span>
          <span className="text-[#CA955F]"> | </span>Tea
          <span className="text-[#CA955F]"> | </span>
          <span className="text-[#DC515F]">Smoothies</span>
        </p>
      </h1>
    </>
  );
};

export default Logo;
