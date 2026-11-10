import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  MapPin,
  MessageCircle,
  RefreshCcw,
  Sparkles,
  Wand2,
} from "lucide-react";
import { CommitGrid, HoverLift, Reveal, StaggerGroup, StaggerItem, TypeReveal } from "@/components/motion";

const INSTAGRAM_URL = "https://www.instagram.com/issei.kurashi.kaizen/";

const works = [
  {
    name: "飛翔塾",
    genre: "学習塾",
    image: "/works/juku.jpg",
    url: "https://juku-hp-template.vercel.app/",
    description: "青森市富田地区、30年以上の指導実績を持つ個別学習塾。地域密着の信頼感を軸に設計。",
  },
  {
    name: "はまなすピアノ教室",
    genre: "ピアノ教室",
    image: "/works/hamanasu.jpg",
    url: "https://hamanasu-piano-template.vercel.app/",
    description: "松原・はまなす2会場の個人ピアノ教室。旋律をモチーフにした装飾と温かみのある配色。",
  },
  {
    name: "トリミングサロン マニマニ",
    genre: "ペットトリミング",
    image: "/works/manimani.jpg",
    url: "https://manimani-trimming-template.vercel.app/",
    description: "青森市南佃のトリミングサロン。わんちゃんへの愛情が伝わる、やわらかく力強いタイポグラフィ。",
  },
  {
    name: "Cucina italiana Catari,Catari",
    genre: "料理教室",
    image: "/works/catari.jpg",
    url: "https://catari-catari-template.vercel.app/",
    description: "本場イタリアで修行したシェフの料理教室。素材の温度感を活かしたアースカラーで構成。",
  },
  {
    name: "Betty.",
    genre: "まつげエクステサロン",
    image: "/works/betty.jpg",
    url: "https://miki-betty-lash-template.vercel.app/",
    description: "全国大会入賞歴を持つまつげエクステサロン。確かな技術を静かな自信で伝えるデザイン。",
  },
];

const values = [
  {
    icon: MapPin,
    title: "地域密着",
    body: "青森市在住。地元のお店・教室だからこそ分かる文脈を、サイトの言葉選びや構成に反映します。",
  },
  {
    icon: Wand2,
    title: "AI活用 × 手作業の仕上げ",
    body: "Claude Codeを使い、量産ではなく一軒ごとに作り込む時間に充てています。配色・文章は必ず目視で調整。",
  },
  {
    icon: RefreshCcw,
    title: "作って終わりにしない",
    body: "公開後は月額の運用契約で、文言修正や写真差し替えなど実際の変化に合わせて更新し続けます。",
  },
];

