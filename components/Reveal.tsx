"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "fade-up" | "pin-up" | "tape-peel" | "sticker-pop" | "write-in";

const variantClass: Record<RevealVariant, string> = {
  "fade-up": "",
  "pin-up": "animate-pin-up",
  "tape-peel": "animate-tape-peel",
  "sticker-pop": "animate-sticker-pop",
  "write-in": "animate-write-in",
};

export default function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  tilt,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: RevealVariant;
  tilt?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: React.CSSProperties = { transitionDelay: `${delay}ms` };
  if (variant === "pin-up" && tilt) {
    (style as React.CSSProperties & Record<string, string>)["--pin-tilt"] = tilt;
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`${variantClass[variant]} ${
        variant === "fade-up"
          ? `transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`
          : visible
            ? ""
            : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
