const Menuitem = ({
  name,
  price,
  fullMenu,
}: {
  name: string;
  price: number;
  fullMenu: boolean;
}) => {
  return (
    <>
      <div className="text-gray-300 py-2 flex justify-between capitalize tracking-wide font-nav select-none hover:px-8 transition-all duration-300 ease-in-out">
        {!fullMenu ? (
          <>
            <span>{name}</span>
            <span className="px-1">${price.toFixed(2)}</span>
          </>
        ) : (
          <>
            <span className="my-auto m-4 text-[20px]">{name}</span>
            <div>
              <p className="p-1 text-gray-400">
                <span className="text-sm">Sm</span>
                <span className="text-[17px] text-gray-300 pl-2">
                  ${(price - 0.5).toFixed(2)}
                </span>
              </p>
              <p className="p-1 text-gray-400">
                <span className="text-sm">Md</span>
                <span className="text-[17px] text-gray-300 pl-2">
                  ${price.toFixed(2)}
                </span>
              </p>
              <p className="p-1 text-gray-400">
                <span className="text-sm">Lg</span>
                <span className="text-[17px] text-gray-300 pl-2">
                  ${(price + 0.5).toFixed(2)}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
      <div className="h-0.5 bg-gray-500 rounded-xl" />
    </>
  );
};

export default Menuitem;
