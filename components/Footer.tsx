import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind CSS
      </p>
      <p className="mt-1">
        Designed &amp; engineered by <span className="gradient-text font-semibold">{profile.alias}</span>
      </p>
    </footer>
  );
}
