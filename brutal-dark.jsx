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

const ASCII_COFFEE = `                .::.
              -*####*-
            :*##+*+=**.
            *#+*#%= :=*#*=.
            ..:=--+*-=#%##%:
           .-.-. .-=*#*:-++.
            .   ..+=+*+
                   .:==
                ..:+-.  . :
                  -+.
                ..:::-::...
          .:--=+***##%%%%%%+=**+=:
         =-::::---------=-===+*#%##=
        -+:.          .... ... .:-*+.
        -%#++=::::...:.............:  ..
        .#%%%%%####**++=--:...   .:..:.....
         *%%%%%%###**++=-:.      .=:.     :-.
         -%%%%%####**++=-:.      .=:      =-.
         .#%%%####***+=-:..      ::     .-=.
          *%######**++=-:.      .:    :-=-.
          :%######**+=-::.      -:.:-=-:.
           +#####**++=-:.      .-:-:.
           .*###***+=-:..     .=..
            .+****+==-:.     .::
              =++==--:.     .:
               =++=-:..    --
                :-=--:..   .`;

const ASCII_ROCKET = `                                 .
                               :=-:
                             :=*=:..
                           .=::-:. .
                          :==-.--:--
                         :== :+:..:-
                        .::--:-:.==:
                       .=+::-. .---.
                      .+*= -*=:=##-
                      ==*=+*=::***:
                     -==++=-::=**+.
                    .=-==-::::***=
                    ----:::..+#*+.
                   .=::::...-##*-
                   --:::...-*##=
                   -:::..:-*##+
                   -.::.:-+*#+.
                  ::.:::-+##*.
                ..::::--+*#*.
              .::.:::-:=##+.
            .:....:::::*#+
           .......::::+#+.  .
          ........:::=#+... .
          ........:.-*+....  .
         ...... ::.-#*: .... .
         ..:.    .:-+-. .:. .
         .::     ::     .::..
          .     .-      :-:.
                -      .-:.
               ..      ...
            .
            #:
           =#  :+
          :@=  *:
          #% :**
         -%%*%%.
         #%%%%=`;

const ASCII_CURSOR = `                 ::.
                :#+*=:
                 -=+##*=-:.
                  =-*####+==-:.
                  .--**##%%#*+=--:.
                   :-=**###%%%#*+==-:.
                    --=**#####%%%%%%#*+=--.
                    .--+**#####%#*#**+==-:
                     :-=+**####%#=-:
                      --=**###*##%+-:.
                       =-+*##+==*#%#+-:.
                       .==*#*=::=+*#%#=::
                        -=+#+-  .-++*#%+-=.
                         =+*=     :=+*#%*=.
                          --        -=+-.`;

var IS_MOBILE = window.innerWidth < 880;

const ASCII_STYLE = {
  fontFamily: "var(--font-mono)",
  fontSize: "clamp(8px, 1.2vw, 14px)",
  lineHeight: 1.15,
  letterSpacing: "0.5px",
  whiteSpace: "pre",
  color: "var(--ink)",
  margin: 0,
  overflow: "hidden",
};

