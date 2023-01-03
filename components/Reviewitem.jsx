import React from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const Reviewitem = ({ picture, text }) => {
  const styles = {
    box: "shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3",
    star: "text-yellow-300 text-xl mx-1",
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
          <div className="my-auto ml-4">
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
          <p className="text-white ml-2 p-3">{text}</p>
        </div>
        {/* <p className="text-white text-center tracking-wider mt-2 -mb-2">
          First Name
        </p> */}
      </div>
    </>
  );
};

export default Reviewitem;
