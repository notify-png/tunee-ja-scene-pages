import type { Metadata } from "next";
import Link from "next/link";
import { SCENE_PAGES, SCENE_TRACKS, SITE_URL, TRUST_ITEMS } from "@/lib/constants";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Footer from "@/components/Footer";
import { SceneNav, SeoTextSection } from "@/components/SceneNav";

const page = SCENE_PAGES[0];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: `${SITE_URL}${page.route}`,
    languages: { en: `${SITE_URL}${page.enRoute}`, ja: `${SITE_URL}${page.route}` },
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `${SITE_URL}${page.route}`,
    siteName: "Tunee",
    type: "website",
    locale: "ja_JP",
  },
  twitter: { card: "summary_large_image" },
};

const tracks = SCENE_TRACKS["video-bgm"];

const gradients: [string, string][] = [
  ["#ffecd2", "#fcb69f"],
  ["#a18cd1", "#fbc2eb"],
  ["#667eea", "#764ba2"],
  ["#c3cfe2", "#f5f7fa"],
];

export default function VideoBgmPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 h-14 flex items-center justify-between px-8">
        <Link href="https://www.tunee.ai/ja" className="font-extrabold text-lg">
          Tunee<span className="text-yt-primary">.</span>
        </Link>
        <Link
          href="https://www.tunee.ai/ja"
          className="bg-yt-primary text-white px-5 py-2 rounded-full text-[13px] font-bold hover:opacity-90 transition"
        >
          無料で始める
        </Link>
      </nav>

      {/* Hero */}
      <section className="min-h-[80vh] relative overflow-hidden flex items-center py-20 px-10">
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7ff] via-[#eee8ff] to-[#f5f0ff] -z-10">
          {/* Floating video frames */}
          {[
            "top-[10%] right-[5%] w-[140px] h-[80px] rotate-[5deg]",
            "top-[60%] right-[12%] w-[110px] h-[62px] -rotate-[3deg]",
            "top-[18%] left-[3%] w-[120px] h-[68px] -rotate-[6deg]",
            "bottom-[12%] left-[8%] w-[100px] h-[56px] rotate-[4deg]",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute ${cls} rounded-xl border-[1.5px] border-yt-primary/[0.08] bg-yt-primary/[0.03] flex flex-col items-center justify-center gap-1.5 animate-float`}
              style={{ animationDelay: `${i * 2}s`, animationDuration: `${14 + i * 2}s` }}
            >
              <div className="w-7 h-7 rounded-full bg-white/50 flex items-center justify-center text-xs text-yt-primary/20">
                ▶
              </div>
              <div className="w-[60%] h-[3px] bg-yt-primary/[0.06] rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-yt-primary/[0.15] rounded-full" />
              </div>
            </div>
          ))}
          {/* Soft orbs */}
          <div className="absolute -top-20 -right-16 w-[350px] h-[350px] rounded-full bg-yt-light/25 blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] rounded-full bg-yt-primary/20 blur-[80px]" />
        </div>

        {/* Content: two columns */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: text */}
          <div className="lg:text-left text-center">
            <div className="inline-flex gap-1.5 bg-yt-primary/[0.06] text-yt-primary px-4 py-1.5 rounded-full text-xs font-semibold border border-yt-primary/10 mb-5">
              🎬 AI動画BGMジェネレーター
            </div>
            <h1 className="font-dm text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.2] mb-4">
              動画BGMを、
              <br />
              <mark className="bg-gradient-to-r from-[#e0d4ff] to-[#c4b5fd] text-yt-primary px-2.5 rounded-lg">
                AIで数秒
              </mark>
              で。
            </h1>
            <p className="text-[15px] text-gray-500 mb-6 leading-relaxed">
              著作権フリー・収益化対応のBGMをAIが自動生成。
            </p>
            <div className="flex gap-3 mb-5 flex-wrap lg:justify-start justify-center">
              <Link
                href="https://www.tunee.ai/ja"
                className="inline-flex gap-2 bg-yt-primary text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_6px_24px_rgba(124,92,252,0.2)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(124,92,252,0.3)] transition-all"
              >
                まずは無料で作ってみる →
              </Link>
              <a
                href="#samples"
                className="inline-flex items-center gap-1.5 text-yt-primary px-6 py-3.5 font-semibold text-[15px] border border-yt-primary/15 rounded-full hover:bg-yt-primary/[0.04] transition-all"
              >
                ♪ サンプルを聴く ↓
              </a>
            </div>
            <div className="flex gap-2 flex-wrap lg:justify-start justify-center">
              {["🔒 著作権フリー", "✅ 収益化OK", "🛡️ Content ID対策"].map((b) => (
                <span
                  key={b}
                  className="text-[11px] text-gray-400 bg-white/80 px-3 py-1 rounded-full border border-gray-100"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: product mockup */}
          <div className="max-w-[420px] mx-auto lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {/* Window bar */}
              <div className="flex gap-1.5 items-center px-3.5 py-2.5 bg-[#fafafe] border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2.5 text-xs font-semibold text-gray-300">Tunee AI</span>
              </div>
              {/* Chat body */}
              <div className="p-4 min-h-[260px] flex flex-col gap-3.5 bg-[#fafafe]">
                {/* User message */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0">
                    👤
                  </div>
                  <div className="bg-yt-primary text-white px-3.5 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-relaxed max-w-[280px]">
                    料理動画用のBGMが欲しい。
                    <br />
                    カフェ風ジャズで1分30秒。
                  </div>
                </div>
                {/* AI reply */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e0d4ff] to-[#c4b5fd] flex items-center justify-center text-sm flex-shrink-0">
                    🎵
                  </div>
                  <div className="bg-white border border-gray-100 px-3.5 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-relaxed max-w-[280px]">
                    カフェ風ジャズBGMを生成しました！
                    {/* Mini player */}
                    <div className="flex items-center gap-2 mt-2.5 p-2.5 bg-purple-50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-yt-primary text-white flex items-center justify-center text-[10px] flex-shrink-0">
                        ▶
                      </div>
                      <div className="flex-1 h-5 flex items-end gap-[1.5px]">
                        {Array.from({ length: 30 }, (_, i) => (
                          <span
                            key={i}
                            className="flex-1 rounded-sm bg-yt-primary min-w-[2px]"
                            style={{
                              height: `${3 + ((i * 17 + 7) % 17)}px`,
                              opacity: 0.15 + ((i * 13 + 3) % 10) * 0.04,
                            }}
                          />
                        ))}
                      </div>
                      <span className="font-dm text-[11px] text-gray-400 font-medium">
                        1:30
                      </span>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {["ジャズ", "カフェ", "Lo-fi"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-yt-primary font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Input */}
                <div className="flex items-center gap-2 bg-white border-t border-gray-100 -mx-4 -mb-4 px-3 py-2.5">
                  <div className="flex-1 text-xs text-gray-300 px-3 py-2 bg-[#fafafe] rounded-full border border-gray-100">
                    メッセージを入力...（日本語OK）
                  </div>
                  <div className="w-7 h-7 rounded-full bg-yt-primary text-white flex items-center justify-center text-xs flex-shrink-0">
                    ↑
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-[#fafafe] px-10 py-16">
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-[clamp(22px,3vw,28px)] font-extrabold text-center mb-9">
            こう変わります。
          </h2>
          {[
            {
              before: "フリー素材サイトで30分かけて検索。イメージに近い曲が見つからず妥協。",
              after: "「明るいVlog風BGM、2分」と伝えるだけ。10秒で完成。",
            },
            {
              before: "著作権が不安。Content ID警告が怖くて使えない。",
              after: "100%オリジナル生成。警告リスクなし。収益は全額あなたのもの。",
            },
            {
              before: "他チャンネルと同じBGM。「またこの曲か」と思われる。",
              after: "毎回世界にひとつだけ。あなたのチャンネルだけのサウンド。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 mb-0.5 first:rounded-t-xl last:rounded-b-xl overflow-hidden"
            >
              <div className="bg-white border-r border-gray-50 p-5 text-sm text-gray-400">
                <span className="block text-[11px] font-bold tracking-widest opacity-40 mb-1.5 uppercase">
                  これまで
                </span>
                {item.before}
              </div>
              <div className="bg-purple-50 p-5 text-sm font-medium">
                <span className="block text-[11px] font-bold tracking-widest opacity-40 mb-1.5 uppercase">
                  Tuneeを使うと
                </span>
                {item.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="px-10 py-20">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[clamp(22px,3vw,28px)] font-extrabold mb-2.5">
            こんなBGMが作れます。
          </h2>
          <p className="text-gray-400 text-sm mb-9">
            プロンプト例つき。再生ボタンを押して試聴できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tracks.map((t, i) => (
              <AudioPlayer
                key={t.id}
                track={t}
                variant="thumbnail"
                gradientFrom={gradients[i][0]}
                gradientTo={gradients[i][1]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gray-900 text-white px-10 py-20">
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-[clamp(22px,3vw,28px)] font-extrabold text-center mb-12">
            3ステップで完成。
          </h2>
          {[
            {
              n: "01",
              title: "動画のイメージを伝える",
              desc: "「Vlog用の明るいBGM」「ゲーム実況OP用15秒ジングル」など。専門知識ゼロでOK。雰囲気を日本語で伝えるだけ。",
            },
            {
              n: "02",
              title: "AIが生成 → 会話で調整",
              desc: "数秒で完成。「テンポ上げて」「ピアノ増やして」と会話で何度でも修正。複数のAIモデルを自動選択。",
            },
            {
              n: "03",
              title: "ダウンロードして動画に配置",
              desc: "WAV/MP3でPremiere Pro・Final Cut Proにドラッグ&ドロップ。Content IDの心配なし。",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-6 mb-10 items-start">
              <span className="font-dm text-[52px] font-extrabold text-white/[0.06] leading-none min-w-[56px]">
                {s.n}
              </span>
              <div>
                <h3 className="text-[17px] font-bold text-yt-light mb-1">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="px-10 py-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl font-extrabold text-center mb-8">
            安心して使える理由
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
            {TRUST_ITEMS.map((t) => (
              <div
                key={t.title}
                className="text-center p-6 rounded-2xl bg-[#fafafe] border border-gray-100"
              >
                <span className="text-2xl block mb-2">{t.icon}</span>
                <div className="text-[13px] font-bold mb-0.5">{t.title}</div>
                <div className="text-[11px] text-gray-400">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-10 bg-gradient-to-br from-yt-primary to-yt-light">
        <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white mb-3">
          次の動画から、あなただけのBGMで。
        </h2>
        <p className="text-white/60 mb-7 text-[15px]">
          クレジットカード不要・無料で始められます。
        </p>
        <Link
          href="https://www.tunee.ai/ja"
          className="inline-block bg-white text-yt-primary px-9 py-4 rounded-full font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-lg transition-all"
        >
          いますぐ無料で試す →
        </Link>
        <p className="text-white/30 text-[11px] font-mono mt-4">
          🔒 30秒で登録完了・カード不要・いつでも解約OK
        </p>
      </section>

      {/* SEO text + Scene Nav + Footer */}
      <SeoTextSection sceneKey="video-bgm" theme="light" />
      <SceneNav currentKey="video-bgm" theme="light" />
      <Footer theme="light" />
    </div>
  );
}
