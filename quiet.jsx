// quiet.jsx — minimalist single-page Makers Room.
// Narrow centered column. Hairline rules. Tight serif typography. The
// wireframe content from `wf-column` is preserved verbatim here.

const QUIET = {
  brand: "Makers Room",
  city: "Lyon",
  year: "2026",
  format: "in-person in lyon · 3 hours/week · free",
  tagline: "ready to build your thing alongside 15 people who give a shit?",
  primaryCta: "join makers room",

  // i — the room
  scene: "saturday morning. fifteen people around a long table in a cafe. everyone is building something different. someone just shipped their first landing page and can't stop smiling. someone else is stuck on a decision they've been circling for weeks, and two people are leaning in, helping them think it through. someone is watching over a shoulder as a prototype gets built in real time. the cafe noise fades. for three hours, nobody is alone with their project.",
  scene2: "this is what it feels like. you walk in with an idea and walk out with progress.",

  // ii — diagnostic
  diagnostic: [
    { q: "going to cafes and coworkings. still building alone.", a: "proximity without relationship changes nothing" },
    { q: "set yourself a deadline last month. missed it. set another one.", a: "promises to yourself don't stick" },
    { q: "signed up for an AI course. watched two videos. changed nothing.", a: "courses teach knowledge. you need to apply it" },
    { q: "googled your problem for an hour. got generic answers from strangers.", a: "context matters more than advice" },
    { q: "joined a discord. 500 people, nobody knows your project.", a: "big communities are just small crowds" },
  ],

  // iii — what this is not
  notThis: [
    { k: "a coworking space", v: "you have a desk." },
    { k: "an accelerator", v: "nobody takes equity." },
    { k: "a course", v: "google exists." },
    { k: "a networking club", v: "we build, not collect." },
    { k: "a meetup", v: "same people, every saturday, for months." },
  ],
  filters: [
    { k: "got a day job?", v: "most of us do. saturday mornings, 3 hours." },
    { k: "not technical?", v: "good. the room needs you." },
    { k: "haven't shipped yet?", v: "in-progress counts. the bar is work, not a portfolio." },
    { k: "not in lyon?", v: "paris next year. online community now." },
  ],

  // iv — weekly on saturdays
  weekly: [
    { t: "opening round.", d: "what you shipped, where you're stuck, what you need, did you complete last week's challenge." },
    { t: "hot seats.", d: "2–3 people who are most stuck get the room's full attention for 15 minutes each. real experience from people who've been there, not generic advice." },
    { t: "work block.", d: "heads-down building toward this week's shared challenge. everyone on their own project, side by side." },
    { t: "closing.", d: "how you did on the challenge. next week's challenge announced. one commitment, said out loud." },
  ],
  challenge: "same challenge for everyone, applied to your project. \"ship a landing page.\" \"get one real user.\" \"do customer research.\" \"talk to five potential customers.\" the shared constraint creates energy. next saturday you say whether you did it, in front of fifteen people who got the same challenge.",
  monthly: "demo night. show what you shipped. what worked, what broke. guests welcome.",
  between: "\"anyone want to work from a cafe this afternoon?\" or \"pair sprint? bring your hardest problem, we take turns.\" in the chat. two or three show up.",

  // v — who's in the room
  who1: "people who are curious and have fun building. people who show up when it's hard and share what's broken. people making something they can't fully explain.",
  who2: "developers, operators, marketers, designers. first-time builders and people on their third thing. the mix is the point.",
  filter: "the filter is: are you building something now, and do you take it seriously?",
  membership: [
    { k: "the chat", v: "mid-week questions, project updates, resource sharing. the community lives here between sessions." },
    { k: "informal meetups", v: "someone posts a cafe and a time. no agenda. just building alongside someone you know." },
    { k: "the library", v: "prompts, tools, workflows. tested on real projects. growing every week. open to everyone." },
    { k: "the network", v: "people who know your project, understand your context, and pick up when you call." },
    { k: "what's coming", v: "retreats, hackathons, build sprints, more cohorts. the club grows." },
  ],
  roomEnergy: "the energy in the room matters. when everyone around you is working hard on something they care about, you work harder too.",

  // vi — what one weekend can do now
  aiTable: [
    { before: "landing page", beforeTime: "a week with a freelancer", now: "one afternoon, yourself" },
    { before: "market research", beforeTime: "two weeks", now: "customer segments with jtbd in one session" },
    { before: "prototype", beforeTime: "months finding a developer", now: "working prototype in one weekend" },
    { before: "product spec", beforeTime: "a week of writing", now: "prd from a conversation with ai in one hour" },
  ],
  aiClose: "most people with business ideas don't know this is possible yet. some of us ship this way already, and the transfer happens by sitting next to someone doing it.",
  aiCta: "browse the prompts library",

  // vii — join
  joinPitch: "write me what you're building. we'll meet over coffee, discuss plans and ideas. if it clicks, come saturday.",
  joinFree: "free. the community is never behind a paywall.",
};

