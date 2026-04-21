import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "radial-gradient(ellipse at top right, #2a2418 0%, #141310 55%, #0e0d0b 100%)",
          color: "#f2ece0",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(to right, transparent, #d4b572, transparent)",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d4b572",
          }}
        >
          <span style={{ width: 48, height: 1, background: "#d4b572" }} />
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>L&apos;art de l&apos;événement,</span>
            <span style={{ color: "#d4b572", fontStyle: "italic" }}>
              la précision d&apos;une signature.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a89e8e",
              maxWidth: 860,
              lineHeight: 1.4,
              fontFamily: "sans-serif",
            }}
          >
            Agence événementielle premium — Paris · Genève · Marrakech
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7a7265",
            fontFamily: "sans-serif",
          }}
        >
          <span>amkpromotion.com</span>
          <span>Depuis 2010</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
