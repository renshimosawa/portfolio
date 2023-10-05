"use client";

import TopBack from "../TopBack";
import React from "react";

export type Props = {
  className?: string;
  title: string;
};

const Top: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={`w-screen h-[70vh] sm:h-[50vh] ${className}`}>
      <div className="absolute top-[35vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] text-center z-10 sm:m-auto sm:top-[30vh]">
        <h1 className="md:text-4xl sm:text-2xl font-bold text-white whitespace-normal mb-[10vh] sm:mb-[80px]">
          {title}
        </h1>
      </div>
      <TopBack className="relative w-full" />
    </div>
  );
};

export default Top;
