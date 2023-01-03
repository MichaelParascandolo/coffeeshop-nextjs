import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      {/* <div className="max-w-[960px] mx-auto"> */}
      <div className="flex justify-center">
        <Head>
          <title>CoolBeans: Coffee - Tea - Shakes</title>
        </Head>
        <div className="w-[90%] max-w-[1200px]">
          <Navbar />
          <Socials />
          <About />
          <Reviews />
          <Menu />
          <Contact />
          <Socials />
          <Footer />
        </div>
      </div>
    </>
  );
}
