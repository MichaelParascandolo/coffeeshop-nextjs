import React from "react";

const Menuitem = ({ name, price }: { name: string; price: number }) => {
  return (
    <>
      <div className="text-gray-300 py-2 flex justify-between capitalize tracking-widest font-nav select-none hover:px-8 transition-all duration-300 ease-in-out">
        <span>{name}</span>
        <div>
          {/* <span className="px-1">S${(price - 0.25).toFixed(2)}</span> */}
          <span className="px-1">${price.toFixed(2)}</span>
          {/* <span className="px-1"> L:${(price + 0.25).toFixed(2)}</span> */}
        </div>
      </div>
      <div className="h-0.5 bg-gray-500 rounded-xl" />
    </>
  );
};

export default Menuitem;
