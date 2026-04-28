import type { Metadata } from "next";
import Link from "next/link";
import { SCENE_PAGES, SCENE_TRACKS, SITE_URL, PRICING } from "@/lib/constants";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Footer from "@/components/Footer";
import { SceneNav, SeoTextSection } from "@/components/SceneNav";

const page = SCENE_PAGES[2];
export const metadata: Metadata = {
  title: page.title, description: page.description, keywords: page.keywords,
  alternates: { canonical: `${SITE_URL}${page.route}`, languages: { en: `${SITE_URL}${page.enRoute}`, ja: `${SITE_URL}${page.route}` } },
  openGraph: { title: page.title, description: page.description, url: `${SITE_URL}${page.route}`, siteName: "Tunee", type: "website", locale: "ja_JP" },
  twitter: { card: "summary_large_image" },
};

const tracks = SCENE_TRACKS["game-bgm"];

const sceneSlots = [
  { icon: "⚔️", name: "ボス戦", genre: "orchestral/epic", w: "85%", grad: "from-[#ff0080] to-[#ff4da6]" },
  { icon: "🏰", name: "城下町", genre: "fantasy/folk", w: "60%", grad: "from-game-primary to-game-light" },
  { icon: "🌌", name: "宇宙探索", genre: "synth/ambient", w: "75%", grad: "from-[#7c3aed] to-[#a78bfa]" },
  { icon: "🎮", name: "タイトル画面", genre: "cinematic/loop", w: "90%", grad: "from-[#f59e0b] to-[#fbbf24]" },
];

const pains = [
  { icon: "💰", title: "BGMの予算が足りない", desc: "作曲家に依頼すると1曲数万円。ゲーム全体のBGMを揃えようとすると、インディーの予算ではなかなか厳しい。", solve: "月額定額で何曲でも" },
  { icon: "⏳", title: "納品を待つ時間がない", desc: "外注すると完成まで1〜2週間。ゲームジャムやプロトタイプ段階では、そんなに待てない。", solve: "数秒で生成、すぐ試せる" },
  { icon: "🔁", title: "フリー素材だと被ってしまう", desc: "定番のフリーBGMは便利だけど、他のゲームでも同じ曲が使われていて、世界観に没入しにくい。", solve: "毎回オリジナルの曲を生成" },
  { icon: "🔄", title: "ループ対応の曲が見つからない", desc: "ゲーム用BGMはシームレスなループが基本。でもフリー素材では末尾の繋がりが不自然なことが多い。", solve: "ループ構成を指定するだけ" },
];

const costs = [
  { icon: "📜", name: "作曲家に外注", price: "¥50,000〜300,000", priceColor: "text-red-400", stats: [["納期","2〜4週間","text-red-400"],["修正","回数制限あり","text-game-border"],["ループ","別途相談","text-game-border"],["世界観統一","作曲家次第","text-game-border"]] },
  { icon: "📦", name: "フリー素材サイト", price: "¥0", priceColor: "text-[#8b949e]", stats: [["オリジナリティ","他ゲームと被る","text-red-400"],["ループ","非対応が多い","text-red-400"],["世界観統一","バラバラ","text-red-400"],["商用利用","要確認","text-game-border"]] },
  { icon: "⚡", name: "Tunee AI", price: `月額$${PRICING.basic.price}〜`, priceColor: "text-game-primary font-bold", best: true, stats: [["納期","数秒","text-green-400"],["修正","会話で何度でも","text-green-400"],["ループ","対応","text-green-400"],["世界観統一","スタイル記憶","text-green-400"]] },
];

