import React from "react";

interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <div className="h-screen bg-[#051A32]">
      <div className="container columns-2 h-full mx-auto">
        <div className="w-full h-full flex flex-col justify-center text-white pt-36">
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
        <div className="w-full  h-full">
          <h3>Helloo</h3>
        </div>
      </div>
    </div>
  );
}
