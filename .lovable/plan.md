# Plan: Secure Contact + Real AI Studio Videos

## 1. Remove personal phone number, add secure contact form
- Find all Contact sections currently displaying the personal mobile number and remove it.
- Replace the phone CTA with a small **Contact Form** (Name, Email, Message) using `zod` validation (trim, length limits, email format) and shadcn `Form` + `Input` + `Textarea` + `Button`.
- Keep Email and LinkedIn as visible primary contact methods alongside the form.
- Submission handling:
  - **Default:** enable **Lovable Cloud** and store submissions in a `contact_messages` table (RLS: anon can `INSERT` only; reads restricted to admin role via `has_role`). Show a success toast on submit.
  - No phone number anywhere in the rendered DOM.

## 2. Chapter 11 — AI Studio: wire real YouTube videos
- Replace the "coming soon" placeholders with two real entries:
  1. *Har Har Mahadev Mara Kaleja* — https://youtu.be/xs2ZBYabaGA
  2. *Aadesh — The Vibe Of Girnar (Devo Ke Dev Mahadev)* — https://youtu.be/7FLYq_xIVNI
- Each card: YouTube thumbnail (`https://img.youtube.com/vi/<id>/hqdefault.jpg`), title, short tag ("AI Video · AI Music · Devotional"), and a `Play` button that opens the video in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Keep existing chapter styling; no new dependencies beyond what's already used.

## Technical notes
- Files likely touched: `src/components/story/Chapter11_*` (AI Studio), Contact section component(s), and a new `ContactForm.tsx`.
- New table (if Cloud enabled): `public.contact_messages(id, name, email, message, created_at)` with grants + RLS as per project conventions.
- No routing changes. No phone field stored or displayed.

## Open question
Confirm: enable **Lovable Cloud** to store contact submissions? If you'd rather keep it purely client-side, I'll wire the form to open the user's mail client via `mailto:` instead (no backend, no storage).
