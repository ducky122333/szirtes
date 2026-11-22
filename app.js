(function () {
"use strict";
const C = window.SITE_CONFIG;

/* ---------------- Text (EN / HU) ---------------- */
const T = {
en: {
  "nav.location":"Location","nav.gallery":"Photos","nav.details":"Details","nav.sun":"Sunlight","nav.map":"Map","nav.contact":"Contact",
  "hero.eyebrow":"For sale · Gellért Hill · Budapest District I",
  "hero.title":"Bright, spacious apartment in a garden of mature trees — 3 minutes from the Citadella",
  "hero.lead":"82 m² on the second floor of a gated garden complex on Gellért Hill, with a south-facing terrace overlooking Verejték Park and the Citadella promenade.",
  "hero.cta":"Arrange a viewing",
  "hero.caption":"The apartment is circled in red: 2nd floor, at the end of the building.",
  "fact.area":"floor area","fact.bedrooms":"bedrooms","fact.baths":"bathrooms + WC","fact.floorVal":"2nd","fact.floor":"floor","fact.terraceVal":"South","fact.terrace":"facing terrace",
  "loc.minutes":"minutes' walk to the Citadella",
  "loc.eyebrow":"Location",
  "loc.title":"Next door to Budapest's most famous viewpoint",
  "loc.text":"The Citadella and the Liberty Statue crown Gellért Hill, high above the Danube. From Szirtes út it is a 3-minute walk to the Citadella promenade and its sweeping panorama of the bridges, Buda Castle and Parliament, yet the complex itself is a quiet, gated garden among old trees.",
  "loc.aerialCaption":"The red arrow marks the property, just behind the Citadella on Gellért Hill.",
  "loc.p1t":"3 minutes to the Citadella","loc.p1":"Walks on the Citadella promenade and the paths of Gellért Hill start at your gate.",
  "loc.p2t":"Green and quiet","loc.p2":"A fenced complex in a large garden of mature trees, with parking inside the grounds.",
  "loc.p3t":"Central, yet secluded","loc.p3":"The Danube, the Gellért Baths and Elizabeth Bridge are within walking distance downhill; Pest's city centre is just across the river.",
  "loc.p4t":"Well connected","loc.p4":"Bus 27 stops on Szirtes út and runs to Móricz Zsigmond körtér for metro line M4 and trams.",
  "gallery.title":"Photos",
  "details.title":"About the apartment",
  "desc.p1":"We are offering for sale an apartment with exceptional qualities in a gated, fenced residential complex, just a few minutes' walk from the Citadella. The property is surrounded by a large garden full of mature trees, with parking available on site.",
  "desc.p2":"The apartment is on the 2nd floor of the building. Its south-facing terrace offers a beautiful panorama over Verejték Park and the Citadella promenade. Windows facing three directions give the home its special atmosphere: sunlight fills the rooms all day long. Set at the end of the building, the apartment is exceptionally bright and pleasant to live in.",
  "desc.p3":"The living room, both bedrooms and the hallway have oak parquet floors renovated a few years ago, while the dining room, kitchen and bathrooms are tiled.",
  "desc.p4":"Two bathrooms add comfort: one with a corner bathtub, WC and double sink, the other with a shower. There is also a separate WC.",
  "desc.p5":"Heating and hot water are provided by an economical gas combi boiler. The apartment has its own water meter.",
  "desc.extrasTitle":"Further advantages",
  "desc.x1":"Shared storage in the basement",
  "desc.x2":"Separate bicycle and pram storage",
  "desc.x3":"Parking within the fenced complex",
  "desc.p6":"This property is an ideal choice for anyone looking for a bright, comfortable home in green surroundings with an outstanding location.",
  "spec.title":"Key facts","spec.price":"Price","spec.area":"Floor area","spec.rooms":"Rooms","spec.roomsVal":"2 bedrooms, living room, dining room, kitchen, hallway",
  "spec.baths":"Bathrooms","spec.bathsVal":"2 (corner bath / shower) + separate WC",
  "spec.floor":"Floor","spec.floorVal":"2nd floor, end of building",
  "spec.terrace":"Terrace","spec.terraceVal":"South-facing, park and Citadella view",
  "spec.light":"Light","spec.lightVal":"Windows facing three directions",
  "spec.floors":"Flooring","spec.floorsVal":"Renovated oak parquet; tiles in kitchen, dining room and bathrooms",
  "spec.heating":"Heating","spec.heatingVal":"Gas combi boiler (heating + hot water)",
  "spec.water":"Water","spec.waterVal":"Own water meter",
  "spec.parking":"Parking","spec.parkingVal":"Inside the gated complex",
  "spec.storage":"Storage","spec.storageVal":"Basement storage; bicycle and pram storage",
  "spec.address":"Address",
  "sun.eyebrow":"Sunlight",
  "sun.title":"A sunny terrace in every season",
  "sun.p1":"The terrace faces south, and windows on three sides let the sun travel through the apartment from morning to evening.",
  "sun.p2":"In Budapest the midday sun stands only about 19° above the horizon in December, low enough that many city apartments lose it behind the building opposite. Set high on the slope of Gellért Hill, at the end of its block, this apartment has an open southern outlook, so even the low winter sun reaches the terrace and pours into the rooms.",
  "sun.p3":"Pick a season and drag the time slider to follow the sun across the sky above the apartment. The gold wedge shows the direction the terrace faces.",
  "sun.winter":"Winter","sun.equinox":"Spring / autumn","sun.summer":"Summer","sun.today":"Today",
  "sun.time":"Time:","sun.sunrise":"Sunrise","sun.sunset":"Sunset","sun.daylight":"Daylight","sun.noonAlt":"Midday sun",
  "sun.chartNote":"Sun path for Budapest (47.5° N), seen from above. Rings show the sun's height above the horizon. Nearby trees and buildings are not modelled.",
  "sun.terraceLabel":"Terrace","sun.N":"N","sun.E":"E","sun.S":"S","sun.W":"W","sun.below":"Sun below horizon",
  "map.title":"Map and neighbourhood",
  "map.sub":"Distances are approximate. Families should confirm school catchment areas with the district.",
  "map.open":"Open in Google Maps","map.walk":"Walking route to the Citadella",
  "map.property":"Szirtes út 26/B: the apartment","map.citadella":"Citadella and Liberty Statue",
  "near.transport":"Public transport",
  "near.t1":"Bus 27: \"Szirtes út\" stop, on the street itself",
  "near.t2":"Bus 27: \"Búsuló Juhász (Citadella)\" stop",
  "near.t3":"Móricz Zsigmond körtér: metro M4 and several tram lines, via bus 27",
  "near.t4":"Szent Gellért tér: metro M4 and riverside trams, downhill on foot",
  "near.schools":"Schools and universities",
  "near.s1":"Újbudai Ádám Jenő Primary School, on the slope of Gellért Hill (Köbölkút utca)",
  "near.s2":"Krisztina Téri Primary School, a historic school in Krisztinaváros",
  "near.s3":"Budapest University of Technology (BME) by Szent Gellért tér; Corvinus University across Liberty Bridge",
  "near.leisure":"Parks and sights",
  "near.l1":"Citadella, the Liberty Statue and the panorama promenade",
  "near.l2":"Gellért Hill park, the Philosophers' Garden and hillside walking paths",
  "near.l3":"Gellért and Rudas thermal baths",
  "near.l4":"Tabán park and Buda Castle",
  "contact.eyebrow":"Viewings","contact.title":"Arrange a viewing",
  "contact.text":"Call or write with questions or to book a visit. We reply in English and Hungarian.",
  "form.name":"Name","form.email":"Email","form.phone":"Phone (optional)","form.message":"Message",
  "form.placeholder":"I'd like to arrange a viewing of Szirtes út 26/B…","form.send":"Send enquiry",
  "form.note":"Sending opens your email app with the message ready to go.",
  "form.subject":"Enquiry: Szirtes út 26/B apartment",
  "footer.disclaimer":"Details are provided by the seller and believed accurate but are not guaranteed and do not form part of any contract. Floor area is approximate.",
  "alt.hero":"Szirtes út 26/B seen from the street among trees, the apartment circled in red",
  "alt.aerial":"Aerial view of Gellért Hill, the Citadella and the Danube, with an arrow marking the property",
  "unit.perM2":"≈ {v} million HUF / m²",
  "g.balconySunset":"Terrace at sunset","g.balconyDay":"South-facing terrace","g.bedroom":"Bedroom","g.garden":"The garden",
  "g.kitchen":"Kitchen","g.dining":"Dining room","g.bathTub":"Bathroom with corner bath","g.bathSinks":"Bathroom with double sink","g.street":"Szirtes út",
  "dur":"{h} h {m} min"
},
hu: {
  "nav.location":"Elhelyezkedés","nav.gallery":"Fotók","nav.details":"Részletek","nav.sun":"Napfény","nav.map":"Térkép","nav.contact":"Kapcsolat",
  "hero.eyebrow":"Eladó · Gellérthegy · Budapest I. kerület",
  "hero.title":"Világos, tágas lakás ősfás lakóparkban, a Citadellától mindössze 3 percre",
  "hero.lead":"82 m²-es lakás egy zárt, ősfás lakópark 2. emeletén a Gellérthegyen, déli fekvésű terasszal, kilátással a Verejték parkra és a Citadella sétányra.",
  "hero.cta":"Megtekintés egyeztetése",
  "hero.caption":"A lakást piros kör jelöli: 2. emelet, az épület szélén.",
  "fact.area":"alapterület","fact.bedrooms":"hálószoba","fact.baths":"fürdőszoba + WC","fact.floorVal":"2.","fact.floor":"emelet","fact.terraceVal":"Déli","fact.terrace":"fekvésű terasz",
  "loc.minutes":"perc séta a Citadelláig",
  "loc.eyebrow":"Elhelyezkedés",
  "loc.title":"Budapest leghíresebb kilátópontjának szomszédságában",
  "loc.text":"A Citadella és a Szabadság-szobor a Gellérthegy csúcsán, magasan a Duna fölött áll. A Szirtes útról mindössze 3 perc séta a Citadella sétány, ahonnan az egész város, a hidak, a budai Vár és a Parlament látható, maga a lakópark pedig csendes, zárt kert az ősfák között.",
  "loc.aerialCaption":"A piros nyíl az ingatlant jelöli, közvetlenül a Citadella mögött a Gellérthegyen.",
  "loc.p1t":"3 perc a Citadella","loc.p1":"A Citadella sétány és a Gellérthegy ösvényei a kapu előtt kezdődnek.",
  "loc.p2t":"Zöld és csendes","loc.p2":"Bekerített lakópark hatalmas, ősfás kertben, parkolási lehetőséggel a területen belül.",
  "loc.p3t":"Központi, mégis elvonult","loc.p3":"A Duna-part, a Gellért fürdő és az Erzsébet híd gyalog is elérhető lefelé a hegyről; a pesti belváros a folyó túlpartján van.",
  "loc.p4t":"Jó közlekedés","loc.p4":"A 27-es busz a Szirtes úton is megáll, és a Móricz Zsigmond körtérre visz (M4-es metró, villamosok).",
  "gallery.title":"Fotók",
  "details.title":"A lakásról",
  "desc.p1":"Eladásra kínálunk egy kivételes adottságokkal rendelkező lakást egy zárt, bekerített lakóparkban, mindössze néhány perces sétára a Citadellától. Az ingatlant egy hatalmas, ősfákkal tarkított kert veszi körül, ahol parkolási lehetőség is biztosított.",
  "desc.p2":"A lakás a társasház 2. emeletén található, és déli fekvésű teraszáról gyönyörű panoráma nyílik a Verejték parkra és a Citadella sétányra. Különleges hangulatát a három égtáj felé tájolt ablakok adják, amelyeknek köszönhetően a napfény egész nap beragyogja az otthont. A lakás az épülettömb szélén helyezkedik el, így rendkívül világos és kellemes életteret biztosít.",
  "desc.p3":"A nappaliban, a két hálószobában és az előtérben néhány éve felújított tölgyfa parketta található, míg az étkezőben, a konyhában és a fürdőszobákban járólap burkolat került kialakításra.",
  "desc.p4":"A kényelmet két fürdőszoba szolgálja: az egyik sarokkáddal, WC-vel és dupla mosdóval, a másik zuhanyzóval felszerelt, és egy különálló WC is rendelkezésre áll.",
  "desc.p5":"A fűtést és a melegvíz-ellátást gazdaságos gázcirkó biztosítja. A lakás saját vízórával rendelkezik.",
  "desc.extrasTitle":"További előnyök",
  "desc.x1":"Közös tároló a pincében",
  "desc.x2":"Külön kerékpár- és babakocsitároló",
  "desc.x3":"Parkolási lehetőség a bekerített lakópark területén",
  "desc.p6":"Ez az ingatlan ideális választás mindazok számára, akik zöld környezetben, mégis kiváló elhelyezkedéssel rendelkező, világos és kényelmes otthont keresnek.",
  "spec.title":"Főbb adatok","spec.price":"Vételár","spec.area":"Alapterület","spec.rooms":"Helyiségek","spec.roomsVal":"2 hálószoba, nappali, étkező, konyha, előszoba",
  "spec.baths":"Fürdőszobák","spec.bathsVal":"2 (sarokkád / zuhanyzó) + külön WC",
  "spec.floor":"Emelet","spec.floorVal":"2. emelet, az épület szélén",
  "spec.terrace":"Terasz","spec.terraceVal":"Déli fekvésű, kilátás a parkra és a Citadellára",
  "spec.light":"Fényviszonyok","spec.lightVal":"Három égtáj felé néző ablakok",
  "spec.floors":"Burkolat","spec.floorsVal":"Felújított tölgyparketta; járólap a konyhában, étkezőben és fürdőkben",
  "spec.heating":"Fűtés","spec.heatingVal":"Gázcirkó (fűtés + melegvíz)",
  "spec.water":"Víz","spec.waterVal":"Saját vízóra",
  "spec.parking":"Parkolás","spec.parkingVal":"A zárt lakópark területén",
  "spec.storage":"Tárolás","spec.storageVal":"Pincei tároló; kerékpár- és babakocsitároló",
  "spec.address":"Cím",
  "sun.eyebrow":"Napfény",
  "sun.title":"Napos terasz minden évszakban",
  "sun.p1":"A terasz déli fekvésű, a három égtáj felé néző ablakokon át pedig reggeltől estig végigvándorol a napfény a lakáson.",
  "sun.p2":"Budapesten decemberben délben mindössze kb. 19°-kal jár a nap a horizont felett, ezért sok városi lakásból a szemközti épület eltakarja. Ez a lakás a Gellérthegy oldalában, magasan, az épülettömb szélén fekszik, déli irányban nyitott kilátással, így a téli, alacsonyan járó nap is besüt a teraszra és a szobákba.",
  "sun.p3":"Válasszon évszakot, és a csúszkával kövesse a nap útját a lakás felett. Az arany cikk a terasz tájolását mutatja.",
  "sun.winter":"Tél","sun.equinox":"Tavasz / ősz","sun.summer":"Nyár","sun.today":"Ma",
  "sun.time":"Időpont:","sun.sunrise":"Napkelte","sun.sunset":"Napnyugta","sun.daylight":"Nappal","sun.noonAlt":"Déli napmagasság",
  "sun.chartNote":"A nap pályája Budapest felett (é. sz. 47,5°), felülnézetből. A körök a nap horizont feletti magasságát jelölik. A közeli fákat és épületeket a diagram nem veszi figyelembe.",
  "sun.terraceLabel":"Terasz","sun.N":"É","sun.E":"K","sun.S":"D","sun.W":"Ny","sun.below":"A nap a horizont alatt",
  "map.title":"Térkép és környék",
  "map.sub":"A távolságok tájékoztató jellegűek. Az iskolai körzetekről érdemes a kerületnél tájékozódni.",
  "map.open":"Megnyitás a Google Térképen","map.walk":"Gyalogos útvonal a Citadellához",
  "map.property":"Szirtes út 26/B: a lakás","map.citadella":"Citadella és Szabadság-szobor",
  "near.transport":"Tömegközlekedés",
  "near.t1":"27-es busz: „Szirtes út” megálló, közvetlenül az utcában",
  "near.t2":"27-es busz: „Búsuló Juhász (Citadella)” megálló",
  "near.t3":"Móricz Zsigmond körtér: M4-es metró és több villamosvonal, a 27-es busszal",
  "near.t4":"Szent Gellért tér: M4-es metró és rakparti villamosok, gyalog lefelé a hegyről",
  "near.schools":"Iskolák és egyetemek",
  "near.s1":"Újbudai Ádám Jenő Általános Iskola a Gellérthegy oldalában (Köbölkút utca)",
  "near.s2":"Krisztina Téri Általános Iskola, Krisztinaváros nagy múltú iskolája",
  "near.s3":"Budapesti Műszaki és Gazdaságtudományi Egyetem (BME) a Szent Gellért térnél; Corvinus Egyetem a Szabadság híd túloldalán",
  "near.leisure":"Parkok, látnivalók",
  "near.l1":"Citadella, Szabadság-szobor és a panorámás sétány",
  "near.l2":"Gellérthegyi park, Filozófusok kertje és hegyi sétautak",
  "near.l3":"Gellért és Rudas gyógyfürdő",
  "near.l4":"Tabán és a budai Vár",
  "contact.eyebrow":"Megtekintés","contact.title":"Kérjen időpontot megtekintésre",
  "contact.text":"Hívjon vagy írjon, ha kérdése van vagy megtekintést szeretne egyeztetni. Magyarul és angolul is válaszolunk.",
  "form.name":"Név","form.email":"E-mail","form.phone":"Telefon (nem kötelező)","form.message":"Üzenet",
  "form.placeholder":"Szeretnék időpontot egyeztetni a Szirtes út 26/B lakás megtekintésére…","form.send":"Érdeklődés küldése",
  "form.note":"A küldés gomb megnyitja levelezőprogramját a kész üzenettel.",
  "form.subject":"Érdeklődés: Szirtes út 26/B lakás",
  "footer.disclaimer":"Az adatokat az eladó szolgáltatta; pontosságukra törekszünk, de azokért felelősséget nem vállalunk, és nem képezik szerződés részét. Az alapterület tájékoztató jellegű.",
  "alt.hero":"A Szirtes út 26/B épülete az utcáról, fák között, a lakás piros körrel jelölve",
  "alt.aerial":"Légifotó a Gellérthegyről, a Citadelláról és a Dunáról, nyíllal jelölve az ingatlant",
  "unit.perM2":"≈ {v} millió Ft / m²",
  "g.balconySunset":"Terasz naplementekor","g.balconyDay":"Déli fekvésű terasz","g.bedroom":"Hálószoba","g.garden":"A kert",
  "g.kitchen":"Konyha","g.dining":"Étkező","g.bathTub":"Fürdőszoba sarokkáddal","g.bathSinks":"Fürdőszoba dupla mosdóval","g.street":"Szirtes út",
  "dur":"{h} óra {m} perc"
}};

let lang = "en";
const t = (k, vars) => {
  let s = (T[lang] && T[lang][k]) ?? T.en[k] ?? k;
  if (vars) for (const v in vars) s = s.replace("{" + v + "}", vars[v]);
  return s;
};

function detectLang() {
  const p = location.pathname.replace(/\/+$/, "");
  if (p.endsWith("/hu")) return "hu";
  if (p.endsWith("/en")) return "en";
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "hu" || q === "en") return q;
  try { const s = localStorage.getItem("lang"); if (s === "hu" || s === "en") return s; } catch (e) {}
  return (navigator.language || "").toLowerCase().startsWith("hu") ? "hu" : "en";
}

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  document.title = l === "hu"
    ? "Szirtes út 26/B — Eladó lakás a Citadella mellett, Budapest"
    : "Szirtes út 26/B — Apartment for sale by the Citadella, Budapest";
  try { localStorage.setItem("lang", l); } catch (e) {}
  const p = location.pathname.replace(/\/(en|hu)\/?$/, "/");
  history.replaceState(null, "", (p === "/" ? "/" : p.replace(/\/?$/, "/")) + l + location.hash);
  renderPrice(); renderGallery(); drawSun(); updateMapLabels();
}

