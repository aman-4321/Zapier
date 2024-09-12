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

const Card: React.FC<CardProps> = ({
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
      className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-white ${className}`}
    >
      <a href={link}>
        <Image
          className="rounded-t-lg w-full h-96 object-fill"
          src={imageSrc}
          alt={description}
          width={900}
          height={400}
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
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
          className="inline-flex items-center px-1 py-2 text-l font-semibold text-black underline hover:underline dark:text-black"
        >
          {linkname}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
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

export default function CardGrid() {
  return (
    <div className="container mx-auto px-32 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          name="Zaps"
          imageSrc="/zaps-v2_yos13r.avif"
          description="Design forms, web pages, and basic apps to power your business-critical workflows—no coding required."
          link="/"
          linkname="Explore Zaps"
        />
        <Card
          name="Interfaces"
          imageSrc="/interfaces-v2_saxap0.avif"
          description="Make your tools work harder for you. Build automated workflows with triggers and actions across 7,000+ apps."
          link="/"
          linkname="Explore Interfaces"
        />
        <Card
          name="Tables"
          imageSrc="/tables-v2_sb5vgu.avif"
          description="Store, edit, and move data with a database that's purpose-built for automation."
          link="/"
          linkname="Explore Tables"
        />
        <Card
          name="Chatbots"
          imageSrc="/zaps-v2_yos13r.avif"
          description="Build and automate customer conversations in minutes. Create custom AI chatbots that answer questions, resolve issues, and nurture leads."
          link="/"
          linkname="Explore Chatbots"
        />
      </div>
    </div>
  );
}
