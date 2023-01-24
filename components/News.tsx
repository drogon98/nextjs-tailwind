import React from "react";

interface INewsProps {}

export default function News(props: INewsProps) {
  return (
    <div className="py-14">
      <div className="container mx-auto">
        <h4 className="text-4xl font-bold">RECENT NEWS</h4>
      </div>
    </div>
  );
}
