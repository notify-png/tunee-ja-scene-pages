/** CDN base URL for all static assets */
export const CDN_BASE = "https://res-cdn.tunee.ai/web_static_res/op";

/** Audio file paths - will be served from CDN in production, /audio/ in dev */
export const AUDIO_BASE =
  process.env.NODE_ENV === "production"
    ? `${CDN_BASE}/ja-scene-bgm`
    : "/audio";

/** Main site URL */
export const SITE_URL = "https://www.tunee.ai";

/** Company info */
export const COMPANY = {
  name: "Qustar Technology PTE. LTD.",
  location: "シンガポール",
  copyright: `© ${new Date().getFullYear()} Tunee. All rights reserved.`,
} as const;

/** Pricing info (verified from official site) */
export const PRICING = {
  free: { price: 0, label: "無料", credits: "500/日", songs: "~50曲", commercial: false },
  basic: { price: 18, label: "$18/月", annual: "$15/月", credits: "1,800/月", songs: "~200曲", commercial: true },
  plus: { price: 38, label: "$38/月", annual: "$32/月", credits: "4,000/月", songs: "~400曲", commercial: true },
  pro: { price: 88, label: "$88/月", annual: "$75/月", credits: "9,200/月", songs: "~1,100曲", commercial: true },
} as const;

/** Scene page definitions */
export type SceneKey = "video-bgm" | "lofi-bgm" | "game-bgm" | "healing-bgm";

export interface ScenePage {
  key: SceneKey;
  route: string;
  enRoute: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  keywords: string;
}

export const SCENE_PAGES: ScenePage[] = [
  {
    key: "video-bgm",
    route: "/ja/video-bgm-generator",
    enRoute: "/music-generator/youtube",
    label: "動画BGM",
    icon: "🎬",
    title: "YouTube動画用BGMをAIで自動生成｜著作権フリー・Content ID対策済み｜Tunee",
    description:
      "YouTube動画にぴったりのオリジナルBGMをAIが数秒で自動生成。著作権フリーで収益化対応。Vlog、料理動画、ゲーム実況、解説動画など、あらゆるジャンルのBGMをAI音楽ジェネレーターで作成。商用利用OK・Content ID対策済み。",
    keywords:
      "動画 BGM AI, YouTube BGM 作成, 著作権フリー BGM, AI BGM ジェネレーター, YouTube 収益化 BGM, Content ID フリー, AI 音楽 生成, フリーBGM 代替",
  },
  {
    key: "lofi-bgm",
    route: "/ja/lofi-music-generator",
    enRoute: "/music-generator/lofi",
    label: "作業用BGM",
    icon: "☕",
    title: "作業用BGM・Lo-fi音楽をAIで自動生成｜集中力を高めるBGM｜Tunee",
    description:
      "作業や勉強に最適なLo-fi、カフェ風ジャズ、チルアンビエントをAIが自動生成。作業用BGMのYouTubeチャンネル運営にも。著作権フリー・商用利用OK・日本語対応のAI音楽ジェネレーター。",
    keywords:
      "作業用BGM AI, Lo-fi 音楽 生成, チル ミュージック AI, 集中 BGM 作成, カフェ BGM AI, YouTube 作業用BGM チャンネル",
  },
  {
    key: "game-bgm",
    route: "/ja/game-music-generator",
    enRoute: "/music-generator/open-world-music",
    label: "ゲームBGM",
    icon: "🎮",
    title: "ゲーム用BGMをAIで自動生成｜インディーゲーム開発者向け｜Tunee",
    description:
      "インディーゲームやアプリのBGMをAIが数秒で自動生成。バトル、探索、タイトル画面…シーンを伝えるだけ。著作権フリー・ループ対応・Steam/App Store販売OK。ゲーム音楽の外注コストを大幅削減。",
    keywords:
      "ゲーム BGM AI, インディーゲーム 音楽, RPG BGM 生成, ゲーム音楽 自動生成, Steam BGM, Unity BGM, ループBGM, 著作権フリー ゲーム音楽",
  },
  {
    key: "healing-bgm",
    route: "/ja/meditation-music-generator",
    enRoute: "/music-generator/meditation",
    label: "ヒーリングBGM",
    icon: "🧘",
    title: "ヒーリング・睡眠用BGMをAIで自動生成｜瞑想・ヨガ・リラクゼーション｜Tunee",
    description:
      "瞑想、睡眠、ヨガに最適なヒーリングBGMをAIが自動生成。自然音、シンギングボウル、アンビエント。JASRAC未登録でヨガスタジオ・店舗BGMの使用料ゼロ。著作権フリー・商用利用OK。",
    keywords:
      "ヒーリング BGM AI, 睡眠用BGM 生成, 瞑想 音楽 AI, ヨガ BGM, JASRAC不要 BGM, 店舗BGM AI, リラクゼーション 音楽",
  },
];

