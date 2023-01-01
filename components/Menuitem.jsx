import React from "react";

const Menuitem = ({ name, price }) => {
  return (
    <>
      <div className="text-gray-300 py-2 flex justify-between capitalize tracking-widest font-nav select-none">
        <span>{name}</span>
        <span className="font-bold">${price}</span>
      </div>
      <div className="h-0.5 bg-gray-500 rounded-xl" />
    </>
  );
};

export default Menuitem;
