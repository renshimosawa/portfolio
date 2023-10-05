"use client";

import React from "react";

interface props {
  className?: string;
}

const currentYear = new Date();

const Footer: React.FC<props> = ({ className }) => {
  return (
    <footer className={`w-full flex p-4 justify-center ${className}`}>
      <p className="text-xs align-bottom">
        Historedge.com by Ren Shimosawa @copyright 2020-
        {currentYear.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
