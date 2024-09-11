"use client";
import { useRouter } from "next/navigation";
import { Feature } from "./Feature";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondryButton";

export const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-6xl font-semibold text-center pt-16 text-black font-sans">
          Automate as fast as you can
          <div>type</div>
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className="text-2xl font-medium text-center pt-4 text-black mb-4">
          AI gives you automation superpowers, and Zapier puts them to work.
          Pairing AI and Zapier
          <div>
            helps you turn ideas into workflows and bots that work for you.
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="flex">
          <PrimaryButton
            onClick={() => {
              router.push("/signup");
            }}
            size="big"
          >
            Start free with email
          </PrimaryButton>
          <div className="pl-4">
            <SecondaryButton
              onClick={() => {
                router.push("/login");
              }}
              size="big"
            >
              Already a user?
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4 text-black">
        <Feature title={"Free Forever"} subtitle={"for core features"} />
        <Feature title={"More apps"} subtitle={"than any other platforms"} />
        <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
      </div>
    </div>
  );
};
