import React from "react";

const Menuitem = ({ name, price }) => {
  return (
    <>
      <div className="text-gray-800 py-2 flex justify-between capitalize tracking-wide font-nav">
        <p>{name}</p>
        <p>. . . ${price}</p>
      </div>
    </>
  );
};

export default Menuitem;
