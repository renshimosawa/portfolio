"use client";

import Card from "../../bases/Card";
import Image from "next/image";

type Props = {
  className?: string;
  imgUrl: string;
  alt: string;
  label?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
};

const ImgCard: React.FC<Props> = ({
  className,
  imgUrl,
  alt,
  label,
  style,
  labelStyle,
}) => {
  return (
    <Card
      className={`w-[350px] h-[180px] nsm:w-full nsm:h-auto inline-block relative ${className}`}
      style={style}
    >
      <div className="w-full h-full overflow-hidden sm:flex sm:justify-center sm:items-center">
        <Image
          src={imgUrl}
          className="w-full"
          width={350}
          height={180}
          alt={alt}
        />
      </div>
      <p
        className="inline-block absolute bottom-[10px] left-[10px] px-1 bg-white/60 backdrop-blur-md"
        style={labelStyle}
      >
        {label}
      </p>
    </Card>
  );
};

export default ImgCard;
