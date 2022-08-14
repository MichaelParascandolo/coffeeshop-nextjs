import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = ({ size }) => {
  return (
    <>
      <div>
        <h1 className={`text-${size} p-3 tracking-widest font-logo flex`}>
          TheCoolBean
          <GiCoffeeBeans />
        </h1>
      </div>
    </>
  );
};

export default Logo;
