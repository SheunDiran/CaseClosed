# CaseClosed — The Blind Angle

A cinematic, fixed-case detective game. Collect source evidence, identify an unlabeled archive frame through a spatial reconstruction, test a witness's claimed view, and support a final theory with independent records.

## Run

Use the configured package manager and `dev` script, or the Sites preview helper. Run `npm test` for the case and witness-contract tests. Run `node node_modules/typescript/bin/tsc --noEmit` for server type checks. Publish with the supported Sites build helper. The root redirects to `/game/index.html`.

The browser app source is in `public/game/`; the server route is `app/api/witness/route.ts`. `dist/` is generated. The existing Site identity is preserved. The deployed game is public.

## Current experience

- Asset-loading screen with an animated emblem and real resource progress.
- Automatically starts an approximately 5.4-second cinematic opening after asset loading: a restrained animated title/loading composition, two short story beats, then the case briefing; skip, pause and replay are available.
- Original rendered stereo ambient score, a volume slider, mute and playback status, motion toggle and reduced-motion support. Sound is attempted on arrival; if browser policy blocks it, Enable sound starts playback from a real user gesture.
- Cinematic gallery art, illustrated witnesses, six source records and a seventh derived record.
- Original-versus-cropped photograph, per-witness questions and evidence-gated confrontations.
- Camera experiment comparing two matching cases; the partition excludes the spare from camera C2's view.
- Witness-position experiment with a live sightline and a schematic view of what is visible.
- Verdict requires the original frame, the verified camera reconstruction and the access ledger. The old frame-plus-ledger shortcut no longer solves the case.
- Browser-local progress, progressive hints, replay and a reasoned case review.

## AI connection and honest limits

The server endpoint supports AI-assisted interpretation of a player's typed question. The model selects a permitted response ID using AI SDK structured output; only the associated authored statement is returned. It cannot invent evidence, reveal an unearned admission or decide guilt. This is constrained AI-assisted questioning, not unconstrained generative character simulation.

The app currently has no configured OpenAI credentials or model. Until those are activated it labels responses as authored. The endpoint and UI are implemented; actual model calls cannot be verified without the connection. Questions still work using the clearly labelled authored fallback. Network/provider failures also fall back without blocking the investigation.

To activate: enable OpenAI Developers, use its approved API-key workflow, then configure `OPENAI_API_KEY` as a Site secret and `OPENAI_MODEL` as an available model ID from that account. Never paste keys into chat or include them in client files. No model ID has been guessed, and no AI credential is shipped.

The case remains a fictional authored puzzle. New-player comprehension and difficulty still need human testing. The game is publicly deployed and demo videos have been produced. No completed hackathon submission is claimed.

## Assets

`public/game/gallery.webp` and `public/game/witnesses.webp` were generated with the built-in image tool and optimized for loading. The gallery is decorative; evidence illustrations and the surveyed floorplan determine the puzzle. Portraits depict fictional characters.

Gallery prompt: cinematic painterly modern gallery at night, deep petrol and amber palette, opaque partition left, empty glass vitrine center-right, service corridor right, no people/text/UI.

Portrait prompt: a three-panel cinematic painted portrait sheet of Mara (Black female curator, early forties, cream blouse), Eli (Black male technician, thirties, navy work jacket), and Nia (Black female photographer, twenties, braided hair, olive jacket), warm amber rim lighting and petrol backgrounds, no text/UI.

The original 40-second mystery score is rendered into `public/game/score.mp3` using `scripts/audio/create-score.py` and ffmpeg. It uses no commercial recordings or samples. The opening and motion start on arrival (subject to reduced-motion preferences). Music autoplay is attempted; browser-blocked audio offers Enable sound. Watch the opening, Sound on and Test sound also start music from an explicit user interaction. The persistent audio element survives scene changes. Browser playback errors are shown, rather than displaying a false success state. The volume defaults to 55% and is adjustable. Music eases over 850 ms from opening level to 65% of that level during gameplay. A short original two-note evidence cue respects mute and master volume. Fonts use Google Fonts with local fallbacks. No secrets or personal data are stored in the browser notebook.

## Devpost Learn process

The official Skill Pack was installed with `npx skills add challengepost/learn-ai-basics --all -y`. `skills-lock.json` identifies the source and installed skills. The initial playable prototype predates this planning pass; the workflow is being applied now, with that sequence disclosed. Scope and product direction were accepted. The technical spec and checklist remain pending final learner approval. The implementation-verification slices, existing early feedback, and a brief technical recap are recorded; final phone review and submission declarations remain open. See devpost/verification.md for the current tests, evidence and rules audit. Unperformed human checks are not claimed complete. Personal learner context is excluded from commits.

- `devpost/scope.md`: approved concept and boundary.
- `devpost/prd.md`: product behavior, acceptance criteria and browser autoplay fallback.

Live application: https://caseclosed-the-blind-angle.windyrhino8195.chatgpt.site/game/

Demo video: https://www.youtube.com/watch?v=LU25pueexHc

## Local use

Use the Node version in `package.json` and the pinned pnpm version. With Corepack available, run `corepack pnpm install --frozen-lockfile`, then `corepack pnpm dev` and open the address printed by the runner (portable default: port 5173). No API key is needed for the authored version.

For a dependency-free gameplay preview, run `python3 -m http.server 8000 --directory public` and open `http://localhost:8000/game/`. Typed API questions require the full server; recorded questions, evidence and the verdict remain available in the static preview.

The MIT license covers original project work; see `THIRD_PARTY_NOTICES.md` for dependency and asset notes. Public source repository: https://github.com/SheunDiran/CaseClosed . Demo video: https://www.youtube.com/watch?v=LU25pueexHc . Devpost submission is being prepared; no completed submission is claimed.