function AsciiArtFromFile({ src }) {
  const containerRef = React.useRef(null);
  const spansRef = React.useRef([]);
  const origRef = React.useRef([]);
  const posRef = React.useRef([]);
  const mouseRef = React.useRef({ x: -9999, y: -9999, inside: false });
  const tickRef = React.useRef(null);
  const GLITCH_CHARS = "@#$%&*!?=+~^;:.";

  React.useEffect(() => {
    fetch(src)
      .then(function (r) {
        return r.text();
      })
      .then(function (html) {
        var el = containerRef.current;
        if (!el) return;
        el.innerHTML = html;
        var spans = [];
        var origs = [];
        var allSpans = el.querySelectorAll("span");
        for (var i = 0; i < allSpans.length; i++) {
          spans.push(allSpans[i]);
          origs.push(allSpans[i].textContent);
        }
        spansRef.current = spans;
        origRef.current = origs;

        // Cache positions once
        var rect = el.getBoundingClientRect();
        var positions = [];
        for (var i = 0; i < spans.length; i++) {
          var sr = spans[i].getBoundingClientRect();
          positions.push({
            x: sr.left - rect.left + sr.width / 2,
            y: sr.top - rect.top + sr.height / 2,
          });
        }
        posRef.current = positions;

        // Throttled glitch: desktop only
        if (IS_MOBILE) return;
        function tick() {
          var spans = spansRef.current;
          var origs = origRef.current;
          var positions = posRef.current;
          var len = spans.length;
          if (!len) {
            tickRef.current = requestAnimationFrame(tick);
            return;
          }

          var mx = mouseRef.current.x;
          var my = mouseRef.current.y;
          var hovering = mouseRef.current.inside;
          var CURSOR_RADIUS = 100;

          // Process random 500 spans per frame instead of all
          var batch = Math.min(500, len);
          for (var b = 0; b < batch; b++) {
            var i = Math.floor(Math.random() * len);
            var s = spans[i];
            var ch = origs[i];
            if (ch === " ") continue;

            var inCursorZone = false;
            if (hovering) {
              var p = positions[i];
              var dx = p.x - mx;
              var dy = p.y - my;
              var dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < CURSOR_RADIUS) {
                var intensity = 1 - dist / CURSOR_RADIUS;
                if (Math.random() < intensity * 0.7) {
                  s.textContent =
                    GLITCH_CHARS[
                      Math.floor(Math.random() * GLITCH_CHARS.length)
                    ];
                  inCursorZone = true;
                }
              }
            }

            if (!inCursorZone) {
              if (Math.random() < 0.002) {
                s.textContent =
                  GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
              } else if (s.textContent !== ch && Math.random() < 0.3) {
                s.textContent = ch;
              }
            }
          }
          tickRef.current = requestAnimationFrame(tick);
        }
        tickRef.current = requestAnimationFrame(tick);
      });
    return function () {
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
  }, [src]);

  var handleMouseMove = function (e) {
    var rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true,
    };
  };
  var handleMouseLeave = function () {
    mouseRef.current = { x: -9999, y: -9999, inside: false };
  };

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <pre
        ref={containerRef}
        style={{
          ...ASCII_STYLE,
          fontSize: "clamp(4px, 0.7vw, 8px)",
          lineHeight: 1.1,
          letterSpacing: "0px",
          flexShrink: 0,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

function AsciiArt({ art }) {
  const GLITCH_CHARS = "@#$%&*!?=+~^;:.";
  const containerRef = React.useRef(null);
  const spansRef = React.useRef([]);
  const origRef = React.useRef([]);
  const mouseRef = React.useRef({ x: -9999, y: -9999, inside: false });
  const tickRef = React.useRef(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = "";
    const spans = [];
    const origs = [];
    const lines = art.split("\n");
    lines.forEach((line, li) => {
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        const span = document.createElement("span");
        span.textContent = ch;
        el.appendChild(span);
        spans.push(span);
        origs.push(ch);
      }
      if (li < lines.length - 1) el.appendChild(document.createTextNode("\n"));
    });
    spansRef.current = spans;
    origRef.current = origs;

    // Ambient glitch loop — desktop only
    if (IS_MOBILE) return;
    var frame = 0;
    function tick() {
      frame++;
      var spans = spansRef.current;
      var origs = origRef.current;
      var el = containerRef.current;
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var mx = mouseRef.current.x;
      var my = mouseRef.current.y;
      var hovering = mouseRef.current.inside;
      var CURSOR_RADIUS = 100;

      for (var i = 0; i < spans.length; i++) {
        var s = spans[i];
        var ch = origs[i];
        if (ch === " ") continue;

        // Cursor zone: intense scramble
        var inCursorZone = false;
        if (hovering) {
          var sr = s.getBoundingClientRect();
          var sx = sr.left - rect.left + sr.width / 2;
          var sy = sr.top - rect.top + sr.height / 2;
          var dx = sx - mx;
          var dy = sy - my;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CURSOR_RADIUS) {
            var intensity = 1 - dist / CURSOR_RADIUS;
            if (Math.random() < intensity * 0.8) {
              s.textContent =
                GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
              inCursorZone = true;
            }
          }
        }

        // Ambient: random chars glitch occasionally everywhere
        if (!inCursorZone) {
          if (Math.random() < 0.001) {
            s.textContent =
              GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          } else if (s.textContent !== ch && Math.random() < 0.15) {
            // Heal back gradually
            s.textContent = ch;
          }
        }
      }
      tickRef.current = requestAnimationFrame(tick);
    }
    tickRef.current = requestAnimationFrame(tick);

    return () => {
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
  }, [art]);

  var handleMouseMove = (e) => {
    var rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true,
    };
  };

  var handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999, inside: false };
  };

  return (
    <pre
      ref={containerRef}
      style={ASCII_STYLE}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {art}
    </pre>
  );
}

function SiteImage({ src, alt }) {
  return (
    <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width="800"
        height="1000"
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
  try {
    var stored = localStorage.getItem("mr-theme");
  } catch (e) {}
  if (stored) return stored;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return "dark";
  return "light";
}

function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const t = getInitialTheme();
    document.documentElement.setAttribute("data-theme", t);
    return t;
  });
  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("mr-theme", next);
      } catch (e) {}
      return next;
    });
  };
  return (
    <button
      onClick={toggle}
      style={{
        cursor: "pointer",
        background: "none",
        border: "none",
        color: "inherit",
        font: "inherit",
        padding: 0,
      }}
    >
      {theme === "light" ? "◐ dark" : "◑ light"}
    </button>
  );
}

