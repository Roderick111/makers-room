# Makers Room

Landing page for Makers Room -- a free weekly Saturday session in Lyon where 15 people build their projects side by side.

Live: https://makers-room.beautiful-apps.com

## Stack

Static HTML + React 18 (CDN, client-rendered via Babel standalone) + vanilla CSS. No build step.

- `index-dark.html` -- main entry point (served at `/`)
- `brutal-dark.jsx` -- component tree
- `content.js` -- all translatable text (EN / FR / RU)
- `library.html` + `library.jsx` -- prompt library page (served at `/library`)

## Features

- Dark/light theme toggle with localStorage persistence
- Three-language support (EN, FR, RU) with html lang attribute updates
- Interactive ASCII art with ambient glitch + cursor-zone scramble effect
- Hero image: colored block-char ASCII art (`uploads/hero-blocks.html`) with glitch on hover
- Section illustrations: coffee cup, rocket, cursor as ASCII text art
- Cursor pointer moves toward CTAs with spring physics on scroll
- GlitchButton: floating random chars around primary CTAs, pauses on hover
- Mobile: all effects disabled, static ASCII text, responsive font sizing
- WhatsApp as primary contact CTA

## ASCII Art Pipeline

Tools for generating ASCII art from images:

```bash
# Generate colored block art (for photos)
python3 ascii-to-html.py input.png output.html 120 blocks

# Generate colored ASCII art (for illustrations)
python3 ascii-to-html.py input.png output.html 120 ascii

# Generate images with AI (OpenRouter + Flux/Recraft)
bash generate-image.sh "prompt" output.png

# Image gen web UI
python3 image-gen-ui.py  # http://localhost:8093

# Background removal
.venv/bin/rembg i input.png output.png        # AI (good for photos)
magick input.png -fuzz 15% -transparent white output.png  # color-based (good for illustrations)

# ASCII art converter CLI
ascii-image-converter input.png -c -W 100 --save-bg 0,0,0,100 -s uploads/ --only-save
```

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/index-dark.html
```

## Deploy

Deploys to a Docker-based server (nginx-alpine) behind nginx-proxy with auto SSL. Includes smoke test.

```bash
./deploy.sh
```

## Theme variants

Several visual explorations live in the repo as standalone HTML files:

- `Makers Room - Brutal Light.html`
- `Makers Room - Brutal Stark.html`
- `Makers Room - Bold.html`
