import React from "react";
import { GrFacebook, GrInstagram, GrMail, GrTwitter } from "react-icons/gr";

const Socials = () => {
  const styles = {
    item: "px-4 font-nav text-[#CA955F]",
    size: "30",
  };
  return (
    <>
      <div className="bg-black/90 rounded-lg mt-5 py-2 text-white shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <ul className="flex justify-around">
          <a
            href="#"
            className="hover:scale-110 duration-300 eas-in-out transition-all"
          >
            <li className={styles.item}>
              <GrFacebook size={styles.size} />
            </li>
          </a>
          <span className="text-white text-xl select-none">|</span>
          <a
            href="#"
            className="hover:scale-110 duration-300 eas-in-out transition-all"
          >
            <li className={styles.item}>
              <GrTwitter size={styles.size} />
            </li>
          </a>
          <span className="text-white text-xl select-none">|</span>
          <a
            href="#"
            className="hover:scale-110 duration-300 eas-in-out transition-all"
          >
            <li className={styles.item}>
              <GrInstagram size={styles.size} />
            </li>
          </a>
          <span className="text-white text-xl select-none">|</span>
          <a
            href="#"
            className="hover:scale-110 duration-300 eas-in-out transition-all"
          >
            <li className={styles.item}>
              <GrMail size={styles.size} />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Socials;
