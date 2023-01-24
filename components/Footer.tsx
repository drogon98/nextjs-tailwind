import React from "react";

interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className="bg-[#040444] py-14 text-white">
      <div className="container mx-auto columns-4">
        <div className="w-full">
          <h4 className="text-2xl font-bold">About Enricher</h4>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur.
          </p>
        </div>
        <div className="w-full break-before-column">
          <h4 className="text-2xl font-bold">Menu</h4>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur.
          </p>
        </div>
        <div className="w-full break-before-column">
          <h4 className="text-2xl font-bold">Legal</h4>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur.
          </p>
        </div>
        <div className="w-full break-before-column">
          <h4 className="text-2xl font-bold">News Letter</h4>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
}
