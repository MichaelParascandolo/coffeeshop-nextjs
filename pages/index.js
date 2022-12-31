import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      {/* <div className="max-w-[960px] mx-auto"> */}
      <div className="w-[90%] mx-auto">
        <Navbar />
        <Socials />
        <About />
        <Menu />
        <Footer />
      </div>
    </>
  );
}
