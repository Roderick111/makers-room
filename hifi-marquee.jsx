// hifi-marquee.jsx
// Edge-to-edge horizontal marquee. CSS keyframes, infinite, hover-pauses.
// Duplicates the content so the wrap-around is seamless.

function Marquee({ items = [], speed = 60, separator = "·", className = "", style = {} }) {
  // duplicate the list so the second copy slides into view as the first leaves
  const list = items.concat(items);
  return (
    <div className={"mr-marquee " + className}
      style={{ "--marq-speed": speed + "s", ...style }}>
      <div className="mr-marquee__track">
        {list.map((t, i) => (
          <span className="mr-marquee__item" key={i}>
            <span className="mr-marquee__text">{t}</span>
            <span className="mr-marquee__sep" aria-hidden="true">{separator}</span>
          </span>
        ))}
      </div>
      <style>{`
        .mr-marquee { position: relative; overflow: hidden; }
        .mr-marquee__track {
          display: inline-flex; white-space: nowrap; will-change: transform;
          animation: mr-marq var(--marq-speed) linear infinite;
        }
        .mr-marquee:hover .mr-marquee__track { animation-play-state: paused; }
        .mr-marquee__item { display: inline-flex; align-items: center; gap: 28px; padding-right: 28px; }
        .mr-marquee__sep { color: var(--accent); font-family: var(--font-display); }
        @keyframes mr-marq { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (prefers-reduced-motion: reduce) {
          .mr-marquee__track { animation: none; }
        }
      `}</style>
    </div>
  );
}

window.Marquee = Marquee;
