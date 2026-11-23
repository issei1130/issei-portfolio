"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Panel = {
  narration: string;
  bubble: string;
  sfx: string;
  chara: string;
  charaAlt: string;
  span: string;
  clip: string;
  lines: "burst" | "vertical" | "none";
  flip?: boolean;
};

const PANELS: Panel[] = [
  {
    narration: "まずは、読みこむ。",
    bubble: "Instagramの投稿を、ぜんぶ読みます。強みは、だいたいそこに書いてある。",
    sfx: "じっ…",
    chara: "/chara/chibi-think.webp",
    charaAlt: "考えこむisseiのミニキャラ",
    span: "md:col-span-4",
    clip: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
    lines: "vertical",
  },
  {
    narration: "先に、つくる。",
    bubble: "その店のためだけの見本を、先につくってお見せします。",
    sfx: "ドン!",
    chara: "/chara/chibi-point.webp",
    charaAlt: "指さすisseiのミニキャラ",
    span: "md:col-span-2",
    clip: "polygon(4% 0, 100% 0, 100% 100%, 0 100%)",
    lines: "burst",
  },
  {
    narration: "一緒に、直す。",
    bubble: "写真も文章も、本物に差し替えます。文章はこちらで書きます。",
    sfx: "よし!",
    chara: "/chara/chibi-ok.webp",
    charaAlt: "OKサインをするisseiのミニキャラ",
    span: "md:col-span-2",
    clip: "polygon(0 0, 100% 0, 100% 100%, 0 96%)",
    lines: "none",
  },
  {
    narration: "公開して、育てる。",
    bubble: "公開したあとも、月1回の更新。LINEかDMで、ひと言どうぞ。",
    sfx: "毎月!",
    chara: "/chara/chibi-a.webp",
    charaAlt: "手を振るisseiのミニキャラ",
    span: "md:col-span-4",
    clip: "polygon(3% 0, 100% 0, 100% 100%, 0 100%)",
    lines: "burst",
  },
];

function Lines({ kind }: { kind: Panel["lines"] }) {
  if (kind === "none") return <div className="halftone absolute inset-0" />;
  if (kind === "vertical") {
    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
        {Array.from({ length: 34 }, (_, i) => (
          <line key={i} x1={(i * 3.1) % 100} y1="0" x2={(i * 3.1) % 100} y2={30 + ((i * 17) % 50)} stroke="#15171c" strokeWidth={0.15 + (i % 3) * 0.1} opacity="0.5" />
        ))}
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="-100 -100 200 200" aria-hidden>
      {Array.from({ length: 40 }, (_, i) => {
        const a = (i / 40) * Math.PI * 2;
        const r = 45 + ((i * 13) % 20);
        const q = (n: number) => Math.round(n * 10) / 10;
        return <line key={i} x1={q(Math.cos(a) * r)} y1={q(Math.sin(a) * r)} x2={q(Math.cos(a) * 160)} y2={q(Math.sin(a) * 160)} stroke="#15171c" strokeWidth={0.4 + (i % 3) * 0.3} opacity="0.55" />;
      })}
    </svg>
  );
}

export function Manga() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-paper px-5 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-[11px] tracking-[0.4em] text-amber-dark">HOW IT WORKS</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
            isse! の仕事、
            <br />
            4コマで。
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:gap-5">
          {PANELS.map((pn, i) => (
            <motion.article
              key={pn.narration}
              className={`relative min-h-[300px] sm:min-h-[340px] ${pn.span}`}
              initial={{ opacity: 0, scale: 1.12, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: (i % 2) * 0.12 }}
            >
              <div className="absolute inset-0 bg-ink" style={{ clipPath: pn.clip }} />
              <div className="absolute inset-[4px] overflow-hidden bg-cream" style={{ clipPath: pn.clip }}>
                <Lines kind={pn.lines} />

                <motion.div
                  className="absolute bottom-0 right-3 w-36 sm:w-44"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + (i % 2) * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={pn.chara} alt={pn.charaAlt} width={612} height={700} sizes="180px" />
                </motion.div>

                <p className="absolute left-0 top-0 bg-ink px-4 py-2 font-display text-sm text-cream sm:text-base">
                  {pn.narration}
                </p>

                <motion.div
                  className="absolute left-4 top-16 max-w-[62%] sm:max-w-[55%]"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.5 + (i % 2) * 0.12 }}
                  style={{ transformOrigin: "80% 100%" }}
                >
                  <div className="relative rounded-[28px] border-[3px] border-ink bg-white px-5 py-4 text-[14px] font-bold leading-[1.8] text-ink sm:text-[15px]">
                    {pn.bubble}
                    <span className="absolute -bottom-[14px] right-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-white" />
                  </div>
                </motion.div>

                <motion.p
                  className="sfx absolute bottom-6 left-5 text-4xl sm:text-5xl"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: [0, 1.3, 1], rotate: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 + (i % 2) * 0.12, duration: 0.5 }}
                  aria-hidden
                >
                  {pn.sfx}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
