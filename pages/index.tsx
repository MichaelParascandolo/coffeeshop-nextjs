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
      <Head>
        <title>CoolBeans: coffee | tea | shakes</title>
      </Head>
      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <Navbar />
          <Socials />
          <About />
          <Reviews />
          <Menu fullMenu={false} />
          <Contact />
          <Socials />
          <Footer />
        </div>
      </div>
    </>
  );
}