/* ---------------- Price ---------------- */
function renderPrice() {
  const fmt = lang === "hu"
    ? new Intl.NumberFormat("hu-HU").format(C.PRICE_HUF) + " Ft"
    : new Intl.NumberFormat("en-GB").format(C.PRICE_HUF) + " HUF";
  const per = (C.PRICE_HUF / C.AREA_M2 / 1e6).toLocaleString(lang === "hu" ? "hu-HU" : "en-GB", { maximumFractionDigits: 2 });
  document.getElementById("price").textContent = fmt;
  document.getElementById("specPrice").textContent = fmt;
  document.getElementById("pricePerM2").textContent = t("unit.perM2", { v: per });
}

/* ---------------- Gallery + lightbox ---------------- */
const PHOTOS = [
  ["balcony-sunset", "g.balconySunset", "wide"],
  ["bedroom", "g.bedroom", "tall"],
  ["garden", "g.garden", "tall"],
  ["balcony-day", "g.balconyDay", "wide"],
  ["kitchen-1", "g.kitchen", ""],
  ["kitchen-2", "g.kitchen", ""],
  ["dining-1", "g.dining", ""],
  ["dining-2", "g.dining", ""],
  ["bath-tub", "g.bathTub", ""],
  ["bath-sinks", "g.bathSinks", ""],
  ["street", "g.street", "wide"]
];
function renderGallery() {
  const g = document.getElementById("galleryGrid");
  g.innerHTML = "";
  PHOTOS.forEach(([f, k, cls], i) => {
    const b = document.createElement("button");
    if (cls) b.className = cls;
    b.innerHTML = `<img src="/img/${f}-sm.webp" alt="${t(k)}" loading="lazy"><span class="cap">${t(k)}</span>`;
    b.addEventListener("click", () => openLb(i));
    g.appendChild(b);
  });
}
const lb = document.getElementById("lightbox");
let lbI = 0;
function openLb(i) { lbI = (i + PHOTOS.length) % PHOTOS.length; const [f, k] = PHOTOS[lbI];
  const img = document.getElementById("lbImg"); img.src = `/img/${f}.webp`; img.alt = t(k);
  document.getElementById("lbCap").textContent = t(k); lb.hidden = false; }
