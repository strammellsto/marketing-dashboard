import { useState } from "react";
import { DEALERS, VEHICLES, PILLARS } from "./data";

export default function App() {
  const [activePillar, setActivePillar] = useState(null);
  const [activeTactic, setActiveTactic] = useState(null);

  function selectPillar(pillar) {
    if (activePillar?.id === pillar.id) {
      setActivePillar(null);
      setActiveTactic(null);
    } else {
      setActivePillar(pillar);
      setActiveTactic(null);
    }
  }

  function selectTactic(tactic) {
    if (activeTactic?.id === tactic.id) {
      setActiveTactic(null);
    } else {
      setActiveTactic(tactic);
    }
  }

  function back() {
    setActiveTactic(null);
  }

  function backToTop() {
    setActivePillar(null);
    setActiveTactic(null);
  }

  return (
    <div style={styles.root}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <div style={styles.headerLabel}>Marketing Overview</div>
            <div style={styles.headerTitle}>Marketing Efforts by Pillar</div>
          </div>
          {activePillar && (
            <button style={styles.backBtn} onClick={backToTop}>
              ← All pillars
            </button>
          )}
        </div>

        {/* Breadcrumb */}
        {activePillar && (
          <div style={styles.breadcrumb}>
            <span style={styles.breadcrumbInactive} onClick={backToTop}>Home</span>
            <span style={styles.breadcrumbSep}>›</span>
            <span
              style={activeTactic ? styles.breadcrumbInactive : styles.breadcrumbActive}
              onClick={activeTactic ? back : undefined}
            >
              {activePillar.name}
            </span>
            {activeTactic && (
              <>
                <span style={styles.breadcrumbSep}>›</span>
                <span style={styles.breadcrumbActive}>{activeTactic.name}</span>
              </>
            )}
          </div>
        )}
      </div>

      <div style={styles.body}>
        {/* LEVEL 1 — Pillar grid */}
        {!activePillar && (
          <div style={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <button
                key={p.id}
                style={{ ...styles.pillarCard, background: p.bg, borderColor: p.color + "33" }}
                onClick={() => selectPillar(p)}
              >
                <div style={{ ...styles.pillarDot, background: p.color }} />
                <div style={{ ...styles.pillarName, color: p.color }}>{p.name}</div>
                <div style={{ ...styles.pillarCount, color: p.color + "bb" }}>
                  {p.tactics.length} tactics
                </div>
                <div style={{ ...styles.pillarArrow, color: p.color }}>→</div>
              </button>
            ))}
          </div>
        )}

        {/* LEVEL 2 — Tactic list for selected pillar */}
        {activePillar && !activeTactic && (
          <div>
            <div style={{ ...styles.levelTitle, color: activePillar.color }}>
              {activePillar.name}
            </div>
            <div style={styles.tacticList}>
              {activePillar.tactics.map((t) => (
                <button
                  key={t.id}
                  style={{
                    ...styles.tacticRow,
                    borderLeftColor: activePillar.color,
                    background: activePillar.bg,
                  }}
                  onClick={() => selectTactic(t)}
                >
                  <span style={styles.tacticRowName}>{t.name}</span>
                  <span style={{ ...styles.tacticRowArrow, color: activePillar.color }}>
                    View all vehicles →
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* LEVEL 3 — Vehicle details for selected tactic */}
        {activePillar && activeTactic && (
          <div>
            <div style={{ ...styles.levelTitle, color: activePillar.color }}>
              {activeTactic.name}
            </div>
            <div style={styles.vehicleGrid}>
              {Object.keys(activeTactic.dealers || activeTactic.vehicles).map((v) => (
                <div
                  key={v}
                  style={{
                    ...styles.vehicleCard,
                    borderTopColor: activePillar.color,
                    borderTopWidth: 3,
                    borderTopStyle: "solid",
                  }}
                >
                  <div style={{ ...styles.vehicleName, color: activePillar.color }}>{v}</div>
                  <div style={styles.vehicleDetail}>
                    {activeTactic.vehicles || activeTactic.dealers[v] || "No details yet."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#f7f6f3",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
  },
  header: {
    background: "#fff",
    borderBottom: "1px solid #e8e6e0",
    padding: "1.5rem 2.5rem 1rem",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLabel: {
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#999",
    fontWeight: 500,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: "#1a1a1a",
  },
  backBtn: {
    background: "none",
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 13,
    color: "#555",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    fontSize: 13,
  },
  breadcrumbInactive: {
    color: "#999",
    cursor: "pointer",
    textDecoration: "underline",
    textDecorationColor: "#ccc",
  },
  breadcrumbActive: {
    color: "#1a1a1a",
    fontWeight: 500,
  },
  breadcrumbSep: {
    color: "#ccc",
  },
  body: {
    padding: "2rem 2.5rem",
    maxWidth: 1100,
    margin: "0 auto",
  },
  pillarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 14,
  },
  pillarCard: {
    border: "1.5px solid",
    borderRadius: 14,
    padding: "1.5rem 1.25rem",
    cursor: "pointer",
    textAlign: "left",
    transition: "transform 0.12s, box-shadow 0.12s",
    fontFamily: "inherit",
    position: "relative",
  },
  pillarDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    marginBottom: 12,
  },
  pillarName: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: 6,
  },
  pillarCount: {
    fontSize: 12,
    fontWeight: 400,
  },
  pillarArrow: {
    position: "absolute",
    bottom: "1.1rem",
    right: "1.1rem",
    fontSize: 16,
    opacity: 0.5,
  },
  levelTitle: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: "1.25rem",
  },
  tacticList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  tacticRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderLeft: "4px solid",
    borderRadius: 10,
    padding: "1rem 1.25rem",
    cursor: "pointer",
    fontFamily: "inherit",
    border: "1px solid transparent",
    transition: "opacity 0.12s",
    textAlign: "left",
  },
  tacticRowName: {
    fontSize: 15,
    fontWeight: 500,
    color: "#1a1a1a",
  },
  tacticRowArrow: {
    fontSize: 13,
    fontWeight: 500,
    whiteSpace: "nowrap",
    marginLeft: 12,
  },
  vehicleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  vehicleCard: {
    background: "#fff",
    borderRadius: 12,
    padding: "1.1rem 1.25rem",
    border: "1px solid #e8e6e0",
  },
  vehicleName: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  vehicleDetail: {
    fontSize: 14,
    color: "#555",
    lineHeight: 1.6,
  },
};
