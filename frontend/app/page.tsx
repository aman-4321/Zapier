import { Appbar } from "@/components/Appbar";
import { GreenPage } from "@/components/GreenPage";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <main className="pb-30 bg-white">
      <Appbar />
      <Hero />
      <div className="pt-8">
        <HeroVideo />
      </div>
      <div>
        <GreenPage></GreenPage>
      </div>
    </main>
  );
}
