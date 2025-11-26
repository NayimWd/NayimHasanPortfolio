import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const title = "Nayim Hasan — MERN Developer";
  const subtitle = "Frontend Architecture · Scalability · Clean Code";

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
          padding: "40px 50px",
        }}
      >
      
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            marginRight: 40,
            overflow: "hidden",
          }}
        >
          <img
            src="https://nayim-hasan-portfolio.vercel.app/me.jpg"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

     
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 28,
              opacity: 0.7,
              marginBottom: 32,
            }}
          >
            {subtitle}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 26,
            }}
          >
            <div>⚡ Frontend-focused MERN Developer</div>
            <div>🎯 Building maintainable scalable UI</div>
            <div>🚀 Advanced TypeScript Patterns</div>
            <div>📖 Cloud Architecture & System Design</div>
          </div>


          <div
            style={{
              marginTop: "auto",
              fontSize: 22,
              opacity: 0.6,
              fontFamily: "monospace",
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