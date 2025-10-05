import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./Provider";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://nayim-hasan-portfolio.vercel.app"),
  title: {
    default: "Nayim Hasan – MERN Stack Developer & Learner",
    template: "%s | Nayim Hasan",
  },
  description:
    "Explore the portfolio of Nayim Hasan — a passionate MERN Stack Developer and lifelong learner. Discover projects built with React, Next.js, TypeScript, Node.js, and Express.",
  keywords: [
    "Nayim Hasan",
    "MERN Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Nayim Hasan" }],
  creator: "Nayim Hasan",
  publisher: "Nayim Hasan",
  alternates: {
    canonical: "https://nayim-hasan-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/nFicon.svg",
    shortcut: "/nFicon.svg",
  },
  openGraph: {
    title: "Nayim Hasan – MERN Stack Developer & Learner",
    description:
      "Portfolio of Nayim Hasan — a developer passionate about building modern, performant web applications using React, TypeScript, and Node.js.",
    url: "https://nayim-hasan-portfolio.vercel.app",
    siteName: "Nayim Hasan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nhLogo.png",
        width: 1200,
        height: 630,
        alt: "Nayim Hasan Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayim Hasan – MERN Stack Developer & Learner",
    description:
      "Explore Nayim Hasan’s MERN Stack projects, learning journey, and technical expertise in modern web development.",
    images: ["/nhLogo.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