/** Audio track definitions per scene */
export interface AudioTrack {
  id: string;
  name: string;
  genre: string;
  duration: string;
  prompt: string;
  file: string;
  color?: string;
}

export const SCENE_TRACKS: Record<SceneKey, AudioTrack[]> = {
  "video-bgm": [
    { id: "yt-1", name: "朝の散歩Vlog", genre: "ポップ / アコースティック", duration: "2:00", prompt: "朝の散歩Vlog用。明るくて爽やか。ウクレレとピアノ。2分。テンポは歩く速さ。", file: "ja-scene-ytbgm-2026-morning-vlog.mp3", color: "#fcb69f" },
    { id: "yt-2", name: "料理動画BGM", genre: "Lo-fi / ジャズ", duration: "1:30", prompt: "料理チャンネル用。カフェっぽいジャズ。落ち着いた雰囲気。包丁の音に合うテンポ。", file: "ja-scene-ytbgm-2026-cooking-jazz.mp3", color: "#a18cd1" },
    { id: "yt-3", name: "ゲーム実況OP", genre: "エレクトロ / ポップ", duration: "0:15", prompt: "ゲーム実況のオープニングジングル。テンション高め。15秒で印象に残る感じ。", file: "ja-scene-ytbgm-2026-game-opening.mp3", color: "#764ba2" },
    { id: "yt-4", name: "解説・教育動画", genre: "アンビエント / ミニマル", duration: "3:00", prompt: "教育系解説動画の背景音楽。ナレーションの邪魔にならない。静かで知的。", file: "ja-scene-ytbgm-2026-education-ambient.mp3", color: "#c3cfe2" },
  ],
  "lofi-bgm": [
    { id: "wk-1", name: "雨のカフェ", genre: "Lo-fi ジャズ", duration: "3:00", prompt: "雨の日のカフェにいるような。Lo-fiジャズ。ビニールノイズ少し。窓に雨粒の音。", file: "ja-scene-workbgm-2026-rainy-cafe.mp3", color: "#8b6040" },
    { id: "wk-2", name: "深夜の集中", genre: "チルアンビエント", duration: "5:00", prompt: "深夜に一人でコーディング。静かなアンビエント。ビートなし。思考の邪魔をしない。", file: "ja-scene-workbgm-2026-night-coding.mp3", color: "#2c1e10" },
    { id: "wk-3", name: "図書館の午後", genre: "ピアノソロ", duration: "4:00", prompt: "勉強に集中できるBGM。ピアノソロ。静かで邪魔にならない。大学の図書館にいる感じ。", file: "ja-scene-workbgm-2026-library-piano.mp3", color: "#6a5a4a" },
    { id: "wk-4", name: "Lofi Hip Hop", genre: "Lo-fi ヒップホップ", duration: "3:00", prompt: "Lo-fi hip hop。チルなビート。サックスのサンプル入り。夜の作業に。", file: "ja-scene-workbgm-2026-lofi-hiphop.mp3", color: "#a08050" },
  ],
  "game-bgm": [
    { id: "gm-1", name: "ボス戦", genre: "orchestral / epic", duration: "2:00", prompt: "RPGのボス戦BGM。緊迫感のあるオーケストラ。ティンパニとストリングス。ループ対応。", file: "ja-scene-gamebgm-2026-boss-battle.mp3", color: "#ff0080" },
    { id: "gm-2", name: "城下町", genre: "fantasy / folk", duration: "1:30", prompt: "中世ファンタジーの城下町。穏やかで温かい。リュートとフルート。ループ対応。", file: "ja-scene-gamebgm-2026-castle-town.mp3", color: "#f59e0b" },
    { id: "gm-3", name: "宇宙探索", genre: "synth / ambient", duration: "2:00", prompt: "SFゲームの宇宙空間を漂うシーン。広がりのあるシンセパッド。神秘的。", file: "ja-scene-gamebgm-2026-space-explore.mp3", color: "#7c3aed" },
    { id: "gm-4", name: "タイトル画面", genre: "cinematic", duration: "0:30", prompt: "モバイルゲームのタイトル画面。ワクワク感。30秒ループ対応。", file: "ja-scene-gamebgm-2026-title-screen.mp3", color: "#00d4ff" },
  ],
  "healing-bgm": [
    { id: "hl-1", name: "雨夜の入眠", genre: "アンビエント + 雨音", duration: "5:00", prompt: "眠りにつくためのBGM。雨の音と柔らかいピアノ。テンポはとてもゆっくり。", file: "ja-scene-healbgm-2026-rain-piano.mp3", color: "#7a9a7a" },
    { id: "hl-2", name: "海辺の瞑想", genre: "アンビエント + 波音", duration: "4:00", prompt: "海辺で瞑想しているイメージ。波の音とパッドシンセ。深い呼吸に合うテンポ。", file: "ja-scene-healbgm-2026-ocean-meditation.mp3", color: "#6a8aaa" },
    { id: "hl-3", name: "朝のヨガ", genre: "ニューエイジ", duration: "3:00", prompt: "朝ヨガ用BGM。シンギングボウルとアコースティックギター。穏やかで前向き。", file: "ja-scene-healbgm-2026-morning-yoga.mp3", color: "#b08a5a" },
    { id: "hl-4", name: "スパサロン", genre: "チルアウト / スパ", duration: "3:00", prompt: "高級スパのBGM。エスニック感少し。フルートとシンセパッド。上品で穏やか。", file: "ja-scene-healbgm-2026-spa-salon.mp3", color: "#8a7aaa" },
  ],
};

