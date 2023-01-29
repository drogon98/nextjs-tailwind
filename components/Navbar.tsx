import Image from "next/image";
import React from "react";

interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="fixed top-0 w-full bg-transparent h-24">
      <div className="container mx-auto grid grid-cols-3 h-24">
        <div className="col-span-1 flex h-100 items-center">
          <a href="http://">
            <Image src={"/logo.png"} width={120} height={30} alt={"logo"} />
          </a>
        </div>
        <div className="col-span-2 grid-cols-5 gap-10 h-100 hidden md:grid">
          <div className="col-span-4 grid grid-cols-8 content-center gap-4 h-100 text-white">
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Home
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Crypto
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                RoadMap{" "}
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Feature
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Team
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Blog
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Client
              </a>{" "}
            </div>
            <div className="text-center">
              <a href="http://" className="font-semibold">
                Contact
              </a>{" "}
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <button className="px-4 py-2 border rounded-md font-semibold text-white">
              Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
