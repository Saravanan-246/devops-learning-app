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
                borderColor: isHover ? "#3b82f6" : "#1f2937",
                background: isHover ? "#111827" : "#0f172a",
                transform: isHover ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHover
                  ? "0 10px 30px rgba(0,0,0,0.4)"
                  : "none",
              }}
            >
              <span style={s.tag}>{t.tag}</span>

              <h2 style={s.cardTitle}>{t.title}</h2>

              <p style={s.desc}>{t.desc}</p>

              <div style={s.footer}>
                <span style={s.cta}>
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

/* ================= PROFESSIONAL STYLES ================= */

const s = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "#f8fafc",
    fontFamily: "Inter, -apple-system, sans-serif",
    padding: "40px 16px",
  },

  header: {
    maxWidth: "1000px",
    margin: "0 auto 48px",
  },

  logo: {
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "0.2em",
    color: "#64748b",
    display: "block",
    marginBottom: "12px",
  },

  title: {
    fontSize: "clamp(34px, 7vw, 72px)",
    fontWeight: "800",
    lineHeight: "1.05",
    letterSpacing: "-0.03em",
    margin: "0 0 14px",
  },

  accent: {
    color: "#3b82f6",
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    background: "#0f172a",
    border: "1px solid #1f2937",
    borderRadius: "14px",
    padding: "24px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    flexDirection: "column",
  },

  tag: {
    fontSize: "10px",
    color: "#3b82f6",
    marginBottom: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  desc: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: "1.6",
    flex: 1,
    marginBottom: "20px",
  },

  footer: {
    display: "flex",
    alignItems: "center",
  },

  cta: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#e5e7eb",
  },
};

export default Home;