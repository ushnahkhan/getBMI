# BMI Calculator: Deployment & Monetization Guide

This guide walks you from the code you already have to a live, ad-monetized site. Follow it in order — GitHub, then Vercel, then AdSense.

## What you're starting with

A tested, static site (`index.html`, `style.css`, `script.js`, `privacy.html`, `ads.txt`) with:
- BMI, BMR, daily calorie (TDEE), and ideal weight calculators, metric + imperial units
- Labeled ad placeholder slots (top banner, sidebar, in-content, bottom banner) ready to swap for real AdSense code
- An educational content section and a privacy policy template — both matter for AdSense approval, explained below

---

## Step 1 — Push the code to GitHub

1. Unzip the file I sent you into a folder on your computer.
2. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `bmi-calculator`). Leave it empty — don't add a README, since you already have one.
3. Open a terminal in the unzipped folder and run:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/bmi-calculator.git
   git branch -M main
   git push -u origin main
   ```
   (The folder is already a git repo with your files committed — you're just connecting it to GitHub and pushing.)
4. Refresh the GitHub page — your files should now be there.

If you'd rather avoid the terminal: GitHub also lets you create a repo and drag-and-drop the unzipped files directly into it via "Add file → Upload files" in the browser.

---

## Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in — you can use your GitHub account to sign in, which makes the next step seamless.
2. Click **Add New → Project**.
3. Select **Import Git Repository** and choose the `bmi-calculator` repo you just pushed.
4. Vercel will detect it as a static site (no framework) — leave the default settings and click **Deploy**.
5. In under a minute you'll get a live URL like `bmi-calculator-yourname.vercel.app`.

From now on, every time you `git push` to the `main` branch, Vercel automatically redeploys the update — no manual steps needed.

**Optional — custom domain:** In your Vercel project, go to **Settings → Domains** and add a domain you own (e.g. `mybmicalculator.com`). You'll need to buy a domain separately (Namecheap, Google Domains successor Squarespace Domains, etc., roughly $10–15/year). A custom domain isn't required for AdSense but looks more professional and is easier to remember/share.

---

## Step 3 — Apply for Google AdSense

**Read this before applying — it affects whether you get approved.**

Per Google's official AdSense requirements: your site needs original, high-quality content that attracts an audience, must comply with AdSense policies, and you must be 18+ (a parent/guardian can apply for a minor, with payments going to their account). ([Google AdSense eligibility](https://support.google.com/adsense/answer/9724))

A bare calculator with no supporting content is a common AdSense rejection reason ("low value content" / "insufficient content"). I've already addressed this by adding an educational article section (What is BMI, how it's calculated, categories, limitations, FAQ) and a privacy policy page, since AdSense reviewers and their automated checks look for both. That said, for the best odds of approval:

- Consider adding 2–4 more short articles or blog-style posts (e.g., "How to interpret your BMI result," "BMI vs. body fat percentage," "Understanding BMR and metabolism") — more original written content generally helps.
- Make sure the privacy policy is filled in (replace the `[DATE]` and `[YOUR CONTACT EMAIL]` placeholders in `privacy.html`) and linked from the footer (already done).
- Let the site accumulate a little organic traffic and stay live for at least a couple of weeks before applying — brand-new, zero-traffic sites are approved less consistently than sites with some history.
- Have a working contact method (the privacy page contact line, or add a simple contact email elsewhere on the site).

**To apply:**

1. Go to [adsense.google.com](https://www.google.com/adsense/start/) and sign up with the Google account you want tied to payments.
2. Enter your live site URL (your Vercel URL or custom domain).
3. Google will give you a snippet to add to your site to verify ownership — typically a `<meta>` tag or a small script for your `<head>`. Add it to `index.html`'s `<head>` section, commit, and push (Vercel redeploys automatically).
4. Submit for review. Google's review can take anywhere from a few days to a few weeks. You'll get an email when it's decided.
5. If rejected, Google tells you the reason (usually "low value content," "site under construction," or a policy issue) — fix that specific issue and reapply.

---

## Step 4 — Activate ads once approved

Once approved, Google gives you a **Publisher ID** (looks like `ca-pub-1234567890123456`).

**Option A — Auto ads (simplest):** Google automatically places ads for you.
1. In `index.html`, uncomment the script tag already sitting in the `<head>` (marked `AD SLOT: HEAD`) and replace `ca-pub-XXXXXXXXXXXXXXXX` with your real Publisher ID.
2. That's it — Google's script decides where to insert ads. My pre-built `ad-slot` placeholder boxes become unnecessary with this option and can stay as visual filler or be removed.

**Option B — Manual placement (uses the pre-built slots):** Go to AdSense → **Ads → By ad unit**, create a display ad unit for each slot, and Google gives you an `<ins class="adsbygoogle">` snippet per unit. Replace each placeholder `<div class="ad-slot">...</div>` in `index.html` with its corresponding snippet (top banner, sidebar, in-content, bottom banner — I built the layout with exactly these four positions in mind).

**Update `ads.txt`:** After approval, replace the placeholder line in `ads.txt` with the real line Google gives you (found in AdSense under **Sites**), then commit and push. This file confirms to ad buyers that you're an authorized seller — AdSense will flag its absence.

---

## Realistic expectations on earnings

Worth being upfront about this: a single calculator page, even a well-built one, generally gets modest traffic without active promotion (SEO content, backlinks, social sharing, etc.), and ad revenue scales with traffic. Typical BMI-calculator-type sites earn from cents to a few dollars per day at low traffic, climbing meaningfully only once you're getting hundreds to thousands of daily visitors. If monetization is the main goal, the content additions mentioned in Step 3 and ongoing SEO work will matter more than the ad setup itself.

---

## Quick reference: what to do next, in order

1. Push to GitHub (Step 1)
2. Deploy on Vercel (Step 2)
3. Fill in `privacy.html` placeholders, optionally add a couple more content pages
4. Let the live site sit for a bit, then apply for AdSense (Step 3)
5. Once approved, activate ads and update `ads.txt` (Step 4)
