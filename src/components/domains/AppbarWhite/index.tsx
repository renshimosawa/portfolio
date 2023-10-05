"use client";

import Image from "next/image";

export type Props = {
  className?: string;
  onClick?: () => void;
};

const AppbarWhite: React.FC<Props> = ({ onClick, className }) => (
  <header className={`h-[80px] flex items-center py-4 ${className}`}>
    <button onClick={onClick} className="bg-none bd-none" aria-label="Logo">
      <Image
        className="w-[250px] ml-[1vw]"
        src="/logo_white.svg"
        width={250}
        height={50}
        alt="Historedge"
      />
    </button>
  </header>
);

export default AppbarWhite;
