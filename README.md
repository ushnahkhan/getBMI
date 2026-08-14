# BMI & Health Calculator

A free, static, single-page BMI calculator with extra health tools: BMR (Basal Metabolic Rate), daily calorie needs (TDEE), and ideal weight range. Supports metric and imperial units. Built with plain HTML/CSS/JS — no build step, no dependencies.

## Files

- `index.html` — page structure and content, including labeled ad placeholder slots
- `style.css` — styling
- `script.js` — all calculator logic (BMI, BMR, TDEE, ideal weight)
- `ads.txt` — placeholder for Google AdSense verification (update after AdSense approval)
- `privacy.html` — privacy policy template (edit the `[DATE]`, `[YOUR CONTACT EMAIL]`, and analytics placeholders before publishing — required for AdSense approval)

## Run locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploy

See the full deployment + monetization guide for step-by-step instructions on:

1. Pushing this repo to GitHub
2. Deploying to Vercel
3. Applying for Google AdSense and activating ads

## Ad placement

Ad containers are already in `index.html`, marked with `ad-slot` classes and ids (`ad-top`, `ad-sidebar`, `ad-in-content`, `ad-bottom`). They currently render as dashed placeholder boxes. Once your AdSense account is approved, replace the placeholders with real AdSense `<ins class="adsbygoogle">` snippets (or turn on Auto ads), per the guide.

## Disclaimer

These calculators provide general estimates only and are not a substitute for professional medical advice.
