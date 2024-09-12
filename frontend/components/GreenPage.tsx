"use client";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { GreenHeroVideo } from "./Video";
import CardGrid from "./Card";

export const GreenPage: React.FC = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-full mt-14 pt-14 flex flex-col items-center"
      style={{
        backgroundColor: "#D8ECEA",
      }}
    >
      <div className="text-6xl font-semibold text-black mb-4 text-center">
        <div>Meet Zapier: Your new home</div>
        <div>to automate anything</div>
      </div>
      <div className="text-black text-center text-2xl font-normal font-sans">
        <div className="">
          You dream up what to automate—Zapier will handle the rest. Combine
          user interfaces, data
        </div>
        <div>
          tables, and logic with 7,000+ apps to build and automate anything you
          can imagine.
        </div>
        <div className="mt-4">
          Zapier will help you grow twice as fast, even without hiring another
          person.
        </div>
      </div>
      <PrimaryButton
        className="bg-yellow-950 px-20 mt-12 mb-12"
        size="big"
        onClick={() => {
          router.push("/");
        }}
      >
        Take a Tour
      </PrimaryButton>
      <GreenHeroVideo></GreenHeroVideo>
      <div className="text-black text-5xl font-semibold">
        Meet our automation products
      </div>
      <div>
        <CardGrid></CardGrid>
      </div>
    </div>
  );
};
