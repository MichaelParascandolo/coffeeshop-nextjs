import React from "react";

const Menuitem = ({ name, price }) => {
  return (
    <>
      <div className="text-gray-300 py-2 flex justify-between capitalize tracking-widest font-nav select-none hover:px-8 transition-all duration-300 ease-in-out">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div className="h-0.5 bg-gray-500 rounded-xl" />
    </>
  );
};

export default Menuitem;
