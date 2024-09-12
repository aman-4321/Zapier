import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  description: string;
  link: string;
  children?: React.ReactNode;
  className?: string;
  linkname: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  description,
  link,
  children,
  name,
  linkname,
  className = "",
}) => {
  return (
    <div
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white ${className}`}
    >
      <a href={link}>
        <Image
          className="rounded-t-lg"
          src={imageSrc}
          alt={description}
          width={500}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            {children}
          </h5>
        </a>
        <div className="text-black font-semibold text-2xl font-sans mb-2">
          <p>{name}</p>
        </div>
        <p className="mb-3 font-normal text-black dark:text-black">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-1 py-2 text-l font-medium text-black underline hover:underline dark:bg-white"
        >
          {linkname}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
