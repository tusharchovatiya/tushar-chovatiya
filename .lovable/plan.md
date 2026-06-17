## Narrative Plan — Chapters 01 → 03

I'll spread your story across three chapters so each beat lands with weight instead of cramming everything into one. Tone stays documentary/cinematic — no resume language, no naming the company (keeps it universal and avoids legal/embarrassment risk).

---

### Chapter 01 — "Every Journey Starts Somewhere"
**Theme:** The wall before the journey. Talent without voice.

Replace the current 4 ambient lines with a tighter 3-act micro-story:

1. *"A student from Gujarat. Curious. Capable. Quiet."*
2. *"First real interview — one of India's largest tech companies."*
3. *"The questions were fair. The mind went blank."*
4. *"Not a lack of knowledge. A lack of language."*
5. *"Rejection. And the first honest lesson: skill alone isn't enough."*

**Visual addition (right side, replacing the map):** a stylised "interview room" node — a single pulsing dot labelled `INTERVIEW.01` with a broken signal line and a glitching transcript fragment ("…", "—", "[silence]") in monospace. Keeps the sci-fi feel.

---

### Chapter 02 — "When The World Paused"
**Theme:** Placement came, but the door to Android stayed shut. Lockdown becomes the forge.

Rewrite the right-column copy to:

1. *"College placement — secured. But the company had no Android track."*
2. *"The craft I wanted was still out of reach."*
3. *"Then the world stopped. COVID. Final year. Empty calendar."*
4. *"YouTube tutorials. Stack Overflow nights. Relentless experimentation."*
5. *"This is where Android stopped being a subject and became a craft."*

Keep the floating code-snippet visual as-is — it already represents self-learning perfectly.

---

### Chapter 03 — "The First Step"
**Theme:** One YouTube video → one cold email → one-man-army internship → first shipped app.

Replace the 4 generic steps with a story-driven 4-step timeline:

1. **A video, a hunch** — *"Found an internship lead on YouTube. Sent a cold email."*
2. **One-man army** — *"No team. No mentor. Just me, a web app, and a deadline."*
3. **Trial. Error. Ship.** — *"Diagnosed every bug with Google. Solved each one with patience."*
4. **First Android app, live** — *"Web app → native Android. Built end-to-end. Alone."*

Keep the horizontal glowing-path timeline; just swap labels/notes and icons (`Youtube`, `Mail`, `Wrench`, `Rocket`).

---

### Why this arrangement
- **Chapter 01 = the wound** (communication gap → rejection). Makes you human.
- **Chapter 02 = the pivot** (closed placement door + lockdown → self-learning). Makes the grind visible.
- **Chapter 03 = the proof** (cold email → first shipped app). Makes the comeback tangible.

This three-act shape is what makes recruiters *remember the person*, which is your stated primary goal.

---

### Technical scope
- Edit `src/components/story/Chapter01_Origins.tsx` — replace `lines` array + swap right-side visual block.
- Edit `src/components/story/Chapter02_Lockdown.tsx` — replace right-column paragraphs.
- Edit `src/components/story/Chapter03_FirstStep.tsx` — replace `steps` array (labels, notes, icons).
- No new dependencies. No routing or layout changes.