"use client";

import React from "react";

export type Props = {
  className?: string;
  label: string;
  style?: React.CSSProperties;
};

const Tooltips: React.FC<Props> = ({ className, label, style }) => {
  return (
    <div
      className={`inline-block bg-[#6d6d6d] rounded text-center p-1 ${className}`}
      style={style}
    >
      <p className={`tooltip text-sm text-white`}>{label}</p>
    </div>
  );
};

export default Tooltips;
