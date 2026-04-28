import Link from "next/link";
import { SCENE_PAGES, SEO_TEXT, type SceneKey } from "@/lib/constants";

interface SceneNavProps {
  currentKey: SceneKey;
  theme?: "light" | "warm" | "dark" | "zen";
}

export function SceneNav({ currentKey, theme = "light" }: SceneNavProps) {
  const borderColor = {
    light: "border-gray-100",
    warm: "border-[#ece4d8]",
    dark: "border-game-border",
    zen: "border-[#e0ddd6]",
  }[theme];

  const linkStyle = {
    light:
      "border-gray-200 bg-white text-gray-500 hover:border-yt-primary hover:text-yt-primary",
    warm:
      "border-[#ddd0c0] bg-[#faf6f0] text-[#8b7355] hover:border-work-primary hover:text-work-primary",
    dark:
      "border-game-border bg-game-surface text-[#484f58] hover:border-game-primary hover:text-game-primary",
    zen:
      "border-[#ddd6cc] bg-[#f9f7f4] text-[#888] hover:border-heal-primary hover:text-heal-primary",
  }[theme];

  return (
    <div className={`border-t ${borderColor} py-8 px-10 text-center`}>
      <p className="text-xs opacity-35 mb-3">他のシーンも見る</p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        {SCENE_PAGES.filter((p) => p.key !== currentKey).map((p) => (
          <Link
            key={p.key}
            href={`https://www.tunee.ai${p.route}`}
            className={`px-5 py-2 rounded-full border text-[13px] transition-all duration-200 ${linkStyle}`}
          >
            {p.icon} {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SeoTextSection({
  sceneKey,
  theme = "light",
}: {
  sceneKey: SceneKey;
  theme?: "light" | "warm" | "dark" | "zen";
}) {
  const seo = SEO_TEXT[sceneKey];
  const borderColor = {
    light: "border-gray-100",
    warm: "border-[#ece4d8]",
    dark: "border-game-border",
    zen: "border-[#e0ddd6]",
  }[theme];

  const titleColor = {
    light: "text-gray-700",
    warm: "text-work-dark",
    dark: "text-[#e6edf3]",
    zen: "text-[#2b2b2b]",
  }[theme];

  return (
    <section className={`border-t ${borderColor} px-10 py-10`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-[15px] font-bold ${titleColor} opacity-60 mb-2.5`}>
          {seo.heading}
        </h2>
        <p className="text-xs leading-[2] opacity-40">{seo.body}</p>
      </div>
    </section>
  );
}
