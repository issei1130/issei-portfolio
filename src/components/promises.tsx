"use client";

import { motion } from "framer-motion";

const WORDS = ["見本が先", "店ごとに一から", "AI × 手作業", "公開してからが本番", "青森のお店のために"];

const PROMISES = [
  {
    kanji: "地",
    title: "地域密着",
    body: "青森で暮らしているからこそ分かる文脈を、サイトの言葉選びや構成に反映します。",
  },
  {
    kanji: "技",
    title: "AI活用 × 手作業の仕上げ",
    body: "Claude Codeを使い、量産ではなく一軒ごとに作り込む時間に充てています。配色・文章は必ず目視で調整。",
  },
  {
    kanji: "続",
    title: "作って終わりにしない",
    body: "公開後は月額の運用契約で、文言修正や写真差し替えなど実際の変化に合わせて更新し続けます。",
  },
];

export function Promises() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      {/* 流れる言葉 */}
      <div className="flex overflow-hidden border-y border-cream/10 py-5" aria-hidden>
        <div className="marquee flex shrink-0 gap-12 whitespace-nowrap pr-12 font-display text-3xl sm:text-5xl">
          {[...WORDS, ...WORDS].map((w, i) => (
            <span key={i} className={i % 2 ? "outline-text" : "text-amber"}>
              {w} <span className="text-cream/30">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-3">
        {PROMISES.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="sfx inline-block text-7xl"
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: [0, 1.25, 1], rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
              aria-hidden
            >
              {p.kanji}
            </motion.span>
            <h3 className="mt-5 font-display text-xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-[1.95] text-cream/70">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
