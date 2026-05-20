// brutal-stark.jsx — All-typographic, no images. Catalog of entries. The
// number column is sticky so you always see where you are.

const C = {
  brand: "Makers Room",
  city: "Lyon",
  year: "2026",

  hero_ttl: "build. not alone.",
  hero_lede: "ready to build your thing alongside fifteen people who give a damn?",
  format: "in-person · lyon · saturdays · 3 hours · free",

  diagnostic: [
    { q: "going to cafes and coworkings. still building alone.", a: "proximity without relationship changes nothing." },
    { q: "set yourself a deadline last month. missed it. set another one.", a: "promises to yourself don't stick." },
    { q: "signed up for an AI course. watched two videos. changed nothing.", a: "courses teach knowledge. you need to apply it." },
    { q: "googled your problem for an hour. got generic answers.", a: "context matters more than advice." },
    { q: "joined a discord. 500 people, nobody knows your project.", a: "big communities are just small crowds." },
  ],

  notThis: [
    ["coworking space", "you have a desk."],
    ["accelerator", "nobody takes equity."],
    ["course", "google exists."],
    ["networking club", "we build, not collect."],
    ["meetup", "same people, every saturday, for months."],
  ],

  weekly: [
    { t: "opening round.", d: "what you shipped. where you're stuck. did you complete last week's challenge." },
    { t: "hot seats.", d: "2–3 people who are most stuck get the room's full attention for 15 minutes each." },
    { t: "work block.", d: "heads-down building toward this week's shared challenge. side by side." },
    { t: "closing.", d: "how you did. next week's challenge. one commitment, said out loud." },
  ],

  aiTable: [
    { before: "landing page", beforeTime: "a week with a freelancer", now: "one afternoon, yourself" },
    { before: "market research", beforeTime: "two weeks", now: "customer segments with jtbd in one session" },
    { before: "prototype", beforeTime: "months finding a developer", now: "working prototype in one weekend" },
    { before: "product spec", beforeTime: "a week of writing", now: "prd from a conversation with ai in one hour" },
  ],

  marquee: [
    "ai tutor for kids",
    "receipts → accounting",
    "one-pan recipe app",
    "freelance contract generator",
    "podcast for sober founders",
    "second-hand bike marketplace",
    "tax assistant for nomads",
    "interview prep for designers",
    "saas for dentists",
    "community for solo parents",
    "generative crossword",
    "inventory for bakeries",
  ],
};

function Top() {
  return (
    <header className="top wrap">
      <div className="top__l">
        <span className="top__brand">{C.brand.toLowerCase()}.</span>
        <span>{C.city.toLowerCase()}</span>
      </div>
      <div className="top__r">
        <a href="#read">read</a>
        <a href="#how">how</a>
        <a href="#who">who</a>
        <a href="#join">join ↘</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__meta">
        <span><span className="ink">● open</span> · season 01 · {C.year}</span>
        <span>{C.format}</span>
      </div>
      <h1 className="hero__ttl">
        build.<br />
        <em>not alone.</em>
      </h1>
      <div className="hero__sub">
        <p className="hero__sub-lede">{C.hero_lede}</p>
        <div className="hero__sub-ctas">
          <a className="btn btn--accent" href="#join">join · saturdays <span>→</span></a>
          <a className="btn btn--ghost" href="#read">read ↓</a>
        </div>
      </div>
    </section>
  );
}

function Entry({ n, label, sticky, title, aside, children }) {
  return (
    <section id={label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()} className="entry wrap">
      <div className="entry__n">
        <strong>0{n}</strong>
        {label}
      </div>
      <div>
        <h2 className="entry__ttl">{title}</h2>
        {children}
      </div>
      <div className="entry__aside">{aside}</div>
    </section>
  );
}

