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
          background: "#0f172a",
          padding: 40,
        }}
      >
        <div
          style={{
            width: 1120,
            height: 550,
            display: "flex",
            flexDirection: "column",
            background: "#1e293b",
            borderRadius: 24,
            padding: 48,
            color: "#fff",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
            }}
          >
            Nayim Hasan
          </div>

          <div
            style={{
              fontSize: 34,
            }}
          >
            Frontend Focused MERN Developer
          </div>

          <div
            style={{
              height: 2,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />

          <div
            style={{
              fontSize: 26,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>✨ Frontend Architecture & Scalability</div>
            <div>💻 Maintainable Clean Code</div>
            <div>📚 TS • System Design • Cloud Architecture</div>
          </div>

          <div
            style={{
              fontSize: 20,
              marginTop: 20,
            }}
          >
            portfolio: nayim-hasan.vercel.app
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
