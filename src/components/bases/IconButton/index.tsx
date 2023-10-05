"use client";

import Icon from "../IconCompo";

export type Props = {
  className?: string;

  type: IconType;
};

export type IconType = "facebook" | "github" | "gmail" | "twitter" | "zenn";

const IconButton: React.FC<Props> = ({ className, type }) => (
  <Icon type={type} className={className} />
);

export default IconButton;
