import Image from "next/image";
import React from "react";
import Logo from "./Logo";

const About = () => {
  return (
    <>
      <div className="justify-center grid md:grid-cols-2 gap-4 text-white w-[100%] mt-5">
        <div className="shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D] rounded-lg bg-black/90 p-3">
          <div className="h-auto">
            <div className="mt-0">
              <h2 className="text-4xl font-mono tracking-widest">About</h2>
              <p className="pt-2 text-gray-400 tracking-wide">
                Coffee is our passion.
              </p>
              <p className="pt-3">
                Focusing on the minute; being meticulous over every detail.
                Everything we do is considered to give an unparalleled
                experience of simplicity with substance.
              </p>
              <p className="pt-3">
                From the freshly ground beans, to the water quality used in the
                end pour and everything in between, we obsess on every possible
                variable. Our ambition is to serve great tasting coffee.
              </p>
              <p className="pt-3">- TheCoolBean Team</p>
            </div>
            <div className="justify-center flex">
              <div className="py-2">
                <Logo size={"2xl"} />
                {/* <p className="text-[#21955F] text-xl -mt-3 tracking-widest font-nav">
                  <span className="text-[#88542D]">Coffee</span> - Tea -{" "}
                  <span className="text-[#DC515F]">Smoothies</span>
                </p> */}
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
            className="rounded-xl"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default About;
