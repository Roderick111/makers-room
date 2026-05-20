// brutal-dark.jsx — Black background, brutal sans headlines, dotted hairlines,
// status pills, two-column rows with image placeholders. Reference: buildspace.

const C = {
  brand: "Makers Room",
  city: "Lyon",
  year: "2026",
  cohort: "S01 · Saturdays",

  format: "in-person in lyon · 3 hours/week · free",
  tagline_hero: "build your thing alongside fifteen people who give a damn.",
  primaryCta: "join s01",

  scene: "saturday morning. fifteen people around a long table in a cafe. everyone is building something different. someone just shipped their first landing page and can't stop smiling. someone else is stuck on a decision they've been circling for weeks. two people are leaning in, helping them think it through.",
  scene2: "the cafe noise fades. for three hours, nobody is alone with their project. you walk in with an idea and walk out with progress.",

  diagnostic: [
    { q: "going to cafes and coworkings. still building alone.", a: "proximity without relationship changes nothing." },
    { q: "set yourself a deadline last month. missed it. set another one.", a: "promises to yourself don't stick." },
    { q: "signed up for an AI course. watched two videos. changed nothing.", a: "courses teach knowledge. you need to apply it." },
    { q: "googled your problem for an hour. got generic answers.", a: "context matters more than advice." },
    { q: "joined a discord. 500 people, nobody knows your project.", a: "big communities are just small crowds." },
  ],

  notThis: [
    ["not a coworking space.", "you have a desk."],
    ["not an accelerator.", "nobody takes equity."],
    ["not a course.", "google exists."],
    ["not a networking club.", "we build, not collect."],
    ["not a meetup.", "same people, every saturday, for months."],
  ],

  weekly: [
    { t: "opening round.", d: "what you shipped. where you're stuck. did you complete last week's challenge." },
    { t: "hot seats.", d: "2–3 people who are most stuck get the room's full attention for 15 minutes each." },
    { t: "work block.", d: "heads-down building toward this week's shared challenge. everyone on their own project, side by side." },
    { t: "closing.", d: "how you did. next week's challenge announced. one commitment, said out loud." },
  ],

  who1: "people who are curious and have fun building. people who show up when it's hard and share what's broken. people making something they can't fully explain.",
  who2: "developers, operators, marketers, designers. first-time builders and people on their third thing. the mix is the point.",
  filter: "the filter is: are you building something now, and do you take it seriously?",

  aiTable: [
    { before: "landing page", beforeTime: "a week with a freelancer", now: "one afternoon, yourself." },
    { before: "market research", beforeTime: "two weeks", now: "customer segments with jtbd in one session." },
    { before: "prototype", beforeTime: "months finding a developer", now: "working prototype in one weekend." },
    { before: "product spec", beforeTime: "a week of writing", now: "prd from a conversation with ai in one hour." },
  ],

  joinPitch: "write me what you're building. we'll meet over coffee, discuss plans and ideas. if it clicks, come saturday.",
};

// ─────────────────────────────────────────────────────────────────────
function Pill({ kind = "muted", blip, children }) {
  return (
    <span className={`pill ${kind === "green" ? "pill--green" : kind === "red" ? "pill--red" : kind === "amber" ? "pill--amber" : ""}`}>
      {blip && <span className="pill__blip" />}
      {children}
    </span>
  );
}

function MediaSlot({ label }) {
  return (
    <div className="row__media-inner">
      <span>{label}</span>
    </div>
  );
}

function Top() {
  return (
    <div className="wrap">
      <div className="top">
        <a className="top__brand" href="#">
          <span className="top__brand-dot" aria-hidden="true" />
          {C.brand} ↘
        </a>
        <nav className="top__nav">
          <a href="#room">the room</a>
          <a href="#how">how it works</a>
          <a href="#who">who</a>
          <a href="#now">one weekend</a>
          <a href="#join">join</a>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="row">
      <div className="row__text">
        <div className="eyebrow">
          <Pill kind="accent" blip>now open</Pill>
          <Pill kind="muted">{C.format}</Pill>
        </div>
        <div>
          <h1 className="ttl ttl--lg">{C.tagline_hero}</h1>
          <p className="body" style={{ marginTop: 24 }}>
            {C.brand.toLowerCase()} is a small, weekly, in-person room for people who are building something real and don't want to do it alone. {C.city.toLowerCase()}. saturdays. free.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="btn" href="#join">{C.primaryCta} <span aria-hidden="true">→</span></a>
          <a className="btn btn--ghost" href="#room">how it works ↓</a>
        </div>
      </div>
      <div className="row__media">
        <MediaSlot label="image · the room" />
      </div>
    </div>
  );
}

