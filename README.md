# Amber Morrill Events — website

This folder is the **draft site** for [ambermorrillevents.com](https://ambermorrillevents.com).  
Her **current live site on GoDaddy stays unchanged** until you point the domain at Vercel.

## Run it on your computer

1. Install [Node.js](https://nodejs.org/) (LTS) if you don’t have it.
2. Open a terminal in this `website` folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open **http://localhost:3000** in your browser.

## Put it online free (Vercel)

1. Push this project to **GitHub** (new repo is fine).
2. Go to [vercel.com](https://vercel.com), sign in, **Add New Project**, import that repo.
3. Root directory: `website` (if the repo contains only this folder, pick the repo root).
4. Deploy. You’ll get a link like `your-project.vercel.app` — **send that to Amber** for feedback.

Connecting **ambermorrillevents.com** happens later in Vercel + GoDaddy DNS—see Vercel’s “Domains” docs when you’re ready.

## Contact form → Amber’s email (optional)

Without setup, the form thanks people and asks them to email **amber@ambermorrillevents.com** directly.

To deliver submissions to her inbox automatically:

1. Create a free account at [resend.com](https://resend.com).
2. Create an API key.
3. In Vercel: **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your key  
   - `CONTACT_TO_EMAIL` = `amber@ambermorrillevents.com`  
   - `RESEND_FROM_EMAIL` = start with `Amber Morrill Site <onboarding@resend.dev>` (Resend’s test sender)  
4. Redeploy.

Later you can verify her domain on Resend and use a “from” address on **@ambermorrillevents.com**.
