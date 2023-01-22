import React from "react";

interface IStatisticsProps {}

export default function Statistics(props: IStatisticsProps) {
  return (
    <div>
      <div className="container mx-auto columns-4 text-black py-24">
        <div className="w-full shadow-md p-4 flex flex-col justify-center items-center">
          <h6 className="text-2xl font-bold">7,000</h6>
          <p>User Sign Up</p>
        </div>
        <div className="break-before-column w-full shadow-md p-4 flex flex-col justify-center items-center">
          <h6 className="text-2xl font-bold">1,085</h6>
          <p>Your Invest</p>
        </div>
        <div className="break-before-column w-full shadow-md p-4 flex flex-col justify-center items-center">
          <h6 className="text-2xl font-bold">5</h6>
          <p>Years of Expirience</p>
        </div>
        <div className="break-before-column w-full shadow-md p-4 flex flex-col justify-center items-center">
          <h6 className="text-2xl font-bold">1,000</h6>
          <p>Succesfull Project</p>
        </div>
      </div>
    </div>
  );
}
