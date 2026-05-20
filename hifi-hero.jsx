// hifi-hero.jsx
// Hero — layered abstract motion-blur images behind a giant display
// headline. Top bar mono, eyebrow above headline, format line + CTA below.

function Hero({ showImagery }) {
  const c = window.MR;

  // Hero composition: a 3-panel horizontal band of overlapping motion-blur
  // panels, with a darker translucent block inside the middle panel holding
  // the small body text + CTA — echoing the festival reference.
  const panels = [
    { palette: "ember",  seed: "h1", slice: null },
    { palette: "dusk",   seed: "h2", slice: null },
    { palette: "meadow", seed: "h3", slice: null },
  ];

  return (
    <header className="hero">
      {/* Top bar — quiet */}
      <div className="hero__bar wrap">
        <p className="mono">
          <span style={{ color: "var(--ink)" }}>est. {c.year}</span>
          <span style={{ color: "var(--muted)" }}> · saturdays</span>
        </p>
        <p className="mono" style={{ color: "var(--muted)", textAlign: "right" }}>
          {c.brand.toLowerCase()} <span style={{ color: "var(--accent)" }}>↘</span> {c.city.toLowerCase()}
        </p>
      </div>

      <section className="hero__main wrap">
        <p className="kicker hero__eyebrow">
          <span className="hero__eyebrow-bullet" />
          an invitation
        </p>

        {/* Big display headline */}
        <h1 className="hero__headline">
          <span className="hero__h-line">ready to <em>build</em> your thing</span>
          <span className="hero__h-line hero__h-line--accent">alongside fifteen people</span>
          <span className="hero__h-line">who give a <span className="hero__damn">damn?</span></span>
        </h1>

        {/* Image band — layered motion-blurred abstracts */}
        {showImagery && (
          <div className="hero__band" aria-hidden="true">
            {panels.map((p, i) => (
              <div key={i} className={"hero__panel hero__panel--" + i}>
                <AbstractImage palette={p.palette} seed={p.seed} blur={90} grain={0.55} ratio={4/3} />
              </div>
            ))}
            <GrainOverlay opacity={0.18} />
          </div>
        )}

        <div className="hero__foot">
          <p className="mono hero__format">{c.format}</p>
          <div className="hero__ctas">
            <a className="btn btn--accent" href="#join">
              {c.primaryCta}
              <span className="arrow">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 6 H 16" /><path d="M11 1 L 16 6 L 11 11" />
                </svg>
              </span>
            </a>
            <a className="lnk hero__scroll" href="#read">
              keep reading
              <span aria-hidden="true" style={{ marginLeft: 8 }}>↓</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero { position: relative; padding-top: 28px; padding-bottom: 0; }
        .hero__bar {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 12px; position: relative; z-index: 3;
        }

        .hero__main {
          position: relative;
          padding-top: clamp(40px, 5vw, 70px);
          padding-bottom: clamp(40px, 6vw, 80px);
        }

        .hero__eyebrow {
          position: relative; z-index: 3;
          display: flex; align-items: center; gap: 12px;
          margin-bottom: clamp(24px, 3vw, 36px);
          white-space: nowrap;
        }
        .hero__eyebrow-bullet { display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }

        .hero__headline {
          position: relative; z-index: 3;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(46px, 7.6vw, 118px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin: 0;
        }
        .hero__h-line {
          display: block;
          line-height: 1.05;
        }
        .hero__h-line em {
          font-style: italic;
          font-weight: 500;
        }
        .hero__h-line--accent { color: var(--accent); font-style: italic; font-weight: 500; }
        .hero__damn { font-style: italic; font-weight: 500; }

        /* The motion-blur image band sits BELOW the headline, edge-to-edge */
        .hero__band {
          position: relative;
          z-index: 1;
          margin: clamp(28px, 4vw, 48px) calc(var(--pad-x) * -1) clamp(28px, 4vw, 48px);
          height: clamp(280px, 32vw, 460px);
          display: grid;
          grid-template-columns: 1.1fr 1.4fr 1fr;
          gap: 0;
          overflow: hidden;
        }
        .hero__panel { position: relative; overflow: hidden; }
        .hero__panel--0 { transform: translateY(0); }
        .hero__panel--1 { transform: translateY(-3%); margin-top: -2%; }
        .hero__panel--2 { transform: translateY(2%); }

        .hero__foot {
          position: relative; z-index: 3;
          display: flex;
          flex-wrap: wrap;
          gap: 24px 40px;
          align-items: center;
          justify-content: space-between;
        }
        .hero__format { font-size: 13px; color: var(--muted); }
        .hero__ctas { display: flex; align-items: center; gap: 26px; flex-wrap: wrap; }
        .hero__scroll { font-size: 14px; color: var(--muted); font-family: var(--font-mono); }

        @media (max-width: 720px) {
          .hero__bar { flex-direction: column; gap: 8px; align-items: flex-start; }
          .hero__band { grid-template-columns: 1fr; height: 260px; }
        }
      `}</style>
    </header>
  );
}

window.Hero = Hero;
