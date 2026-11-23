import { HeroScene } from "@/components/hero-scene";
import { Manga } from "@/components/manga";
import { Opening } from "@/components/opening";
import { Pricing } from "@/components/pricing";
import { Promises } from "@/components/promises";
import { Contact, Header } from "@/components/site-chrome";
import { Statement } from "@/components/statement";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <>
      <Opening />
      <Header />
      <main id="top">
        <HeroScene />
        <Statement />
        <div id="works" className="scroll-mt-0">
          <Works />
        </div>
        <Manga />
        <Promises />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
