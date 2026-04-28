import Link from "next/link";
import { COMPANY, PRICING, SCENE_PAGES } from "@/lib/constants";

interface FooterProps {
  theme?: "light" | "warm" | "dark" | "zen";
}

export default function Footer({ theme = "light" }: FooterProps) {
  const styles = {
    light: {
      bg: "bg-[#fafafe]",
      border: "border-gray-100",
      logo: "text-gray-900",
      text: "text-gray-400",
      link: "text-gray-400 hover:text-yt-primary",
      legal: "text-gray-300",
    },
    warm: {
      bg: "bg-[#faf6f0]",
      border: "border-[#ece4d8]",
      logo: "text-work-dark",
      text: "text-[#a09080]",
      link: "text-[#a09080] hover:text-work-primary",
      legal: "text-[#c0b0a0]",
    },
    dark: {
      bg: "bg-[#0a0e14]",
      border: "border-game-border",
      logo: "text-[#e6edf3]",
      text: "text-[#484f58]",
      link: "text-[#484f58] hover:text-game-primary",
      legal: "text-[#21262d]",
    },
    zen: {
      bg: "bg-[#f5f2ed]",
      border: "border-[#e0ddd6]",
      logo: "text-[#2b2b2b]",
      text: "text-[#aaa]",
      link: "text-[#aaa] hover:text-heal-primary",
      legal: "text-[#ccc]",
    },
  }[theme];

  return (
    <footer className={`${styles.bg} border-t ${styles.border} px-10 pt-14 pb-7`}>
      <div className="max-w-[1000px] mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mb-9">
          {/* Brand */}
          <div>
            <div className={`font-bold text-xl ${styles.logo} mb-1.5`}>
              Tunee<span className="opacity-40">.</span>
            </div>
            <p className={`text-xs ${styles.text} leading-relaxed`}>
              Tuneeは、テキストからオリジナル音楽を生成するAIツールです。複数の先進AIモデルを搭載し、あらゆるジャンルの楽曲を数秒で作成できます。
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {/* Products */}
            <div>
              <h4 className={`text-xs font-bold ${styles.text} mb-2.5 tracking-wide`}>
                プロダクト
              </h4>
              <Link
                href="https://www.tunee.ai/ja"
                className={`block text-xs ${styles.link} mb-1.5 leading-relaxed transition-colors`}
              >
                Tunee AI 音楽ジェネレーター
              </Link>
              {SCENE_PAGES.map((p) => (
                <Link
                  key={p.key}
                  href={`https://www.tunee.ai${p.route}`}
                  className={`block text-xs ${styles.link} mb-1.5 leading-relaxed transition-colors`}
                >
                  {p.icon} {p.label}ジェネレーター
                </Link>
              ))}
              <Link
                href="https://www.tunee.ai/ja/pricing"
                className={`block text-xs ${styles.link} mb-1.5 leading-relaxed transition-colors`}
              >
                料金プラン
              </Link>
            </div>

            {/* Support */}
            <div>
              <h4 className={`text-xs font-bold ${styles.text} mb-2.5 tracking-wide`}>
                サポート
              </h4>
              <a
                href="https://forum.tunee.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-xs ${styles.link} mb-1.5 transition-colors`}
              >
                コミュニティフォーラム
              </a>
              <Link
                href="https://www.tunee.ai/ja/terms-of-service"
                className={`block text-xs ${styles.link} mb-1.5 transition-colors`}
              >
                利用規約
              </Link>
              <Link
                href="https://www.tunee.ai/ja/privacy-policy"
                className={`block text-xs ${styles.link} mb-1.5 transition-colors`}
              >
                プライバシーポリシー
              </Link>
            </div>

            {/* Trust signals */}
            <div>
              <h4 className={`text-xs font-bold ${styles.text} mb-2.5 tracking-wide`}>
                安心してご利用いただくために
              </h4>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                🔒 有料プランで生成した楽曲の著作権はユーザーに帰属
              </p>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                ✅ 有料プラン（月額${PRICING.basic.price}〜）で商用利用・YouTube収益化に対応
              </p>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                🛡️ 通信はSSL暗号化で保護されています
              </p>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                🔄 サブスクリプションはいつでも解約可能です
              </p>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                💳 無料プランあり — カード不要で開始（個人利用のみ）
              </p>
              <p className={`text-[11px] ${styles.text} mb-1.5 leading-relaxed`}>
                📋 有料プランは月額${PRICING.basic.price}〜（Basic）・年額プランは月あたり${PRICING.basic.annual}〜
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`border-t ${styles.border} pt-5 flex flex-col sm:flex-row justify-between items-center gap-2`}
        >
          <div>
            <p className={`text-[10px] ${styles.legal}`}>
              運営: {COMPANY.name}（{COMPANY.location}）
            </p>
            <p className={`text-[10px] ${styles.legal}`}>{COMPANY.copyright}</p>
          </div>
          <div className={`flex gap-2 items-center text-[10px] ${styles.legal}`}>
            <Link
              href="https://www.tunee.ai/ja/terms-of-service"
              className="hover:underline"
            >
              利用規約
            </Link>
            <span>|</span>
            <Link
              href="https://www.tunee.ai/ja/privacy-policy"
              className="hover:underline"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
