import Account from "@/components/Account";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import Popular from "@/components/Popular";
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
      </main>
    </>
  );
}
