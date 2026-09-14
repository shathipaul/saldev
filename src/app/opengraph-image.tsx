import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "SalDev: cold email, LinkedIn and X outbound for B2B. You pay per meeting, not per month.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const root = process.cwd();
  const [bold, regular, mark] = await Promise.all([
    readFile(join(root, "src/app/fonts/Inter-Bold.ttf")),
    readFile(join(root, "src/app/fonts/Inter-Regular.ttf")),
    readFile(join(root, "src/app/icon.svg"), "utf8"),
  ]);
  const markSrc = `data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(900px 520px at 50% 120%, rgba(255,94,0,0.28), rgba(245,245,245,0) 70%), #F5F5F5",
          color: "#000000",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} alt="" width={64} height={64} />
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em" }}>SalDev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#FF5E00",
              textTransform: "uppercase",
            }}
          >
            Cold email · LinkedIn · X
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.042em",
            }}
          >
            <span>You run the business.</span>
            <span style={{ color: "#FF5E00" }}>We’ll fill the calendar.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 26, color: "#3D3D3D" }}>
          <span>Qualified sales calls for B2B, booked across three channels.</span>
          <span style={{ fontWeight: 700, color: "#000000" }}>You pay per meeting, not per month.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
