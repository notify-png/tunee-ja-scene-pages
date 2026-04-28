import type { Metadata } from "next";
import Link from "next/link";
import { SCENE_PAGES, SCENE_TRACKS, SITE_URL, PRICING } from "@/lib/constants";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Footer from "@/components/Footer";
import { SceneNav, SeoTextSection } from "@/components/SceneNav";

const page = SCENE_PAGES[3];
export const metadata: Metadata = {
  title: page.title, description: page.description, keywords: page.keywords,
  alternates: { canonical: `${SITE_URL}${page.route}`, languages: { en: `${SITE_URL}${page.enRoute}`, ja: `${SITE_URL}${page.route}` } },
  openGraph: { title: page.title, description: page.description, url: `${SITE_URL}${page.route}`, siteName: "Tunee", type: "website", locale: "ja_JP" },
  twitter: { card: "summary_large_image" },
};

const tracks = SCENE_TRACKS["healing-bgm"];

const circleGradients = [
  "linear-gradient(180deg, #e8ede4, #f2f6f0)",
  "linear-gradient(180deg, #dae6f0, #eef3f8)",
  "linear-gradient(180deg, #f5ece0, #faf6f0)",
  "linear-gradient(180deg, #e8e0f0, #f2eff8)",
];

export default function HealingBgmPage() {
  return (
    <div className="bg-[#f9f7f4] text-[#3a3a3a] font-light">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#f9f7f4]/90 backdrop-blur-xl border-b border-[#e8e4de] h-14 flex items-center justify-between px-8">
        <Link href="https://www.tunee.ai/ja" className="font-cormorant text-[22px] font-medium text-[#3a3a3a]">Tunee<span className="text-heal-primary">.</span></Link>
        <Link href="https://www.tunee.ai/ja" className="bg-heal-primary text-white px-5 py-2 rounded-full text-[13px] font-medium">無料で始める</Link>
      </nav>

      {/* Hero with breathing animation */}
      <section className="min-h-[88vh] flex flex-col justify-center items-center text-center px-10 py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-heal-primary/[0.07] animate-breathe" />
        <div className="relative z-10 max-w-[560px]">
          <div className="text-[11px] tracking-[4px] uppercase text-heal-primary mb-9">瞑想 · 睡眠 · ヨガ · リラクゼーション</div>
          <h1 className="font-cormorant text-[clamp(34px,6vw,56px)] font-normal leading-[1.2] mb-6 text-[#2b2b2b]">
            あなたの<em className="italic text-heal-primary">静寂</em>を、<br />AIがデザインする。
          </h1>
          <p className="text-[15px] text-[#888] mb-10 leading-[2.2] font-light">
            Tuneeが、心と体に寄り添う音を一曲一曲、丁寧に。<br />著作権フリー・商用利用OK・JASRAC使用料不要。
          </p>
          <Link href="https://www.tunee.ai/ja" className="inline-block bg-heal-primary text-white px-11 py-4 rounded-full font-medium text-[15px] tracking-wide hover:bg-[#4a7a5a] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(90,138,106,0.12)] transition-all">
            無料でヒーリングBGMを作る →
          </Link>
          <div className="flex gap-3.5 justify-center mt-7 flex-wrap">
            <span className="text-xs text-[#aaa]">🔒 著作権フリー</span>
            <span className="text-xs text-[#aaa]">·</span>
            <span className="text-xs text-[#aaa]">🏪 JASRAC不要</span>
            <span className="text-xs text-[#aaa]">·</span>
            <span className="text-xs text-[#aaa]">📱 アプリ組込OK</span>
          </div>
        </div>
      </section>

      {/* Audio samples */}
      <section id="samples" className="bg-[#f2efe8] px-10 py-20">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="font-cormorant text-[clamp(22px,3vw,30px)] font-normal mb-2">こんな音が、生まれます。</h2>
          <p className="text-[#aaa] text-sm mb-9">▶ タップして、音を体感してください。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((t, i) => (
              <AudioPlayer key={t.id} track={t} variant="circle" gradientFrom={circleGradients[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Use cases (personas) */}
      <section className="px-10 py-20 max-w-[880px] mx-auto text-center">
        <h2 className="font-cormorant text-[clamp(22px,3vw,30px)] font-normal mb-10">こんな方に使われています。</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { icon: "🧘‍♀️", title: "ヨガスタジオ経営者", desc: "レッスンの雰囲気に合わせたBGMを自由に。JASRAC使用料が不要に。", tag: "JASRAC使用料ゼロ" },
            { icon: "📱", title: "瞑想アプリ開発者", desc: "開発コストを抑えながら、世界観に合ったBGMを。", tag: "アプリ組み込みOK" },
            { icon: "📺", title: "睡眠用BGM配信者", desc: "オリジナルBGMでYouTube配信。長時間再生で収益化達成しやすい。", tag: "YouTube収益化対応" },
          ].map((uc) => (
            <div key={uc.title} className="text-center p-6">
              <span className="text-3xl block mb-3">{uc.icon}</span>
              <h3 className="text-[15px] font-medium text-[#2b2b2b] mb-1.5">{uc.title}</h3>
              <p className="text-xs text-[#888] leading-relaxed mb-2.5">{uc.desc}</p>
              <span className="inline-block text-[11px] text-heal-primary bg-heal-primary/[0.06] px-3.5 py-1 rounded-full font-medium">{uc.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* JASRAC callout */}
      <section className="px-10 pb-10">
        <div className="max-w-[680px] mx-auto bg-white border-2 border-[#e4ede6] rounded-3xl p-10 text-center">
          <span className="text-3xl block mb-3.5">🏪</span>
          <h3 className="font-cormorant text-[22px] font-medium text-[#2b2b2b] mb-2.5">店舗BGMのJASRAC使用料、ゼロに。</h3>
          <p className="text-[13px] text-[#888] leading-[2] max-w-[520px] mx-auto">
            Tuneeで生成した楽曲は<strong className="text-heal-primary font-medium">JASRAC未登録のオリジナル</strong>です。
            ヨガスタジオ、マッサージ店、カフェで<strong className="text-heal-primary font-medium">追加の使用料なし</strong>で利用可能。
            月額${PRICING.basic.price}〜の定額プランで、お店の空間にぴったりの音楽を。いつでも解約可能。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f2efe8] px-10 py-20">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-cormorant text-[clamp(22px,3vw,26px)] font-normal text-center mb-10">ゆっくり、3ステップで。</h2>
          {[
            { n: "1", title: "どんな「癒し」が必要か伝える", desc: "「寝る前に聴く曲」「ヨガのシャヴァーサナ用」「マッサージ店のBGM」など。" },
            { n: "2", title: "AIが生成、音の質感を調整", desc: "「雨音をもっと大きく」「シンギングボウルを追加して」と会話でカスタマイズ。" },
            { n: "3", title: "使う、あるいは配信する", desc: "自分のリラックスタイムに。YouTube配信に。ヨガスタジオの店内BGMに。" },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 mb-8 items-start">
              <div className="w-11 h-11 rounded-full bg-[#e4ede6] flex items-center justify-center font-cormorant text-[17px] text-heal-primary flex-shrink-0">{s.n}</div>
              <div>
                <h3 className="text-[15px] font-medium text-[#2b2b2b] mb-1">{s.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust pills */}
      <div className="flex flex-wrap gap-2.5 justify-center py-12 px-10">
        {["🔒 著作権フリー", "✅ 商用利用OK", "🏪 JASRAC不要", "📱 アプリ組込OK", "📺 YouTube配信対応", "🌏 日本語対応", "🔄 いつでも解約", "💳 カード不要"].map((t) => (
          <span key={t} className="text-[13px] text-[#666] bg-white border border-[#e0ddd6] px-5 py-2.5 rounded-full">{t}</span>
        ))}
      </div>

      {/* CTA */}
      <section className="text-center py-28 px-10 bg-heal-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-white/[0.04] animate-breathe" />
        <div className="relative z-10">
          <h2 className="font-cormorant text-[clamp(24px,4vw,36px)] font-normal mb-3.5">静かに、はじめましょう。</h2>
          <p className="text-white/45 mb-8 text-[15px] font-light">
            クレジットカード不要・無料で始められます。<br />
            <span className="text-xs opacity-60">🔒 30秒で登録完了・いつでも解約OK</span>
          </p>
          <Link href="https://www.tunee.ai/ja" className="inline-block bg-white text-heal-primary px-11 py-4 rounded-full font-medium text-[15px] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.1)] transition-all">
            無料でヒーリングBGMを作る →
          </Link>
        </div>
      </section>

      <SeoTextSection sceneKey="healing-bgm" theme="zen" />
      <SceneNav currentKey="healing-bgm" theme="zen" />
      <Footer theme="zen" />
    </div>
  );
}
