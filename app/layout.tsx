import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Abdulwadud Ayinde — Frontend Engineer",
  description:
    "Software Engineer & Machine Learning Researcher from Ilorin, Nigeria. B.Sc. Computer Science (CGPA 4.01/5.00) · Interpretable ML research · AI products for agriculture, health & careers · Internships across Nigeria, UK & Australia.",
  keywords: [
    "Muhammad Abdulwadud Ayinde",
    "Devtec",
    "Frontend Engineer",
    "React Developer Nigeria",
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
      <body>{children}</body>
    </html>
  );
}
