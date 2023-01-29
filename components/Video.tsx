import React from "react";

interface IVideoProps {}

export default function Video(props: IVideoProps) {
  return (
    <div className="py-14">
      <div className="container md:flex mx-auto">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2 text-black">
          <h4 className="text-4xl font-bold">VIDEO PRESENTATION</h4>
          <p className="py-6">
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true Clicking generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined.
          </p>
          <p>
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true Clicking generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures. .
          </p>
        </div>
      </div>
    </div>
  );
}