/** Trust badges shared across pages */
export const TRUST_ITEMS = [
  { icon: "🔒", title: "著作権フリー", desc: "有料プランで生成した楽曲の著作権はあなたに帰属" },
  { icon: "✅", title: "商用利用OK", desc: "YouTube収益化を含む商用利用に対応（有料プラン）" },
  { icon: "🛡️", title: "データ保護", desc: "通信はSSL暗号化で安全に保護" },
  { icon: "🔄", title: "いつでも解約", desc: "サブスクリプションに縛りなし" },
  { icon: "💳", title: "無料で開始", desc: "カード不要で無料プランが利用可能（個人利用のみ）" },
  { icon: "🌏", title: "日本語対応", desc: "チャットも操作画面もすべて日本語で利用可能" },
] as const;

/** SEO descriptions per scene (for bottom section) */
export const SEO_TEXT: Record<SceneKey, { heading: string; body: string }> = {
  "video-bgm": {
    heading: "Tuneeとは — YouTubeクリエイターのためのAI BGMジェネレーター",
    body: "Tuneeは、テキストからオリジナル音楽を自動生成するAIツールです。Vlog、料理動画、ゲーム実況、教育コンテンツなど、あらゆるジャンルのYouTube動画に最適なBGMを、日本語のプロンプトを入力するだけで数秒で作成できます。生成された楽曲は著作権フリー（ロイヤリティフリー）で、YouTube広告収入を含む商用利用に完全対応。Content IDによる著作権警告のリスクもありません。従来のフリー素材サイトでは他チャンネルとの曲被りが避けられませんでしたが、Tuneeなら毎回世界にひとつだけのオリジナルBGMが手に入ります。WAV・MP3形式で書き出し可能。無料プランあり、クレジットカード不要で今すぐ始められます。",
  },
  "lofi-bgm": {
    heading: "Tuneeとは — 作業用BGM・Lo-fi音楽のAIジェネレーター",
    body: "Tuneeは、集中力を高める作業用BGMやLo-fi音楽をAIで自動生成するツールです。カフェ風ジャズ、チルアンビエント、ピアノソロ、Lo-fi Hip Hopなど、作業や勉強に最適な雰囲気のBGMを日本語で指示するだけで作成可能。YouTube作業用BGM配信チャンネルの運営にも最適で、生成した楽曲は著作権フリー・商用利用OKのため、そのままYouTubeにアップロードして広告収入を得ることができます。「ビニールノイズを多めに」「テンポを落として」など、音の質感まで会話でカスタマイズ可能。無料プランあり、クレジットカード不要で始められます。",
  },
  "game-bgm": {
    heading: "Tuneeとは — ゲーム開発者のためのAI BGMジェネレーター",
    body: "Tuneeは、インディーゲームやアプリ開発者向けのAI音楽生成ツールです。RPGのボス戦、ファンタジーの城下町、SFの宇宙探索、タイトル画面など、ゲームのシーンを日本語で伝えるだけで、プロ品質のBGMを数秒で生成。生成された楽曲は著作権フリー（ロイヤリティフリー）で、Steam、App Store、Google Play、itch.ioでのゲーム販売に対応。ループ再生に適した構成での生成も可能で、Unity、Unreal Engine、RPGツクールにWAV・MP3形式で即インポートできます。作曲家への外注コストを大幅に削減し、ゲーム開発に集中できます。",
  },
  "healing-bgm": {
    heading: "Tuneeとは — ヒーリング・睡眠用BGMのAIジェネレーター",
    body: "Tuneeは、瞑想、睡眠、ヨガ、リラクゼーション向けのヒーリングBGMをAIで自動生成するツールです。雨音とピアノ、波の音とシンギングボウル、ネイチャーアンビエントなど、心身を癒す音楽を日本語のプロンプトだけで作成可能。生成された楽曲はJASRAC未登録のオリジナルのため、ヨガスタジオ、マッサージ店、カフェなどの店舗BGMとして追加の使用料なしで利用できます。YouTube睡眠用BGMチャンネルの運営、瞑想アプリ・睡眠アプリへの組み込みにも対応。無料プランあり。",
  },
};
