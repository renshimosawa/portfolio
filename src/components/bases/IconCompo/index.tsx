"use client";

import React from "react";
import Image from "next/image";

export type Props = {
  className?: string;
  type: "facebook" | "github" | "gmail" | "twitter" | "zenn";
  url?: string;
};

const IconCompo: React.FC<Props> = ({ type, className }) => {
  const imageSrc = "/icons/" + type + ".svg";
  return (
    <Image
      className={`flex items-center p-0 ${className}`}
      src={imageSrc}
      alt=""
      width={28}
      height={28}
    />
  );
};

export default IconCompo;
