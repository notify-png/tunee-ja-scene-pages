"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { AUDIO_BASE, type AudioTrack } from "@/lib/constants";

interface AudioPlayerProps {
  track: AudioTrack;
  variant: "thumbnail" | "vinyl" | "code" | "circle";
  gradientFrom?: string;
  gradientTo?: string;
}

export default function AudioPlayer({
  track,
  variant,
  gradientFrom,
  gradientTo,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${AUDIO_BASE}/${track.file}`);
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      const update = () => {
        if (audioRef.current && !audioRef.current.paused) {
          setProgress(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          );
          rafRef.current = requestAnimationFrame(update);
        }
      };
      update();
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      cancelAnimationFrame(rafRef.current);
    }
  }, [track.file]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Generate random bar heights for waveform (stable via seed)
  const bars = Array.from({ length: 30 }, (_, i) => {
    const seed = (track.id.charCodeAt(i % track.id.length) * 17 + i * 31) % 100;
    return 10 + seed * 0.85;
  });

  if (variant === "thumbnail") {
    return (
      <div
        className={`group rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isPlaying ? "ring-2 ring-yt-primary/30" : ""
        }`}
      >
        {/* Gradient cover with play button */}
        <button
          onClick={togglePlay}
          className="w-full h-[120px] flex items-center justify-center relative"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom || "#ffecd2"}, ${gradientTo || "#fcb69f"})`,
          }}
          aria-label={isPlaying ? "一時停止" : "再生"}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            {isPlaying ? (
              <svg className="w-5 h-5 fill-gray-800" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-gray-800 ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100 relative">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-yt-primary to-yt-light rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-base font-bold mb-0.5">{track.name}</h3>
          <p className="text-xs text-gray-400 mb-3">
            {track.genre}・{track.duration}
          </p>
          <div className="bg-purple-50 rounded-xl p-3.5">
            <span className="text-[11px] font-semibold text-yt-primary block mb-1">
              💬 プロンプト例
            </span>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              「{track.prompt}」
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "vinyl") {
    return (
      <button
        onClick={togglePlay}
        className={`flex gap-5 items-start bg-white border border-[#ece4d8] rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full ${
          isPlaying ? "ring-2 ring-work-primary/20" : ""
        }`}
        aria-label={isPlaying ? "一時停止" : "再生"}
      >
        {/* Vinyl disc */}
        <div
          className={`w-20 h-20 rounded-full flex-shrink-0 relative ${
            isPlaying ? "animate-spin-slow" : ""
          }`}
          style={{
            background: `conic-gradient(from 0deg, ${track.color || "#8b6040"} 0%, #2c1e10 20%, ${track.color || "#8b6040"} 40%, #3d2c1e 60%, ${track.color || "#8b6040"} 80%, #2c1e10 100%)`,
          }}
        >
          <div className="absolute inset-3 rounded-full border border-white/20" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#faf6f0] -translate-x-1/2 -translate-y-1/2 border-2 border-[#ece4d8]" />
        </div>

        {/* Info + waveform */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-work-dark mb-0.5">
            {track.name}
          </h3>
          <p className="text-xs text-[#a09080] mb-2.5">
            {track.genre}・{track.duration}
          </p>

          {/* Waveform */}
          <div className="flex items-end gap-[2px] h-7 mb-2.5">
            {bars.slice(0, 20).map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-work-primary/20 min-w-[2px] transition-opacity duration-300 group-hover:opacity-40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="border-t border-dashed border-[#ece4d8] pt-2.5">
            <span className="text-[11px] font-semibold text-work-primary block mb-1">
              💬 プロンプト例
            </span>
            <p className="text-xs text-[#8b7355] leading-relaxed">
              「{track.prompt}」
            </p>
          </div>
        </div>
      </button>
    );
  }

  if (variant === "code") {
    return (
      <button
        onClick={togglePlay}
        className={`bg-game-bg border-2 border-game-border rounded-xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-0.5 w-full ${
          isPlaying
            ? "!border-game-primary shadow-[0_0_28px_rgba(0,212,255,0.1)]"
            : "hover:border-[#30363d] hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]"
        }`}
        aria-label={isPlaying ? "一時停止" : "再生"}
      >
        {/* Tab bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1117] border-b border-game-border font-mono text-xs text-[#484f58]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-[#8b949e]">
            {track.name.toLowerCase().replace(/\s/g, "_")}.wav
          </span>
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-base font-bold text-[#e6edf3] flex items-center gap-2">
              <span className="text-xl">
                {track.name === "ボス戦" ? "⚔️" : track.name === "城下町" ? "🏰" : track.name === "宇宙探索" ? "🌌" : "🎮"}
              </span>
              {track.name}
            </h3>
            <span className="font-mono text-[11px] text-[#484f58]">
              {track.genre} — {track.duration}
            </span>
          </div>

          {/* Neon EQ bars */}
          <div className="flex items-end gap-[1px] h-11 mb-3.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-sm min-w-[2px] transition-all duration-300 ${
                  isPlaying ? "animate-eq-bounce" : ""
                }`}
                style={{
                  height: `${h}%`,
                  background: track.color || "#00d4ff",
                  opacity: 0.15 + (h / 100) * 0.5,
                  animationDelay: `${(i * 0.07) % 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Status */}
          <div className={`font-dot text-xs mb-3 ${isPlaying ? "text-game-primary" : "text-[#484f58]"}`}>
            {isPlaying ? "♪ PLAYING" : "▶ PLAY"}
          </div>

          {/* Prompt */}
          <div className="font-mono text-xs leading-relaxed text-[#8b949e] bg-[#0d1117] border border-game-border rounded-lg p-3.5">
            <span className="text-[#484f58]">// プロンプト例</span>
            <br />
            <span className="text-[#ff7b72]">scene:</span>{" "}
            <span className="text-[#a5d6ff]">&quot;{track.prompt.split("。")[0]}&quot;</span>
          </div>
        </div>
      </button>
    );
  }

  // variant === "circle"
  return (
    <button
      onClick={togglePlay}
      className={`rounded-3xl p-9 text-center transition-all duration-500 w-full ${
        isPlaying ? "-translate-y-1 shadow-xl" : "hover:-translate-y-1 hover:shadow-lg"
      }`}
      style={{
        background: gradientFrom || "linear-gradient(180deg, #e8ede4, #f2f6f0)",
      }}
      aria-label={isPlaying ? "一時停止" : "再生"}
    >
      {/* Ripple circle */}
      <div className="relative w-22 h-22 mx-auto mb-5">
        <div
          className="w-[88px] h-[88px] rounded-full mx-auto flex items-center justify-center relative transition-transform hover:scale-105"
          style={{ background: track.color || "#7a9a7a" }}
        >
          {isPlaying ? (
            <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-7 h-7 fill-white ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          {/* Ripple rings */}
          <span className="absolute inset-[-8px] rounded-full border border-[rgba(90,138,106,0.15)] animate-ripple" />
          <span
            className="absolute inset-[-20px] rounded-full border border-[rgba(90,138,106,0.08)] animate-ripple"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      <h3 className="font-cormorant text-xl font-medium text-[#2b2b2b] mb-0.5">
        {track.name}
      </h3>
      <p className="text-xs text-[#aaa] mb-4">
        {track.genre}・{track.duration}
      </p>
      <p className="text-[13px] text-[#888] leading-relaxed mb-4 font-light">
        {track.name === "雨夜の入眠"
          ? "窓の外の雨音と、柔らかなピアノの旋律が溶け合う。眠りの入り口まで、そっと導く音楽。"
          : track.name === "海辺の瞑想"
            ? "波の音が呼吸のリズムに寄り添う。パッドシンセが水平線のように広がるサウンドスケープ。"
            : track.name === "朝のヨガ"
              ? "シンギングボウルの余韻が体に響く。アコースティックギターが新しい一日の始まりを告げる。"
              : "高級スパの空間を満たす、上品で穏やかな音。フルートとシンセパッドが極上の静けさを紡ぐ。"}
      </p>
      <div className="border-t border-dashed border-black/5 pt-3.5">
        <span className="text-[11px] font-medium text-heal-primary block mb-1">
          💬 プロンプト例
        </span>
        <p className="text-xs text-[#666] leading-relaxed">「{track.prompt}」</p>
      </div>
    </button>
  );
}
