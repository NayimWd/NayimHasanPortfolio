import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: 40,
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            width: 1200,
            height: 630,
            background:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Main Card */}
        <div
          style={{
            width: 1120,
            height: 550,
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderRadius: 24,
            padding: 60,
            color: "#fff",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Top gradient accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
            }}
          />

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                background: "linear-gradient(135deg, #fff 0%, #e2e8f0 100%)",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              Nayim Hasan
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#94a3b8",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              Frontend-Focused MERN Developer
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.3) 50%, transparent 100%)",
              margin: "20px 0",
            }}
          />

          {/* Content - 4 lines */}
          <div
            style={{
              fontSize: 26,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              color: "#e2e8f0",
              lineHeight: 1.4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 12, fontSize: 28 }}>⚡</span>
              <span>Building scalable React applications with TypeScript</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 12, fontSize: 28 }}>🎯</span>
              <span>Clean architecture & maintainable code patterns</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 12, fontSize: 28 }}>🚀</span>
              <span>Performance optimization & modern UI/UX design</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 12, fontSize: 28 }}>📖</span>
              <span>Learning Cloud deployment & system designs</span>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: "#64748b",
                fontWeight: 500,
              }}
            >
              nayim-hasan-portfolio.vercel.app
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                fontSize: 18,
                color: "#64748b",
              }}
            >
              <span style={{ 
                background: "rgba(59, 130, 246, 0.2)", 
                padding: "6px 16px", 
                borderRadius: 8,
                color: "#93c5fd"
              }}>
                Next.js
              </span>
              <span style={{ 
                background: "rgba(139, 92, 246, 0.2)", 
                padding: "6px 16px", 
                borderRadius: 8,
                color: "#c4b5fd"
              }}>
                TypeScript
              </span>
              <span style={{ 
                background: "rgba(236, 72, 153, 0.2)", 
                padding: "6px 16px", 
                borderRadius: 8,
                color: "#f9a8d4"
              }}>
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}