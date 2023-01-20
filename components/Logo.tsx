import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = ({ size, sub }: { size: string; sub?: boolean }) => {
  return (
    <>
      <div className="justify-center select-none">
        {/* <h1 className={`text-4xl p-3 tracking-widest font-logo flex`}> */}
        <h1 className={`${size} tracking-widest font-logo flex`}>
          <span className="text-darkBrown">
            <GiCoffeeBeans />
          </span>
          <span className="text-lightBrown">CoolBeans</span>
        </h1>
        {sub ? (
          <p className="text-darkBrown text-lg -mt-1 tracking-widest font-nav">
            Coffee | Tea | Shakes
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Logo;
