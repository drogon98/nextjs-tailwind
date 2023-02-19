import Image from "next/image";
import React from "react";

interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <div className="md:h-screen bg-[#051A32]">
      <div className="container md:flex md:h-full mx-auto">
        <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center text-white py-36 md:pb-0 bg-[url('/bitcoin.jpg')] md:bg-none">
          <h1 className="text-5xl font-bold tracking-wider">
            Cryp To Currency Blockchain Token
          </h1>

          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div>
            <button className="border py-1 px-4">Sign Up</button>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 md:h-full pt-36">
          <Image
            src={"/bitcoin.jpg"}
            height={500}
            width={500}
            alt={"bitcoin"}
          />
        </div>
      </div>
    </div>
  );
}
