import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#0d1117",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #58a6ff, #bc8cff)",
        }}
      />

      {/* LEFT — Main content */}
      <div
        style={{
          flex: 1.2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 64px",
          borderRight: "1px solid #21262d",
        }}
      >
        {/* Avatar + Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#161b22",
              border: "2px solid #30363d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "600",
              color: "#8b949e",
            }}
          >
            NH
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#e6edf3",
                lineHeight: 1.2,
              }}
            >
              Nayim Hasan
            </div>
            <div
              style={{ fontSize: "16px", color: "#58a6ff", marginTop: "4px" }}
            >
              MERN Developer
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "16px",
            color: "#8b949e",
            lineHeight: 1.7,
            marginBottom: "28px",
            maxWidth: "480px",
          }}
        >
          Frontend-focused developer building scalable UI, clean architecture
          and maintainable code.
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  color: "#8b949e",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>

        {/* Domain */}
        <div style={{ fontSize: "13px", color: "#484f58" }}>
          nayim-hasan-portfolio.vercel.app
        </div>
      </div>

      {/* RIGHT — Stats panel */}
      <div
        style={{
          flex: 0.8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 48px",
          gap: "16px",
        }}
      >
        {[
          {
            label: "Specialty",
            value: "Full-Stack Web Apps",
            color: "#e6edf3",
          },
          {
            label: "Focus",
            value: "Scalable UI & Clean Code",
            color: "#e6edf3",
          },
          {
            label: "Stack",
            value: "MongoDB · Express · React · Node",
            color: "#58a6ff",
          },
          {
            label: "Open to",
            value: "Freelance & Full-time",
            color: "#3fb950",
          },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #21262d",
              borderRadius: "10px",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#484f58",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {label}
            </div>
            <div style={{ fontSize: "15px", color, fontWeight: "500" }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
