import Image from "next/image";
import React from "react";
import Logo from "./Logo";

const About = () => {
  return (
    <>
      <div className="justify-center grid md:grid-cols-2 gap-4 text-white w-[100%] mt-10">
        <div className="shadow-lg shadow-gray-900 border-solid border-2 border-gray-300 rounded-lg bg-black/90 p-3">
          <div className="h-auto">
            <div className="mt-6">
              <h2 className="text-3xl font-mono">About Us</h2>
              <p className="pt-2 text-gray-400">Coffee is our passion.</p>
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
            </div>
            <div className="flex justify-center">
              <Logo size={"3xl"} />
            </div>
          </div>
        </div>
        <div className="shadow-lg shadow-gray-900 border-solid border-2 border-gray-300 rounded-lg bg-black/90 p-3 text-center max-w-[500px] h-auto">
          <Image
            src={"/assets/about.jpg"}
            width="500px"
            height="340px"
            alt="coffee cups"
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default About;
