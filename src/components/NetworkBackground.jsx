/* ─── Colour aliases ──────────────────────────────────────────────────────── */
const C = "#00E7FF"; // cyan
const R = "#FF3B3B"; // red

/* ─── Node table ──────────────────────────────────────────────────────────────
   Tuple format: [cx, cy, r, fill, animClass, hasGlowFilter]

   animClass controls the CSS keyframe assigned to that node:
     np-bg     → background layer (smallest, dimmest, slowest pulse — 9 s)
     np-mid    → mid layer   (medium size / brightness — 7 s)
     np-fg     → foreground  (larger, brighter — 5.5 s)
     np-accent → hero node   (largest, with SVG glow — 4 s)

   hasGlowFilter → applies a feGaussianBlur glow via SVG <filter> on that node.
   ──────────────────────────────────────────────────────────────────────────── */

const NODES = [
  // ── Top-left cluster ──────────────────────────────────────────────
  [ 62,  48,  1.5, C, "np-bg",  false],
  [142,  82,  1.8, C, "np-bg",  false],
  [198,  32,  1.5, R, "np-bg",  false],
  [ 92, 152,  1.6, C, "np-bg",  false],
  [265,  98,  1.4, C, "np-bg",  false],
  [ 52, 198,  1.5, R, "np-bg",  false],
  [175, 242,  1.8, C, "np-bg",  false],

  // ── Top-centre cluster ────────────────────────────────────────────
  [518,  42,  1.4, C, "np-bg",  false],
  [598,  78,  3.2, C, "np-fg",  false],
  [682,  38,  1.5, R, "np-bg",  false],
  [722, 118,  1.8, C, "np-bg",  false],
  [642, 168,  2.4, C, "np-mid", false],
  [562, 142,  2.2, R, "np-mid", false],

  // ── Top-right cluster ─────────────────────────────────────────────
  [1198,  52,  1.5, C, "np-bg",  false],
  [1282,  88,  2.2, C, "np-mid", false],
  [1348,  42,  1.5, R, "np-bg",  false],
  [1398, 118,  1.6, C, "np-bg",  false],
  [1318, 162,  2.4, C, "np-mid", false],
  [1232, 148,  1.8, R, "np-bg",  false],
  [1172,  82,  1.5, C, "np-bg",  false],

  // ── Left edge ─────────────────────────────────────────────────────
  [ 32, 352,  1.4, C, "np-bg",  false],
  [ 72, 432,  1.6, C, "np-bg",  false],
  [ 48, 522,  1.5, R, "np-bg",  false],
  [ 82, 602,  1.4, C, "np-bg",  false],
  [ 38, 682,  1.6, C, "np-bg",  false],

  // ── Right edge ────────────────────────────────────────────────────
  [1392, 322,  1.4, C, "np-bg",  false],
  [1418, 432,  1.6, R, "np-bg",  false],
  [1402, 528,  1.5, C, "np-bg",  false],
  [1382, 638,  1.4, C, "np-bg",  false],
  [1412, 748,  1.6, R, "np-bg",  false],

  // ── Centre-left cluster ───────────────────────────────────────────
  [302, 382,  1.6, C, "np-bg",  false],
  [322, 452,  1.4, C, "np-bg",  false],
  [348, 302,  2.4, C, "np-mid", false],
  [382, 428,  2.2, R, "np-mid", false],
  [398, 502,  2.0, C, "np-mid", false],
  [422, 358,  3.8, C, "np-fg",  true ],  // ← cyan accent glow
  [452, 432,  2.2, C, "np-mid", false],
  [482, 302,  3.0, R, "np-fg",  false],

  // ── Centre cluster (heart of the network) ─────────────────────────
  [682, 382,  2.4, C, "np-mid", false],
  [698, 452,  1.8, C, "np-bg",  false],
  [752, 322,  5.0, C, "np-accent", true],  // ← hero node — largest + glow
  [762, 462,  3.2, C, "np-fg",  false],
  [788, 248,  2.4, C, "np-mid", false],
  [818, 402,  2.4, R, "np-mid", false],
  [822, 498,  1.8, C, "np-bg",  false],
  [842, 342,  1.6, C, "np-bg",  false],
  [682, 518,  1.5, R, "np-bg",  false],

  // ── Centre-right cluster ──────────────────────────────────────────
  [1052, 352,  2.4, C, "np-mid", false],
  [1052, 482,  1.5, R, "np-bg",  false],
  [1102, 432,  2.4, C, "np-mid", false],
  [1122, 302,  3.5, R, "np-fg",  true ],  // ← red accent glow
  [1142, 498,  1.4, C, "np-bg",  false],
  [1172, 382,  1.6, C, "np-bg",  false],
  [1182, 452,  2.2, C, "np-mid", false],

  // ── Interior scatter (keeps mobile centre populated) ──────────────
  [ 438, 218,  1.5, R, "np-bg",  false],
  [ 512, 552,  1.6, C, "np-bg",  false],
  [ 938, 182,  1.4, C, "np-bg",  false],
  [ 958, 602,  2.2, C, "np-mid", false],
  [ 298, 618,  1.5, R, "np-bg",  false],
  [1082, 658,  1.4, C, "np-bg",  false],

  // ── Bottom-left cluster ───────────────────────────────────────────
  [ 82, 838,  1.5, R, "np-bg",  false],
  [102, 748,  1.6, C, "np-bg",  false],
  [162, 858,  1.4, C, "np-bg",  false],
  [182, 798,  2.4, C, "np-mid", false],
  [252, 758,  2.2, R, "np-mid", false],
  [282, 838,  1.8, C, "np-mid", false],

  // ── Bottom-centre cluster ─────────────────────────────────────────
  [582, 862,  1.4, R, "np-bg",  false],
  [598, 798,  2.2, C, "np-mid", false],
  [642, 868,  1.4, C, "np-bg",  false],
  [678, 838,  3.0, C, "np-fg",  false],
  [722, 792,  2.2, R, "np-mid", false],
  [758, 858,  1.6, C, "np-bg",  false],

  // ── Bottom-right cluster ──────────────────────────────────────────
  [1182, 818,  1.4, C, "np-bg",  false],
  [1198, 752,  1.8, C, "np-bg",  false],
  [1252, 858,  1.6, C, "np-bg",  false],
  [1302, 798,  2.4, C, "np-mid", false],
  [1322, 858,  1.8, R, "np-bg",  false],
  [1352, 758,  2.2, R, "np-mid", false],
  [1402, 838,  1.4, C, "np-bg",  false],
];

