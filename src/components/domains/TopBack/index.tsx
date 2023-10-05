"use client";

import Image from "next/image";

export type Props = {
  className?: string;
};

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={`w-screen h-[70vh] sm:h-[50vh] ${className}`}>
    <Image
      src="/backImgsmall-pc3.png"
      className="aspect-[851 / 531] sm:none backgroundPc"
      alt=""
      fill
      style={{ objectFit: "cover" }}
    />
    <Image
      src="/backImgsmall-sp1.png"
      className="md:hidden sm:h-[50vh] backgroundSp"
      alt=""
      fill
    />
  </div>
);

export default TopBack;
