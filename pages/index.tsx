import Account from "@/components/Account";
import Companies from "@/components/Companies";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import MobileApp from "@/components/MobileApp";
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
      </main>
    </>
  );
}