/* ─── Pre-compute connection edges ────────────────────────────────────────────
   O(n²) runs exactly ONCE at module load then is frozen forever.
   With ~79 nodes and threshold=130 we expect ~125–140 edges — ideal density.
   ──────────────────────────────────────────────────────────────────────────── */
const CONNECT_DIST    = 130;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

const EDGES = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    const dx   = NODES[i][0] - NODES[j][0];
    const dy   = NODES[i][1] - NODES[j][1];
    const dSq  = dx * dx + dy * dy;
    if (dSq > 0 && dSq < CONNECT_DIST_SQ) {
      // t: 1 at d=0, 0 at d=CONNECT_DIST — linear fade
      const t = 1 - dSq / CONNECT_DIST_SQ;
      EDGES.push({
        x1: NODES[i][0], y1: NODES[i][1],
        x2: NODES[j][0], y2: NODES[j][1],
        // max line opacity 0.28; fades to ~0 near the distance threshold
        opacity: parseFloat((t * 0.28).toFixed(3)),
        // Dimmed variant of the source node's colour
        stroke: NODES[i][3] === C ? "#00B8CC" : "#CC2F2F",
      });
    }
  }
}

/* ─── Component ───────────────────────────────────────────────────────────────
   Pure, stateless — no hooks, no runtime computation, no RAF loops.
   The SVG is rendered once and never touched again by React.
   ──────────────────────────────────────────────────────────────────────────── */
export default function NetworkBackground() {
  return (
    <div id="network-bg" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        focusable="false"
      >
        <defs>
          {/* Glow filter — cyan accent nodes */}
          <filter id="gc" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Glow filter — red accent nodes */}
          <filter id="gr" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Static connection lines ── no animation, no GPU cost ── */}
        <g>
          {EDGES.map((e, i) => (
            <line
              key={i}
              x1={e.x1} y1={e.y1}
              x2={e.x2} y2={e.y2}
              stroke={e.stroke}
              strokeWidth="0.7"
              opacity={e.opacity}
            />
          ))}
        </g>

        {/* ── Nodes with ambient opacity pulse ── compositor-thread only ── */}
        <g style={{ pointerEvents: "auto" }}>
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n[0]} cy={n[1]}
              r={n[2]}
              fill={n[3]}
              className={`${n[4]} net-node`}
              filter={n[5] ? `url(#${n[3] === C ? "gc" : "gr"})` : undefined}
              style={{
                animationDelay: `${((i * 0.618) % 7).toFixed(2)}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
