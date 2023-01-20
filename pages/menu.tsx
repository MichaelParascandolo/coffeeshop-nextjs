import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const menu = () => {
  return (
    <>
      <div className="flex justify-center">
        {/* <div className="w-[95%] max-w-[1500px]"> */}
        <div className="w-[90%] max-w-[1200px]">
          <Navbar />
          <Menu fullMenu={true} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default menu;
