import React from "react";

interface ICopyRightProps {}

export default function CopyRight(props: ICopyRightProps) {
  return (
    <div className="bg-[#64648C] py-10  text-white">
      <p className="text-center text-base">
        &#169;{new Date().getFullYear()}&nbsp; - All rights reserved.
      </p>
    </div>
  );
}
