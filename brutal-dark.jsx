// brutal-dark.jsx — Black background, brutal sans headlines, dotted hairlines,
// status pills, two-column rows with image placeholders. Reference: buildspace.
// Content loaded from content.js (CONTENT + SHARED globals)

// Language context
const LangContext = React.createContext("en");

function useLang() {
  return React.useContext(LangContext);
}

function useContent() {
  const lang = useLang();
  return CONTENT[lang];
}

// Backwards compat: components use useContent() hook

// ─────────────────────────────────────────────────────────────────────
function Pill({ kind = "muted", blip, children }) {
  return (
    <span
      className={`pill ${kind === "green" ? "pill--green" : kind === "red" ? "pill--red" : kind === "amber" ? "pill--amber" : ""}`}
    >
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

function SiteImage({ src, alt }) {
  return (
    <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "110%",
          height: "110%",
          marginLeft: "-5%",
          marginTop: "-5%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

function getInitialTheme() {
  const stored = localStorage.getItem("mr-theme");
  if (stored) return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const t = getInitialTheme();
    document.documentElement.setAttribute("data-theme", t);
    return t;
  });
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("mr-theme", next);
  };
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
      style={{ cursor: "pointer" }}
    >
      {theme === "light" ? "◐ dark" : "◑ light"}
    </a>
  );
}

function LangToggle() {
  const lang = useLang();
  const setLang = React.useContext(SetLangContext);
  const langs = ["en", "fr", "ru"];
  return (
    <span style={{ display: "flex", gap: 8 }}>
      {langs.map((l) => (
        <a
          key={l}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLang(l);
          }}
          style={{
            cursor: "pointer",
            color: l === lang ? "var(--green)" : undefined,
            fontWeight: l === lang ? 600 : 400,
            minWidth: 44,
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {l}
        </a>
      ))}
    </span>
  );
}

