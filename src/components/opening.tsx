"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** 集中線（中心から外へ伸びる線） */
function SpeedLines() {
  const lines = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    const r1 = 120 + ((i * 37) % 60);
    const w = 1 + ((i * 7) % 3);
    const r = (n: number) => Math.round(n * 10) / 10;
    return { x1: r(Math.cos(a) * r1), y1: r(Math.sin(a) * r1), x2: r(Math.cos(a) * 900), y2: r(Math.sin(a) * 900), w };
  });
  return (
    <svg viewBox="-600 -600 1200 1200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#f6efe3" strokeWidth={l.w} opacity="0.5" />
      ))}
    </svg>
  );
}

/** 読み込みの演出: 「isse」がせり上がり、「!」が落ちてきて着地する */
export function Opening() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduce ? 300 : 2300);
    document.documentElement.style.overflow = "hidden";
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-night"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* 「!」の着地で、集中線と画面の揺れ */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0.35], scale: [0.6, 1.1, 1] }}
            transition={{ delay: 1.05, duration: 0.6, ease: "easeOut" }}
          >
            <SpeedLines />
          </motion.div>

          <motion.div
            className="relative flex items-end"
            animate={{ x: [0, -10, 9, -5, 3, 0], y: [0, 6, -5, 3, 0, 0] }}
            transition={{ delay: 1.05, duration: 0.45 }}
          >
            <span className="block overflow-hidden">
              <motion.img
                src="/logo-isse.png"
                alt=""
                className="h-20 w-auto sm:h-32"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              />
            </span>
            <motion.img
              src="/logo-bang.png"
              alt=""
              className="h-20 w-auto sm:h-32"
              initial={{ y: "-120vh", rotate: -25 }}
              animate={{ y: 0, rotate: 0, scaleY: [1, 1, 0.82, 1.06, 1] }}
              transition={{
                y: { delay: 0.75, duration: 0.35, ease: "easeIn" },
                rotate: { delay: 0.75, duration: 0.35 },
                scaleY: { delay: 0.75, duration: 0.7, times: [0, 0.5, 0.62, 0.8, 1] },
              }}
              style={{ transformOrigin: "50% 100%" }}
            />
          </motion.div>

          <motion.p
            className="absolute bottom-12 font-display text-xs tracking-[0.4em] text-cream/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            AOMORI WEB WORKSHOP
          </motion.p>
          <span className="sr-only">isse! 青森のホームページ制作</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
