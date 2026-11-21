# Szirtes út 26/B — listing site

Static site (no build step). Deploy the folder to Vercel as a new project
(Framework preset: "Other", no build command, output directory: root).

URLs: `/` picks the language automatically; `/en` and `/hu` force a language.

## Before going live — edit `config.js`
- GOOGLE_MAPS_API_KEY: add once you have the Vercel URL; restrict the key to that URL
  (HTTP referrers) and enable "Maps JavaScript API". Without a key, an OpenStreetMap map shows.
- CONTACT_NAME / CONTACT_EMAIL / CONTACT_PHONE: replace the placeholders.
- PROPERTY_LAT / PROPERTY_LNG: approximate; right-click the building in Google Maps and paste its coordinates.

## Files
- index.html, styles.css, app.js (all EN/HU text is in app.js), config.js
- img/ — web-optimized photos (WebP) + og.jpg for link previews
