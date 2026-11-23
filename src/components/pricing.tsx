"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("ja-JP")}</span>;
}

const card = {
  hidden: { opacity: 0, y: 40, rotateX: -25 },
  show: { opacity: 1, y: 0, rotateX: 0 },
};

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden bg-deep px-5 py-28 sm:px-6">
      <p className="outline-text pointer-events-none absolute -right-10 top-10 select-none font-display text-[22vw] leading-none" aria-hidden>
        PRICE
      </p>
      <div className="relative mx-auto max-w-6xl">
        <p className="font-display text-[11px] tracking-[0.4em] text-amber">PRICING</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-6xl">料金</h2>
        <p className="mt-5 max-w-2xl text-sm leading-[1.95] text-cream/75">
          料金はひとつだけ。最初から適正価格でご案内しています。お支払いは、公開できる状態になってからです。
        </p>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]"
          style={{ perspective: 1000 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={card}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col rounded-3xl bg-amber p-8 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
          >
            <span className="w-fit rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">基本プラン</span>
            <p className="mt-6 font-display text-[2.7rem] leading-none sm:text-6xl">
              <CountUp to={77000} />
              <span className="text-2xl">円</span>
              <span className="ml-1 whitespace-nowrap text-sm font-bold">(税込)</span>
            </p>
            <p className="mt-2 text-sm font-bold">+ 月額 5,500円(税込)</p>
            <ul className="mt-7 flex-1 space-y-2 text-sm font-medium">
              <li>・トップページ+下層4ページまで</li>
              <li>・文章はこちらで書きます(修正2回まで)</li>
              <li>・お知らせは、スマホからご自分で更新できます</li>
              <li>・電話・LINE・Instagram・地図へのボタン</li>
              <li>・独自ドメインとGoogle検索の設定</li>
              <li>・公開から1か月は、細かい直しが無料</li>
            </ul>
          </motion.div>

          <motion.div
            variants={card}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-3xl border border-cream/15 bg-night-2/70 p-8 text-cream"
          >
            <span className="w-fit rounded-full border border-cream/30 px-3 py-1 text-xs font-bold">月額に含まれるもの</span>
            <ul className="mt-7 flex-1 space-y-2 text-sm text-cream/80">
              <li>・サーバー代、ドメイン代</li>
              <li>・表示の不具合の修正</li>
              <li>・月1回の更新(文言や写真の差し替え)</li>
              <li>・LINEかDMでひと言。3営業日以内に反映</li>
              <li>・最低12か月。解約は1か月前までにご連絡ください</li>
            </ul>
          </motion.div>

          <motion.div
            variants={card}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-3xl border border-cream/15 bg-night-2/70 p-8 text-cream"
          >
            <span className="w-fit rounded-full border border-cream/30 px-3 py-1 text-xs font-bold">必要なときだけ</span>
            <ul className="mt-7 flex-1 space-y-2 text-sm text-cream/80">
              <li>・ページの追加 1ページ 11,000円</li>
              <li>・同じ月の2回目からの更新 1回 3,300円</li>
              <li>・お店が指定するサーバーへの設置 +22,000円</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
