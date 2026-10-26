---
doc: prd
status: approved
---

# CaseClosed: The Blind Angle — Product Requirements

A short browser mystery for detective-story and escape-room fans who want to prove a conclusion themselves. Source: `scope.md > Who It's For` and `The Unique Kernel`.

## The Core Journey
1. Open the site. A restrained asset-loading screen leads automatically into the cinematic opening. Attempt soundtrack playback; if the browser blocks it, display Enable sound. Keep Skip opening, pause and motion controls accessible.
2. Read the case briefing: HELIX has disappeared from Gallery North. The assignment is to establish who took it and when.
3. Enter the scene and inspect six source records. Open the original corridor photograph rather than trusting its crop.
4. Question three witnesses using recorded prompts, typed authored replies and evidence-gated confrontations. Label the inactive live AI accurately.
5. In the testimony lab, test both matching display cases from camera C2. Identify the visible case and record the derived reconstruction. Separately test Mara's claimed view from the doorway.
6. Choose a suspect, time window and supporting records. Receive a specific explanation when the theory lacks proof; reach a case review when the evidence supports the conclusion.
Source: `scope.md > The Core Loop` and `What "Working" Looks Like`.

## Screens and Layout
Preserve the existing opening, case briefing, gallery/notebook, witness conversation, testimony lab, theory form and resolution. Persistent navigation connects the investigation surfaces. Persistent music controls remain accessible. On narrow screens, content stacks without horizontal overflow; important actions remain reachable.

## Look and Feel
Carry forward the learner's cinematic, beautiful, restrained animation and mysterious music direction. Preserve the established petrol-and-gold palette, elegant display typography, original gallery art and readable evidence panels. Avoid flashes, excessive effects and sound that obscures the investigation. Respect the device's reduced-motion preference while allowing an explicit motion toggle.

## Features and Behavior

### Automatic Opening and Sound
Source: `scope.md > Inspiration & Identity`; learner's explicit post-scope request.
- Begin the opening automatically after assets settle; do not require Watch the opening first.
- Attempt audible playback on arrival, checking whether it actually starts. Browser policy can require a user gesture; the application cannot guarantee unmuted autoplay on every device.
- If blocked, show Enable sound and an accurate short status. One explicit tap starts the score. Watch/replay, Test sound and sound controls also initiate playback from their user interaction.
- Keep Skip opening available throughout. Skipping leads into the briefing without clearing progress or forcing audio on after the player muted it.
- Include mute/unmute, adjustable volume, a softer transition into gameplay and subtle evidence cues. Zero volume must not be described as audible music.
- Use an original mysterious score; no paid music service or unlicensed commercial recording.
- Acceptance: no-click entry reaches the sequence; Skip reaches the briefing; blocked playback remains visibly actionable; clicking Enable sound advances the audio; mute pauses it; volume changes are applied.

### Evidence and Original Context
Source: `scope.md > The Core Loop`.
- Six source records are inspectable and appear in the notebook/progress count.
- The photograph can be expanded from crop to full frame. Surveillance is a schematic timestamped still, not moving CCTV.
- Acceptance: inspecting records adds progress; opening the full frame reveals the packing-insert context without inventing new evidence.

### Witness Questioning
Source: `scope.md > The POC Boundary`.
- Three characters have fixed statements; evidence unlocks relevant confrontations.
- Typed questions use the authored fallback while live AI is disabled. Connection failures leave recorded prompts usable.
- Acceptance: questions display actual recorded answers; no interface claims a live model was used when it was not.

### Viewpoint Verification
Source: `scope.md > The Unique Kernel`.
- Require inspection of the source frame and testing both candidate camera sightlines before accepting the reconstruction.
- A partition blocks the spare case from C2; verifying the HELIX frame adds derived evidence.
- Mara's position can be tested separately, exposing her false sightline claim without automatically treating it as proof of theft.
- Acceptance: an unsupported/wrong reconstruction is rejected; the correct verified reconstruction adds a seventh record.

### Supported Theory and Resolution
Source: `scope.md > What "Working" Looks Like`.
- Require suspect, time window and supporting evidence including the source frame, camera reconstruction and access ledger.
- Explain incomplete, uncollected, incorrect-person and incorrect-timing theories. The supported solution reaches the authored case review.
- Acceptance: selecting a suspect alone cannot close the case; the supported conclusion can.

### Progress and Controls
Source: `scope.md > The POC Boundary`.
- Keep progress in this browser. Resume and restart remain available; restart asks before clearing progress.
- If local saving is unavailable, the current session remains playable without claiming cloud persistence.

## States and Boundaries
- Loading: real asset progress with bounded waits; a failed decorative image cannot indefinitely prevent entry.
- Audio blocked: Enable sound remains available; do not claim playback succeeded.
- Audio unavailable: show retry guidance; the investigation remains usable.
- Reduced motion: suppress nonessential animation; expose manual progression and Skip.
- Invalid theory: visible, actionable feedback without losing collected records.
- Success: final case review explains the evidentiary chain.
- Live AI off: authored labels remain visible; no key or paid activation is required.

## Product Decisions
- Learner approved the single-case scope, requested automatic motion and audio on entry, retained Skip opening and asked for mysterious cinematic sound.
- Learner previously requested an aesthetic introduction, music and a meaningful end-to-end demonstration, and declined paid APIs.
- The audience recommendation was supplied by the agent at the learner's request and subsequently approved within scope.
- Browser-blocked sound requires an explicit tap. This is a platform constraint, not a promise of universal audible autoplay.

## What We're Building
The approved one-case investigation, with the requested automatic opening and verified audio controls, plus the official planning and submission materials. Preserve existing working gameplay instead of expanding the case.

## Deferred From the POC
Additional cases, live-model activation, account/cloud saves and multiplayer: not required to demonstrate this investigation.

## Possible Later Enhancements
Test comprehension with new players and investigate whether repeated cases help people examine evidence more carefully. These benefits are not established by this prototype.

## Non-Goals
Real forensic analysis, moving CCTV, guaranteed improved reasoning, generated mysteries and guarantees of a hackathon prize.

## Open Questions
No new product-defining choice is proposed beyond the approved scope and the learner's explicit audio request. The learner instructed the agent to continue and submit after the core journey and product plan were displayed. Physical-device autoplay behavior and fresh-browser policy must be reported as verified or limited, never assumed.

## Process Provenance
Prepared with the official 3-prd template after the initial prototype, drawing on the approved scope and existing learner decisions. Sound maintenance explicitly requested by the learner may be applied to that prototype while the formal document review continues. Do not describe this document as having preceded the original implementation.
