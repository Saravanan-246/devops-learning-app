import React, { useState } from "react";
import slidesData from "./slides";

function Learn({ topic, goHome }) {
  const slides = slidesData[topic] || [];

  const [openPhase, setOpenPhase] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

  const togglePhase = (key) => {
    setOpenPhase((prev) => (prev === key ? null : key));
    setOpenTopic(null);
  };

  const toggleTopic = (key) => {
    setOpenTopic((prev) => (prev === key ? null : key));
  };

  const groupContent = (content = []) => {
    const grouped = [];
    let current = null;

    content.forEach((block) => {
      if (block?.type === "heading") {
        if (current) grouped.push(current);
        current = { heading: block.value, items: [] };
      } else if (current) {
        current.items.push(block);
      }
    });

    if (current) grouped.push(current);
    return grouped;
  };

  if (!slides.length) {
    return (
      <div style={s.container}>
        <nav style={s.navbar}>
          <div style={s.navInner}>
            <button style={s.backBtn} onClick={goHome}>
              ← Back
            </button>
          </div>
        </nav>

        <div style={s.empty}>
          No Content Available
        </div>
      </div>
    );
  }

  return (
    <div style={s.container}>
      {/* NAVBAR */}
      <nav style={s.navbar}>
        <div style={s.navInner}>
          <button style={s.backBtn} onClick={goHome}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back</span>
          </button>

          <div style={s.navDivider} />

          <span style={s.topicBadge}>{topic}</span>
        </div>
      </nav>

      {/* MAIN */}
      <main style={s.main}>
        {slides.map((slide, i) => {
          const phaseKey = `phase-${i}`;
          const isPhaseOpen = openPhase === phaseKey;
          const topics = groupContent(slide.content);

          return (
            <section key={i} style={s.phaseCard}>
              <header
                style={{
                  ...s.phaseHeader,
                  borderBottom: isPhaseOpen ? "1px solid #334155" : "none",
                }}
                onClick={() => togglePhase(phaseKey)}
              >
                <div style={s.phaseTitleGroup}>
                  <span style={s.phaseIndex}>0{i + 1}</span>
                  <h2 style={s.phaseTitle}>{slide.title}</h2>
                </div>

                <div
                  style={{
                    ...s.chevron,
                    transform: isPhaseOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </header>

              {isPhaseOpen && (
                <div style={s.topicsList}>
                  {topics.map((t, idx) => {
                    const topicKey = `topic-${i}-${idx}`;
                    const isOpen = openTopic === topicKey;

                    return (
                      <div key={idx} style={s.topicWrapper}>
                        <div
                          style={{
                            ...s.topicRow,
                            color: isOpen ? "#6366f1" : "#e2e8f0",
                          }}
                          onClick={() => toggleTopic(topicKey)}
                        >
                          <span style={s.topicHeading}>{t.heading}</span>
                          <span style={s.plusMinus}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>

                        {isOpen && (
                          <div style={s.bodyContent}>
                            {t.items.map((block, j) => (
                              <ContentBlock key={j} block={block} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}

const ContentBlock = ({ block }) => {
  if (!block) return null;

  switch (block.type) {
    case "text":
      return <p style={s.text}>{block.value}</p>;

    case "list":
      return (
        <ul style={s.list}>
          {block.items?.map((item, k) => (
            <li key={k} style={s.listItem}>{item}</li>
          ))}
        </ul>
      );

    case "highlight":
      return <div style={s.codeBlock}>{block.value}</div>;

    default:
      return null;
  }
};

/* ================= FINAL POLISH ================= */

const s = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "100px",
  },

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #1e293b",
    padding: "0 20px",
  },

  navInner: {
    maxWidth: "800px",
    margin: "0 auto",
    height: "64px",
    display: "flex",
    alignItems: "center",
  },

  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.2s",
  },

  navDivider: {
    width: "1px",
    height: "20px",
    backgroundColor: "#334155",
    margin: "0 16px",
  },

  topicBadge: {
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.05em",
    color: "#6366f1",
  },

  main: {
    maxWidth: "720px",
    margin: "40px auto 0",
    padding: "0 20px",
  },

  phaseCard: {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    border: "1px solid #334155",
    marginBottom: "16px",
    overflow: "hidden",
    transition: "0.2s",
  },

  phaseHeader: {
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },

  phaseTitleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  phaseIndex: {
    fontSize: "12px",
    color: "#475569",
    fontFamily: "monospace",
  },

  phaseTitle: {
    fontSize: "18px",
    fontWeight: "600",
  },

  chevron: {
    color: "#94a3b8",
    transition: "transform 0.3s ease",
  },

  topicsList: {
    backgroundColor: "#161e2e",
  },

  topicWrapper: {
    borderBottom: "1px solid #1e293b",
  },

  topicRow: {
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "0.2s",
  },

  topicHeading: {
    flex: 1,
  },

  plusMinus: {
    fontSize: "18px",
    color: "#64748b",
  },

  bodyContent: {
    padding: "0 24px 20px",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#cbd5e1",
    marginBottom: "10px",
  },

  list: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },

  listItem: {
    marginBottom: "6px",
  },

  codeBlock: {
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "13px",
    color: "#818cf8",
    marginTop: "12px",
  },

  empty: {
    padding: "40px",
    textAlign: "center",
    color: "#94a3b8",
  },
};

export default Learn;