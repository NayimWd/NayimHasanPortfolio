import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./Provider";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Nayim Hasan - portfolio",
  description: "Learning journey",
  icons: {
    icon: "/nFicon.svg"
  }
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
          <SpeedInsights/>
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}

