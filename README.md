# Tunee Japan Scene Landing Pages

日本市場向けシーン別ランディングページ（Next.js 15 + Tailwind CSS + TypeScript）

## Pages

| Route | Page | Design Theme |
|-------|------|-------------|
| `/ja/video-bgm-generator` | YouTube動画BGM | Purple gradient + product mockup |
| `/ja/lofi-music-generator` | 作業用BGM / Lo-fi | Warm cafe aesthetic + vinyl players |
| `/ja/game-music-generator` | ゲームBGM | Dark mode + neon + pixel art |
| `/ja/meditation-music-generator` | ヒーリングBGM | Zen minimalist + breathing animation |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Rendering:** SSG (all pages are static, SEO-optimized)
- **Fonts:** next/font/google (Noto Sans JP, DM Sans, Playfair Display, JetBrains Mono, Outfit, Cormorant Garamond)

## Audio Files

Audio files are in `public/audio/` for local development.
In production, they should be served from CDN:
```
https://res-cdn.tunee.ai/web_static_res/agent/audio/{filename}.mp3
```

Update `lib/constants.ts` → `AUDIO_BASE` for CDN configuration.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel:
```bash
vercel
```

## hreflang Mapping

| Japanese (new) | English (existing) |
|---------------|-------------------|
| `/ja/video-bgm-generator` | `/music-generator/youtube` |
| `/ja/lofi-music-generator` | `/music-generator/lofi` |
| `/ja/game-music-generator` | `/music-generator/open-world-music` |
| `/ja/meditation-music-generator` | `/music-generator/meditation` |
