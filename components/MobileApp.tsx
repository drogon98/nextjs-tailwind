import React from "react";

interface IMobileAppProps {}

export default function MobileApp(props: IMobileAppProps) {
  return (
    <div className="py-14">
      <div className="container mx-auto md:flex">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2">
          <h4 className="text-4xl font-bold">ICO MOBILE APP</h4>
          <p className="py-6">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero All the Lorem Ipsum
            generators.
          </p>

          <div>
            <p className="py-1">Your Account is Secure</p>
            <p className="py-1">Get to Money Recive On</p>
            <p className="py-1">You can Return to investment</p>
            <p className="py-1">Your Account is Secure</p>
            <p className="py-1">Get to Money Recive On</p>
          </div>

          <div className="mt-12">
            <button>Get App Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
