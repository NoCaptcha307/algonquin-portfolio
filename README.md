# Brendan Wilson Portfolio - Organized Edition

Open `index.html` in a browser. Keep the entire folder together.

## Where to make changes

- **data/projects.js** - PRIMARY EDITING FILE. Project titles, case study text, media filenames, cover paths, project folder names.
- **index.html** - Main homepage copy, résumé text, navigation, contact email.
- **css/styles.css** - Colours, fonts, spacing, visual layout.
- **js/app.js** - Interactions and case-study layout; generally leave alone.
- **assets/projects/** - Put your images and MP4s here.

## Adding the Enviro-Stewards cover

Put `cover.jpg` in `assets/projects/enviro-stewards/`. In `data/projects.js`, look for `env:{cover:'assets/projects/enviro-stewards/cover.jpg'` and confirm exact extension. `cover.png` is a separate file and will NOT be used unless you change the reference. Refresh the browser (Ctrl+R).

The full case study uses `hero.webp`, `process-01.webp`, `process-02.webp`, `application-01.webp`, `application-02.webp`, `application-03.webp`. When missing, the SVG demo artwork appears instead. Change those filenames in `data/projects.js` under `caseAssets` if needed.

## Before publishing

Update the placeholder email address in `index.html`, confirm résumé dates and credentials, and check media permissions.

## Note

This reorganizes the supplied HTML, rather than redesigning it. It fixes an incomplete parallax script and removes an obsolete gallery function referencing a missing element.