function App() {
  return (
    <>
      <Top />
      <main>
        <Hero />

        <Entry
          n={1}
          label="the room"
          title={<>fifteen people. <em>one table.</em></>}
          aside={
            <>
              <p>saturday morning. fifteen people around a long table in a cafe. everyone is building something different.</p>
              <p className="quiet">for three hours, nobody is alone with their project. you walk in with an idea and walk out with progress.</p>
            </>
          }
        />

        <Entry
          n={2}
          label="be honest"
          title={<>what are you <em>doing right now?</em></>}
          aside={<p className="quiet">five things you might be doing instead of joining a real room. tell yourself which ones are yours.</p>}
        >
          <ol className="lst" style={{ marginTop: 36 }}>
            {C.diagnostic.map((d, i) => (
              <li key={i} className="lst__item">
                <span className="lst__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="lst__t">{d.q}</p>
                  <p className="lst__a">→ {d.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </Entry>

        <Entry
          n={3}
          label="this is not"
          title={<>we resemble a few things. <em>we are none.</em></>}
          aside={
            <>
              <p>got a day job? most of us do.</p>
              <p>not technical? good. the room needs you.</p>
              <p>haven't shipped yet? in-progress counts.</p>
              <p>not in lyon? paris next year.</p>
            </>
          }
        >
          <div className="ai" style={{ marginTop: 36 }}>
            {C.notThis.map(([k, v], i) => (
              <React.Fragment key={i}>
                <span className="ai__art">not a {k}.</span>
                <span style={{ color: "var(--muted)", gridColumn: "2 / span 2" }}>{v}</span>
              </React.Fragment>
            ))}
          </div>
        </Entry>

        <Entry
          id="how"
          n={4}
          label="how it works"
          title={<>weekly. <em>three hours.</em></>}
          aside={
            <>
              <p>same challenge for everyone, applied to your project. <span className="quiet">"ship a landing page." "talk to five potential customers."</span></p>
              <p>next saturday you say whether you did it.</p>
            </>
          }
        >
          <ol className="steps" style={{ marginTop: 36 }}>
            {C.weekly.map((w, i) => (
              <li key={i} className="step">
                <span className="step__n">step {String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="step__t">{w.t}</p>
                  <p className="step__d">{w.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Entry>

        <Entry
          id="who"
          n={5}
          label="who's in the room"
          title={<>curious. <em>don't quit.</em></>}
          aside={
            <>
              <p>developers, operators, marketers, designers. first-time builders and people on their third thing.</p>
              <p className="quiet">the filter: are you building something now, and do you take it seriously?</p>
            </>
          }
        />

        <Entry
          n={6}
          label="economics"
          title={<>one weekend, <em>now.</em></>}
          aside={
            <p className="quiet">most people don't know this is possible yet. some of us ship this way already, and the transfer happens by sitting next to someone doing it.</p>
          }
        >
          <div className="ai" style={{ marginTop: 36 }}>
            {C.aiTable.map((r, i) => (
              <React.Fragment key={i}>
                <span className="ai__art">{r.before}</span>
                <span className="ai__before">{r.beforeTime}</span>
                <span className="ai__now">→ {r.now}</span>
              </React.Fragment>
            ))}
          </div>
        </Entry>

        {/* Marquee — what's shipping */}
        <section aria-label="now shipping">
          <div className="wrap" style={{ paddingTop: 60, paddingBottom: 0 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>●</span> now shipping in the room
            </p>
          </div>
          <div className="marquee">
            <div className="marquee__track" aria-hidden="true">
              {[...C.marquee, ...C.marquee].map((m, i) => (
                <span key={i}>{m} <span className="marquee__sep">/</span></span>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="entry wrap" style={{ alignItems: "end" }}>
          <div className="entry__n">
            <strong>07</strong>
            write me
          </div>
          <div>
            <h2 className="entry__ttl">
              if it clicks, <em>dm me.</em>
            </h2>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn--accent" href="#">telegram <span>→</span></a>
              <a className="btn btn--ghost" href="#">email <span>→</span></a>
            </div>
          </div>
          <div className="entry__aside">
            <p>write me what you're building. we'll meet over coffee. if it clicks, come saturday.</p>
            <p className="quiet" style={{ marginTop: 18 }}>free. no fees. no equity. no paywall. ever.</p>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="bottom">
          <span>{C.brand.toLowerCase()} · {C.city.toLowerCase()} · {C.year}</span>
          <span><a href="#">telegram</a> · <a href="#">email</a></span>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
