import { Instagram, Youtube } from "lucide-react";

export const INSTAGRAM_URL = "https://www.instagram.com/dr.ciceroalaorkluppel/";
export const YOUTUBE_URL = "https://www.youtube.com/user/ciceroak/videos";

const links = [
  { href: INSTAGRAM_URL, label: "Instagram", icon: Instagram },
  { href: YOUTUBE_URL, label: "YouTube", icon: Youtube },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-white"
        >
          <item.icon size={18} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
