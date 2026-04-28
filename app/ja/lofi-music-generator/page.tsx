import type { Metadata } from "next";
import Link from "next/link";
import { SCENE_PAGES, SCENE_TRACKS, SITE_URL, TRUST_ITEMS } from "@/lib/constants";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Footer from "@/components/Footer";
import { SceneNav, SeoTextSection } from "@/components/SceneNav";

const page = SCENE_PAGES[1];
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: `${SITE_URL}${page.route}`,
    languages: { en: `${SITE_URL}${page.enRoute}`, ja: `${SITE_URL}${page.route}` },
  },
  openGraph: { title: page.title, description: page.description, url: `${SITE_URL}${page.route}`, siteName: "Tunee", type: "website", locale: "ja_JP" },
  twitter: { card: "summary_large_image" },
};

const tracks = SCENE_TRACKS["lofi-bgm"];

const moods = [
  { emoji: "☕", name: "雨の日のカフェ", desc: "Lo-fiジャズ。温もり。", bg: "from-[#f0e8da] to-[#faf6f0]" },
  { emoji: "🌙", name: "深夜の集中", desc: "アンビエント。ビートなし。", bg: "from-[#e8e0d5] to-[#f5ede2]" },
  { emoji: "🌿", name: "朝のルーティン", desc: "爽やかアコースティック。", bg: "from-[#e2ede0] to-[#f2f8f0]" },
  { emoji: "🎧", name: "Lofi Hip Hop", desc: "チルなビート。夜向け。", bg: "from-[#e0e0ee] to-[#f0f0f8]" },
];