lb.querySelector(".lb-close").onclick = () => lb.hidden = true;
lb.querySelector(".lb-prev").onclick = () => openLb(lbI - 1);
lb.querySelector(".lb-next").onclick = () => openLb(lbI + 1);
lb.addEventListener("click", e => { if (e.target === lb) lb.hidden = true; });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") lb.hidden = true;
  if (e.key === "ArrowLeft") openLb(lbI - 1);
  if (e.key === "ArrowRight") openLb(lbI + 1);
});

/* ---------------- Sun path ---------------- */
const RAD = Math.PI / 180, LAT = 47.497, LNG = 19.040;
function sunPos(ms) {
  const d = ms / 86400000 + 2440587.5 - 2451545.0;
  const g = (357.529 + 0.98560028 * d) * RAD;
  const q = 280.459 + 0.98564736 * d;
  const L = (q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * RAD;
  const e = (23.439 - 0.00000036 * d) * RAD;
  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L));
  const dec = Math.asin(Math.sin(e) * Math.sin(L));
  const gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  const H = (gmst * 15 + LNG) * RAD - ra;
  const lat = LAT * RAD;
  const alt = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(H));
  let az = Math.atan2(-Math.sin(H), Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(H));
  az = (az / RAD + 360) % 360;
  return { alt: alt / RAD, az };
}
// Budapest UTC offset (minutes) at a given instant
function bpOffset(ms) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Budapest", hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(new Date(ms));
  const o = {}; parts.forEach(p => o[p.type] = +p.value);
  return Math.round((Date.UTC(o.year, o.month - 1, o.day, o.hour, o.minute) - Math.floor(ms / 60000) * 60000) / 60000);
}
function localToUtc(y, m, d, minutes) {
  const guess = Date.UTC(y, m, d) + minutes * 60000;
  return guess - bpOffset(guess - 60 * 60000) * 60000;
}
function seasonDate(key) {
  const now = new Date(), y = now.getFullYear();
  if (key === "winter") return [y, 11, 21];
  if (key === "summer") return [y, 5, 21];
  if (key === "equinox") return [y, 2, 20];
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest" }).format(now).split("-");
  return [+p[0], +p[1] - 1, +p[2]];
}
function dayTrack(y, m, d) {
  const pts = []; let rise = null, set = null, noonAlt = -90, prev = null;
  for (let min = 0; min <= 1440; min += 2) {
    const s = sunPos(localToUtc(y, m, d, min));
    if (prev && prev.alt < -0.833 && s.alt >= -0.833) rise = min;
    if (prev && prev.alt >= -0.833 && s.alt < -0.833) set = min;
    if (s.alt > noonAlt) noonAlt = s.alt;
    pts.push({ min, ...s }); prev = s;
  }
  return { pts, rise, set, noonAlt };
}
const R = 190;
const xy = (alt, az) => { const r = R * (90 - Math.max(alt, 0)) / 90; return [r * Math.sin(az * RAD), -r * Math.cos(az * RAD)]; };
const fmtMin = m => m == null ? "–" : String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(Math.round(m % 60)).padStart(2, "0");
let season = "winter", timeMin = 12 * 60;

