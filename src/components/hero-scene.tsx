"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import { Snow } from "./snow";

const EASE = [0.16, 1, 0.3, 1] as const;
const START = 2.2; // オープニングが終わるころ

/**
 * 夜の港町に建つ工房の絵から、スクロールで窓の中へ入っていく。
 */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const sceneScale = useTransform(p, [0, 0.62], [1, 3.4]);
  const sceneBlur = useTransform(p, [0.4, 0.62], ["blur(0px)", "blur(6px)"]);
  const titleOpacity = useTransform(p, [0, 0.22], [1, 0]);
  const titleY = useTransform(p, [0, 0.22], [0, -80]);
  const charaX = useTransform(p, [0, 0.25], ["0%", "60%"]);
  const charaOpacity = useTransform(p, [0.12, 0.25], [1, 0]);
  const insideOpacity = useTransform(p, [0.48, 0.64], [0, 1]);
  const insideScale = useTransform(p, [0.48, 0.9], [1.25, 1]);
  const insideTextOpacity = useTransform(p, [0.62, 0.72, 0.9, 0.98], [0, 1, 1, 0]);
  const insideTextY = useTransform(p, [0.62, 0.72], [30, 0]);
  const toNight = useTransform(p, [0.9, 1], [0, 1]);
  const hintOpacity = useTransform(p, [0, 0.06], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-night" aria-label="isse! の工房">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* 外から見た工房 */}
        <motion.div className="zoom-origin absolute inset-0" style={{ scale: sceneScale, filter: sceneBlur }}>
          <Image src="/scene/hero-wide.webp" alt="" fill priority sizes="100vw" className="hidden object-cover md:block" />
          <Image src="/scene/hero-tall.webp" alt="" fill priority sizes="100vw" className="object-cover md:hidden" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-transparent to-night/50 md:bg-gradient-to-r md:from-night/85 md:via-night/30 md:to-transparent" />
        <Snow />

        {/* 窓の中 */}
        <motion.div className="absolute inset-0" style={{ opacity: insideOpacity }}>
          <motion.div className="absolute inset-0" style={{ scale: insideScale }}>
            <Image src="/scene/window-inside.webp" alt="" fill sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-night/45" />
        </motion.div>

        {/* 見出し */}
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start px-6 pt-32 md:justify-center md:pt-0"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.p
            className="flex items-center gap-3 font-display text-[11px] tracking-[0.35em] text-amber"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: START, duration: 0.8, ease: EASE }}
          >
            <span className="h-px w-10 bg-amber" />
            AOMORI WEB WORKSHOP
          </motion.p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.18] text-cream sm:text-6xl lg:text-7xl">
            {["地域のお店に、", "ちゃんと効く", "サイトを。"].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className={`block ${i === 2 ? "text-amber" : ""}`}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: START + 0.15 + i * 0.14, duration: 1, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-md text-[15px] leading-[2] text-cream/85"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: START + 0.7, duration: 0.9, ease: EASE }}
          >
            青森のWebコーダー、issei（いっせい）です。お店や教室、職人さんのホームページを、先に見本をつくってお見せするところから始めます。
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: START + 0.85, duration: 0.9, ease: EASE }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-cream"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
              Instagramで相談する
            </a>
            <a
              href="#works"
              className="inline-flex items-center rounded-full border border-cream/40 px-6 py-3.5 text-sm font-bold text-cream transition hover:border-cream"
            >
              制作例を見る
            </a>
          </motion.div>
        </motion.div>

        {/* 手を振る issei */}
        <motion.div
          className="pointer-events-none absolute bottom-0 right-2 z-10 w-36 sm:right-10 sm:w-52 lg:w-64"
          style={{ x: charaX, opacity: charaOpacity }}
        >
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: START + 0.5, duration: 0.9, ease: EASE }}
          >
            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ delay: START + 1.4, duration: 2.4, repeat: Infinity, repeatDelay: 1.5 }}
              style={{ transformOrigin: "50% 100%" }}
            >
              <Image src="/chara/chibi-a.webp" alt="手を振るisseiのミニキャラ" width={612} height={700} priority />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 窓の中に入ったときの言葉 */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
          style={{ opacity: insideTextOpacity, y: insideTextY }}
        >
          <p className="font-display text-3xl leading-[1.5] text-cream sm:text-5xl">
            ようこそ、
            <br />
            <span className="text-amber">isse!</span> の工房へ。
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center font-display text-[10px] tracking-[0.4em] text-cream/70"
          style={{ opacity: hintOpacity }}
        >
          SCROLL
          <motion.span
            className="mx-auto mt-3 block h-10 w-px bg-cream/60"
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0 z-20 bg-night" style={{ opacity: toNight }} />
      </div>
    </section>
  );
}
