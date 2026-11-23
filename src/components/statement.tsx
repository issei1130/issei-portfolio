"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const LINES = [
  "あなたのお店の、いちばんの持ち味は何ですか。",
  "お客さんは、何を見て来てくれていますか。",
  "その答えを、先にサイトの形にしてお見せします。",
];

function Char({ ch, p, start, end }: { ch: string; p: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(p, [start, end], [0.14, 1]);
  return <motion.span style={{ opacity }}>{ch}</motion.span>;
}

/** スクロールに合わせて、文字が1字ずつ灯っていく */
export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const total = LINES.join("").length;
  let index = 0;

  return (
    <section ref={ref} className="relative bg-night px-6 py-40 sm:py-56">
      <div className="mx-auto max-w-4xl">
        <p className="font-display text-[11px] tracking-[0.4em] text-amber">QUESTION</p>
        <div className="mt-10 space-y-6 font-display text-[1.7rem] leading-[1.6] text-cream sm:text-5xl sm:leading-[1.55]">
          {LINES.map((line) => (
            <p key={line}>
              {[...line].map((ch) => {
                const i = index++;
                const start = (i / total) * 0.9;
                return <Char key={i} ch={ch} p={p} start={start} end={start + 0.06} />;
              })}
            </p>
          ))}
        </div>
        <p className="mt-16 max-w-xl text-[15px] leading-[2.1] text-cream/70">
          isse! は、青森のお店や教室、職人さんのための、小さなホームページ工房です。
          Instagramや口コミに書かれている、その店だけの強みを見つけて、お客さんや働きたい人が入ってくる形にします。
        </p>
      </div>
    </section>
  );
}
