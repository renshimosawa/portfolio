"use client";

export type Props = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Card: React.FC<Props> = ({ children, className, style }) => (
  <div className={`bg-[#fcfdff] border-0 shadow ${className}`} style={style}>
    {children}
  </div>
);

export default Card;
