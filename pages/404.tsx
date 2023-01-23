import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const notFound = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <Navbar />
          <div className="bg-black/90 rounded-lg p-4 h-[200px] justify-center flex text-white mt-5 shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
            <div>
              <p className="text-[50px] text-center">😔</p>
              <h1 className="text-[35px]">404 | Page Not Found</h1>
              {/* <p className="text-[30px] text-center bg-red-500 rounded-lg p-1 tracking-widest">
                Go Home
              </p> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default notFound;
