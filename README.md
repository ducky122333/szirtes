# Szirtes út 26/B — listing site

Static site (no build step). Deploy the folder to Vercel as a new project
(Framework preset: "Other", no build command, output directory: root).

URLs: `/` picks the language automatically; `/en` and `/hu` force a language.

## Before going live — edit `config.js`
- GOOGLE_MAPS_API_KEY: paste the key here (static site: Vercel env vars are not read).
  In Google Cloud, restrict it to HTTP referrers (your *.vercel.app URL and later the real domain)
  and allow these APIs: Maps JavaScript API, Geocoding API, Places API (New), Elevation API,
  Air Quality API, Weather API, Street View Static API.
  Without a key the page still works: OpenStreetMap map, and the Google-only extras stay hidden.
- CONTACT_NAME / CONTACT_EMAIL / CONTACT_PHONE: replace the placeholders.
- Pin: the address is geocoded automatically. If it lands on the wrong spot, paste exact coordinates into
  PROPERTY_LAT / PROPERTY_LNG and set PROPERTY_PIN_EXACT: true.

## Files
- index.html, styles.css, app.js (all EN/HU text is in app.js), config.js
- img/ — web-optimized photos (WebP) + og.jpg for link previews

## API usage (results cached per browser session)
- Air quality: 6 lookups per visitor session (property + 5 downtown points; the lowest-scoring one is shown), refreshed after 30 min.
- Weather: 1 lookup per session (20 min). Elevation, geocoding, places: once per session.
- 3D sun map (MapLibre + OpenFreeMap + AWS terrain tiles) is free and only loads when the visitor clicks.
