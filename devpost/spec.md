---
doc: spec
status: draft
---

# CaseClosed: The Blind Angle — Technical Spec

## How This Works, In Plain Language
The browser holds the fictional case and your notebook. Clicking a record adds it to the notebook. The room model calculates which displays a fixed camera can see around a partition. The verdict checks your suspect, timing and supporting records against the authored case. A conversation cannot invent facts or decide guilt. The soundtrack is an ordinary audio file; the browser decides whether it may start before a tap.

This plan retains the existing implementation and hosting. It proposes no new paid service or consequential change of stack. It documents the prototype after construction; it is not evidence that technical planning preceded the first build. Formal technical-plan review is not asserted complete.

## The Core Journey Through the System
Implements `prd.md > The Core Journey`.
1. The root route redirects to the browser game. `boot()` loads decorative assets with bounded waits, then `startOpening()` renders the opening and attempts audio.
2. The browser receives a resolved/rejected playback promise. A rejection exposes Enable sound; its click calls `playScore()` in the user interaction.
3. Evidence clicks call `inspect()`, update the notebook and save permitted progress locally.
4. Recorded witness buttons select fixed lines. Typed questions POST to `/api/witness`; without configured provider secrets, that route returns an authored response.
5. Camera buttons record testing both candidate cases. `verifyCamera()` checks source inspection and both tests before adding the derived record.
6. `evaluateTheory()` requires inspected/derived evidence, the correct suspect and timing, then returns specific feedback or the resolved case review.

## Stack
Existing implementation, retained for this submission:
- HTML, CSS and browser JavaScript for the game; no framework is required for its evidence and geometry engine.
- Node.js >=22.13.0 and the package's pinned pnpm 11.25.0 for the full application toolchain. See `package.json` and the lockfile.
- Vinext 1.0.0-beta.5 / Vite 8.0.13 serving the existing app routes on Cloudflare Workers. https://github.com/cloudflare/vinext and https://vite.dev/guide/
- React 19.2.6 in the retained application shell. https://react.dev/
- AI SDK 7.x and OpenAI adapter 4.x for the optional, inactive server question interpreter. https://ai-sdk.dev/docs/introduction
- Native HTMLMediaElement audio and localStorage. https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement and https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
These are the installed project versions, not a claim that this document researched their latest release or provider pricing.

## Where It Runs and How Someone Tries It
Public browser game: https://caseclosed-the-blind-angle.windyrhino8195.chatgpt.site/game/

Full local application: install the pinned dependencies with Corepack/pnpm, then run `pnpm dev`. The portable development runner uses port 5173; open the address printed by the runner and follow its redirect to `/game/index.html`. Run `pnpm test` and `node node_modules/typescript/bin/tsc --noEmit` for existing checks.

Dependency-free static gameplay preview: `python3 -m http.server 8000 --directory public`, then open `http://localhost:8000/game/`. Recorded questions, evidence, reconstruction and verdict work; typed question API requests require the full server and do not work in a static-only server.

No key is needed for the demonstrated authored version. Optional future model activation requires server-side `OPENAI_API_KEY` and `OPENAI_MODEL`; `.env.example` contains blank placeholders. Never put keys into the client or commit local credentials. Deployment is additional to the required public repository and short public video. Source repository: https://github.com/SheunDiran/CaseClosed . Demo-video URL supplied for this submission: https://www.youtube.com/watch?v=LU25pueexHc .

## Look and Feel
Implements `prd.md > Look and Feel`. Preserve petrol backgrounds, gold accents, elegant serif headings, readable evidence panels and subtle transitions. Respect reduced-motion preferences. Keep Skip opening available and sound controls visible. The original mystery score uses suspended minor harmonies, soft pulses and piano-like tones, with no commercial samples or jump scares.

## Components

### Opening and Audio
Implements `prd.md > Automatic Opening and Sound`.
`public/game/app.js` owns `boot`, `startOpening`, `playScore`, `pauseScore`, `fadeSceneVolume` and `updateMusicControls`. `public/game/index.html` holds persistent audio elements outside the rerendered app. The 40-second `score.mp3` loops; a short `clue-tone.wav` marks collected evidence. Playback uses promise/error handling, a request counter to prevent stale completions, and an 850 ms transition to softer gameplay volume. Asset query versions refresh the changed script and score.

### Evidence and Notebook
Implements `prd.md > Evidence and Original Context` and `Progress and Controls`.
`EVIDENCE` in `engine.js` holds six fixed sources plus the derived record. `inspect`, photograph expansion and notebook rendering in `app.js` update collected records and context.