// ─────────────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────────────

function Masthead() {
  const c = QUIET;
  return (
    <header className="mast">
      <p className="mono mono--ink">{c.brand}</p>
      <p className="mono">{c.city} · {c.year}</p>
    </header>
  );
}

function Hero({ imagery }) {
  const c = QUIET;
  return (
    <section className="hero">
      <p className="mono hero__eyebrow">
        <span className="hero__dot" aria-hidden="true" />
        an invitation
      </p>
      <h1 className="hero__h1">{c.tagline}</h1>
      <hr className="short" />
      <p className="mono hero__format">{c.format}</p>
      <div className="hero__ctas">
        <a className="pill" href="#join">
          {c.primaryCta}
          <span className="arrow" aria-hidden="true">→</span>
        </a>
        <a className="lnk hero__keep" href="#room">keep reading ↓</a>
      </div>
      {imagery && (
        <figure className="hero__ornament" aria-hidden="true">
          <AbstractImage palette="ember" seed="ornament" blur={70} grain={0.45} ratio={1} />
        </figure>
      )}
    </section>
  );
}

function SecTitle({ title }) {
  return (
    <header className="sec__head">
      <h2 className="sec__h2">{title}</h2>
      <hr className="short" />
    </header>
  );
}

function SecRoom() {
  const c = QUIET;
  return (
    <section id="room" className="sec">
      <SecTitle title="what it feels like" />
      <p className="prose">{c.scene}</p>
      <p className="prose prose--follow">{c.scene2}</p>
    </section>
  );
}