function pathD(pts) {
  let d = "", on = false;
  pts.forEach(p => {
    if (p.alt < 0) { on = false; return; }
    const [x, y] = xy(p.alt, p.az); d += (on ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); on = true;
  });
  return d;
}
function drawSun() {
  const svg = document.getElementById("sunSvg"); if (!svg) return;
  const [y, m, d] = seasonDate(season);
  const track = dayTrack(y, m, d);
  const ref = { winter: dayTrack(y, 11, 21), equinox: dayTrack(y, 2, 20), summer: dayTrack(y, 5, 21) };
  // terrace wedge: south-facing, ±45°
  const w = (a) => [R * Math.sin(a * RAD), -R * Math.cos(a * RAD)];
  const [ax, ay] = w(135), [bx, by] = w(225);
  let s = `<title id="sunSvgTitle">Sun path diagram</title>
  <defs><radialGradient id="sky"><stop offset="0" stop-color="#5b4128"/><stop offset="1" stop-color="#2d2118"/></radialGradient></defs>
  <circle r="${R}" fill="url(#sky)" stroke="#a7825a" stroke-width="1.5"/>
  <path d="M0 0 L${ax} ${ay} A${R} ${R} 0 0 1 ${bx} ${by} Z" fill="#d99a2b" opacity=".22"/>
  <text x="0" y="${R * .42}" text-anchor="middle" fill="#f4d79b" font-size="13" font-weight="600">${t("sun.terraceLabel")}</text>`;
  [30, 60].forEach(a => { s += `<circle r="${R * (90 - a) / 90}" fill="none" stroke="#a7825a" stroke-opacity=".35" stroke-dasharray="3 5"/>
    <text x="4" y="${-R * (90 - a) / 90 - 4}" fill="#cdb796" font-size="10">${a}°</text>`; });
  s += `<line x1="${-R}" y1="0" x2="${R}" y2="0" stroke="#a7825a" stroke-opacity=".3"/><line x1="0" y1="${-R}" x2="0" y2="${R}" stroke="#a7825a" stroke-opacity=".3"/>`;
  [["N", 0, -R - 14], ["S", 0, R + 24], ["E", R + 18, 5], ["W", -R - 18, 5]].forEach(([k, x, yy]) => {
    s += `<text x="${x}" y="${yy}" text-anchor="middle" fill="#f6ecdc" font-size="15" font-weight="600">${t("sun." + k)}</text>`; });
  Object.entries(ref).forEach(([k, tr]) => {
    s += `<path d="${pathD(tr.pts)}" fill="none" stroke="#f4d79b" stroke-opacity="${k === season ? 0 : .3}" stroke-width="1.5"/>`; });
  s += `<path d="${pathD(track.pts)}" fill="none" stroke="#ffcf6b" stroke-width="3.5" stroke-linecap="round"/>`;
  // hour ticks on selected path
  track.pts.filter(p => p.min % 120 === 0 && p.alt > 0).forEach(p => {
    const [x, yy] = xy(p.alt, p.az);
    s += `<circle cx="${x}" cy="${yy}" r="2.5" fill="#ffcf6b"/><text x="${x}" y="${yy - 7}" text-anchor="middle" fill="#f1e3cc" font-size="9">${p.min / 60}h</text>`; });
  // building
  s += `<rect x="-9" y="-9" width="18" height="18" rx="2" fill="#f6ecdc"/>`;
  // current sun
  const cur = sunPos(localToUtc(y, m, d, timeMin));
  if (cur.alt > 0) {
    const [x, yy] = xy(cur.alt, cur.az);
    s += `<line x1="0" y1="0" x2="${x}" y2="${yy}" stroke="#ffe3a3" stroke-width="1.5" stroke-dasharray="4 4"/>
      <circle cx="${x}" cy="${yy}" r="16" fill="#ffcf6b" opacity=".3"/><circle cx="${x}" cy="${yy}" r="9" fill="#ffd77f" stroke="#fff3d1" stroke-width="2"/>
      <text x="0" y="${-R + 30}" text-anchor="middle" fill="#fff" font-size="12">${Math.round(cur.alt)}° · ${Math.round(cur.az)}°</text>`;
  } else {
    s += `<text x="0" y="${-R + 30}" text-anchor="middle" fill="#cdb796" font-size="12">${t("sun.below")}</text>`;
  }
  svg.innerHTML = s;
  document.getElementById("rSunrise").textContent = fmtMin(track.rise);
  document.getElementById("rSunset").textContent = fmtMin(track.set);
  const len = (track.set ?? 0) - (track.rise ?? 0);
  document.getElementById("rDay").textContent = t("dur", { h: Math.floor(len / 60), m: len % 60 });
  document.getElementById("rNoon").textContent = Math.round(track.noonAlt) + "°";
  document.getElementById("timeOut").textContent = fmtMin(timeMin);
  document.querySelectorAll("#seasonBtns button").forEach(b => b.classList.toggle("on", b.dataset.day === season));
}
document.querySelectorAll("#seasonBtns button").forEach(b => b.addEventListener("click", () => { season = b.dataset.day; drawSun(); }));
const slider = document.getElementById("timeSlider");
slider.value = timeMin;
slider.addEventListener("input", () => { timeMin = +slider.value; drawSun(); });

