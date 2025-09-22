import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./Provider";
import ScrollToTop from "@/components/ScrollToTop";

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
        </ThemeProvider>
      </body>
    </html>
  );
}