export default function LofiBgmPage() {
  return (
    <div className="bg-[#faf6f0] text-[#3d2c1e]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#faf6f0]/90 backdrop-blur-xl border-b border-[#ece4d8] h-14 flex items-center justify-between px-8">
        <Link href="https://www.tunee.ai/ja" className="font-bold text-lg text-work-dark">Tunee<span className="text-work-primary">.</span></Link>
        <Link href="https://www.tunee.ai/ja" className="bg-work-dark text-[#faf6f0] px-5 py-2 rounded-full text-[13px] font-semibold">無料で始める</Link>
      </nav>

      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col justify-center items-center text-center px-10 py-20 relative">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='.5' fill='%23ddd0c0'/%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-[620px]">
          <div className="inline-flex gap-2 bg-work-primary/[0.06] border border-work-primary/[0.12] px-5 py-1.5 rounded-full text-[13px] text-work-primary mb-8">☕ 作業用BGM × AI</div>
          <h1 className="font-playfair text-[clamp(32px,5.5vw,54px)] font-medium leading-[1.25] mb-6">
            <em className="italic text-work-primary">&ldquo;ちょうどいい&rdquo;</em><br />作業用BGM、もう探さなくていい。
          </h1>
          <p className="text-[15px] text-[#8b7355] mb-10 leading-relaxed font-light">
            集中力を高めるLo-fi、カフェ風ジャズ、チルアンビエント。<br />Tuneeが、あなたの作業リズムに合わせたBGMを丁寧に生成します。
          </p>
          <Link href="https://www.tunee.ai/ja" className="inline-block bg-work-dark text-[#faf6f0] px-10 py-4 rounded-full font-semibold text-[15px] tracking-wide hover:bg-work-primary hover:-translate-y-0.5 transition-all">
            無料で作業用BGMを作る →
          </Link>
          <div className="flex gap-3.5 justify-center mt-6 flex-wrap">
            <span className="text-[13px] text-[#a09080]">🔒 著作権フリー</span>
            <span className="text-[13px] text-[#a09080]">·</span>
            <span className="text-[13px] text-[#a09080]">✅ 商用利用OK</span>
            <span className="text-[13px] text-[#a09080]">·</span>
            <span className="text-[13px] text-[#a09080]">📺 YouTube配信対応</span>
          </div>
        </div>
      </section>

      {/* Mood Picker */}
      <section className="px-10 py-20 max-w-[880px] mx-auto text-center">
        <h2 className="font-playfair text-[clamp(22px,3vw,28px)] font-medium mb-2.5">今の気分は？</h2>
        <p className="text-[#8b7355] text-sm mb-9">気分やシーンを伝えるだけで、AIがあなた専用のBGMを生成します。</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {moods.map((m) => (
            <div key={m.name} className={`bg-gradient-to-b ${m.bg} p-6 rounded-2xl text-center border-2 border-transparent hover:border-work-primary/15 hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-default`}>
              <span className="text-3xl block mb-2.5">{m.emoji}</span>
              <div className="text-[15px] font-semibold mb-1">{m.name}</div>
              <div className="text-xs text-[#a09080]">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="bg-[#f5ede2] px-10 py-20">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-playfair text-[clamp(22px,3vw,28px)] font-medium mb-2.5">こんなBGMが生まれます。</h2>
          <p className="text-[#8b7355] text-sm mb-9">プロンプト例つき。同じ言葉を入力するだけで作れます。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <AudioPlayer key={t.id} track={t} variant="vinyl" />
            ))}
          </div>
        </div>
      </section>

      {/* Conversational Pain/Solution */}
      <section className="px-10 py-20">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-playfair text-[clamp(22px,3vw,26px)] font-medium text-center mb-9">こんな会話から、BGMが生まれます。</h2>
          <div className="mb-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-[4px] text-sm text-[#5a4633] border border-[#ece4d8] max-w-[82%] mb-2.5">
              YouTube作業用BGMを流してるんだけど、広告が入るたびに集中切れるんだよね…
            </div>
            <div className="bg-work-dark text-[#faf6f0] p-4 rounded-2xl rounded-tl-[4px] text-sm max-w-[82%] ml-auto leading-relaxed mb-5">
              Tuneeなら、<strong className="text-[#e8c8a0]">自分だけのBGMが作れるの</strong>で、広告なしで集中し放題。毎回違う曲で飽きません。
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded-2xl rounded-bl-[4px] text-sm text-[#5a4633] border border-[#ece4d8] max-w-[82%] mb-2.5">
              作業用BGMのYouTubeチャンネルを始めたいけど、使える曲がなくて…
            </div>
            <div className="bg-work-dark text-[#faf6f0] p-4 rounded-2xl rounded-tl-[4px] text-sm max-w-[82%] ml-auto leading-relaxed">
              生成した楽曲は<strong className="text-[#e8c8a0]">商用利用OK・著作権フリー</strong>。そのままYouTubeにアップして、広告収入を得られます。
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f0e8da] px-10 py-20">
        <div className="max-w-[780px] mx-auto text-center">
          <h2 className="font-playfair text-[clamp(22px,3vw,26px)] font-medium mb-9">3ステップで、あなただけのBGMを。</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", title: "気分を伝える", desc: "「コーディング中に聴くBGM」「読書用ピアノ」など。" },
              { n: "02", title: "AIが生成・調整", desc: "「スローに」「ドラム抜いて」と微調整も。" },
              { n: "03", title: "自分で聴く、または配信する", desc: "自分用に。YouTube配信にも。" },
            ].map((s) => (
              <div key={s.n} className="p-5 text-center">
                <div className="font-playfair text-[44px] text-work-primary/[0.1] mb-2.5">{s.n}</div>
                <h3 className="text-[14px] font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-[#8b7355] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust pills */}
      <div className="flex flex-wrap gap-2.5 justify-center py-11 px-10">
        {["🔒 著作権フリー", "✅ 商用利用OK", "📺 作業用BGM配信対応", "🌏 日本語対応", "🔄 いつでも解約", "💳 カード不要"].map((t) => (
          <span key={t} className="text-[13px] text-[#5a4633] bg-white border border-[#ece4d8] px-5 py-2.5 rounded-full">{t}</span>
        ))}
      </div>

      {/* CTA */}
      <section className="text-center py-24 px-10 bg-work-dark text-[#faf6f0]">
        <h2 className="font-playfair text-[clamp(24px,3.5vw,34px)] font-medium mb-3.5">
          次のコーヒーを淹れる間に、<br />あなただけのBGMが完成します。
        </h2>
        <p className="text-[#faf6f0]/40 mb-7 text-[15px] font-light">
          クレジットカード不要・無料で始められます。<br />
          <span className="text-xs opacity-60">✨ 30秒で登録完了・いつでも解約OK</span>
        </p>
        <Link href="https://www.tunee.ai/ja" className="inline-block bg-work-primary text-white px-10 py-4 rounded-full font-semibold text-[15px] hover:bg-work-light hover:-translate-y-0.5 transition-all">
          無料で作業用BGMを作る →
        </Link>
      </section>

      <SeoTextSection sceneKey="lofi-bgm" theme="warm" />
      <SceneNav currentKey="lofi-bgm" theme="warm" />
      <Footer theme="warm" />
    </div>
  );
}
