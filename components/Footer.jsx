import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="bg-black/90 rounded-lg my-5  text-white shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <div className="py-3 tracking-widest flex justify-center content-center">
          <span className="text-[#CA955F] mr-2 mt-1 font-nav">
            © {new Date().getFullYear()}
          </span>
          <Logo sub={false} size={"text-lg"} />
        </div>
      </div>
    </>
  );
};

export default Footer;
