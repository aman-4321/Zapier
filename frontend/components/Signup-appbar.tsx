"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";

export const SignupAppbar = () => {
  const router = useRouter();
  return (
    <div className="flex border-b justify-between p-4 bg-white">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex flex-col justify-center text-2xl font-extrabold text-black pl-6 cursor-pointer ml-20"
      >
        Zapier
      </div>
      <div className="flex">
        <div className="pr-4 mr-96">
          <LinkButton
            onClick={() => {
              router.push("/login");
            }}
          >
            Log in
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
