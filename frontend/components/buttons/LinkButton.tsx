"use client";

import { ReactNode } from "react";

export const LinkButton = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center px-2 py-2 cursor-pointer hover:bg-slate-100 font-light text-sm rounded text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
