"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import { Snow } from "./snow";

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 80));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-night/85 backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#top" aria-label="isse! トップへ">
          <Image src="/logo-light.png" alt="isse!" width={445} height={173} priority className="h-7 w-auto sm:h-8" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-cream/80 md:flex">
          <a href="#works" className="transition hover:text-amber">制作例</a>
          <a href="#process" className="transition hover:text-amber">進め方</a>
          <a href="#pricing" className="transition hover:text-amber">料金</a>
        </nav>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-cream sm:px-5 sm:text-sm"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
          InstagramでDM
        </a>
      </div>
    </header>
  );
}

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-night px-5 pb-16 pt-32 text-cream sm:px-6">
      <Snow />
      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          className="mx-auto flex items-end justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src="/logo-isse.png" alt="" width={366} height={173} className="h-20 w-auto sm:h-36" />
          <motion.span
            className="inline-block"
            animate={{ y: [0, -26, 0, -8, 0], scaleY: [1, 1.05, 0.85, 1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6 }}
            style={{ transformOrigin: "50% 100%" }}
          >
            <Image src="/logo-bang.png" alt="" width={79} height={173} className="h-20 w-auto sm:h-36" />
          </motion.span>
        </motion.div>

        <h2 className="mt-12 font-display text-3xl leading-snug sm:text-5xl">まずは気軽に、ひと言どうぞ。</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.95] text-cream/70">
          見積もり・ご相談は無料です。InstagramのDMで、お店の名前と知りたいことをひと言お送りください。
        </p>
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber px-9 py-5 font-display text-lg text-ink"
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
          InstagramでDMする
        </motion.a>

        <div className="mx-auto mt-16 w-40 sm:w-48">
          <Image src="/chara/chibi-bow.webp" alt="おじぎするisseiのミニキャラ" width={700} height={690} />
        </div>
      </div>

      <footer className="relative mx-auto mt-20 flex max-w-6xl flex-col gap-2 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <span>issei ／ 青森のWebコーダー</span>
        <span>
          Instagram:{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline">
            @issei.web.aomori
          </a>
        </span>
        <span>© 2026 issei</span>
      </footer>
    </section>
  );
}
