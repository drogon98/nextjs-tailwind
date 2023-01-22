import React from "react";

interface IHeroBottomProps {}

export default function HeroBottom(props: IHeroBottomProps) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="columns-2 my-16">
          <div className="w-40">
            <h4 className="text-4xl">CRYPTOCURRENCY:</h4>
          </div>
          <div className="w-60"></div>
        </div>
      </div>
    </div>
  );
}
