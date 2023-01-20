import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const menu = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center">
        <div className="w-[95%] max-w-[1500px]">
          <Navbar />
          <Menu fullMenu={true} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default menu;