function SectionRoom() {
  return (
    <div id="room" className="row">
      <div className="row__text">
        <Pill>i · the room</Pill>
        <div>
          <h2 className="ttl">what it feels like.</h2>
          <div className="body" style={{ marginTop: 22 }}>
            <p>{C.scene}</p>
            <p>{C.scene2}</p>
          </div>
        </div>
        <p className="body--small">
          <span style={{ color: "var(--accent)" }}>●</span> saturday · 09:30 — 12:30 · a cafe in lyon
        </p>
      </div>
      <div className="row__media">
        <MediaSlot label="image · the long table" />
      </div>
    </div>
  );
}

function SectionDiagnostic() {
  return (
    <div className="row row--full">
      <div className="row__text row__text--noborder">
        <Pill kind="accent">ii · diagnostic</Pill>
        <h2 className="ttl">be honest. <em>what are you doing right now?</em></h2>
        <ol className="diag">
          {C.diagnostic.map((d, i) => (
            <li key={i} className="diag__item">
              <span className="diag__n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="diag__q">{d.q}</p>
                <span className="diag__a">→ {d.a}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function SectionNot() {
  return (
    <div className="row row--full">
      <div className="row__text row__text--noborder">
        <Pill>iii · for the avoidance of doubt</Pill>
        <h2 className="ttl">this is not.</h2>
        <dl className="twocol" style={{ marginTop: 12 }}>
          {C.notThis.map(([k, v], i) => (
            <React.Fragment key={i}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}

function SectionHow() {
  return (
    <div id="how" className="row">
      <div className="row__text">
        <Pill kind="accent">iv · how it works</Pill>
        <div>
          <h2 className="ttl">weekly. <em>3 hours.</em></h2>
          <ol className="steps" style={{ marginTop: 32 }}>
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
        </div>
      </div>
      <div className="row__media">
        <MediaSlot label="image · the work block" />
      </div>
    </div>
  );
}

function SectionWho() {
  return (
    <div id="who" className="row">
      <div className="row__text">
        <Pill>v · who's in the room</Pill>
        <div>
          <h2 className="ttl">curious people. <em>don't quit.</em></h2>
          <div className="body" style={{ marginTop: 22 }}>
            <p>{C.who1}</p>
            <p>{C.who2}</p>
          </div>
        </div>
        <p style={{ paddingTop: 22, borderTop: "1px dotted var(--rule-dotted)", fontSize: 19, lineHeight: 1.35, letterSpacing: "-0.012em", maxWidth: "44ch" }}>
          {C.filter}
        </p>
      </div>
      <div className="row__media">
        <MediaSlot label="image · faces · 15 portraits" />
      </div>
    </div>
  );
}

function SectionAi() {
  return (
    <div id="now" className="row row--full">
      <div className="row__text row__text--noborder">
        <Pill kind="amber">vi · economics</Pill>
        <h2 className="ttl">one weekend. <em>now.</em></h2>
        <div className="grid-3" style={{ marginTop: 32 }}>
          <span className="hd">artifact</span>
          <span className="hd">before</span>
          <span className="hd">now</span>
          {C.aiTable.map((r, i) => (
            <React.Fragment key={i}>
              <span className="cell cell--art">{r.before}</span>
              <span className="cell cell--before">{r.beforeTime}</span>
              <span className="cell cell--now">→ {r.now}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionJoin() {
  return (
    <div id="join" className="row">
      <div className="row__text">
        <Pill kind="accent" blip>vii · open</Pill>
        <div>
          <h2 className="ttl ttl--lg">if it clicks, <em>dm me.</em></h2>
          <p className="body" style={{ marginTop: 22 }}>{C.joinPitch}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn" href="#">telegram <span>→</span></a>
            <a className="btn btn--ghost" href="#">email <span>→</span></a>
          </div>
          <p className="body--small">free. no fees. no equity. no paywall. ever.</p>
        </div>
      </div>
      <div className="row__media">
        <MediaSlot label="image · saturday, you" />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="wrap">
      <div className="bottom">
        <div className="bottom__links">
          <a href="#">faq</a>
          <a href="#join">join s01</a>
          <a href="#">s01 demos</a>
          <a href="#">os</a>
        </div>
        <a href="#" className="bottom__pin">introducing s02 + paris</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Top />
      <main className="wrap" style={{ borderTop: "1px dotted var(--rule-dotted)" }}>
        <Hero />
        <SectionRoom />
        <SectionDiagnostic />
        <SectionNot />
        <SectionHow />
        <SectionWho />
        <SectionAi />
        <SectionJoin />
      </main>
      <Bottom />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
