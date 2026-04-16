import React, { useState } from "react";
import slidesData from "./slides";

function Learn({ topic, goHome }) {
  const slides = slidesData[topic] || [];
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  if (!slides.length) {
    return (
      <div style={s.empty}>
        <h2>No Content Available</h2>
        <button style={s.primary} onClick={goHome}>Back</button>
      </div>
    );
  }

  return (
    <div style={s.container}>
      {/* HEADER */}
      <div style={s.header}>
        {/* ✅ PROFESSIONAL BACK BUTTON */}
        <button
          style={s.backBtn}
          onClick={goHome}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2563eb";
            e.currentTarget.style.border = "1px solid #2563eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1f2937";
            e.currentTarget.style.border = "1px solid #374151";
          }}
        >
          ← Back
        </button>

        <span style={s.topic}>{topic}</span>
      </div>

      {/* CONTENT */}
      <div style={s.content}>
        {slides.map((slide, i) => {
          let currentKey = null;

          return (
            <div key={i} style={s.slide}>
              <h2 style={s.title}>{slide.title}</h2>

              {slide.content.map((block, idx) => {
                const key = `${i}-${idx}`;

                if (block.type === "heading") {
                  currentKey = key;

                  return (
                    <div
                      key={idx}
                      style={s.headingBlock}
                      onClick={() => toggle(key)}
                    >
                      <h3 style={s.subHeading}>
                        {block.value}
                        <span style={s.arrow}>
                          {openKey === key ? "−" : "+"}
                        </span>
                      </h3>
                    </div>
                  );
                }

                if (openKey !== currentKey) return null;

                if (block.type === "text") {
                  return (
                    <div key={idx} style={s.contentBlock}>
                      <p style={s.text}>{block.value}</p>
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <div key={idx} style={s.contentBlock}>
                      <ul style={s.list}>
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (block.type === "highlight") {
                  return (
                    <div key={idx} style={s.contentBlock}>
                      <div style={s.codeBox}>{block.value}</div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const s = {
  container: {
    minHeight: "100vh",
    background: "#0b0f14",
    color: "#e5e7eb",
    fontFamily: "Inter, sans-serif",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    borderBottom: "1px solid #1f2937",
    position: "sticky",
    top: 0,
    background: "rgba(11,15,20,0.9)",
    backdropFilter: "blur(8px)",
    zIndex: 10,
  },

  /* ✅ NEW PROFESSIONAL BUTTON */
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    borderRadius: "8px",
    background: "#1f2937",
    border: "1px solid #374151",
    color: "#e5e7eb",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  topic: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#cbd5f5",
  },

  content: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "24px 16px",
  },

  slide: {
    marginBottom: "30px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  headingBlock: {
    padding: "16px 0",
    borderBottom: "1px solid #1f2937",
    cursor: "pointer",
  },

  subHeading: {
    fontSize: "18px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between",
  },

  arrow: {
    fontSize: "16px",
    color: "#9ca3af",
  },

  contentBlock: {
    padding: "12px 0 18px 0",
  },

  text: {
    fontSize: "15.5px",
    lineHeight: "1.8",
    color: "#9ca3af",
  },

  list: {
    paddingLeft: "18px",
    lineHeight: "1.8",
    color: "#9ca3af",
  },

  codeBox: {
    background: "#020617",
    border: "1px solid #1f2937",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "14px",
  },

  primary: {
    background: "#3b82f6",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
  },

  empty: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default Learn;