import { MenuItemProps } from "./Menu";

const Menuitem = ({ name, price, fullMenu }: MenuItemProps) => {
  const drinkSizes = [
    { name: "Sm", price: (price - 0.5).toFixed(2) },
    { name: "Md", price: price.toFixed(2) },
    { name: "Lg", price: (price + 0.5).toFixed(2) },
  ];
  return (
    <>
      <div className="text-gray-300 py-2 flex justify-between capitalize tracking-wide font-nav select-none">
        {!fullMenu ? (
          <>
            <span>{name}</span>
            <span className="px-1">${price.toFixed(2)}</span>
          </>
        ) : (
          <>
            <span className="my-auto m-4 text-[20px]">{name}</span>
            <div>
              {drinkSizes.map((item, index) => (
                <p className="p-1 text-gray-400" key={index}>
                  <span className="text-sm">{item.name}</span>
                  <span className="text-[17px] text-gray-300 pl-2">
                    ${item.price}
                  </span>
                </p>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="h-0.5 bg-gray-500 rounded-xl" />
    </>
  );
};

export default Menuitem;