function LangToggle() {
  const lang = useLang();
  const setLang = React.useContext(SetLangContext);
  const langs = ["en", "fr", "ru"];
  return (
    <span style={{ display: "flex", gap: 8 }}>
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            font: "inherit",
            color: l === lang ? "var(--green)" : "inherit",
            fontWeight: l === lang ? 600 : 400,
            minWidth: 44,
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          {l}
        </button>
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

function GlitchButton({ href, label, target, rel }) {
  const CHARS = "@#$%&*!?=+~^;:.<>{}[]|/";
  const wrapRef = React.useRef(null);
  const charsRef = React.useRef([]);
  const hoveredRef = React.useRef(false);

  React.useEffect(() => {
    if (IS_MOBILE) return;
    var wrap = wrapRef.current;
    if (!wrap) return;
    var chars = [];
    for (var i = 0; i < 12; i++) {
      var span = document.createElement("span");
      span.style.position = "absolute";
      span.style.fontFamily = "var(--font-mono)";
      span.style.fontSize = "14px";
      span.style.color = "var(--muted)";
      span.style.opacity = "0";
      span.style.pointerEvents = "none";
      span.style.transition = "opacity 0.3s";
      span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
      wrap.appendChild(span);
      chars.push(span);
    }
    charsRef.current = chars;

    function tick() {
      if (hoveredRef.current) {
        // On hover: fade all out
        for (var i = 0; i < chars.length; i++) chars[i].style.opacity = "0";
      } else {
        for (var i = 0; i < chars.length; i++) {
          var c = chars[i];
          if (Math.random() < 0.03) {
            var angle = Math.random() * Math.PI * 2;
            var dist = 30 + Math.random() * 40;
            var x = 50 + Math.cos(angle) * (50 + dist / 2);
            var y = 50 + Math.sin(angle) * (50 + dist);
            c.style.left = x + "%";
            c.style.top = y + "%";
            c.style.opacity = (0.2 + Math.random() * 0.5).toString();
            c.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
          } else if (Math.random() < 0.05) {
            c.style.opacity = "0";
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }
    var raf = requestAnimationFrame(tick);
    return function () {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span
      ref={wrapRef}
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={function () {
        hoveredRef.current = true;
      }}
      onMouseLeave={function () {
        hoveredRef.current = false;
      }}
    >
      <a className="btn" href={href} target={target} rel={rel}>
        {label} <span aria-hidden="true">→</span>
      </a>
    </span>
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
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <GlitchButton href="#join" label={C.primaryCta} />
          <a className="btn btn--ghost" href="#room">
            {C.secondaryCta}
          </a>
        </div>
      </div>
      <div className="row__media">
        <AsciiArtFromFile src="uploads/hero-blocks.html" />
      </div>
    </div>
  );
}

function SectionRoom() {
  const C = useContent();
  return (
    <div id="room" className="row row--rev">
      <div className="row__media">
        <AsciiArt art={ASCII_COFFEE} />
      </div>
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
        <AsciiArt art={ASCII_ROCKET} />
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
              <span style={{ fontWeight: 600 }}>{k}</span>{" "}
              <span style={{ color: "var(--muted)" }}>– </span>
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
            <GlitchButton
              href="https://wa.me/33608606068"
              label="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            />
            <a
              className="btn btn--ghost"
              href="https://t.me/daniel_mathias"
              rel="noopener noreferrer"
              target="_blank"
            >
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
        <AsciiCursorScroll art={ASCII_CURSOR} />
      </div>
    </div>
  );
}

function AsciiCursorScroll({ art }) {
  const wrapRef = React.useRef(null);
  const posRef = React.useRef({ x: 0, y: 0 });
  const velRef = React.useRef({ x: 0, y: 0 });
  const prevTargetRef = React.useRef({ x: 0, y: 0 });
  const targetRef = React.useRef({ x: 0, y: 0 });
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    var FRICTION = 0.9;
    var SPRING = 0.01;
    var VELOCITY_SCALE = 0.0;

    function onScroll() {
      var el = wrapRef.current;
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      var newTarget = { x: -progress * 200, y: progress * 140 };

      // Track scroll velocity from target delta
      var dx = newTarget.x - prevTargetRef.current.x;
      var dy = newTarget.y - prevTargetRef.current.y;
      velRef.current.x += dx * VELOCITY_SCALE;
      velRef.current.y += dy * VELOCITY_SCALE;

      prevTargetRef.current = { x: newTarget.x, y: newTarget.y };
      targetRef.current = newTarget;
    }

    function tick() {
      var p = posRef.current;
      var t = targetRef.current;
      var v = velRef.current;

      // Spring pulls toward target
      var springX = (t.x - p.x) * SPRING;
      var springY = (t.y - p.y) * SPRING;

      // Apply velocity + spring
      v.x = (v.x + springX) * FRICTION;
      v.y = (v.y + springY) * FRICTION;

      p.x += v.x;
      p.y += v.y;

      posRef.current = p;
      setPos({ x: p.x, y: p.y });
      requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    var raf = requestAnimationFrame(tick);
    return function () {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ transform: "translate(" + pos.x + "px, " + pos.y + "px)" }}>
        <AsciiArt art={art} />
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
  const [lang, setLang] = React.useState(() => {
    try {
      var stored = localStorage.getItem("mr-lang");
    } catch (e) {}
    return stored && CONTENT[stored] ? stored : "en";
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("mr-lang", lang);
    } catch (e) {}
    document.documentElement.lang = lang;
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
          <SectionAi />
          <SectionHow />
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
