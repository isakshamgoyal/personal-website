import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Saksham Goyal | Senior Software Engineer - AI + Backend",
  description:
    "Building intelligent systems at the intersection of AI and scalable backend architecture. Specialized in GenAI-powered products, agentic workflows, and full-stack mobile development.",
  keywords: [
    "Saksham Goyal",
    "Software Engineer",
    "AI Engineer",
    "Backend Developer",
    "Python",
    "LangChain",
    "OpenAI",
    "Full Stack Developer",
  ],
  authors: [{ name: "Saksham Goyal" }],
  openGraph: {
    title: "Saksham Goyal | Senior Software Engineer - AI + Backend",
    description:
      "Building intelligent systems at the intersection of AI and scalable backend architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Goyal | Senior Software Engineer - AI + Backend",
    description:
      "Building intelligent systems at the intersection of AI and scalable backend architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
