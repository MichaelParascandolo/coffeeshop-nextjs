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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