function Top() {
  const C = useContent();
  return (
    <div className="wrap">
      <div className="top">
        <a className="top__brand" href="#">
          <span className="top__brand-dot" aria-hidden="true" />
          {C.brand} ↘
        </a>
        <nav className="top__nav">
          <a href="#join">{C.navJoin}</a>
          <a href="/library">{C.navLibrary}</a>
          <LangToggle />
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  const C = useContent();
  return (
    <div className="row">
      <div className="row__text">
        <div className="eyebrow">
          <Pill kind="green" blip>
            open · {C.cohort}
          </Pill>
          <Pill kind="muted">{C.format}</Pill>
        </div>
        <div>
          <h1 className="ttl ttl--lg">{C.tagline_hero}</h1>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="btn" href="#join">
            {C.primaryCta} <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#room">
            {C.secondaryCta}
          </a>
        </div>
      </div>
      <div className="row__media">
        <SiteImage src="uploads/laptop-light.png" alt="laptop in a Lyon cafe" />
      </div>
    </div>
  );
}

function SectionRoom() {
  const C = useContent();
  return (
    <div id="room" className="row">
      <div className="row__text">
        <div>
          <h2 className="ttl">{C.sceneTitle}</h2>
          <div className="body" style={{ marginTop: 22 }}>
            <p>{C.scene}</p>
            <p>{C.scene2}</p>
          </div>
        </div>
        <p className="body--small">
          <span style={{ color: "var(--green)" }}>●</span> {C.sceneTime}
        </p>
      </div>
      <div className="row__media">
        <MediaSlot label="" />
      </div>
    </div>
  );
}

function SectionDiagnostic() {
  const C = useContent();
  return (
    <div className="row row--full">
      <div className="row__text row__text--noborder">
        <h2 className="ttl" dangerouslySetInnerHTML={{ __html: C.diagTitle }} />
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
  const C = useContent();
  return (
    <div className="row row--full">
      <div className="row__text row__text--noborder">
        <h2 className="ttl">{C.notTitle}</h2>
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

function SectionProjects() {
  const C = useContent();
  return (
    <section aria-label="now shipping">
      <div
        style={{
          paddingTop: 48,
          paddingBottom: 0,
          paddingLeft: "var(--pad-x)",
          paddingRight: "var(--pad-x)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 16,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--green)" }}>●</span> {C.marqueeLabel}
        </p>
      </div>
      <div className="marquee">
        <div className="marquee__track" aria-hidden="true">
          {[...SHARED.projectExamples, ...SHARED.projectExamples].map(
            (m, i) => (
              <span key={i}>
                {m} <span className="marquee__sep">/</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHow() {
  const C = useContent();
  return (
    <div id="how" className="row">
      <div className="row__text">
        <div>
          <h2 className="ttl">{C.howTitle}</h2>
          <ol className="steps" style={{ marginTop: 32 }}>
            {C.weekly.map((w, i) => (
              <li key={i} className="step">
                <span className="step__n">
                  step {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="step__t">{w.t}</p>
                  <p className="step__d">{w.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="body--small" style={{ marginTop: 18 }}>
            {C.howOnline}
          </p>
        </div>
      </div>
      <div className="row__media">
        <MediaSlot label="" />
      </div>
    </div>
  );
}

function SectionWho() {
  const C = useContent();
  return (
    <div id="who" className="row row--full">
      <div className="row__text row__text--noborder">
        <h2 className="ttl">{C.whoTitle}</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 0,
            marginTop: 32,
          }}
        >
          {C.personas.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "28px 24px",
                border: "1px dotted var(--rule-dotted)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  color: "var(--muted)",
                }}
              >
                0{i + 1}
              </span>
              <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3 }}>
                {p.q}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                "{p.quote}"
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-2)",
                  lineHeight: 1.5,
                  marginTop: "auto",
                }}
              >
                {p.solve}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
            marginTop: 32,
            borderTop: "1px dotted var(--rule-dotted)",
          }}
        >
          {C.alsoFor.map(([k, v], i) => (
            <div
              key={i}
              style={{
                padding: "20px 24px 20px 0",
                fontSize: 16,
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 600 }}>{k}</span>{" "}<span style={{ color: "var(--muted)" }}>– </span>
              <span style={{ color: "var(--muted)" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionAi() {
  const C = useContent();
  return (
    <div id="now" className="row row--full" style={{ borderBottom: "none" }}>
      <div className="row__text row__text--noborder">
        <h2 className="ttl">{C.aiTitle}</h2>
        <div className="body" style={{ marginTop: 22 }}>
          <p>{C.aiText1}</p>
          <p>{C.aiText2}</p>
        </div>
        <div className="grid-3" style={{ marginTop: 32 }}>
          <span className="hd">{C.aiTableHeaders.artifact}</span>
          <span className="hd">{C.aiTableHeaders.before}</span>
          <span className="hd">{C.aiTableHeaders.now}</span>
          {C.aiTable.map((r, i) => (
            <React.Fragment key={i}>
              <span className="cell cell--art">{r.before}</span>
              <span className="cell cell--before">{r.beforeTime}</span>
              <span className="cell cell--now">→ {r.now}</span>
            </React.Fragment>
          ))}
        </div>
        <p className="body" style={{ marginTop: 28 }}>
          {C.aiLibraryIntro}
        </p>
        <a className="btn btn--ghost" href="/library">
          {C.aiLibraryCta} <span>→</span>
        </a>
      </div>
    </div>
  );
}

function SectionJoin() {
  const C = useContent();
  return (
    <div
      id="join"
      className="row"
      style={{ borderTop: "1px dotted var(--rule-dotted)" }}
    >
      <div className="row__text">
        <div>
          <h2 className="ttl ttl--lg">{C.joinTitle}</h2>
          <p className="body" style={{ marginTop: 22 }}>
            {C.joinPitch}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn" href="https://t.me/daniel_mathias">
              telegram <span>→</span>
            </a>
            <a
              className="btn btn--ghost"
              href="mailto:nex.mod.daniel@gmail.com"
            >
              email <span>→</span>
            </a>
          </div>
          <p className="body--small">{C.joinFree}</p>
        </div>
      </div>
      <div className="row__media">
        <MediaSlot label="" />
      </div>
    </div>
  );
}

function SectionFounder() {
  const C = useContent();
  return (
    <div
      className="row"
      style={{
        minHeight: "auto",
        borderBottom: "1px dotted var(--rule-dotted)",
      }}
    >
      <div className="row__text">
        <div>
          <h2 className="ttl">{C.founderTitle}</h2>
          <div className="body" style={{ marginTop: 22 }}>
            <p dangerouslySetInnerHTML={{ __html: C.founderBio }} />
            <p>{C.founderStory}</p>
          </div>
        </div>
      </div>
      <div
        className="row__media"
        style={{
          padding: "24px 0 24px clamp(24px, 4vw, 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", maxWidth: "420px", width: "100%" }}>
          <SiteImage src="uploads/daniel.jpg" alt="Daniel Medina" />
          {/* retro tv scanlines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
              pointerEvents: "none",
            }}
          />
          {/* slight vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)",
              pointerEvents: "none",
            }}
          />
          {/* dotted border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px dotted var(--rule-dotted)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  const C = useContent();
  return (
    <div className="wrap">
      <div className="bottom">
        <div className="bottom__links">
          <a href="#join">{C.bottomLinks.join}</a>
          <a href="/library">{C.navLibrary}</a>
        </div>
      </div>
    </div>
  );
}

const SetLangContext = React.createContext(() => {});

function App() {
  const [lang, setLang] = React.useState(
    () => localStorage.getItem("mr-lang") || "en",
  );

  React.useEffect(() => {
    localStorage.setItem("mr-lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <SetLangContext.Provider value={setLang}>
        <Top />
        <main
          className="wrap"
          style={{ borderTop: "1px dotted var(--rule-dotted)" }}
        >
          <Hero />
          <SectionRoom />
          <SectionWho />
          <SectionNot />
          <SectionHow />
          <SectionAi />
          <SectionFounder />
          <SectionProjects />
          <SectionJoin />
        </main>
        <Bottom />
      </SetLangContext.Provider>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
