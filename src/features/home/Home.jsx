import React, { useState } from "react";

function Home({ goToLearn }) {
  const [hovered, setHovered] = useState(null);

  const topics = [
    {
      id: "devops",
      title: "DevOps Infrastructure",
      desc: "Containerization, CI/CD pipelines, and scalable deployment systems.",
      tag: "Infrastructure",
    },
  ];

  return (
    <div style={s.container}>
      {/* HEADER */}
      <header style={s.header}>
        <span style={s.logo}>LEARNFLOW</span>

        <h1 style={s.title}>
          Refine your <br />
          <span style={s.accent}>Technical Stack</span>
        </h1>

        <p style={s.subtitle}>
          Select a specialized module to begin.
        </p>
      </header>

      {/* GRID */}
      <div style={s.grid}>
        {topics.map((t) => {
          const isHover = hovered === t.id;

          return (
            <div
              key={t.id}
              onClick={() => goToLearn(t.id)}
              onMouseEnter={() => setHovered(t.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...s.card,
                borderColor: isHover ? "#6366f1" : "#1f2937",
                background: isHover ? "#111827" : "#0f172a",
                transform: isHover
                  ? "translateY(-4px)"
                  : "translateY(0)",
                boxShadow: isHover
                  ? "0 10px 30px rgba(99, 102, 241, 0.25)"
                  : "0 4px 16px rgba(0,0,0,0.25)",
              }}
            >
              <span style={s.tag}>{t.tag}</span>

              <h2 style={s.cardTitle}>{t.title}</h2>

              <p style={s.desc}>{t.desc}</p>

              <div style={s.footer}>
                <span
                  style={{
                    ...s.cta,
                    color: isHover ? "#818cf8" : "#e5e7eb",
                  }}
                >
                  Start Module →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= MATCHED STYLES ================= */

const s = {
  container: {
    minHeight: "100vh",
    background: "#0f172a", // 🔥 match Learn page
    color: "#f8fafc",
    fontFamily: "'Inter', -apple-system, sans-serif",
    padding: "40px 16px",
  },

  header: {
    maxWidth: "720px", // 🔥 match Learn width
    margin: "0 auto 40px",
  },

  logo: {
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "0.2em",
    color: "#64748b",
    display: "block",
    marginBottom: "10px",
  },

  title: {
    fontSize: "clamp(28px, 6vw, 48px)", // 🔥 better mobile scaling
    fontWeight: "800",
    lineHeight: "1.1",
    margin: "0 0 12px",
  },

  accent: {
    color: "#6366f1", // 🔥 match Learn accent
  },

  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr", // 🔥 clean focus layout (like GPT)
    gap: "14px",
    maxWidth: "720px",
    margin: "0 auto",
  },

  card: {
    background: "#0f172a",
    border: "1px solid #1f2937",
    borderRadius: "12px",
    padding: "18px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    flexDirection: "column",
  },

  tag: {
    fontSize: "10px",
    color: "#6366f1",
    marginBottom: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  cardTitle: {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  desc: {
    fontSize: "13.5px",
    color: "#94a3b8",
    lineHeight: "1.6",
    marginBottom: "14px",
  },

  footer: {
    display: "flex",
    alignItems: "center",
  },

  cta: {
    fontSize: "13px",
    fontWeight: "600",
    transition: "color 0.2s ease",
  },
};

export default Home;