import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const fredoka = localFont({
  src: [
    {
      path: "/fonts/Fredoka.ttf",
      style: "normal",
    },
  ],
  variable: "--fredoka",
});

const inter = localFont({
  src: [
    {
      path: "/fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Inter-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--inter",
});

const interTight = localFont({
  src: [
    {
      path: "/fonts/InterTight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/InterTight-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--interTight",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "/fonts/SpaceGrotesk.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--spaceGrotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexandrahockett.com/"),
  title: "AHockett Templates - Frontend Web Design",
  description:
    "Showcase of customizable website templates with different navbars by Alexandra Hockett, a frontend developer. Explore unique, stylish, and responsive designs for your next project.",
  authors: [{ name: "Alexandra Hockett" }],
  keywords: [
    "frontend developer",
    "website templates",
    "web design",
    "navbar templates",
    "customizable templates",
    "AHockett",
    "web development",
  ],
  creator: "Alexandra Hockett",
  openGraph: {
    title: "AHockett Templates - Frontend Web Design",
    description:
      "Discover responsive and customizable website templates with various navbar designs by Alexandra Hockett. Perfect for your next web project.",
    url: "https://www.alexandrahockett.com/",
    siteName: "AHockett",
    images: [
      {
        url: "/assets/png/logo-no-background.png",
        height: 630,
        alt: "AHockett Templates Preview",
      },
    ],
    type: "website",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-PT">
      <body
        className={`${fredoka.variable} ${inter.variable} ${interTight.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
