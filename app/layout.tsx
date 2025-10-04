import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./Provider";
import ScrollToTop from "@/components/ScrollToTop";
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://nayim-hasan-portfolio.vercel.app"), 
  title: "Nayim Hasan - Portfolio",
  description: "Learning journey",
  icons: {
    icon: "/nFicon.svg", 
  },
  openGraph: {
    title: "Nayim Hasan - Portfolio",
    description: "Learning journey",
    url: "/", 
    images: [
      {
        url: "/nhLogo.png",
        width: 1200,
        height: 630,
        alt: "Nayim Hasan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayim Hasan - Portfolio",
    description: "Learning journey",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-scroll-behavior="smooth">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />

        </ThemeProvider>
      </body>
    </html>
  );
}

