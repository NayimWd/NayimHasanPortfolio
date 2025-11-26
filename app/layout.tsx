import "./globals.css";
import { ThemeProvider } from "./Provider";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://nayim-hasan-portfolio.vercel.app"),
  title: "Nayim Hasan — MERN Developer",
  description:
    "Frontend-focused MERN Developer building scalable UI, clean architecture and maintainable code.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayim-hasan-portfolio.vercel.app",
    siteName: "Nayim Hasan Portfolio",
    title: "Nayim Hasan — MERN Developer",
    description:
      "Frontend-focused MERN Developer building scalable UI, clean architecture and maintainable code.",
    images: [
      {
        url: "https://nayim-hasan-portfolio.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Card — Nayim Hasan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayim Hasan — MERN Developer",
    description:
      "Frontend-focused MERN Developer building scalable UI, clean architecture and maintainable code.",
    images: ["https://nayim-hasan-portfolio.vercel.app/api/og"],
  },
}


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

