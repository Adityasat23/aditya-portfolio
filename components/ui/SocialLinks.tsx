import Link from "next/link";
import TikTokIcon from "@/components/icons/TikTok";

export default function SocialLinks() {
  const cls = "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition";
  return (
    <div className="flex gap-2">
      {/* ...ikon lain */}
      <Link href="https://www.tiktok.com/@USERNAME_ANDA" className={cls} aria-label="TikTok">
        <TikTokIcon className="h-5 w-5 text-accent-blue" />
      </Link>
    </div>
  );
}