/* ---------------- Map ---------------- */
let gm = null, markers = [];
const addrQ = encodeURIComponent(C.ADDRESS);
document.getElementById("gmapsLink").href = `https://www.google.com/maps/search/?api=1&query=${addrQ}`;
document.getElementById("citadellaWalk").href =
  `https://www.google.com/maps/dir/?api=1&origin=${addrQ}&destination=${C.CITADELLA_LAT},${C.CITADELLA_LNG}&travelmode=walking`;

function osmFallback() {
  const lat = C.PROPERTY_LAT, lng = C.PROPERTY_LNG, dx = 0.009, dy = 0.0045;
  document.getElementById("mapCanvas").innerHTML =
    `<iframe title="Map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - dx},${lat - dy},${lng + dx},${lat + dy}&layer=mapnik&marker=${lat},${lng}"></iframe>`;
}
window.__initGMap = function () {
  gm = new google.maps.Map(document.getElementById("mapCanvas"), {
    center: { lat: (C.PROPERTY_LAT + C.CITADELLA_LAT) / 2, lng: (C.PROPERTY_LNG + C.CITADELLA_LNG) / 2 },
    zoom: 16, mapTypeControl: true, streetViewControl: true, fullscreenControl: true
  });
  const mk = (lat, lng, label, color) => {
    const m = new google.maps.Marker({ position: { lat, lng }, map: gm,
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: 11, fillColor: color, fillOpacity: 1, strokeColor: "#fff", strokeWeight: 3 } });
    const iw = new google.maps.InfoWindow();
    m.addListener("click", () => { iw.setContent(`<strong>${t(label)}</strong>`); iw.open(gm, m); });
    markers.push({ m, label }); return m;
  };
  mk(C.PROPERTY_LAT, C.PROPERTY_LNG, "map.property", "#d99a2b");
  mk(C.CITADELLA_LAT, C.CITADELLA_LNG, "map.citadella", "#2f5443");
  updateMapLabels();
};
function updateMapLabels() { markers.forEach(({ m, label }) => m.setTitle(t(label))); }
function initMap() {
  if (!C.GOOGLE_MAPS_API_KEY) { osmFallback(); return; }
  window.gm_authFailure = osmFallback;
  const s = document.createElement("script");
  s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(C.GOOGLE_MAPS_API_KEY)}&callback=__initGMap&loading=async`;
  s.async = true; s.onerror = osmFallback;
  document.head.appendChild(s);
}

/* ---------------- Contact ---------------- */
function initContact() {
  document.getElementById("cName").textContent = C.CONTACT_NAME;
  const ph = document.getElementById("cPhone"); ph.textContent = C.CONTACT_PHONE; ph.href = "tel:" + C.CONTACT_PHONE.replace(/\s+/g, "");
  const em = document.getElementById("cEmail"); em.textContent = C.CONTACT_EMAIL; em.href = "mailto:" + C.CONTACT_EMAIL;
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message") || ""}\n\n${f.get("name")}\n${f.get("email")}\n${f.get("phone") || ""}`;
    location.href = `mailto:${C.CONTACT_EMAIL}?subject=${encodeURIComponent(t("form.subject"))}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------------- Boot ---------------- */
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
initContact();
initMap();
applyLang(detectLang());
})();
