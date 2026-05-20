# Makers Room

Landing page for Makers Room -- a free weekly Saturday session in Lyon where 15 people build their projects side by side.

Live: https://makers-room.beautiful-apps.com

## Stack

Static HTML + React 18 (CDN, client-rendered via Babel standalone) + vanilla CSS. No build step.

- `index-dark.html` -- main entry point
- `brutal-dark.jsx` -- component tree
- `content.js` -- all translatable text (EN / FR / RU)
- `library.html` + `library.jsx` -- prompt library page

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/index-dark.html
```

## Deploy

Deploys to a Docker-based server (nginx-alpine) behind nginx-proxy with auto SSL.

```bash
./deploy.sh
```

## Theme variants

Several visual explorations live in the repo as standalone HTML files:

- `Makers Room - Brutal Dark.html` (active)
- `Makers Room - Brutal Light.html`
- `Makers Room - Brutal Stark.html`
- `Makers Room - Bold.html`
