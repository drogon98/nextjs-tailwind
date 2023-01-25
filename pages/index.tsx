import Account from "@/components/Account";
import Companies from "@/components/Companies";
import CopyRight from "@/components/CopyRight";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import MobileApp from "@/components/MobileApp";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Popular from "@/components/Popular";
import Reviews from "@/components/Reviews";
import RoadMap from "@/components/RoadMap";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";
import TokenRate from "@/components/TokenRate";
import Video from "@/components/Video";
import WhyInvest from "@/components/WhyInvest";
import Head from "next/head";

// https://demo.templatemonster.com/demo/183228.html?_gl=1*bg8xsh*_ga*MTQ4NDUxMjYzMS4xNjc0MDAzNzI2*_ga_FTPYEGT5LY*MTY3NDAwMzcyNi4xLjAuMTY3NDAwMzc0MS40NS4wLjA.&_ga=2.162121151.286302532.1674003727-1484512631.1674003726

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind CSS Recap</title>
        <meta name="description" content="Taliwind CSS class" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <HeroBottom />
        <TokenRate />
        <Statistics />
        <Popular />
        <RoadMap />
        <WhyInvest />
        <Video />
        <Account />
        <Team />
        <FAQ />
        <MobileApp />
        <News />
        <Reviews />
        <Companies />
        <GetInTouch />
        <Footer />
        <CopyRight />
      </main>
    </>
  );
}
