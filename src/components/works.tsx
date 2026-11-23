"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Work = {
  genre: string;
  place: string;
  image: string;
  url: string;
  description: string;
  isNew?: boolean;
};

const WORKS: Work[] = [
  {
    genre: "建築板金・屋根工事",
    place: "おいらせ町",
    image: "/works/endo.webp",
    url: "https://endo-bankin-template.vercel.app/",
    description: "職人さんの言葉を、そのまま見出しに。葺き方を触って見比べられる仕掛けと、雨が屋根から雨樋へ流れるスクロール。働きたい人に向けたページも。",
    isNew: true,
  },
  {
    genre: "学習塾",
    place: "青森市",
    image: "/works/school.jpg",
    url: "https://juku-hp-template.vercel.app/",
    description: "長年の指導実績という信頼感を軸に、保護者が知りたい順に情報を並べた構成。",
  },
  {
    genre: "ピアノ教室",
    place: "青森市",
    image: "/works/piano.jpg",
    url: "https://hamanasu-piano-template.vercel.app/",
    description: "旋律をモチーフにした装飾と、温かみのある配色。教室の雰囲気が先に伝わるように。",
  },
  {
    genre: "トリミングサロン",
    place: "青森市",
    image: "/works/grooming.jpg",
    url: "https://manimani-trimming-template.vercel.app/",
    description: "やわらかさと力強さを両立した書体。予約までの道筋を最短にした設計。",
  },
  {
    genre: "料理教室",
    place: "青森市",
    image: "/works/cooking.jpg",
    url: "https://catari-catari-template.vercel.app/",
    description: "素材の温度感を活かしたアースカラー。コースの内容と料金が迷わず分かる構成。",
  },
  {
    genre: "まつげサロン",
    place: "青森市",
    image: "/works/lash.jpg",
    url: "https://miki-betty-lash-template.vercel.app/",
    description: "静かな自信が伝わる余白と書体。予約手段へすぐに届く導線。",
  },
];

function Card({ w }: { w: Work }) {
  return (
    <a href={w.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-cream/10 bg-night-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        {/* ブラウザ風の枠 */}
        <div className="flex items-center gap-1.5 border-b border-cream/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={w.image}
            alt={`${w.genre}向けの見本サイトの画面`}
            fill
            sizes="(min-width: 768px) 60vw, 92vw"
            className="object-cover object-left-top transition duration-700 group-hover:scale-105"
          />
          {w.isNew && (
            <span className="sfx absolute right-4 top-3 rotate-6 text-3xl" aria-label="新着">
              NEW!
            </span>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <p className="font-display text-[11px] tracking-[0.3em] text-amber">{w.place}</p>
          <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{w.genre}</h3>
          <p className="mt-3 max-w-xl text-sm leading-[1.95] text-cream/70">{w.description}</p>
        </div>
        <span className="mt-1 inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-cream/30 px-4 py-2 text-xs font-bold text-cream transition group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
          見本を見る <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

function Heading() {
  return (
    <div>
      <p className="font-display text-[11px] tracking-[0.4em] text-amber">WORKS</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">先につくった、見本たち。</h2>
      <p className="mt-4 max-w-xl text-sm leading-[1.9] text-cream/65">
        どれも、そのお店に向けて先にお作りした提案用の見本です。正式に契約・公開したものではないため、店名は伏せ、業種名でご紹介しています。
      </p>
    </div>
  );
}

/** PC: 縦のスクロールで、見本が横に流れていく。スマホ: 縦に並べる */
export function Works() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress: p } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(p, [0.05, 0.95], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      {/* PC */}
      <section ref={section} className="relative hidden bg-night md:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Heading />
          </div>
          <motion.div ref={track} className="mt-10 flex w-max gap-14 pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pr-[10vw]" style={{ x }}>
            {WORKS.map((w) => (
              <div key={w.url} className="w-[42vw] max-w-[600px]">
                <Card w={w} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* スマホ */}
      <section className="bg-night px-5 py-24 md:hidden">
        <Heading />
        <div className="mt-12 space-y-16">
          {WORKS.map((w) => (
            <motion.div
              key={w.url}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card w={w} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
