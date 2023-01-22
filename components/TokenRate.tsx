import React from "react";

interface ITokenRateProps {}

export default function TokenRate(props: ITokenRateProps) {
  return (
    <div className="bg-[#040444] py-14">
      <div className="container mx-auto columns-2">
        <div className="w-full">
          <h3 className="text-4xl font-bold text-white">TOKEN RATE</h3>
        </div>
        <div className="w-full break-before-column">
          <h3 className="text-4xl font-bold text-white">WELCOME TO MUGHNI</h3>
          <p className="my-8 text-white">
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true Clicking generator
            on the Internet. It uses a dictionary of over 200 Latin.
          </p>

          <div className="text-white">
            <div className="mb-3">
              <h5 className="text-2xl mb-2 font-bold">Secure Reliable</h5>
              <p>Your account is secure</p>
            </div>
            <div className="mb-3">
              <h5 className="text-2xl mb-2 font-bold">First Withdraw</h5>
              <p>Get your money</p>
            </div>
            <div className="mb-3">
              <h5 className="text-2xl mb-2 font-bold">Guaranteed</h5>
              <p>You can return to investment</p>
            </div>
            <div className="mb-3">
              <h5 className="text-2xl mb-2 font-bold">Cryptcurrency Rate</h5>
              <p>You can Rate to Crpcurrency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