const steps = [
  {
    label: "ご相談",
    mono: "STEP / 01",
    body: "InstagramのDMまたはお電話で、現状のお悩みやご希望をお聞きします。",
  },
  {
    label: "ヒアリング・ご提案",
    mono: "STEP / 02",
    body: "営業時間や強みなど実際の情報をもとに、構成・デザイン・お見積りをご提案します。",
  },
  {
    label: "制作",
    mono: "STEP / 03",
    body: "ご了承いただいた内容で制作。公開前に必ずご確認いただきます。",
  },
  {
    label: "公開・月次運用",
    mono: "STEP / 04",
    body: "公開後は月額契約で、文言修正や写真差し替えなどの更新作業を継続して承ります。",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border-soft bg-surface/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-lg font-bold tracking-tight text-ink">issei</span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
            <a href="#works" className="hover:text-brand">制作実績</a>
            <a href="#pricing" className="hover:text-brand">料金</a>
            <a href="#process" className="hover:text-brand">進め方</a>
          </nav>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-brand"
          >
            InstagramでDM
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <Reveal onMount>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-brand-soft px-4 py-1.5 font-mono text-xs tracking-wide text-brand-dark">
                AOMORI / WEB CODER
              </span>
            </Reveal>

            <TypeReveal
              as="h1"
              onMount
              startDelay={0.3}
              text="地域のお店に、"
              className="mt-6 text-4xl font-black leading-[1.2] font-heading text-ink sm:text-6xl"
            />
            <TypeReveal
              as="h1"
              onMount
              startDelay={1.0}
              text="ちゃんと効くサイトを。"
              className="text-4xl font-black leading-[1.2] font-heading text-ink sm:text-6xl"
            />

            <Reveal delay={1.6} onMount className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              青森市在住のWebコーダー、issei(いっせい)です。学習塾・教室・サロンなど、サイトを持たない地域のお店に向けて、ホームページ制作と月額での運用を行っています。
            </Reveal>

            <Reveal delay={1.8} onMount className="mt-8 flex flex-wrap gap-4">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Instagramで相談する
              </Link>
              <a
                href="#pricing"
                className="rounded-full border border-border-soft bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                料金を見る
              </a>
            </Reveal>

            <Reveal delay={2.0} onMount className="mt-14">
              <CommitGrid className="max-w-md opacity-80" />
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-border-soft bg-surface px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <StaggerGroup className="grid gap-8 sm:grid-cols-3">
              {values.map((v) => (
                <StaggerItem key={v.title} className="flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wide text-brand-dark">WORKS</span>
              <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">制作実績(ご提案デモ)</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                いずれも、青森市内の実在するお店・教室に向けて先にお作りしたご提案用のデモサイトです。
                正式に契約・公開済みのものではなく、ご興味を持っていただけた場合に内容を調整のうえ公開します。
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {works.map((w) => (
                <StaggerItem key={w.name}>
                  <HoverLift className="group h-full overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm">
                    <Link href={w.url} target="_blank" rel="noopener noreferrer">
                      <div className="relative aspect-[4/3] overflow-hidden border-b border-border-soft bg-background">
                        <Image
                          src={w.image}
                          alt={`${w.name}のデモサイト`}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-heading text-base font-bold text-ink">{w.name}</span>
                          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
                            {w.genre}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
                      </div>
                    </Link>
                  </HoverLift>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-y border-border-soft bg-surface px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wide text-brand-dark">PROCESS</span>
              <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">ご依頼の進め方</h2>
            </Reveal>

            <div className="relative mt-12 space-y-10 border-l border-border-soft pl-8">
              {steps.map((s) => (
                <Reveal key={s.label} className="relative">
                  <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full border-2 border-brand bg-surface" />
                  <span className="font-mono text-xs tracking-wide text-brand-dark">{s.mono}</span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-ink">{s.label}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wide text-brand-dark">PRICING</span>
              <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">料金</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                モニター価格ではなく、最初から適正価格でご案内しています。内容はお店の状況に合わせて個別にご相談いただけます。
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
              <StaggerItem>
                <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-7">
                  <span className="w-fit rounded-full bg-badge-standard/10 px-3 py-1 text-xs font-semibold text-badge-standard">
                    スタンダード
                  </span>
                  <p className="mt-5 font-heading text-3xl font-black text-ink">98,000円〜</p>
                  <p className="mt-1 text-sm text-ink-soft">+ 月額 12,000円</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-soft">
                    <li>・公開後の運用・保守</li>
                    <li>・月次の文言/写真更新代行</li>
                    <li>・Googleビジネスプロフィール整備</li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex h-full flex-col rounded-2xl border-2 border-brand bg-surface p-7 shadow-md">
                  <span className="w-fit rounded-full bg-badge-premium/10 px-3 py-1 text-xs font-semibold text-badge-premium">
                    プレミアム
                  </span>
                  <p className="mt-5 font-heading text-3xl font-black text-ink">148,000円〜</p>
                  <p className="mt-1 text-sm text-ink-soft">+ 月額 25,000円</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-soft">
                    <li>・スタンダードの内容すべて</li>
                    <li>・予約/LINE導線の構築</li>
                    <li>・口コミを集める仕組み、季節ページ追加</li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-7">
                  <span className="w-fit rounded-full bg-badge-installment/10 px-3 py-1 text-xs font-semibold text-badge-installment">
                    分割プラン
                  </span>
                  <p className="mt-5 font-heading text-3xl font-black text-ink">初期0円</p>
                  <p className="mt-1 text-sm text-ink-soft">月額 18,000円(最低24ヶ月)</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-soft">
                    <li>・スタンダードと同内容</li>
                    <li>・初期費用を抑えたい方向け</li>
                    <li>・24ヶ月総額はスタンダードより高くなります</li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="bg-ink px-6 py-20 text-background">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <Sparkles className="mx-auto h-8 w-8 text-brand" strokeWidth={1.5} />
              <h2 className="mt-5 font-heading text-3xl font-black sm:text-4xl">
                まずは気軽にご相談ください。
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
                見積もり・ご相談は無料です。InstagramのDMで、お店の名前と知りたいことをひと言お送りください。
              </p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                InstagramでDMする
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-soft bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-foreground/60">
          <span className="flex items-center gap-2 font-mono font-semibold text-ink">
            <Code2 className="h-4 w-4" strokeWidth={2} />
            issei
          </span>
          <span>青森市 / Webコーダー</span>
          <span>
            Instagram:{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline">
              @issei.kurashi.kaizen
            </a>
          </span>
          <span className="mt-4">© 2026 issei</span>
        </div>
      </footer>
    </>
  );
}
