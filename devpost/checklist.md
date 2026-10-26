---
doc: checklist
status: draft
---

# Build Checklist

Build mode: fast requested by the learner's repeated instruction to proceed with submission. This is a verification/shipping plan for an existing prototype, not a claim that the original build followed these slices. Formal spec/checklist review has not been completed; this document preserves the real state rather than inventing approvals.

## Slices

- [ ] **1. Verify the camera-to-verdict evidence chain**
  Becomes usable: An investigation where the camera image is verified before it can support the conclusion.
  Why now: Protects the unique kernel before presentation or submission work.
  PRD ref: `prd.md > Viewpoint Verification`, `Supported Theory and Resolution`
  Spec ref: `spec.md > Spatial Verification`, `Theory and Review`
  Build: Retain the implemented fixed case and verify both hypotheses, the derived record and supported verdict.
  Verify (mechanical): Existing 14 engine/contract tests passed; genuine footage records the case resolution. No new test framework required.
  Learner check: Inspect the archive, trace both display candidates and submit the supported theory.
  Commit: Existing implementation is saved in source history; no retrospective per-slice approval is claimed.

- [ ] **2. Verify automatic opening and real sound controls**
  Becomes usable: Entry starts the cinematic opening; audible autoplay is attempted with a truthful Enable sound fallback.
  Why now: This resolves the learner's latest concrete feedback without expanding the case.
  PRD ref: `prd.md > Automatic Opening and Sound`
  Spec ref: `spec.md > Opening and Audio`
  Build: Existing requested maintenance added automatic entry, original 40-second score and stale-playback protection.
  Verify (mechanical): Preview and live browser showed duration 40, no media error, blocked-autoplay fallback, playback after tap, mute pause, 0/100 volume and working replay/skip. TypeScript and 14 tests passed. Published commit `344bae1a7a85b34ec7807cbb9b404774007e3345`.
  Learner check: Open the public game on the intended phone, enable sound if prompted, try Skip, mute and volume.
  Commit: `344bae1a7a85b34ec7807cbb9b404774007e3345` contains the published requested revision.

- [ ] **3. Publish source and submit accessible demonstration**
  Becomes usable: Reviewers can access source/plans, a public hosted demo video and a completed Devpost entry.
  Why now: These are submission artifacts, after verification of actual functionality.
  PRD ref: `prd.md > What We're Building`
  Spec ref: `spec.md > Where It Runs and How Someone Tries It`
  Build: Audit source, prepare the new public repository, host the existing narrated demo and populate the actual submission form using learner-authored answers.
  Verify (mechanical): Check public repository and video without sign-in; confirm Devpost's actual submission status. Pending account access.
  Learner check: Review the real entry, provide personal/reflection answers and complete account/contract actions when required.
  Commit: Pending final source/document publication.

## Hands-on Checkpoints

- [ ] Early usable behavior explored — prior feedback exists, but no fabricated completion of the formal checkpoint.
- [ ] Final kick-the-tires exploration and feedback completed — final physical-device sound retry not confirmed.

## Final Review

- [x] Requested automatic opening/audio maintenance implemented and mechanically verified on preview and public site.
- [ ] Final review complete — learner's instruction to submit is recorded; a full hands-on review is not asserted without evidence.

## Code Tour and App Map

- [ ] Learning activity complete — reference recap supplied; learner practice not asserted.
- [ ] Optional edit and transfer reflection addressed — no extra exercise imposed before submission.
- [x] `devpost/app-map.html` generated from actual code with a reference route; no live learner walkthrough is claimed.

Activity and evidence: Reference recap of autoplay acceptance versus observed browser rejection and user-gesture recovery; source `app.js` and browser observations.
Route and stops: Reference-only route: `startOpening` / `playScore`; `verifyCamera`; `evaluateTheory`.
Edit outcome: Requested audio revision implemented and tested by the agent; not described as a learner-performed edit.
Reflection: No personal reflection authored on the learner's behalf.
Activity mode: Reference recap and map; no invented hands-on completion.

## Revisions

- Initial prototype existed before the official pack was installed. Process documents report that timeline honestly; eligibility remains for the organizer to determine.
- Unconditional audible autoplay cannot be guaranteed by a website. Attempt playback and expose a truthful tap-to-enable fallback instead.