function SecDiagnostic() {
  const c = QUIET;
  return (
    <section className="sec">
      <SecTitle title="be honest. what are you doing right now?" />
      <ol className="diag">
        {c.diagnostic.map((d, i) => (
          <li key={i} className="diag__item">
            <span className="diag__n mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="diag__q">{d.q}</p>
              <p className="diag__a">→ {d.a}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SecNot() {
  const c = QUIET;
  return (
    <section className="sec">
      <SecTitle title="we resemble a few things. we are none of them" />
      <dl className="not">
        {c.notThis.map((n, i) => (
          <div key={i} className="not__row">
            <dt className="not__k">not {n.k}.</dt>
            <dd className="not__v">{n.v}</dd>
          </div>
        ))}
      </dl>
      <div className="filters">
        {c.filters.map((f, i) => (
          <p key={i} className="filters__row">
            <em>{f.k}</em> <span>{f.v}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

function SecHow() {
  const c = QUIET;
  return (
    <section className="sec">
      <SecTitle title="weekly on saturdays, for 3 hours" />
      <ol className="how">
        {c.weekly.map((w, i) => (
          <li key={i} className="how__step">
            <span className="how__n mono">{"0" + (i + 1)} ·</span>
            <div>
              <p className="how__t">{w.t}</p>
              <p className="how__d">{w.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <aside className="callout">
        <p className="mono">the weekly challenge</p>
        <p className="callout__body">{c.challenge}</p>
      </aside>
      <div className="cadence">
        <div>
          <p className="mono">monthly</p>
          <p className="cadence__v">{c.monthly}</p>
        </div>
        <div>
          <p className="mono">between sessions</p>
          <p className="cadence__v">{c.between}</p>
        </div>
      </div>
    </section>
  );
}

function SecWho() {
  const c = QUIET;
  return (
    <section className="sec">
      <SecTitle title="curious people who don't quit when it gets hard" />
      <p className="prose">{c.who1}</p>
      <p className="prose prose--follow">{c.who2}</p>
      <blockquote className="quote">{c.filter}</blockquote>
      <ul className="mem">
        {c.membership.map((m, i) => (
          <li key={i} className="mem__row">
            <span className="mem__k">{m.k}.</span>
            <span className="mem__v">{m.v}</span>
          </li>
        ))}
      </ul>
      <p className="energy">{c.roomEnergy}</p>
    </section>
  );
}

function SecAi() {
  const c = QUIET;
  return (
    <section className="sec">
      <SecTitle title="what one weekend can do now" />
      <table className="ai">
        <thead>
          <tr>
            <th>before</th>
            <th></th>
            <th>now</th>
          </tr>
        </thead>
        <tbody>
          {c.aiTable.map((r, i) => (
            <tr key={i}>
              <td className="ai__art">{r.before}</td>
              <td className="ai__before">{r.beforeTime}</td>
              <td className="ai__now">{r.now}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="prose prose--follow">{c.aiClose}</p>
      <p style={{ marginTop: 22 }}>
        <a className="lnk lnk--accent" href="#">{c.aiCta} →</a>
      </p>
    </section>
  );
}

function SecJoin() {
  const c = QUIET;
  return (
    <section id="join" className="sec">
      <SecTitle title="if it clicks, dm me" />
      <p className="prose">{c.joinPitch}</p>
      <div className="join__ctas">
        <a className="pill pill--accent" href="#">telegram <span className="arrow">→</span></a>
        <a className="pill" href="#">email <span className="arrow">→</span></a>
      </div>
      <p className="mono join__free">{c.joinFree}</p>
    </section>
  );
}

function Foot() {
  const c = QUIET;
  return (
    <footer className="foot">
      <hr className="hair" />
      <div className="foot__row">
        <p className="mono mono--ink">{c.brand.toLowerCase()}</p>
        <p className="mono">{c.city.toLowerCase()} · {c.year} · saturdays</p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Tweaks
// ─────────────────────────────────────────────────────────────────────

const { useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakColor, TweakSelect } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "accent": "#b8442d",
  "imagery": false,
  "fonts": "source"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#b8442d", "#8a2a1f", "#3a7a5e", "#2a5a8a", "#18170f"];

const FONT_PRESETS = [
  { value: "source",    label: "Source Serif 4 (modern)",
    body: '"Source Serif 4", Georgia, serif',
    display: '"Source Serif 4", Georgia, serif' },
  { value: "newsreader", label: "Newsreader (literary)",
    body: '"Newsreader", Georgia, serif',
    display: '"Newsreader", Georgia, serif' },
  { value: "garamond",  label: "EB Garamond (classical)",
    body: '"EB Garamond", Georgia, serif',
    display: '"EB Garamond", Georgia, serif' },
  { value: "pair_hanken", label: "Source Serif + Hanken sans",
    body: '"Hanken Grotesk", system-ui, sans-serif',
    display: '"Source Serif 4", Georgia, serif' },
  { value: "pair_dm",   label: "Newsreader + DM Sans",
    body: '"DM Sans", system-ui, sans-serif',
    display: '"Newsreader", Georgia, serif' },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", !!t.dark);
  }, [t.dark]);

  React.useEffect(() => {
    const s = document.documentElement.style;
    s.setProperty("--accent", t.accent || "#b8442d");
    const f = FONT_PRESETS.find((p) => p.value === t.fonts) || FONT_PRESETS[0];
    s.setProperty("--font-display", f.display);
    s.setProperty("--font-body", f.body);
  }, [t.accent, t.fonts]);

  return (
    <>
      <SectionStyles />
      <div className="page">
        <Masthead />
        <Hero imagery={t.imagery} />
        <SecRoom />
        <SecDiagnostic />
        <SecNot />
        <SecHow />
        <SecWho />
        <SecAi />
        <SecJoin />
        <Foot />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={!!t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakColor label="Accent" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)} />

        <TweakSection label="Imagery" />
        <TweakToggle label="Show ornament" value={!!t.imagery} onChange={(v) => setTweak("imagery", v)} />

        <TweakSection label="Typography" />
        <TweakSelect label="Font pairing" value={t.fonts}
          options={FONT_PRESETS}
          onChange={(v) => setTweak("fonts", v)} />
      </TweaksPanel>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section-specific styles
// ─────────────────────────────────────────────────────────────────────

function SectionStyles() {
  return (
    <style>{`
      /* Masthead */
      .mast {
        padding: 28px 0 22px;
        display: flex; justify-content: space-between; align-items: baseline;
        border-bottom: 1px solid var(--rule);
      }

      /* Hero */
      .hero {
        position: relative;
        padding: clamp(80px, 12vw, 144px) 0 clamp(60px, 8vw, 100px);
      }
      .hero__eyebrow { display: flex; align-items: center; gap: 12px; }
      .hero__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); display: inline-block; }
      .hero__h1 {
        margin-top: clamp(28px, 3.5vw, 44px);
        font-family: var(--font-display);
        font-size: clamp(40px, 5.2vw, 72px);
        line-height: 1.1;
        font-weight: 500;
        letter-spacing: -0.018em;
        text-wrap: balance;
      }
      .hero__format { margin-top: 30px; }
      .hero__ctas {
        margin-top: clamp(28px, 3vw, 40px);
        display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
      }
      .hero__keep { color: var(--muted); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; }
      .hero__ornament {
        position: absolute; right: 0; top: 60px;
        width: clamp(110px, 12vw, 160px);
        aspect-ratio: 1;
        margin: 0;
        opacity: 0.85;
        transform: translateX(40%);
      }
      @media (max-width: 880px) { .hero__ornament { display: none; } }

      /* Section heads — already set globally; here just margin */
      .sec__head .short { margin-top: 22px; }

      /* Prose */
      .prose { font-size: 19px; line-height: 1.65; max-width: 60ch; text-wrap: pretty; }
      .prose--follow { margin-top: 22px; }

      /* Diagnostic list */
      .diag { display: grid; }
      .diag__item {
        display: grid; grid-template-columns: 40px 1fr;
        gap: 18px;
        padding: 20px 0;
        border-bottom: 1px dotted var(--hair);
      }
      .diag__item:first-child { border-top: 1px dotted var(--hair); }
      .diag__n { color: var(--accent); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; padding-top: 5px; }
      .diag__q { font-size: 18px; line-height: 1.5; }
      .diag__a { margin-top: 6px; font-size: 16px; font-style: italic; color: var(--muted); }

      /* Not list */
      .not { display: grid; }
      .not__row {
        display: grid; grid-template-columns: 220px 1fr;
        gap: 24px;
        padding: 12px 0;
        border-top: 1px solid var(--rule);
      }
      .not__row:last-child { border-bottom: 1px solid var(--rule); }
      .not__k { font-style: italic; font-weight: 500; }
      .not__v { margin: 0; }
      .filters {
        margin-top: clamp(32px, 4vw, 48px);
        display: grid; gap: 10px;
      }
      .filters__row { font-size: 17px; line-height: 1.5; }
      .filters__row em { font-weight: 500; font-style: italic; }

      /* How it works */
      .how { display: grid; }
      .how__step {
        display: grid; grid-template-columns: 50px 1fr;
        gap: 18px;
        padding: 18px 0;
        border-bottom: 1px solid var(--rule);
      }
      .how__step:first-child { border-top: 1px solid var(--rule); }
      .how__n { color: var(--muted); font-family: var(--font-mono); font-size: 12px; padding-top: 6px; letter-spacing: 0.12em; }
      .how__t { font-size: 19px; font-weight: 500; }
      .how__d { margin-top: 4px; font-size: 17px; line-height: 1.55; }

      .callout {
        margin-top: clamp(40px, 4.5vw, 56px);
        padding: 20px 24px;
        border-left: 2px solid var(--ink);
      }
      .callout .mono { display: block; margin-bottom: 10px; }
      .callout__body { font-size: 18px; line-height: 1.55; }

      .cadence {
        margin-top: clamp(28px, 3vw, 40px);
        display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
      }
      .cadence > div > .mono { display: block; margin-bottom: 6px; }
      .cadence__v { font-size: 17px; line-height: 1.55; }
      @media (max-width: 640px) { .cadence { grid-template-columns: 1fr; } }

      /* Who */
      .quote {
        margin: clamp(40px, 5vw, 64px) 0 clamp(28px, 3vw, 40px);
        padding: 20px 0;
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        font-family: var(--font-display);
        font-size: clamp(22px, 2vw, 26px);
        line-height: 1.35;
        font-style: italic;
        font-weight: 500;
        letter-spacing: -0.008em;
      }
      .mem { display: grid; }
      .mem__row {
        display: grid; grid-template-columns: 200px 1fr;
        gap: 22px;
        padding: 12px 0;
        border-bottom: 1px solid var(--hair);
        font-size: 17px;
        line-height: 1.55;
      }
      .mem__row:first-child { border-top: 1px solid var(--hair); }
      .mem__k { font-weight: 500; }
      .energy { margin-top: clamp(28px, 3vw, 40px); font-style: italic; color: var(--muted); font-size: 18px; line-height: 1.5; }

      /* AI table */
      .ai { width: 100%; border-collapse: collapse; font-size: 17px; }
      .ai th {
        text-align: left; padding: 12px 0; border-bottom: 1.5px solid var(--ink);
        font-weight: 500; font-style: italic;
      }
      .ai th:nth-child(2) { color: var(--muted); font-weight: 400; }
      .ai td { padding: 14px 0; border-bottom: 1px solid var(--rule); vertical-align: top; }
      .ai__art { font-weight: 500; padding-right: 16px; }
      .ai__before { color: var(--muted); padding-right: 16px; }

      /* Join */
      .join__ctas { margin-top: clamp(26px, 3vw, 36px); display: flex; gap: 14px; flex-wrap: wrap; }
      .join__free { margin-top: clamp(22px, 2.5vw, 30px); }

      /* Footer */
      .foot { margin-top: clamp(80px, 10vw, 140px); padding-bottom: 60px; }
      .foot__row { padding-top: 24px; display: flex; justify-content: space-between; align-items: baseline; }
    `}</style>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
