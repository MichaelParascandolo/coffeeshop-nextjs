import Head from "next/head";
import About from "../components/About";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        <Navbar />
        <About />
        <Menu />
      </div>
    </>
  );
}
