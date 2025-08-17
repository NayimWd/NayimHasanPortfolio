import "./globals.css";

export const metadata = {
  title: "Nayim Hasan Portfolio",
  description: "Next.js + Tailwind v4.1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