### Witnesses and Optional Server Interpreter
Implements `prd.md > Witness Questioning`.
`lib/witness-lines.mjs` supplies allowed authored lines and fallback interpretation. GET `/api/witness` returns `{available:boolean}`. POST accepts `{person:string,question:string}` with question length <=400 and request length <=4096. It rejects invalid people/requests and disallowed origins. Normal dialogue cannot request an unearned admission through client-supplied flags. With no secrets, it returns `{mode:'authored',text,message}`. With optional future secrets, the model may select an allowed response ID only; provider failure falls back to authored text. No paid activation is planned.

### Spatial Verification
Implements `prd.md > Viewpoint Verification`.
`cameraSightline`, `visibleFrom` and `verifyCamera` in `engine.js` compute the partition/sightline conditions. Browser controls display the geometry and store both hypothesis checks before accepting reconstruction. Witness and camera experiments are distinct.

### Theory and Review
Implements `prd.md > Supported Theory and Resolution`.
`evaluateTheory` checks selected records against collected records, camera verification, correct suspect/time and required source/ledger records. UI renders actionable error feedback or the fixed case resolution.

## Data Model
Case facts and witness lines live in source, never generated by a runtime model in the demonstrated version. The browser notebook is stored under `caseclosed-blind-angle-v2`. State includes collected records, tested camera hypotheses, verified reconstruction, questions, confrontations, photograph expansion, started/closed flags. `restoreState` sanitizes saved data. Music volume is stored separately under `cc-music-volume`; audio elements remain alive through scene rerenders. Browser storage failure leaves the current in-memory session playable. There are no accounts, cloud notebook or shared database.

## File Structure
| Path | Responsibility |
|---|---|
| `public/game/index.html` | Game entry and persistent audio |
| `public/game/app.js` | UI, navigation, interactions and audio |
| `public/game/engine.js` | Case facts, spatial rules, restore and verdict |
| `public/game/style.css` | Responsive styling and motion |
| `public/game/*.webp` | Decorative gallery/witness artwork |
| `public/game/score.mp3`, `clue-tone.wav` | Original sound assets |
| `app/page.tsx` | Root redirect |
| `app/api/witness/route.ts` | Optional server question interpreter |
| `lib/witness-lines.mjs` | Authored reply contract |
| `tests/*.test.js` | Case and witness contract verification |
| `scripts/audio/create-score.py` | Reproducible original score synthesis |
| `package.json`, `pnpm-lock.yaml` | Commands and dependency versions |
| `devpost/` | Scope, PRD, spec and verification/process records |
| `README.md`, `LICENSE`, `THIRD_PARTY_NOTICES.md` | Setup, license and attribution |
Personal learner context and local credentials remain ignored, not submission artifacts.

## External Services and Dependencies
Cloudflare/Sites hosts the existing public game. No new payment, service or hosting migration is planned. External Google Fonts have local font fallbacks. The optional server model integration is inactive; no quota, price or model ID is promised. GitHub and YouTube/Vimeo require account access for publishing submission artifacts.

## Important Failure Modes
- Browser rejects audible autoplay: show Enable sound; retry only through a user action. The opening and Skip remain functional. Browser policy: https://developer.chrome.com/blog/autoplay/
- Image load stalls/fails: bounded loading wait allows entry; records remain textual/schematic.
- Provider/API unavailable: recorded questions remain usable; clearly identify authored or unavailable replies.
- Invalid/corrupt saved progress: sanitize or begin a clean in-memory case rather than crashing.
- Unsupported theory: explain the missing evidence or timing rather than closing the case.

## What Was Simplified and Why
One authored case and deterministic evidence rules preserve a provable solution. Browser-local progress avoids accounts. Authored replies avoid paid inference and accidental evidence invention. Surveillance is a schematic still; no moving CCTV or generated new case is claimed.

## Decisions and Open Issues
The learner approved the scope and then directed submission after reviewing the product journey. Existing hosting, code and no-paid-API constraint are retained. The real uncertainty is audible autoplay: fresh-browser tests rejected automatic playback, showed Enable sound and successfully played after a tap; the site cannot force browser permission. On 26 October 2026 the agent reran all 14 engine/witness tests and the TypeScript no-emit check successfully, then repeated the public browser journey from a clean notebook through all six sources, both camera tests, derived reconstruction and the supported case resolution. Public source publication is complete; the supplied YouTube embed resolves its title and duration, but streaming remained buffering in this cloud browser. Fresh-clone engine tests passed in the source-publication audit; a full dependency installation on another computer was not tested. Technical-plan approval, final learner review on the intended phone and final Devpost declarations remain outstanding. See verification.md for the evidence and rules audit. Do not infer a completed human review from agent testing.
