"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { PrimaryButton } from "./buttons/PrimaryButton";

interface ArrowIconProps {
  isOpen: boolean;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="flex items-center text-black cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="mr-1">{text}</span>
      <ArrowIcon isOpen={isOpen} />
    </div>
  );
};

export const Appbar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex border-b justify-between p-4 bg-white">
      <div className="flex items-center">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="text-2xl font-extrabold text-black pr-6 cursor-pointer"
        >
          Zapier
        </div>
        <nav className="flex space-x-6">
          <NavItem text="Product" />
          <NavItem text="Solution" />
          <NavItem text="Resources" />
          <NavItem text="Enterprise" />
          <NavItem text="Pricing" />
        </nav>
      </div>
      <div className="flex items-center">
        <div className="pr-4">
          <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
        </div>
        <div className="pr-4">
          <LinkButton
            onClick={() => {
              router.push("/login");
            }}
          >
            Log in
          </LinkButton>
        </div>
        <PrimaryButton
          onClick={() => {
            router.push("/signup");
          }}
        >
          Signup
        </PrimaryButton>
      </div>
    </div>
  );
};
