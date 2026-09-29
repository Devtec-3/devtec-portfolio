import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <p className="font-hand text-2xl font-bold text-espresso">
        Build. Document. Grow. ✍️
      </p>
      <p className="mt-2 text-xs font-bold text-espresso/60">
        © {new Date().getFullYear()} {profile.name} · Designed &amp; engineered by {profile.alias}
      </p>
      <p className="mt-1 text-xs font-semibold text-espresso/40">
        Started on a phone with TrebEdit · Built with Next.js &amp; Tailwind
      </p>
    </footer>
  );
}
