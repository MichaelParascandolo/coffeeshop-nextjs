import React from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { FaGoogle, FaYelp } from "react-icons/fa";

const Reviewitem = ({
  picture,
  text,
  google,
  name,
}: {
  picture: string;
  text: string;
  google: boolean;
  name: string;
}) => {
  const styles = {
    box: "shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3 select-none",
    star: "text-yellow-300 text-xl mx-1.5",
  };
  return (
    <>
      <div className={styles.box}>
        <div className="flex justify-center mb-2">
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
        </div>
        <div className="flex bg-[#212121]/60 rounded-xl border-2 border-[#14261D]">
          <div className="m-3 my-auto ">
            <Image
              src={picture}
              width={80}
              height={80}
              layout="fixed"
              alt="picture of customer"
              draggable={false}
              className="rounded-xl"
            />
          </div>
          <p className="text-white m-3">{text}</p>
          <div className="text-[#CA955F] mr-2 mt-2">
            {google ? <FaGoogle size={18} /> : <FaYelp size={18} />}
          </div>
        </div>
        <p className="text-white text-center tracking-widest mt-1 -mb-2 font-mono font-bold">
          {name}
        </p>
      </div>
    </>
  );
};

export default Reviewitem;
