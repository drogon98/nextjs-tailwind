import React from "react";

interface IWhyInvestProps {}

export default function WhyInvest(props: IWhyInvestProps) {
  return (
    <div className="bg-[#F2F3F3] py-14">
      <div className="container mx-auto">
        <h4 className="text-3xl font-bold text-black">WHY SHOULD YOU INVEST</h4>
        <div className="grid grid-cols-3 gap-5 my-14 text-black">
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              Safe & Secure
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              Low Cost
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              Universal Access
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              Early Profit
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              Secure Invest
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
          <div className="bg-white rounded-[4px] p-6 shadow-md">
            <h4 className="text-2xl font-bold text-black text-center">
              24/7 Support
            </h4>
            <p className="py-4 text-center">
              Lorem ipsum dolor sit amet elit sed consectetur amet tempor dolor
              sit amet elit sed dolor sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