export default function GameBgmPage() {
  return (
    <div className="bg-game-bg text-[#c9d1d9]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-game-bg/90 backdrop-blur-xl border-b border-game-border h-14 flex items-center justify-between px-8">
        <Link href="https://www.tunee.ai/ja" className="font-bold text-lg text-[#e6edf3] font-mono">Tunee<span className="text-game-primary">.</span></Link>
        <Link href="https://www.tunee.ai/ja" className="bg-game-primary text-game-bg px-5 py-2 rounded-lg text-[13px] font-semibold font-mono">&gt; 無料で始める</Link>
      </nav>

      {/* Hero with stars */}
      <section className="min-h-[75vh] flex items-center px-10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.015)_1px,transparent_1px)] bg-[length:48px_48px] animate-[gridScroll_25s_linear_infinite]" />
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-game-primary/[0.06] blur-[1px]" style={{ filter: "blur(100px)" }} />
        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle" style={{ top: `${(i*17+3)%100}%`, left: `${(i*31+7)%100}%`, animationDelay: `${(i*0.3)%3}s`, animationDuration: `${2+(i%3)}s` }} />
          ))}
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
          <div>
            <div className="font-dot text-xs text-game-primary tracking-widest mb-5 flex items-center gap-2">◆ GAME BGM × AI ◆</div>
            <h1 className="font-outfit text-[clamp(28px,4vw,46px)] font-extrabold text-white leading-[1.25] mb-4">
              ゲームBGMを<span className="text-game-primary" style={{ textShadow: "0 0 24px rgba(0,212,255,0.25)" }}>AI</span>で自動生成。<br />世界観を、音で完成させる。
            </h1>
            <p className="text-[15px] text-[#8b949e] mb-7 leading-relaxed">シーンの雰囲気を伝えるだけ。著作権フリー・ループ対応・商用販売OK。</p>
            <div className="flex gap-3 flex-wrap mb-5">
              <Link href="https://www.tunee.ai/ja" className="inline-flex gap-2 bg-game-primary text-game-bg px-8 py-3.5 rounded-xl font-bold text-sm font-mono shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,212,255,0.25)] transition-all">&gt;_ 無料で試してみる</Link>
              <a href="#listen" className="inline-flex items-center gap-1.5 border border-game-border text-[#8b949e] px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-game-primary hover:text-game-primary transition-all">♪ まず聴いてみる ↓</a>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {["🔒 著作権フリー", "🎮 Steam対応", "🔄 ループ再生", "💳 カード不要"].map((b) => (
                <span key={b} className="font-mono text-[11px] text-[#484f58] bg-white/[0.03] px-3 py-1 rounded-md border border-game-border">{b}</span>
              ))}
            </div>
          </div>
          {/* Scene stack */}
          <div className="hidden lg:flex flex-col gap-2">
            {sceneSlots.map((s) => (
              <div key={s.name} className="bg-game-surface border border-game-border rounded-xl p-3.5 flex items-center gap-3.5 hover:border-game-primary/20 transition-colors">
                <span className="text-xl">{s.icon}</span>
                <div><div className="text-[13px] font-semibold text-[#e6edf3]">{s.name}</div><div className="font-mono text-[10px] text-[#484f58]">{s.genre}</div></div>
                <div className="flex-1 h-[3px] bg-game-border rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${s.grad} rounded-full`} style={{ width: s.w }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pixel battle divider */}
      <div className="h-[100px] border-t border-b border-game-border bg-[#0a0e14] relative flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-[repeating-linear-gradient(90deg,#1a3a1a_0px,#1a3a1a_8px,#143014_8px,#143014_16px)]" style={{ imageRendering: "pixelated" }} />
        <div className="text-[#484f58] font-dot text-xs tracking-widest animate-pulse">⚔️ ♪ BGM LOADING... ♪ 🎮</div>
      </div>

      {/* Pain points */}
      <section className="px-10 py-20 border-t border-game-border">
        <div className="max-w-[820px] mx-auto">
          <h2 className="font-outfit text-[clamp(22px,3vw,28px)] font-extrabold text-white text-center mb-3">ゲームBGM、こんなことで困っていませんか？</h2>
          <p className="text-center text-[#484f58] text-sm mb-9">インディー開発では、よくあることです。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pains.map((p) => (
              <div key={p.title} className="bg-game-surface border border-game-border rounded-xl p-6 hover:border-[#30363d] hover:-translate-y-0.5 transition-all">
                <span className="text-2xl block mb-2.5">{p.icon}</span>
                <div className="text-[15px] font-bold text-[#e6edf3] mb-1.5">{p.title}</div>
                <p className="text-[13px] text-[#8b949e] leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-block font-mono text-xs text-game-primary bg-game-primary/[0.08] px-3 py-1 rounded-md border border-game-primary/20">→ {p.solve}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio samples */}
      <section id="listen" className="bg-game-surface border-t border-game-border px-10 py-20">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="font-outfit text-[22px] font-extrabold text-white text-center mb-2">こんなBGMが、AIで作れます。</h2>
          <p className="text-center text-[#484f58] text-sm mb-9">▶ クリックして試聴 — すべてTunee AIが数秒で生成したBGMです。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((t) => (<AudioPlayer key={t.id} track={t} variant="code" />))}
          </div>
          <div className="text-center mt-8">
            <p className="text-[#484f58] text-[13px] mb-3">このクオリティのBGMを、あなたのゲーム用にも。いますぐ無料で作れます。</p>
            <Link href="https://www.tunee.ai/ja" className="inline-flex gap-2 bg-game-primary text-game-bg px-8 py-3.5 rounded-xl font-bold text-sm font-mono hover:shadow-[0_0_28px_rgba(0,212,255,0.2)] transition-all">&gt;_ 無料でBGMを作ってみる</Link>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="px-10 py-20 border-t border-game-border">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-outfit text-[22px] font-extrabold text-white text-center mb-3">BGMの調達方法を比べてみました。</h2>
          <p className="text-center text-[#484f58] text-sm mb-9">ゲーム1本分（10曲程度）を揃える場合</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {costs.map((c) => (
              <div key={c.name} className={`bg-game-surface border rounded-2xl p-6 text-center relative transition-all hover:-translate-y-0.5 ${c.best ? "border-game-primary/40 bg-gradient-to-b from-game-bg to-[#0d1520]" : "border-game-border"}`}>
                {c.best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-game-primary text-game-bg font-dot text-[11px] px-3.5 py-0.5 rounded-md whitespace-nowrap">おすすめ</div>}
                <span className="text-[28px] block mb-2">{c.icon}</span>
                <div className="font-dot text-[15px] text-[#e6edf3] mb-3.5">{c.name}</div>
                <div className={`font-mono text-[22px] mb-4 ${c.priceColor}`}>{c.price}</div>
                {c.stats.map(([k, v, color]) => (
                  <div key={k} className="flex justify-between text-xs mb-1.5 pb-1.5 border-b border-dotted border-game-border">
                    <span className="text-[#484f58]">{k}</span>
                    <span className={`font-mono ${color}`}>{v}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps as terminal */}
      <section className="bg-game-surface border-t border-game-border px-10 py-20">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-outfit text-[22px] font-extrabold text-white mb-7">3ステップで、ゲームにBGMを。</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", title: "シーンを伝える", desc: "日本語で雰囲気を伝えるだけ。専門用語は不要です。", ex: "「RPGのボス戦BGM」" },
              { n: "02", title: "生成して、調整する", desc: "数秒で完成。「もっとダークに」「テンポ上げて」と会話で修正。", ex: "「ループ対応で」" },
              { n: "03", title: "ゲームに組み込む", desc: "WAV/MP3でダウンロード。Unity、Unreal、RPGツクールに対応。", ex: "boss_battle.wav → Unity" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-dot text-4xl text-game-primary/20 mb-3">{s.n}</div>
                <h3 className="text-[15px] font-bold text-[#e6edf3] mb-1.5">{s.title}</h3>
                <p className="text-[13px] text-[#8b949e] leading-relaxed mb-2.5">{s.desc}</p>
                <span className="inline-block font-mono text-[11px] text-game-primary bg-game-bg px-3 py-2 rounded-lg border border-game-border">{s.ex}</span>
              </div>
            ))}
          </div>
          <Link href="https://www.tunee.ai/ja" className="inline-flex gap-2 bg-game-primary text-game-bg px-8 py-3.5 rounded-xl font-bold text-sm font-mono mt-9 hover:shadow-[0_0_28px_rgba(0,212,255,0.2)] transition-all">&gt;_ 無料で試してみる</Link>
        </div>
      </section>

      {/* Trust */}
      <section className="px-10 py-14 border-t border-game-border">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-dot text-base text-game-primary mb-6">◆ 安心して使える理由 ◆</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {[
              { i: "🔒", t: "著作権フリー", d: "権利100%あなたに帰属" },
              { i: "🎮", t: "ゲーム販売OK", d: "Steam / App Store / itch.io" },
              { i: "🔄", t: "ループ対応", d: "シームレスなループ構成" },
              { i: "🧩", t: "世界観統一", d: "スタイル記憶で一貫性" },
              { i: "⚙️", t: "Unity / UE対応", d: "WAV/MP3即インポート" },
              { i: "💳", t: "無料で開始", d: "カード不要で今すぐ" },
            ].map((t) => (
              <div key={t.t} className="bg-game-surface border border-game-border rounded-xl p-4 text-center hover:border-[#30363d] transition-colors">
                <span className="text-xl block mb-1">{t.i}</span>
                <div className="text-[13px] font-bold text-[#e6edf3] mb-0.5">{t.t}</div>
                <div className="text-[11px] text-[#484f58]">{t.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-game-primary/[0.04]" style={{ filter: "blur(80px)" }} />
        <div className="relative z-10">
          <p className="font-dot text-[13px] text-[#484f58] mb-4">カード不要・30秒で登録完了</p>
          <h2 className="font-outfit text-[clamp(24px,3.5vw,34px)] font-extrabold text-white mb-2.5">あなたのゲームに、<span className="text-game-primary">あなただけのサウンド</span>を。</h2>
          <p className="text-[#484f58] text-sm mb-7">BGMの心配をなくして、ゲーム開発に集中しませんか。</p>
          <Link href="https://www.tunee.ai/ja" className="inline-flex gap-2 bg-game-primary text-game-bg px-9 py-4 rounded-xl font-bold text-[15px] font-mono shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,212,255,0.25)] transition-all">&gt;_ 無料でゲームBGMを作る</Link>
          <p className="font-mono text-[11px] text-[#30363d] mt-4">🔒 著作権フリー ・ 🎮 商用販売OK ・ 🔄 いつでも解約可能</p>
        </div>
      </section>

      <SeoTextSection sceneKey="game-bgm" theme="dark" />
      <SceneNav currentKey="game-bgm" theme="dark" />
      <Footer theme="dark" />
    </div>
  );
}
