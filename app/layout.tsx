import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Abdulwadud Ayinde — Software Engineer & ML Researcher",
  description:
    "I started coding on a phone in Ilorin, Nigeria. Today I build AI products for agriculture, health and careers — and research interpretable machine learning. B.Sc. Computer Science, Kwara State University.",
  keywords: [
    "Muhammad Abdulwadud Ayinde",
    "Devtec",
    "Software Engineer",
    "Machine Learning Researcher",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,600&family=Caveat:wght@500;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
