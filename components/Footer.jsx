import React from "react";

const Footer = () => {
  return (
    <>
      {/* <div className="h-screen bg-[url('/assets/cover.jpg')]"> */}
      <div className="bg-black/90 rounded-lg my-5  text-white justify-between shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <p className="py-3 tracking-widest text-center">
          © {new Date().getFullYear()} TheCoolBean
        </p>
      </div>
    </>
  );
};

export default Footer;
