// abstract-image.jsx
// Generative motion-blur abstract art, SVG-based. Looks like the smeared/grainy
// photographs in the festival reference: heavy gaussian blur over layered
// gradient blobs, then turbulence-noise grain on top.

const ABSTRACT_PALETTES = {
  // each palette: 4–6 deep, saturated colors used for the blurred blobs.
  // colors come through MUCH duller after blur+overlay, so push them.
  dusk:    ["#c9485e", "#7a3a82", "#3a4e8a", "#e0b56f", "#8b3a30", "#22244a"],
  meadow:  ["#88a050", "#2f6e4d", "#c7a830", "#d97a3c", "#3b5a2a", "#e8c878"],
  ember:   ["#d04a2a", "#f5b13a", "#8a1e2b", "#e88a4a", "#3a1e15", "#f0d09a"],
  sea:     ["#1f6b8a", "#3aa7a0", "#7fcfd8", "#0e3a52", "#a8d8c6", "#143a3a"],
  storm:   ["#2a3a5e", "#6e7aa2", "#a0a8c0", "#0e1424", "#c8c4b0", "#444a60"],
  ink:     ["#2a2820", "#5a5648", "#a8a49a", "#e8e2d4", "#0c0a06", "#7a7468"],
  warm:    ["#e8a070", "#c84a3a", "#f0d090", "#7a3e3a", "#e0786a", "#2a1410"],
};

// Deterministic pseudo-random based on string seed so reload is stable.
function _seedRng(seed) {
  let h = 2166136261;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 1_000_000) / 1_000_000;
  };
}

// Render N large overlapping blobs across the viewport.
function _blobs(rng, palette, count, w, h) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const cx = (rng() * 1.4 - 0.2) * w;
    const cy = (rng() * 1.4 - 0.2) * h;
    const rx = (0.35 + rng() * 0.6) * w;
    const ry = (0.25 + rng() * 0.5) * h;
    const rot = rng() * 180;
    const fill = palette[Math.floor(rng() * palette.length)];
    const opacity = 0.7 + rng() * 0.3;
    out.push({ cx, cy, rx, ry, rot, fill, opacity });
  }
  return out;
}

// AbstractImage — drop-in SVG image, sized to its container by default.
// Props:
//   palette: "dusk" | "meadow" | "ember" | "sea" | "storm" | "ink" | "warm"
//   seed: any (used to make composition stable across reloads)
//   blur: gaussian std-dev in viewBox units (default 40)
//   grain: 0..1 strength of overlaid noise (default 0.5)
//   slice: "h" | "v" | null — chops the image into 4 strips slightly offset to
//          give that "torn fragments" feel from the references
//   strips: 3 | 4 | 5 — strip count when slice is set
//   ratio: w/h aspect ratio for the viewBox (default 4/3)
//   className/style: passthrough
function AbstractImage({
  palette = "dusk", seed = "a", blur = 40, grain = 0.55,
  slice = null, strips = 4, ratio = 4 / 3,
  className = "", style = {}, role = "presentation",
}) {
  const pal = ABSTRACT_PALETTES[palette] || ABSTRACT_PALETTES.dusk;
  const rng = React.useMemo(() => _seedRng(palette + "|" + seed), [palette, seed]);

  // viewBox dimensions
  const W = 400;
  const H = Math.round(W / ratio);
  const filterId = `f-${palette}-${String(seed).replace(/\W+/g, "_")}-${Math.round(blur)}`;
  const noiseId = `n-${palette}-${String(seed).replace(/\W+/g, "_")}`;

  // Generate composition (memoized so it doesn't shift on every render)
  const blobs = React.useMemo(() => _blobs(rng, pal, 7, W, H), [rng, pal]);

  // Strip offsets to give a "torn" look
  const stripDefs = React.useMemo(() => {
    if (!slice) return null;
    const arr = [];
    for (let i = 0; i < strips; i++) {
      const t = rng();
      arr.push({
        // along the slice axis: even sections
        i,
        offset: (t - 0.5) * (slice === "h" ? 0.06 * H : 0.05 * W),
        // a subtle scale jitter
        scale: 1 + (rng() - 0.5) * 0.04,
      });
    }
    return arr;
  }, [rng, slice, strips, H, W]);

  const renderBase = () => (
    <g filter={`url(#${filterId})`}>
      <rect x="0" y="0" width={W} height={H} fill={pal[5] || pal[0]} opacity="0.85" />
      {blobs.map((b, i) => (
        <ellipse key={i} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry}
          transform={`rotate(${b.rot} ${b.cx} ${b.cy})`}
          fill={b.fill} opacity={b.opacity} />
      ))}
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
      role={role}
      aria-hidden={role === "presentation"}
    >
      <defs>
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={blur} />
          <feGaussianBlur stdDeviation={blur * 0.4} />
        </filter>
        <filter id={noiseId} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" stitchTiles="stitch" seed={Math.floor(rng() * 100)} />
          <feColorMatrix values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${grain.toFixed(2)} 0`} />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Composition, optionally cut into offset strips */}
      {!slice && renderBase()}
      {slice && (
        <>
          {stripDefs.map((s, i) => {
            const stripW = slice === "v" ? W / strips : W;
            const stripH = slice === "h" ? H / strips : H;
            const x = slice === "v" ? i * stripW : 0;
            const y = slice === "h" ? i * stripH : 0;
            const dx = slice === "v" ? s.offset : 0;
            const dy = slice === "h" ? s.offset : 0;
            const clipId = `clip-${filterId}-${i}`;
            return (
              <g key={i} transform={`translate(${dx} ${dy})`}>
                <defs>
                  <clipPath id={clipId}><rect x={x} y={y} width={stripW} height={stripH} /></clipPath>
                </defs>
                <g clipPath={`url(#${clipId})`} transform={`translate(${(s.scale - 1) * W * -0.5} ${(s.scale - 1) * H * -0.5}) scale(${s.scale})`}>
                  {renderBase()}
                </g>
              </g>
            );
          })}
        </>
      )}

      {/* Grain overlay clipped to the image bounds */}
      <rect x="0" y="0" width={W} height={H} filter={`url(#${noiseId})`} fill="transparent" />
      {/* extra grain pass via separate dedicated noise rect */}
      <g style={{ mixBlendMode: "overlay", opacity: grain }}>
        <rect x="0" y="0" width={W} height={H} fill={`url(#grainPat-${palette}-${seed})`} />
      </g>
      <defs>
        <pattern id={`grainPat-${palette}-${seed}`} width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" filter={`url(#${noiseId})`} />
        </pattern>
      </defs>
    </svg>
  );
}

// A thin grain-only overlay used to add a final unifying noise pass on top of
// composed image collages.
function GrainOverlay({ opacity = 0.18, baseFrequency = 0.85, style = {} }) {
  const id = React.useId().replace(/:/g, "_");
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", mixBlendMode: "multiply", opacity, ...style }} aria-hidden="true">
      <filter id={"g" + id}>
        <feTurbulence type="fractalNoise" baseFrequency={baseFrequency} numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0" />
      </filter>
      <rect width="100%" height="100%" filter={"url(#g" + id + ")"} />
    </svg>
  );
}

Object.assign(window, { AbstractImage, GrainOverlay, ABSTRACT_PALETTES });
