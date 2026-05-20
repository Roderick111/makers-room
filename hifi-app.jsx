// hifi-app.jsx
// Composes the single-page Makers Room site. Wires tweaks (dark mode, accent
// color, imagery toggle, font pairing) into CSS vars on :root.

const { useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakColor, TweakRadio, TweakSelect } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "accent": "#b8442d",
  "imagery": true,
  "fonts": "editorial"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#b8442d", // ink-stamp red
  "#8a2a1f", // oxblood
  "#d77a32", // amber
  "#3a7a5e", // sage
  "#2a5a8a", // ink blue
  "#18170f", // ink only (no accent)
];

const FONT_PRESETS = [
  { value: "editorial", label: "Editorial · Source Serif + Hanken Grotesk",
    display: '"Source Serif 4", Georgia, serif',
    body: '"Hanken Grotesk", system-ui, sans-serif' },
  { value: "literary",  label: "Literary · Newsreader + DM Sans",
    display: '"Newsreader", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif' },
  { value: "classical", label: "Classical · EB Garamond + Geist",
    display: '"EB Garamond", Georgia, serif',
    body: '"Geist", system-ui, sans-serif' },
  { value: "modern",    label: "Modern · Source Serif + Geist",
    display: '"Source Serif 4", Georgia, serif',
    body: '"Geist", system-ui, sans-serif' },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply dark class on <html>
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", !!t.dark);
  }, [t.dark]);

  // Push tweak values into CSS custom properties on :root
  React.useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--accent", t.accent || "#b8442d");
    const f = FONT_PRESETS.find((p) => p.value === t.fonts) || FONT_PRESETS[0];
    root.setProperty("--font-display", f.display);
    root.setProperty("--font-body", f.body);
  }, [t.accent, t.fonts]);

  return (
    <>
      <SectionStyles />

      <Hero showImagery={t.imagery} />

      <SecRoom showImagery={t.imagery} />
      <SecDiagnostic />
      <SecNot />

      {t.imagery && <ImageBreak palette="sea" seed="break-1" slice="v" strips={6} label="03·5 — interlude" />}

      <SecHow />
      <SecWho showImagery={t.imagery} />
      <SecAi />

      <SecShipping />
      <SecJoin />

      <FooterBlock />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={!!t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakColor label="Accent" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)} />

        <TweakSection label="Imagery" />
        <TweakToggle label="Show abstract images" value={!!t.imagery} onChange={(v) => setTweak("imagery", v)} />

        <TweakSection label="Typography" />
        <TweakSelect label="Font pairing" value={t.fonts}
          options={FONT_PRESETS}
          onChange={(v) => setTweak("fonts", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
