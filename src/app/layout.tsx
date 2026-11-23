import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, Noto_Sans_JP } from "next/font/google";
import { AppMotionConfig } from "@/components/motion-config";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const SITE_URL = "https://issei-portfolio.vercel.app";
const SITE_TITLE = "issei | 青森のWebコーダー・ホームページ制作";
const SITE_DESCRIPTION =
  "青森のWebコーダー issei(いっせい)のポートフォリオ。地域のお店・教室・職人さん向けに、先に見本をつくってお見せするホームページ制作と、月額での運用を行っています。制作例と料金はこちらから。";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const dela = Dela_Gothic_One({
  variable: "--font-dela",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["青森 ホームページ制作", "青森 Web制作", "地域 ホームページ 運用", "issei"],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "issei portfolio",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1626",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${dela.variable} antialiased`}>
      <body className="font-sans">
        <AppMotionConfig>
          <SmoothScroll />
          {children}
        </AppMotionConfig>
      </body>
    </html>
  );
}
