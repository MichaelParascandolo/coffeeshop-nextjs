import React from "react";
import { GrFacebook, GrInstagram, GrMail, GrTwitter } from "react-icons/gr";

const Socials = () => {
  const styles = {
    item: "px-4 font-nav text-[#CA955F]",
    size: "28",
  };
  return (
    <>
      <div className="bg-black/90 rounded-lg mt-5 py-3 text-white justify-between shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <ul className="flex justify-around">
          <li className={styles.item}>
            <GrFacebook size={styles.size} />
          </li>
          <li className={styles.item}>
            <GrTwitter size={styles.size} />
          </li>
          <li className={styles.item}>
            <GrInstagram size={styles.size} />
          </li>
          <li className={styles.item}>
            <GrMail size={styles.size} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
