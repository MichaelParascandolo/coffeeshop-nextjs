import Image from "next/image";
import React from "react";
import Logo from "./Logo";

const About = () => {
  const styles = {
    para: "pt-3 text-white",
  };
  return (
    <>
      <div className="justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-[100%] mt-5">
        <div className="shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3">
          <div className="h-auto">
            <div className="mt-0">
              <h2 className="text-4xl font-mono tracking-widest text-white">
                {/* <h2 className="text-4xl font-mono tracking-widest text-[#CA955F]"> */}
                About
              </h2>
              <p className="pt-2 text-gray-400 tracking-wide">
                Coffee is our passion.
              </p>
              <p className={styles.para}>
                Focusing on the minute; being meticulous over every detail.
                Everything we do is considered to give an unparalleled
                experience of simplicity with substance.
              </p>
              <p className={styles.para}>
                From the freshly ground beans, to the water quality used in the
                end pour and everything in between, we obsess on every possible
                variable. Our ambition is to serve great tasting coffee.
              </p>
              <p className={styles.para}>- CoolBeans Team</p>
            </div>
            <div className="justify-center flex">
              <div className="py-2 text-center">
                <Logo size={"text-[50px]"} sub={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg shadow-gray-900 justify-center content-center flex border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3 text-center h-auto">
          <Image
            src={"/assets/about2.jpg"}
            width="2400px"
            height="1600px"
            alt="coffee cups"
            className="rounded-2xl"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default About;
