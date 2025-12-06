import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0d1117",
          color: "#E6EDF3",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >

        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            marginRight: 50,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img
            src="https://nayim-hasan-portfolio.vercel.app/me.png"
            alt="Profile"
            width={180}
            height={180}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              marginBottom: 12,
              display: "flex",
            }}
          >
            Nayim Hasan — MERN Developer
          </div>

          <div
            style={{
              fontSize: 28,
              opacity: 0.7,
              marginBottom: 24,
              display: "flex",
            }}
          >
            Frontend Architecture · Scalability · Clean Code
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 28,
            }}
          >
            <div style={{ display: "flex" }}>⚡ Frontend-focused MERN Developer</div>
            <div style={{ display: "flex" }}>🎯 Building maintainable scalable UI</div>
            <div style={{ display: "flex" }}>🚀 Advanced TypeScript Patterns</div>
            <div style={{ display: "flex" }}>📖 Cloud Architecture & System Design</div>
          </div>

          <div
            style={{
              marginTop: "auto",
              fontSize: 22,
              opacity: 0.6,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            nayim-hasan-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Content-Type": "image/png",
      },
    }
  );
}
