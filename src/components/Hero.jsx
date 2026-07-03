import { useEffect, useState } from "react";
import SparkCanvas from "./SparkCanvas";
import {
  CAMP_CONFIG,
  getCountdown,
  isCampActive,
  waLinks,
} from "../config/campConfig";

export default function Hero({ data }) {
  const [countdown, setCountdown] = useState(() => getCountdown());

  useEffect(() => {
    const tick = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(tick);
  }, []);

  const active = isCampActive();
  const ctaLabel = CAMP_CONFIG.status.soldOut
    ? CAMP_CONFIG.messages.soldOut
    : CAMP_CONFIG.status.registrationClosed
      ? CAMP_CONFIG.messages.registrationClosed
      : data.ctaPrimary;

  const verseWords = data.verseQuote.split(" ");

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "88px 24px 64px",
        background:
          "radial-gradient(ellipse 120% 65% at 50% 108%, rgba(185,28,28,.42) 0%, rgba(154,52,18,.22) 38%, rgba(10,10,15,0) 72%)",
      }}
    >
      <SparkCanvas />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          maxWidth: 680,
        }}
      >
        {/* placeholder: reemplazar por el logo 2026 cuando llegue el webp */}
        <img
          src="/dark_logo-og.webp"
          alt="Logo del campamento"
          style={{
            width: 170,
            height: 170,
            margin: "-30px 0 -20px",
            objectFit: "contain",
            filter: "drop-shadow(0 0 18px rgba(251,146,60,.35))",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#fbbf24",
            border: "1px solid rgba(251,191,36,.35)",
            borderRadius: 999,
            padding: "8px 16px",
            background: "rgba(251,191,36,.06)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 9,
              height: 9,
              background: "linear-gradient(180deg,#fbbf24,#f97316)",
              borderRadius: "0 50% 50% 50%",
              animation: "flameWiggle 1.4s ease-in-out infinite",
            }}
          />
          {data.badge}
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "Anton, sans-serif",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(46px,11.5vw,92px)",
            lineHeight: 0.96,
            letterSpacing: ".01em",
            background:
              "linear-gradient(180deg,#fde68a 5%,#f97316 52%,#b91c1c 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textWrap: "balance",
          }}
        >
          {data.title}
        </h1>

        <p
          style={{
            margin: "6px 0 0",
            maxWidth: 480,
            fontSize: "clamp(16px,4.2vw,19px)",
            lineHeight: 1.55,
            color: "rgba(245,237,224,.88)",
            fontStyle: "italic",
            textWrap: "pretty",
          }}
        >
          {verseWords.map((word, i) => (
            <span
              key={i}
              style={{
                opacity: 0,
                animation: `igniteWord .7s ease ${0.6 + i * 0.15}s both`,
              }}
            >
              {word}{" "}
            </span>
          ))}
          <span
            style={{
              display: "block",
              marginTop: 8,
              fontStyle: "normal",
              fontSize: 13,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#fbbf24",
              opacity: 0,
              animation: "igniteWord .7s ease 3s both",
            }}
          >
            {data.verseRef}
          </span>
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(245,237,224,.75)",
          }}
        >
          <span style={{ color: "#fde68a" }}>{data.metaDate}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{data.metaDuration}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{data.metaAge}</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 6,
          }}
        >
          <a
            href={active ? CAMP_CONFIG.camp.formUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={active ? undefined : (e) => e.preventDefault()}
            className="btn-ember-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 52,
              padding: "14px 30px",
              borderRadius: 999,
              background: active
                ? "linear-gradient(120deg,#b91c1c,#f97316 60%,#fbbf24)"
                : "linear-gradient(120deg,#4b4b4b,#6b6b6b)",
              color: "#1a0a05",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 6px 26px rgba(249,115,22,.35)",
              cursor: active ? "pointer" : "not-allowed",
            }}
          >
            {ctaLabel}
          </a>
          <a
            href="#actividades"
            className="btn-ember-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 52,
              padding: "14px 26px",
              borderRadius: 999,
              border: "1px solid rgba(245,237,224,.28)",
              color: "#f5ede0",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              background: "rgba(255,255,255,.03)",
            }}
          >
            {data.ctaSecondary}
          </a>
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(64px,78px))",
              gap: 10,
            }}
          >
            {[
              { value: countdown.dd, label: "Días" },
              { value: countdown.hh, label: "Horas" },
              { value: countdown.mm, label: "Min" },
              { value: countdown.ss, label: "Seg" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(20,12,10,.85)",
                  border: "1px solid rgba(249,115,22,.3)",
                  borderRadius: 14,
                  padding: "12px 4px",
                  animation: `emberPulse 2.6s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <div
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: 30,
                    color: i === 3 ? "#f97316" : "#fde68a",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,224,.55)",
                    marginTop: 2,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(245,237,224,.5)",
            }}
          >
            {data.countdownLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
