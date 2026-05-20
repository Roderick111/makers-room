// hifi-sections.jsx
// All body sections for the Makers Room hi-fi single page.
// Each section ships its own CSS in a single <style> block at the bottom of
// the file. Headlines use the display serif; body uses the sans.

const c = () => window.MR;

function SectionHead({ kicker, num, title, lede, align = "left" }) {
  return (
    <header className={"sh sh--" + align}>
      <div className="sh__meta">
        <span className="kicker">{kicker}</span>
        <span className="sh__num mono">{num}</span>
      </div>
      <h2 className="sh__title">{title}</h2>
      {lede && <p className="sh__lede">{lede}</p>}
    </header>
  );
}

// ─── 01 — what it feels like ───────────────────────────────────────
function SecRoom({ showImagery }) {
  const m = c();
  return (
    <section id="read" className="sec sec--room wrap">
      <SectionHead kicker="i — the room" num="01" title="what it feels like." />
      <div className="room__grid">
        <div className="room__body">
          <p className="lede">{m.scene}</p>
          <p className="follow">{m.scene2}</p>
        </div>
        {showImagery && (
          <figure className="room__fig">
            <AbstractImage palette="ember" seed="room-1" slice="h" strips={5} blur={32} grain={0.55} ratio={3/4} />
            <figcaption className="mono">a saturday morning <span className="accent">·</span> 09:30</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

// ─── 02 — be honest ────────────────────────────────────────────────
function SecDiagnostic() {
  const m = c();
  return (
    <section className="sec sec--diag wrap">
      <SectionHead kicker="ii — diagnostic" num="02"
        title={<>be honest. <em>what are you doing right now?</em></>} />
      <ol className="diag__list">
        {m.diagnostic.map((d, i) => (
          <li key={i} className="diag__item">
            <span className="diag__num mono">{String(i + 1).padStart(2, "0")}</span>
            <p className="diag__q">{d.q}</p>
            <p className="diag__a"><span className="accent">→</span> {d.a}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ─── 03 — what this is not ─────────────────────────────────────────
function SecNot() {
  const m = c();
  return (
    <section className="sec sec--not wrap">
      <SectionHead kicker="iii — for the avoidance of doubt" num="03"
        title={<>we resemble a few things. <em>we are none of them.</em></>} />
      <dl className="not__list">
        {m.notThis.map((n, i) => (
          <React.Fragment key={i}>
            <dt className="not__k"><span className="accent">×</span> not {n.k}</dt>
            <dd className="not__v">{n.v}</dd>
          </React.Fragment>
        ))}
      </dl>
      <div className="not__filters">
        <p className="kicker not__filters-label">a few notes on whether to come</p>
        <ul>
          {m.filters.map((f, i) => (
            <li key={i} className="not__filter">
              <em>{f.k}</em> <span>{f.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── full-bleed image break ────────────────────────────────────────
function ImageBreak({ palette = "dusk", seed = "br", slice = "v", strips = 6, label }) {
  return (
    <div className="imgbreak">
      <AbstractImage palette={palette} seed={seed} slice={slice} strips={strips} blur={32} grain={0.6} ratio={5/1.4} />
      {label && <span className="imgbreak__label mono">{label}</span>}
    </div>
  );
}

// ─── 04 — how it works ─────────────────────────────────────────────
function SecHow() {
  const m = c();
  return (
    <section className="sec sec--how wrap">
      <SectionHead kicker="iv — the shape of saturday" num="04"
        title={<>weekly on saturdays, <em>for 3 hours.</em></>} />

      <ol className="how__steps">
        {m.weekly.map((w, i) => (
          <li key={i} className="how__step">
            <div className="how__step-meta">
              <span className="how__step-n mono">step {String(i + 1).padStart(2, "0")}</span>
              <span className="how__step-dot" aria-hidden="true" />
            </div>
            <div>
              <h3 className="how__step-t">{w.t}</h3>
              <p className="how__step-d">{w.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <aside className="how__challenge">
        <p className="kicker how__challenge-k">appendix a · the weekly challenge</p>
        <p className="how__challenge-body">{m.challenge}</p>
      </aside>

      <div className="how__cadence">
        <div>
          <p className="kicker">monthly</p>
          <p className="how__cadence-v">{m.monthly}</p>
        </div>
        <div>
          <p className="kicker">between sessions</p>
          <p className="how__cadence-v">{m.between}</p>
        </div>
      </div>
    </section>
  );
}

// ─── 05 — who's in the room ────────────────────────────────────────
function SecWho({ showImagery }) {
  const m = c();
  return (
    <section className="sec sec--who wrap">
      <SectionHead kicker="v — who's in the room" num="05"
        title={<>curious people <em>who don't quit</em> when it gets hard.</>} />

      <div className="who__grid">
        <div className="who__prose">
          <p className="lede">{m.who1}</p>
          <p className="follow">{m.who2}</p>
        </div>
        {showImagery && (
          <figure className="who__fig">
            <AbstractImage palette="meadow" seed="who-1" slice="v" strips={4} blur={36} grain={0.55} ratio={3/4} />
          </figure>
        )}
      </div>

      <blockquote className="who__quote">
        <span className="who__quote-mark accent">"</span>
        {m.filter}
      </blockquote>

      <div className="who__membership">
        <p className="kicker">what stays once you're in</p>
        <ul className="mem">
          {m.membership.map((mem, i) => (
            <li key={i} className="mem__row">
              <span className="mem__n mono">{"0" + (i + 1)}</span>
              <span className="mem__k">{mem.k}</span>
              <span className="mem__v">{mem.v}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="who__energy">{m.roomEnergy}</p>
    </section>
  );
}

// ─── 06 — AI table ────────────────────────────────────────────────
function SecAi() {
  const m = c();
  return (
    <section className="sec sec--ai wrap">
      <SectionHead kicker="vi — economics" num="06"
        title={<>what one weekend <em>can do now.</em></>} />

      <div className="ai__table">
        <div className="ai__head">
          <span className="kicker">artifact</span>
          <span className="kicker ai__head-before">before</span>
          <span className="kicker ai__head-now">now</span>
        </div>
        {m.aiTable.map((r, i) => (
          <div key={i} className="ai__row">
            <p className="ai__art">{r.before}</p>
            <p className="ai__before"><s>{r.beforeTime}</s></p>
            <p className="ai__now"><span className="accent">→</span> {r.now}</p>
          </div>
        ))}
      </div>

      <p className="ai__close">{m.aiClose}</p>
      <p className="ai__cta">
        <a className="lnk lnk--always" href="#">{m.aiCta} →</a>
      </p>
    </section>
  );
}

// ─── shipping marquee ─────────────────────────────────────────────
function SecShipping() {
  const m = c();
  return (
    <section className="sec sec--shipping" aria-label="now shipping in the room">
      <div className="wrap shipping__label-wrap">
        <p className="kicker shipping__label">now shipping in the room <span className="accent">·</span></p>
      </div>
      <Marquee items={m.marquee} speed={70} separator="·" className="shipping__ticker" />
      <hr className="rule" />
    </section>
  );
}

// ─── 07 — join ─────────────────────────────────────────────────────
function SecJoin() {
  const m = c();
  return (
    <section id="join" className="sec sec--join wrap">
      <SectionHead kicker="vii — write me" num="07"
        title={<>if it clicks, <em>dm me.</em></>} />
      <p className="join__pitch">{m.joinPitch}</p>
      <div className="join__ctas">
        <a className="btn btn--accent" href="#">
          telegram
          <span className="arrow">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 6 H 16" /><path d="M11 1 L 16 6 L 11 11" />
            </svg>
          </span>
        </a>
        <a className="btn btn--ghost" href="#">
          email
          <span className="arrow">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 6 H 16" /><path d="M11 1 L 16 6 L 11 11" />
            </svg>
          </span>
        </a>
      </div>
      <p className="join__free mono">{m.joinFree}</p>
    </section>
  );
}

// ─── footer ────────────────────────────────────────────────────────
function FooterBlock() {
  const m = c();
  return (
    <footer className="sec sec--foot wrap">
      <hr className="rule" />
      <div className="foot__grid">
        <p className="foot__brand display">makers room.</p>
        <p className="mono foot__meta">{m.city.toLowerCase()} · {m.year} · saturdays</p>
        <p className="mono foot__meta">
          <a className="lnk" href="#">telegram</a> <span className="accent">·</span> <a className="lnk" href="#">email</a>
        </p>
      </div>
      <p className="foot__small mono">
        no fees · no equity · no paywall · just saturdays
      </p>
    </footer>
  );
}

// ─── stylesheet ────────────────────────────────────────────────────
function SectionStyles() {
  return (
    <style>{`
      .sec { position: relative; padding-top: var(--section-gap); padding-bottom: 0; }
      .sec--foot { padding-top: clamp(60px, 8vw, 120px); padding-bottom: 60px; }

      /* SectionHead */
      .sh { position: relative; max-width: 1080px; margin: 0 auto 0 0; padding-bottom: clamp(40px, 5vw, 64px); }
      .sh__meta { display: flex; align-items: baseline; gap: 16px; }
      .sh__num { font-size: 12px; color: var(--muted); margin-left: auto; }
      .sh__title {
        margin-top: 18px;
        font-size: clamp(40px, 5.4vw, 84px);
        line-height: 0.98;
        font-weight: 700;
        letter-spacing: -0.022em;
        max-width: 18ch;
      }
      .sh__title em { font-style: italic; font-weight: 500; color: var(--accent); }
      .sh__lede { margin-top: 18px; font-size: 18px; color: var(--muted); max-width: 56ch; }

      .lede { font-size: clamp(20px, 1.7vw, 24px); line-height: 1.45; }
      .follow { margin-top: 22px; font-size: clamp(18px, 1.4vw, 21px); line-height: 1.5; color: var(--ink); font-style: italic; }

      /* ── 01 ROOM ── */
      .room__grid { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: clamp(40px, 5vw, 80px); align-items: start; }
      .room__body { max-width: 60ch; }
      .room__fig { position: relative; aspect-ratio: 3/4; margin: 0; }
      .room__fig figcaption { position: absolute; left: 0; bottom: -28px; font-size: 11px; color: var(--muted); }
      @media (max-width: 880px) { .room__grid { grid-template-columns: 1fr; } }

      /* ── 02 DIAGNOSTIC ── */
      .diag__list { display: grid; gap: 0; max-width: 1100px; }
      .diag__item {
        display: grid;
        grid-template-columns: 80px minmax(0, 1.4fr) minmax(0, 1fr);
        gap: 32px;
        align-items: baseline;
        padding: 28px 0;
        border-top: 1px solid var(--rule);
      }
      .diag__item:last-child { border-bottom: 1px solid var(--rule); }
      .diag__num { font-size: 13px; color: var(--accent); }
      .diag__q { font-size: clamp(20px, 2vw, 28px); line-height: 1.25; font-family: var(--font-display); font-weight: 500; letter-spacing: -0.01em; }
      .diag__a { font-size: 16px; line-height: 1.45; color: var(--muted); font-style: italic; }
      @media (max-width: 720px) { .diag__item { grid-template-columns: 50px 1fr; } .diag__a { grid-column: 2; } }

      /* ── 03 NOT ── */
      .not__list {
        display: grid;
        grid-template-columns: minmax(260px, 1fr) minmax(0, 2fr);
        column-gap: 40px; row-gap: 0;
        margin: 0; max-width: 1100px;
      }
      .not__k, .not__v {
        padding: 22px 0; border-top: 1px solid var(--rule);
        margin: 0;
      }
      .not__k { font-family: var(--font-display); font-size: 22px; font-weight: 500; font-style: italic; letter-spacing: -0.01em; }
      .not__k .accent { font-style: normal; margin-right: 10px; }
      .not__v { font-size: 17px; color: var(--ink); }
      .not__list > :nth-last-child(-n+2) { border-bottom: 1px solid var(--rule); }

      .not__filters { margin-top: clamp(40px, 4vw, 60px); max-width: 900px; }
      .not__filters-label { display: block; margin-bottom: 16px; }
      .not__filter {
        display: grid;
        grid-template-columns: minmax(160px, 220px) 1fr;
        gap: 24px;
        padding: 14px 0;
        border-top: 0.5px solid var(--rule);
        font-size: 16.5px;
      }
      .not__filter:last-child { border-bottom: 0.5px solid var(--rule); }
      .not__filter em { font-family: var(--font-display); font-style: italic; font-weight: 500; }

      /* ── image break ── */
      .imgbreak {
        position: relative;
        margin: clamp(60px, 8vw, 120px) 0 0;
        height: clamp(220px, 28vw, 380px);
        width: 100%;
        overflow: hidden;
      }
      .imgbreak__label { position: absolute; left: var(--pad-x); bottom: 16px; color: #fff; opacity: 0.9; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; }

      /* ── 04 HOW ── */
      .how__steps { display: grid; gap: 0; max-width: 1100px; }
      .how__step {
        display: grid;
        grid-template-columns: 220px 1fr;
        gap: 40px;
        align-items: start;
        padding: 28px 0;
        border-top: 1px solid var(--rule);
      }
      .how__step:last-child { border-bottom: 1px solid var(--rule); }
      .how__step-meta { display: flex; align-items: center; gap: 14px; padding-top: 6px; }
      .how__step-n { font-size: 12px; color: var(--accent); }
      .how__step-dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }
      .how__step-t { font-family: var(--font-display); font-size: clamp(22px, 2vw, 30px); font-weight: 600; letter-spacing: -0.01em; }
      .how__step-d { margin-top: 8px; font-size: 17px; line-height: 1.55; color: var(--ink); max-width: 60ch; }
      @media (max-width: 720px) { .how__step { grid-template-columns: 1fr; gap: 8px; } }

      .how__challenge {
        margin-top: clamp(40px, 4vw, 60px);
        max-width: 1100px;
        padding: 30px 34px;
        border: 1.5px solid var(--ink);
        background: var(--paper-2);
        position: relative;
      }
      .how__challenge::before {
        content: ""; position: absolute; top: -8px; left: -8px; right: 8px; bottom: 8px;
        background: var(--accent); z-index: -1;
      }
      .how__challenge-k { display: block; }
      .how__challenge-body { margin-top: 12px; font-size: clamp(18px, 1.6vw, 22px); line-height: 1.45; }

      .how__cadence {
        margin-top: clamp(36px, 4vw, 48px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        max-width: 1100px;
      }
      .how__cadence-v { margin-top: 10px; font-size: 17px; line-height: 1.55; }
      @media (max-width: 720px) { .how__cadence { grid-template-columns: 1fr; } }

      /* ── 05 WHO ── */
      .who__grid {
        display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
        gap: clamp(40px, 5vw, 80px);
        align-items: start;
      }
      .who__prose { max-width: 60ch; }
      .who__fig { aspect-ratio: 3/4; margin: 0; }
      @media (max-width: 880px) { .who__grid { grid-template-columns: 1fr; } }

      .who__quote {
        margin: clamp(48px, 6vw, 80px) 0 clamp(36px, 4vw, 48px);
        padding: 30px 0 28px;
        max-width: 1100px;
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        font-family: var(--font-display);
        font-size: clamp(28px, 3.4vw, 44px);
        line-height: 1.15;
        font-style: italic;
        font-weight: 500;
        letter-spacing: -0.02em;
        position: relative;
      }
      .who__quote-mark { font-style: normal; font-size: 1.4em; line-height: 0; vertical-align: -0.35em; margin-right: 6px; }

      .who__membership { max-width: 1100px; }
      .who__membership > .kicker { display: block; margin-bottom: 14px; }
      .mem { display: grid; gap: 0; }
      .mem__row {
        display: grid;
        grid-template-columns: 50px 220px 1fr;
        gap: 24px;
        padding: 18px 0;
        border-top: 1px solid var(--rule);
        align-items: baseline;
      }
      .mem__row:last-child { border-bottom: 1px solid var(--rule); }
      .mem__n { font-size: 12px; color: var(--accent); }
      .mem__k { font-family: var(--font-display); font-size: 21px; font-weight: 600; letter-spacing: -0.01em; }
      .mem__v { font-size: 17px; line-height: 1.5; }
      @media (max-width: 720px) { .mem__row { grid-template-columns: 40px 1fr; } .mem__v { grid-column: 2; } }

      .who__energy { margin-top: clamp(32px, 4vw, 48px); font-family: var(--font-display); font-style: italic; font-size: clamp(20px, 2vw, 26px); line-height: 1.4; color: var(--muted); max-width: 60ch; }

      /* ── 06 AI ── */
      .ai__table { max-width: 1100px; }
      .ai__head, .ai__row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.4fr);
        gap: 40px;
        align-items: baseline;
        padding: 18px 0;
        border-bottom: 1px solid var(--rule);
      }
      .ai__head { border-top: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink); }
      .ai__art { font-family: var(--font-display); font-size: clamp(20px, 1.7vw, 24px); font-weight: 600; letter-spacing: -0.01em; }
      .ai__before { color: var(--muted); font-size: 16px; }
      .ai__now { font-size: clamp(17px, 1.4vw, 20px); line-height: 1.4; }
      .ai__close { margin-top: clamp(28px, 3vw, 40px); font-size: clamp(18px, 1.5vw, 22px); line-height: 1.5; max-width: 64ch; }
      .ai__cta { margin-top: 20px; font-family: var(--font-mono); font-size: 14px; }
      @media (max-width: 720px) {
        .ai__head, .ai__row { grid-template-columns: 1fr; gap: 4px; padding: 14px 0; }
        .ai__head { display: none; }
      }

      /* ── shipping marquee ── */
      .sec--shipping { padding-top: clamp(60px, 8vw, 100px); padding-bottom: 0; }
      .shipping__label-wrap { margin-bottom: 18px; }
      .shipping__ticker {
        font-family: var(--font-display);
        font-size: clamp(48px, 7vw, 110px);
        font-weight: 500;
        font-style: italic;
        letter-spacing: -0.025em;
        line-height: 1;
        padding: 24px 0 40px;
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        margin-bottom: 40px;
      }
      .shipping__ticker .mr-marquee__sep { color: var(--accent); font-style: normal; padding: 0 4px; }

      /* ── 07 JOIN ── */
      .sec--join { max-width: 1080px; }
      .join__pitch {
        max-width: 60ch;
        font-size: clamp(20px, 1.8vw, 26px);
        line-height: 1.45;
        margin-bottom: clamp(32px, 4vw, 48px);
      }
      .join__ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
      .join__free { color: var(--muted); font-size: 13px; }

      /* ── footer ── */
      .foot__grid {
        padding-top: 32px;
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 32px;
        align-items: baseline;
      }
      .foot__brand { font-size: clamp(28px, 3vw, 42px); font-weight: 600; letter-spacing: -0.02em; }
      .foot__meta { font-size: 12px; color: var(--muted); }
      .foot__small { margin-top: 60px; text-align: center; color: var(--whisper); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
      @media (max-width: 720px) { .foot__grid { grid-template-columns: 1fr; } }
    `}</style>
  );
}

Object.assign(window, {
  SecRoom, SecDiagnostic, SecNot, ImageBreak, SecHow, SecWho, SecAi,
  SecShipping, SecJoin, FooterBlock, SectionStyles,
});
