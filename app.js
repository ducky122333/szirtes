(function () {
"use strict";
const C = window.SITE_CONFIG;

/* ---------------- Text (EN / HU) ---------------- */
const T = {
en: {
  "nav.location":"Location","nav.gallery":"Photos","nav.details":"Details","nav.sun":"Sunlight","nav.map":"Map","nav.contact":"Contact",
  "hero.eyebrow":"For sale · Gellért Hill · Budapest District I",
  "hero.title":"Bright, spacious apartment nestled in nature and greenery, steps away from the Citadel, a UNESCO World Heritage site",
  "hero.lead":"82 m² on the second floor of a gated garden court on Gellért Hill, with a south-facing terrace overlooking Verejték park and the Citadel promenade.",
  "hero.cta":"Arrange a viewing",
  "hero.caption":"The apartment is circled in red: 2nd floor / 3rd level on the corner of the building.",
  "fact.area":"floor area","fact.bedrooms":"bedrooms","fact.baths":"bathrooms","fact.floorVal":"2nd","fact.floor":"floor (3rd level)","fact.terraceVal":"South","fact.terrace":"facing terrace",
  "loc.minutes":"minute walk to the Citadel Lookout",
  "loc.eyebrow":"Location",
  "loc.title":"Next door to Budapest's most famous viewpoint",
  "loc.text":"The Citadella and the Liberty Statue crown Gellért Hill, part of Budapest's UNESCO World Heritage site, high above the Danube. From Szirtes út it is under 5 minutes' walk to the Citadel Lookout and its sweeping panorama of the bridges, Buda Castle and Parliament, yet the garden court itself is quiet and gated, among old trees.",
  "loc.aerialCaption":"The red arrow points to the Citadel Lookout and the approximate location of the apartment.",
  "loc.p1t":"A short walk to the Citadel Lookout","loc.p1":"Walks on the Citadella promenade and the paths of Gellért Hill start at your gate.",
  "loc.p2t":"Green and quiet","loc.p2":"A fenced residential courtyard in a large garden of mature trees, with parking inside the grounds.",
  "loc.p3t":"Central, yet secluded","loc.p3":"The Danube, the Gellért Baths and Elizabeth Bridge are within walking distance downhill; Pest's city centre is just across the river.",
  "loc.p4t":"Well connected","loc.p4":"The bus 27 stop is a 2-minute walk from the house. Bus 27 takes you either to Móricz Zsigmond körtér (metro M4, trams) or to the Sánc utca stop on Hegyalja út.",
  "gallery.title":"Photos",
  "details.title":"About the apartment",
  "desc.p1":"We are offering for sale an apartment with exceptional qualities in a gated, fenced residential courtyard, just a few minutes' walk from the Citadella. The property is surrounded by a large garden full of mature trees, with parking available on site.",
  "desc.p2":"The apartment is on the 2nd floor of the building. Its south-facing terrace offers a beautiful panorama over Verejték Park and the Citadella promenade. Windows facing three directions give the home its special atmosphere: sunlight fills the rooms all day long. Set at the end of the building, the apartment is exceptionally bright and pleasant to live in.",
  "desc.p3":"The living room, both bedrooms and the hallway have oak parquet floors renovated a few years ago, while the dining room, kitchen and bathrooms are tiled.",
  "desc.p4":"Two bathrooms add comfort: one with a corner bathtub, WC and double sink, the other with a shower. There is also a separate WC.",
  "desc.p5":"Heating and hot water are provided by an economical gas combi boiler. The apartment has its own water meter.",
  "desc.extrasTitle":"Further advantages",
  "desc.x1":"Shared storage in the basement",
  "desc.x2":"Separate bicycle and pram storage",
  "desc.x3":"Parking within the fenced garden court",
  "desc.p6":"This property is an ideal choice for anyone looking for a bright, comfortable home in green surroundings with an outstanding location.",
  "spec.title":"Key facts","spec.price":"Price","spec.area":"Floor area","spec.rooms":"Rooms","spec.roomsVal":"2 bedrooms, living room, dining room, kitchen, hallway",
  "spec.baths":"Bathrooms","spec.bathsVal":"2.5 (corner bath / shower + separate WC)",
  "spec.floor":"Floor","spec.floorVal":"2nd floor (3rd level), corner of the building",
  "spec.terrace":"Terrace","spec.terraceVal":"South-facing, park and Citadella view",
  "spec.light":"Light","spec.lightVal":"Windows facing three directions",
  "spec.floors":"Flooring","spec.floorsVal":"Renovated oak parquet; tiles in kitchen, dining room and bathrooms",
  "spec.heating":"Heating","spec.heatingVal":"Gas combi boiler (heating + hot water)",
  "spec.water":"Water","spec.waterVal":"Own water meter",
  "spec.parking":"Parking","spec.parkingVal":"Inside the gated garden court",
  "spec.storage":"Storage","spec.storageVal":"Basement storage; bicycle and pram storage",
  "spec.address":"Address",
  "sun.eyebrow":"Sunlight",
  "sun.title":"A sunny terrace in every season",
  "sun.p1":"Through windows facing three directions, sunlight travels through the apartment from morning to evening.",
  "sun.p2":"In December the midday sun in Budapest stands only about 19° above the horizon, so in many city apartments the building opposite blocks it. This apartment sits high on top of Gellért Hill, on the side of its block, with an open outlook to the south, so even the low winter sun shines in pleasantly and warms the home.",
  "sun.p3":"See how sunlight falls on and around the apartment at any time of day, in every season. The south-facing balcony enjoys excellent light all year round.",
  "sun.winter":"Winter","sun.equinox":"Spring / autumn","sun.summer":"Summer","sun.today":"Today",
  "sun.time":"Time:","sun.sunrise":"Sunrise","sun.sunset":"Sunset","sun.daylight":"Daylight","sun.noonAlt":"Midday sun",
  "sun.N":"N","sun.E":"E","sun.S":"S","sun.W":"W","sun.below":"Sun below horizon",
  "map.title":"Map and neighbourhood",
  "map.sub":"Distances are approximate. Families should confirm school catchment areas with the district.",
  "map.open":"Open in Google Maps","map.walk":"Walking route to the Citadella",
  "map.property":"Szirtes út 26/B: the apartment","map.citadella":"Citadella and Liberty Statue",
  "near.transport":"Public transport",
  "near.t1":"Bus 27: \"Szirtes út\" stop, on the street itself",
  "near.t2":"Bus 27: \"Búsuló Juhász (Citadella)\" stop",
  "near.t3":"Móricz Zsigmond körtér: metro M4 and several tram lines, via bus 27",
  "near.t4":"Szent Gellért tér: metro M4 and riverside trams, downhill on foot",
  "near.schools":"Schools and kindergartens",
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
  "g.balconySunset":"Terrace at sunset","g.balconyDay":"South-facing terrace","g.bedroom":"Bedroom","g.garden":"The garden",
  "g.kitchen":"Kitchen","g.dining":"Dining room","g.bathTub":"Bathroom with corner bath","g.bathSinks":"Bathroom with double sink","g.street":"Szirtes út",
  "fact.bathsVal":"2.5",
  "unesco.eyebrow":"UNESCO World Heritage",
  "unesco.title":"Living within Budapest's UNESCO World Heritage site",
  "unesco.p1":"Gellért Hill has been part of Budapest's UNESCO World Heritage site, the Banks of the Danube, since 1987. The Citadella and the Liberty Statue crown the hill, a short walk from the apartment.",
  "unesco.p2t":"The newly reopened Citadella",
  "g.citPark1":"The renewed Citadella and the Liberty Statue",
  "g.citPark2":"The view from Gellért Hill: Chain Bridge and Parliament",
  "dur":"{h} h {m} min",
  "sun.spring":"Spring",
  "sun.autumn":"Autumn",
  "sun.status":"Sun {alt}° high, in the {dir} · Sunrise {rise} · Sunset {set}",
  "sun.statusNight":"Sun below the horizon · Sunrise {rise} · Sunset {set}",
  "sun.play":"Play the day",
  "sun.pause":"Pause",
  "sun3d.loading":"Loading 3D map…",
  "dirA.N":"north",
  "dirA.NE":"north-east",
  "dirA.E":"east",
  "dirA.SE":"south-east",
  "dirA.S":"south",
  "dirA.SW":"south-west",
  "dirA.W":"west",
  "dirA.NW":"north-west",
  "cit.eyebrow":"The Citadella on your doorstep",
  "cit.title":"Under 5 minutes' walk to the Citadel Lookout",
  "cit.walk":"About 300–350 m on foot, 4–5 minutes",
  "cit.p1t":"Steps from the newly reopened Citadella",
  "cit.p1":"After a multi-year renovation, the Citadella, part of Budapest's UNESCO World Heritage site, reopened in spring 2026. It now has newly landscaped public parkland and green space of around 20,000 m², panoramic terraces, open fortress-wall walkways and the Bastion of Freedom exhibition.",
  "cit.p2t":"A quiet road with no through-traffic",
  "cit.p2":"The road the balcony looks over leads only up to the park and the Citadella; it isn't a route for daily commuters. The people you see passing by are out for a relaxing walk or on their way to one of Budapest's finest landmarks, which makes for a pleasant atmosphere right outside your door.",
  "cit.p3t":"Front-row seat for the 20 August fireworks",
  "cit.p3":"Gellért Hill is one of Budapest's classic spots for watching the national holiday fireworks over the Danube on 20 August, and the Citadel Lookout is under five minutes' walk from home.",
  "cit.mapCap":"Walking route from the apartment (red pin) to the Citadel Lookout. Map: Google.",
  "cit.lookCap":"The Citadel Lookout (Citadella Kilátó): the view over the Danube, the bridges and Parliament.",
  "school.note":"Approximate straight-line distances.",
  "school.kg":"Kindergarten (óvoda)",
  "school.school":"School",
  "school.uni":"University",
  "school.peto":"School (conductive education, Pető method)",
  "school.walk":"{m} min walk · {d} m",
  "near.t5":"Sánc utca on Hegyalja út: buses 110 and 112 to the city centre; terminus of bus 27",
  "hero.unesco":"Under 5 minutes' walk to the Citadella, part of Budapest's UNESCO World Heritage site",
  "sun3d.eyebrow":"Interactive","sun3d.title":"Explore 3D sun & shadows",
  "sun3d.text":"See the building and its neighbours on Gellért Hill in 3D, and watch where sunlight and shadows fall at any time of year.",
  "sun3d.button":"Load 3D view",
  "sun3d.note":"Building heights come from OpenStreetMap and may be approximate; trees and terrain are not shown. Times are Budapest time. Map: OpenFreeMap © OpenMapTiles, data © OpenStreetMap.",
  "sun3d.fail":"The 3D view could not be loaded. Please try again later.",
  "sun3d.readout":"{time} · sun {alt}° high, from the {dir}",
  "dir.N":"north","dir.NE":"north-east","dir.E":"east","dir.SE":"south-east","dir.S":"south","dir.SW":"south-west","dir.W":"west","dir.NW":"north-west",
  "filter.all":"All","filter.transit":"Public transit","filter.parks":"Parks & viewpoints","filter.dining":"Dining & groceries",
  "sv.label":"Street View: click to explore",
  "pin.elev":"Elevation: {e} m","pin.diff":"+{d} m higher than downtown ({place})",
  "air.eyebrow":"Air quality & environment","air.title":"Fresher air above the city",
  "air.homeTag":"This property · hilltop","air.homeName":"Szirtes út 26/B",
  "air.cityTag":"City centre below",
  "air.elevBadge":"▲ {e} m above sea level · +{d} m higher than downtown",
  "air.capBetter":"Today the hilltop scores {d} points better than {place}. Set high above downtown, among mature trees and away from through-traffic, the garden court enjoys fresher air above the city below.",
  "air.capClose":"Readings are close today; a breezy day clears the air across the whole city. Day to day, the hilltop's elevation, its greenery and its distance from heavy traffic remain lasting advantages.",
  "air.capNeutral":"Live readings for both locations, for comparison.",
  "air.foot":"Live data from Google Air Quality, Universal AQI (0–100, higher means cleaner air). Downtown location: the lowest-scoring of several central Pest points at the time of checking. Updated {time}.",
  "air.dominant":"Main pollutant: {p}",
  "aq.5":"Excellent","aq.4":"Good","aq.3":"Moderate","aq.2":"Low","aq.1":"Poor",
  "wx.place":"Gellért Hill","wx.wind":"wind {s} km/h {d}",
  "map.dining":"Nearby"
},
hu: {
  "nav.location":"Elhelyezkedés","nav.gallery":"Fotók","nav.details":"Részletek","nav.sun":"Napfény","nav.map":"Térkép","nav.contact":"Kapcsolat",
  "hero.eyebrow":"Eladó · Gellérthegy · Budapest I. kerület",
  "hero.title":"Világos, tágas lakás ősfás kertvárosi udvarban, néhány lépésre a Citadellától",
  "hero.lead":"82 m²-es, második emeleti lakás a Gellért-hegy egy zárt, ősfás kertvárosi udvarában, délre néző terasszal, amely a Verejték parkra és a Citadella sétányra néz.",
  "hero.cta":"Megtekintés egyeztetése",
  "hero.caption":"A lakást piros kör jelöli: 2. emelet, az épület szélén.",
  "fact.area":"alapterület","fact.bedrooms":"hálószoba","fact.baths":"fürdőszoba + WC","fact.floorVal":"2.","fact.floor":"emelet","fact.terraceVal":"Déli","fact.terrace":"fekvésű terasz",
  "loc.minutes":"perc séta a Citadella Kilátóig",
  "loc.eyebrow":"Elhelyezkedés",
  "loc.title":"Budapest leghíresebb kilátópontjának szomszédságában",
  "loc.text":"A Citadella és a Szabadság-szobor a Gellérthegy csúcsán, Budapest UNESCO Világörökség részeként, magasan a Duna fölött áll. A Szirtes útról kevesebb mint 5 perc séta a Citadella Kilátó, ahonnan az egész város, a hidak, a budai Vár és a Parlament látható, maga a lakóudvar pedig csendes, zárt kert az ősfák között.",
  "loc.aerialCaption":"A piros nyíl a Citadella Kilátót, valamint a lakás körülbelüli helyét mutatja.",
  "loc.p1t":"Rövid sétára a Citadella Kilátó","loc.p1":"A Citadella sétány és a Gellérthegy ösvényei a kapu előtt kezdődnek.",
  "loc.p2t":"Zöld és csendes","loc.p2":"Bekerített lakóudvar hatalmas, ősfás kertben, parkolási lehetőséggel a területen belül.",
  "loc.p3t":"Központi, mégis elvonult","loc.p3":"A Duna-part, a Gellért fürdő és az Erzsébet híd gyalog is elérhető lefelé a hegyről; a pesti belváros a folyó túlpartján van.",
  "loc.p4t":"Jó közlekedés","loc.p4":"A 27-es busz megállója 2 perc sétára van a háztól. A busz a Móricz Zsigmond körtérre (M4-es metró, villamosok) vagy a Hegyalja úti Sánc utca megállóhoz visz.",
  "gallery.title":"Fotók",
  "details.title":"A lakásról",
  "desc.p1":"Eladásra kínálunk egy kivételes adottságokkal rendelkező lakást egy zárt, bekerített lakóudvarban, mindössze néhány perces sétára a Citadellától. Az ingatlant egy hatalmas, ősfákkal tarkított kert veszi körül, ahol parkolási lehetőség is biztosított.",
  "desc.p2":"A lakás a társasház 2. emeletén található, és déli fekvésű teraszáról gyönyörű panoráma nyílik a Verejték parkra és a Citadella sétányra. Különleges hangulatát a három égtáj felé tájolt ablakok adják, amelyeknek köszönhetően a napfény egész nap beragyogja az otthont. A lakás az épülettömb szélén helyezkedik el, így rendkívül világos és kellemes életteret biztosít.",
  "desc.p3":"A nappaliban, a két hálószobában és az előtérben néhány éve felújított tölgyfa parketta található, míg az étkezőben, a konyhában és a fürdőszobákban járólap burkolat került kialakításra.",
  "desc.p4":"A kényelmet két fürdőszoba szolgálja: az egyik sarokkáddal, WC-vel és dupla mosdóval, a másik zuhanyzóval felszerelt, és egy különálló WC is rendelkezésre áll.",
  "desc.p5":"A fűtést és a melegvíz-ellátást gazdaságos gázcirkó biztosítja. A lakás saját vízórával rendelkezik.",
  "desc.extrasTitle":"További előnyök",
  "desc.x1":"Közös tároló a pincében",
  "desc.x2":"Külön kerékpár- és babakocsitároló",
  "desc.x3":"Parkolási lehetőség a bekerített lakóudvar területén",
  "desc.p6":"Ez az ingatlan ideális választás mindazok számára, akik zöld környezetben, mégis kiváló elhelyezkedéssel rendelkező, világos és kényelmes otthont keresnek.",
  "spec.title":"Főbb adatok","spec.price":"Vételár","spec.area":"Alapterület","spec.rooms":"Helyiségek","spec.roomsVal":"2 hálószoba, nappali, étkező, konyha, előszoba",
  "spec.baths":"Fürdőszobák","spec.bathsVal":"2 (sarokkád / zuhanyzó) + külön WC",
  "spec.floor":"Emelet","spec.floorVal":"2. emelet, az épület szélén",
  "spec.terrace":"Terasz","spec.terraceVal":"Déli fekvésű, kilátás a parkra és a Citadellára",
  "spec.light":"Fényviszonyok","spec.lightVal":"Három égtáj felé néző ablakok",
  "spec.floors":"Burkolat","spec.floorsVal":"Felújított tölgyparketta; járólap a konyhában, étkezőben és fürdőkben",
  "spec.heating":"Fűtés","spec.heatingVal":"Gázcirkó (fűtés + melegvíz)",
  "spec.water":"Víz","spec.waterVal":"Saját vízóra",
  "spec.parking":"Parkolás","spec.parkingVal":"A zárt lakóudvar területén",
  "spec.storage":"Tárolás","spec.storageVal":"Pincei tároló; kerékpár- és babakocsitároló",
  "spec.address":"Cím",
  "sun.eyebrow":"Napfény",
  "sun.title":"Napos terasz minden évszakban",
  "sun.p1":"A lakás három égtáj felé néző ablakain át reggeltől estig végigvándorol a napfény a lakáson.",
  "sun.p2":"Budapesten decemberben délben mindössze kb. 19°-kal jár a nap a horizont felett, ezért sok városi lakásból a szemközti épület eltakarja a napot. Ez a lakás a Gellérthegy tetején, magasan, az épülettömb oldalán fekszik, déli irányban nyitott kilátással, így a téli, alacsonyan járó nap is kellemesen besüt és átmelegíti a lakást.",
  "sun.p3":"Nézze meg, hogyan esik a napfény a lakásra és környezetére a nap bármely órájában, minden évszakban. A déli fekvésű erkély egész évben kiváló fényt kap.",
  "sun.winter":"Tél","sun.equinox":"Tavasz / ősz","sun.summer":"Nyár","sun.today":"Ma",
  "sun.time":"Időpont:","sun.sunrise":"Napkelte","sun.sunset":"Napnyugta","sun.daylight":"Nappal","sun.noonAlt":"Déli napmagasság",
  "sun.N":"É","sun.E":"K","sun.S":"D","sun.W":"Ny","sun.below":"A nap a horizont alatt",
  "map.title":"Térkép és környék",
  "map.sub":"A távolságok tájékoztató jellegűek. Az iskolai körzetekről érdemes a kerületnél tájékozódni.",
  "map.open":"Megnyitás a Google Térképen","map.walk":"Gyalogos útvonal a Citadellához",
  "map.property":"Szirtes út 26/B: a lakás","map.citadella":"Citadella és Szabadság-szobor",
  "near.transport":"Tömegközlekedés",
  "near.t1":"27-es busz: „Szirtes út” megálló, közvetlenül az utcában",
  "near.t2":"27-es busz: „Búsuló Juhász (Citadella)” megálló",
  "near.t3":"Móricz Zsigmond körtér: M4-es metró és több villamosvonal, a 27-es busszal",
  "near.t4":"Szent Gellért tér: M4-es metró és rakparti villamosok, gyalog lefelé a hegyről",
  "near.schools":"Iskolák és óvodák",
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
  "g.balconySunset":"Terasz naplementekor","g.balconyDay":"Déli fekvésű terasz","g.bedroom":"Hálószoba","g.garden":"A kert",
  "g.kitchen":"Konyha","g.dining":"Étkező","g.bathTub":"Fürdőszoba sarokkáddal","g.bathSinks":"Fürdőszoba dupla mosdóval","g.street":"Szirtes út",
  "fact.bathsVal":"2 + 1",
  "unesco.eyebrow":"UNESCO Világörökség",
  "unesco.title":"Otthon Budapest UNESCO Világörökségének szívében",
  "unesco.p1":"A Gellérthegy 1987 óta része Budapest UNESCO Világörökségének (Duna-part). A hegy csúcsát a Citadella és a Szabadság-szobor koronázza, rövid sétára a lakástól.",
  "unesco.p2t":"A megújult Citadella",
  "g.citPark1":"A megújult Citadella és a Szabadság-szobor",
  "g.citPark2":"Kilátás a Gellérthegyről a Lánchídra és a Parlamentre",
  "dur":"{h} óra {m} perc",
  "sun.spring":"Tavasz",
  "sun.autumn":"Ősz",
  "sun.status":"A nap {alt}° magasan jár, {dir} irányban · Napkelte {rise} · Napnyugta {set}",
  "sun.statusNight":"A nap a horizont alatt · Napkelte {rise} · Napnyugta {set}",
  "sun.play":"A nap lejátszása",
  "sun.pause":"Szünet",
  "sun3d.loading":"3D térkép betöltése…",
  "dirA.N":"északi",
  "dirA.NE":"északkeleti",
  "dirA.E":"keleti",
  "dirA.SE":"délkeleti",
  "dirA.S":"déli",
  "dirA.SW":"délnyugati",
  "dirA.W":"nyugati",
  "dirA.NW":"északnyugati",
  "cit.eyebrow":"A Citadella a szomszédban",
  "cit.title":"Kevesebb mint 5 perc séta a Citadella Kilátóig",
  "cit.walk":"Gyalog kb. 300–350 m, 4–5 perc",
  "cit.p1t":"Pár lépésre a megújult Citadellától",
  "cit.p1":"A többéves felújítás után 2026 tavaszán újranyitott Citadella Budapest UNESCO Világörökségének része. Megújult, parkosított közterekkel és mintegy 20 000 m²-es zöldfelülettel, panorámateraszokkal, szabadon bejárható várfalsétányokkal és A Szabadság Bástyája kiállítással várja a látogatókat.",
  "cit.p2t":"Csendes utca, átmenő forgalom nélkül",
  "cit.p2":"Az erkély alatti út csak fel a parkhoz és a Citadellához vezet; nem a munkába sietők útvonala. A teraszról olyan embereket látni elhaladni, akik egyszerűen csak egy pihentető sétára indultak, vagy Budapest egyik legszebb látványosságát keresik fel, ami igazán kellemes hangulatot teremt.",
  "cit.p3t":"Első sor az augusztus 20-i tűzijátékhoz",
  "cit.p3":"A Gellérthegy Budapest egyik legkedveltebb pontja az augusztus 20-i ünnepi tűzijáték megtekintéséhez a Duna felett, a Citadella Kilátó pedig kevesebb mint 5 perc séta a lakástól.",
  "cit.mapCap":"Gyalogos útvonal a lakástól (piros jelölő) a Citadella Kilátóig. Térkép: Google.",
  "cit.lookCap":"A Citadella Kilátó: kilátás a Dunára, a hidakra és a Parlamentre.",
  "school.note":"Légvonalbeli, közelítő távolságok.",
  "school.kg":"Óvoda",
  "school.school":"Iskola",
  "school.uni":"Egyetem",
  "school.peto":"Iskola (konduktív pedagógia, Pető-módszer)",
  "school.walk":"{m} perc séta · {d} m",
  "near.t5":"Sánc utca a Hegyalja úton: 110-es és 112-es busz a belvárosba; a 27-es busz végállomása",
  "hero.unesco":"Kevesebb mint 5 perc séta a Citadelláig, amely Budapest UNESCO Világörökség részét képezi",
  "sun3d.eyebrow":"Interaktív","sun3d.title":"3D nap- és árnyékszimulátor",
  "sun3d.text":"Nézze meg az épületet és környezetét 3D-ben a Gellérthegyen, és kövesse, hová esik a napfény és az árnyék az év bármely napján.",
  "sun3d.button":"3D nézet betöltése",
  "sun3d.note":"Az épületmagasságok az OpenStreetMapből származnak, és közelítő értékek; a fák és a domborzat nem láthatók. Az időpontok budapesti idő szerint értendők. Térkép: OpenFreeMap © OpenMapTiles, adatok © OpenStreetMap.",
  "sun3d.fail":"A 3D nézet nem tölthető be. Kérjük, próbálja később.",
  "sun3d.readout":"{time} · napmagasság {alt}°, {dir} felől",
  "dir.N":"észak","dir.NE":"északkelet","dir.E":"kelet","dir.SE":"délkelet","dir.S":"dél","dir.SW":"délnyugat","dir.W":"nyugat","dir.NW":"északnyugat",
  "filter.all":"Mind","filter.transit":"Tömegközlekedés","filter.parks":"Parkok, kilátók","filter.dining":"Étkezés, bevásárlás",
  "sv.label":"Utcakép: kattintson a bejáráshoz",
  "pin.elev":"Tengerszint feletti magasság: {e} m","pin.diff":"+{d} m-rel magasabban, mint a belváros ({place})",
  "air.eyebrow":"Levegőminőség és környezet","air.title":"Tisztább levegő a város felett",
  "air.homeTag":"Az ingatlan · hegytető","air.homeName":"Szirtes út 26/B",
  "air.cityTag":"Belváros, lent",
  "air.elevBadge":"▲ {e} m tengerszint felett · +{d} m-rel a belváros felett",
  "air.capBetter":"Ma a hegyi helyszín {d} ponttal jobb értéket mutat, mint a belvárosi mérési pont ({place}). A belváros fölött, ősfák között, az átmenő forgalomtól távol a lakóudvar levegője frissebb, mint a lenti városé.",
  "air.capClose":"Ma közel azonosak az értékek; szeles napokon az egész város levegője kitisztul. A hegyi fekvés, a sok zöld és a forgalmas utaktól való távolság azonban tartós előny.",
  "air.capNeutral":"Élő mérési adatok mindkét helyszínre, összehasonlításként.",
  "air.foot":"Élő adatok: Google Air Quality, Universal AQI (0–100, a magasabb érték tisztább levegőt jelent). Belvárosi helyszín: több belső-pesti pont közül a lekérdezéskor leggyengébb értékű. Frissítve: {time}.",
  "air.dominant":"Fő szennyező: {p}",
  "aq.5":"Kiváló","aq.4":"Jó","aq.3":"Közepes","aq.2":"Gyenge","aq.1":"Rossz",
  "wx.place":"Gellérthegy","wx.wind":"szél {s} km/h {d}",
  "map.dining":"A közelben"
}};

let lang = "en";
const t = (k, vars) => {
  let s = (T[lang] && T[lang][k]) ?? T.en[k] ?? k;
  if (vars) for (const v in vars) s = s.split("{" + v + "}").join(vars[v]);
  return s;
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const KEY = (C.GOOGLE_MAPS_API_KEY || "").trim();

/* Session cache (sessionStorage, with optional max age) */
const cache = {
  get(k, maxAgeMin) {
    try {
      const v = JSON.parse(sessionStorage.getItem("sz:" + k));
      if (!v) return null;
      if (maxAgeMin && Date.now() - v.t > maxAgeMin * 60000) return null;
      return v.d;
    } catch (e) { return null; }
  },
  set(k, d) { try { sessionStorage.setItem("sz:" + k, JSON.stringify({ t: Date.now(), d })); } catch (e) {} }
};

/* Property location: config value until Google geocoding refines it */
const HOME = { lat: C.PROPERTY_LAT, lng: C.PROPERTY_LNG };
const homeListeners = [];
function setHome(lat, lng) { HOME.lat = lat; HOME.lng = lng; homeListeners.forEach(f => f()); }

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
  if (location.protocol.startsWith("http")) {
    const p = location.pathname.replace(/\/(en|hu)\/?$/, "/");
    history.replaceState(null, "", p.replace(/\/?$/, "/") + l + location.hash);
  }
  renderPrice(); renderGallery(); renderSchools(); updateSunUI(); updateMapLang(); renderAir();
}

/* ---------------- Price ---------------- */
function renderPrice() {
  const fmt = lang === "hu"
    ? new Intl.NumberFormat("hu-HU").format(C.PRICE_HUF) + " Ft"
    : new Intl.NumberFormat("en-GB").format(C.PRICE_HUF) + " HUF";
  document.getElementById("price").textContent = fmt;
  document.getElementById("specPrice").textContent = fmt;
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
    b.innerHTML = `<img src="/img/${f}-sm.webp" alt="${esc(t(k))}" loading="lazy"><span class="cap">${esc(t(k))}</span>`;
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

/* ---------------- Sun maths ---------------- */
const RAD = Math.PI / 180;
// Fallback solar position (used only if SunCalc failed to load). Returns degrees, azimuth = bearing from north.
function sunPosFallback(ms, LAT, LNG) {
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
  const az = Math.atan2(-Math.sin(H), Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(H));
  return { alt: alt / RAD, az: (az / RAD + 360) % 360 };
}
function sunAt(ms) {
  if (window.SunCalc) {
    const p = SunCalc.getPosition(new Date(ms), HOME.lat, HOME.lng);
    // SunCalc azimuth: radians from south, clockwise towards west
    return { alt: p.altitude / RAD, az: (p.azimuth / RAD + 180 + 360) % 360 };
  }
  return sunPosFallback(ms, HOME.lat, HOME.lng);
}
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
const bpMinutes = ms => { const o = bpOffset(ms); const x = new Date(ms + o * 60000); return x.getUTCHours() * 60 + x.getUTCMinutes(); };
function seasonDate(key) {
  const now = new Date(), y = now.getFullYear();
  if (key === "winter") return [y, 11, 21];
  if (key === "summer") return [y, 5, 21];
  if (key === "spring") return [y, 2, 20];
  if (key === "autumn") return [y, 8, 22];
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest" }).format(now).split("-");
  return [+p[0], +p[1] - 1, +p[2]];
}
const fmtMin = m => m == null ? "–" : String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(Math.round(m % 60)).padStart(2, "0");
function dayInfo(y, m, d) {
  if (window.SunCalc) {
    const tm = SunCalc.getTimes(new Date(localToUtc(y, m, d, 720)), HOME.lat, HOME.lng);
    const ok = x => x instanceof Date && !isNaN(x);
    return {
      rise: ok(tm.sunrise) ? bpMinutes(+tm.sunrise) : null,
      set: ok(tm.sunset) ? bpMinutes(+tm.sunset) : null,
      noonAlt: ok(tm.solarNoon) ? sunAt(+tm.solarNoon).alt : null
    };
  }
  let rise = null, set = null, noonAlt = -90, prev = null;
  for (let min = 0; min <= 1440; min += 2) {
    const s = sunAt(localToUtc(y, m, d, min));
    if (prev && prev.alt < -0.833 && s.alt >= -0.833) rise = min;
    if (prev && prev.alt >= -0.833 && s.alt < -0.833) set = min;
    if (s.alt > noonAlt) noonAlt = s.alt;
    prev = s;
  }
  return { rise, set, noonAlt };
}
const compass8 = az => ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(az / 45) % 8];

let season = "today", timeMin = 12 * 60, dayRange = [420, 960], playTimer = 0;
function currentSun() { const [y, m, d] = seasonDate(season); return sunAt(localToUtc(y, m, d, timeMin)); }
const slider = document.getElementById("timeSlider");
const nowBp = () => bpMinutes(Date.now());

function setSeason(key, keepTime) {
  season = key;
  const [y, m, d] = seasonDate(key);
  const WIN = { today: [450, 900], spring: [420, 1020], summer: [420, 1230], autumn: [420, 1080], winter: [480, 930] };
  dayRange = WIN[key].slice();
  const rise = dayRange[0], set = dayRange[1];
  slider.min = dayRange[0]; slider.max = dayRange[1];
  if (!keepTime) {
    timeMin = dayRange[0];
  }
  timeMin = Math.min(dayRange[1], Math.max(dayRange[0], timeMin));
  slider.value = timeMin;
  updateSunUI();
}
function updateSunUI() {
  const [y, m, d] = seasonDate(season);
  const info = dayInfo(y, m, d);
  const s = currentSun();
  document.getElementById("timeOut").textContent = fmtMin(timeMin);
  const vars = { rise: fmtMin(info.rise), set: fmtMin(info.set), alt: Math.round(s.alt), dir: t("dirA." + compass8(s.az)) };
  document.getElementById("sunStatus").textContent = t(s.alt > 0 ? "sun.status" : "sun.statusNight", vars);
  document.querySelectorAll("#seasonBtns button").forEach(b => b.classList.toggle("on", b.dataset.day === season));
  document.getElementById("sunPlay").setAttribute("aria-label", t(wantPlay ? "sun.pause" : "sun.play"));
  sun3d.update();
}
let wantPlay = true, sunVisible = false;
function setPlayIcon() { document.getElementById("sunPlayIcon").setAttribute("d", wantPlay ? "M7 5h4v14H7zM13 5h4v14h-4z" : "M8 5v14l11-7z"); }
function tick() {
  timeMin = timeMin + 1 > dayRange[1] ? dayRange[0] : timeMin + 1; // loop back to the start of the day
  slider.value = timeMin; updateSunUI();
}
function syncPlay() {
  const run = wantPlay && sunVisible;
  if (run && !playTimer) playTimer = setInterval(tick, 70);
  if (!run && playTimer) { clearInterval(playTimer); playTimer = 0; }
  setPlayIcon();
}
function stopPlay() { wantPlay = false; syncPlay(); }
document.getElementById("sunPlay").addEventListener("click", () => { wantPlay = !wantPlay; syncPlay(); updateSunUI(); });
if ("IntersectionObserver" in window) {
  new IntersectionObserver(es => { sunVisible = es.some(e => e.isIntersecting); syncPlay(); }).observe(document.getElementById("sun"));
} else { sunVisible = true; }
document.querySelectorAll("#seasonBtns button").forEach(b => b.addEventListener("click", () => setSeason(b.dataset.day)));
slider.addEventListener("input", () => { stopPlay(); timeMin = +slider.value; updateSunUI(); });

/* ---------------- Geometry helpers (shadows) ---------------- */
const M_LAT = 110540;
const mLng = lat => 111320 * Math.cos(lat * RAD);
function hull(pts) { // monotone chain convex hull, pts = [[x,y],...]
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  up.pop(); lo.pop();
  return lo.concat(up);
}
function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const outerRings = g => g.type === "Polygon" ? [g.coordinates[0]] : g.type === "MultiPolygon" ? g.coordinates.map(p => p[0]) : [];
// Shadow polygons for extruded buildings on level ground, as GeoJSON features.
function shadowFeatures(feats, sun, center, radiusM) {
  if (sun.alt <= 0.5) return [];
  const kx = mLng(center.lat), seen = new Set(), out = [];
  const b = (sun.az + 180) * RAD, tanA = Math.tan(sun.alt * RAD);
  for (const f of feats) {
    const h = +(f.properties.render_height ?? f.properties.height ?? 0);
    if (!(h > 0)) continue;
    for (const ring of outerRings(f.geometry)) {
      if (!ring || ring.length < 3) continue;
      const key = ring[0][0].toFixed(6) + "," + ring[0][1].toFixed(6) + "," + h;
      if (seen.has(key)) continue; seen.add(key);
      const pts = ring.map(([lng, lat]) => [(lng - center.lng) * kx, (lat - center.lat) * M_LAT]);
      if (Math.hypot(pts[0][0], pts[0][1]) > radiusM) continue;
      const L = Math.min(h / tanA, 350), dx = L * Math.sin(b), dy = L * Math.cos(b);
      const hp = hull(pts.concat(pts.map(([x, y]) => [x + dx, y + dy])));
      if (hp.length < 3) continue;
      const coords = hp.map(([x, y]) => [center.lng + x / kx, center.lat + y / M_LAT]);
      coords.push(coords[0]);
      out.push({ type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [coords] } });
    }
  }
  return out;
}
function findHomeBuilding(feats, pt) {
  let best = null, bestD = 45; // metres
  const kx = mLng(pt.lat);
  for (const f of feats) for (const ring of outerRings(f.geometry)) {
    if (!ring) continue;
    const r = ring.map(([lng, lat]) => [(lng - pt.lng) * kx, (lat - pt.lat) * M_LAT]);
    if (pointInRing(0, 0, r)) return f;
    const cx = r.reduce((s, p) => s + p[0], 0) / r.length, cy = r.reduce((s, p) => s + p[1], 0) / r.length;
    const dd = Math.hypot(cx, cy);
    if (dd < bestD) { bestD = dd; best = f; }
  }
  return best;
}

/* ---------------- Script loader ---------------- */
function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.async = true; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
}
function loadCss(href) { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = href; document.head.appendChild(l); }

/* ---------------- Sun & shadow map (MapLibre + OpenFreeMap + SunCalc) ---------------- */
const sun3d = (() => {
  let map = null, srcId = "openmaptiles", bldLayer = null, raf = 0, homeMarker = null, started = false;
  const night = document.getElementById("sun3dNight");
  const loading = document.getElementById("sunLoading");
  const LIB = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl";

  async function load() {
    if (started) return; started = true;
    try {
      loadCss(LIB + ".css");
      await loadScript(LIB + ".js");
      if (!window.SunCalc) { try { await loadScript("https://unpkg.com/suncalc@1.9.0/suncalc.js"); } catch (e) {} }
      init();
    } catch (e) {
      loading.textContent = t("sun3d.fail");
    }
  }

  function init() {
    map = new maplibregl.Map({
      container: "sun3dMap",
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [HOME.lng, HOME.lat], zoom: 17, pitch: 45, bearing: 0, maxPitch: 70,
      cooperativeGestures: true,
      attributionControl: { compact: false }
    });
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

    map.on("load", () => {
      loading.hidden = true;
      const style = map.getStyle();
      const vec = Object.entries(style.sources).find(([, s]) => s.type === "vector");
      if (vec) srcId = vec[0];

      const ext = style.layers.find(l => l.type === "fill-extrusion");
      if (ext) bldLayer = ext.id;
      else {
        bldLayer = "bldg-3d";
        map.addLayer({ id: bldLayer, type: "fill-extrusion", source: srcId, "source-layer": "building", minzoom: 13,
          paint: { "fill-extrusion-height": ["coalesce", ["get", "render_height"], 6],
                   "fill-extrusion-base": ["coalesce", ["get", "render_min_height"], 0] } });
      }
      map.setPaintProperty(bldLayer, "fill-extrusion-color", "#d9cdbd");
      map.setPaintProperty(bldLayer, "fill-extrusion-opacity", 0.95);

      map.addSource("sun-shadows", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
      map.addLayer({ id: "sun-shadows", type: "fill", source: "sun-shadows",
        paint: { "fill-color": "#4b5563", "fill-opacity": 0.38, "fill-antialias": false } }, bldLayer);

      homeMarker = new maplibregl.Marker({ color: "#d93025" }).setLngLat([HOME.lng, HOME.lat]).addTo(map);

      update();
      map.on("moveend", update);
      map.on("sourcedata", e => { if (e.sourceId === srcId && e.isSourceLoaded) update(); });
    });
  }

  function buildings() {
    try { return map.querySourceFeatures(srcId, { sourceLayer: "building" }); } catch (e) { return []; }
  }

  function render() {
    raf = 0;
    if (!map || !map.isStyleLoaded() || !map.getSource("sun-shadows")) return;
    const s = currentSun();
    const up = s.alt > 0;
    const warm = s.alt < 12 ? "#ffd2a0" : "#fff6e6";
    map.setLight({ anchor: "map", position: [1.5, s.az, Math.min(89, Math.max(5, 90 - s.alt))],
      color: up ? warm : "#8090b0", intensity: up ? 0.5 : 0.15 });
    map.getSource("sun-shadows").setData({ type: "FeatureCollection", features: shadowFeatures(buildings(), s, HOME, 900) });
    night.hidden = up;
  }
  function update() { if (map && !raf) raf = requestAnimationFrame(render); }
  function moveHome() {
    if (!map) return;
    homeMarker && homeMarker.setLngLat([HOME.lng, HOME.lat]);
    map.jumpTo({ center: [HOME.lng, HOME.lat] });
    update();
  }
  // Load when the section approaches the viewport, so the page itself stays fast.
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
    if (es.some(e => e.isIntersecting)) { io.disconnect(); load(); }
  }, { rootMargin: "400px" }) : null;
  if (io) io.observe(document.getElementById("sun3d")); else load();
  homeListeners.push(moveHome);
  return { update };
})();

/* ---------------- Google: main map, places, elevation, street view ---------------- */
const CITY_SPOTS = [
  { name: "Deák Ferenc tér", lat: 47.4977, lng: 19.0544 },
  { name: "Astoria", lat: 47.4935, lng: 19.0603 },
  { name: "Ferenciek tere", lat: 47.4930, lng: 19.0557 },
  { name: "Kálvin tér", lat: 47.4893, lng: 19.0614 },
  { name: "Március 15. tér", lat: 47.4920, lng: 19.0518 }
];
let citySpot = CITY_SPOTS[0];
const CATS = { transit: "#2b6cb0", parks: "#2f8a4f", dining: "#c8553d" };
const CURATED = [
  { cat: "transit", q: "Szirtes út bus stop, Budapest", en: "Bus 27 · Szirtes út stop", hu: "27-es busz · Szirtes út megálló" },
  { cat: "transit", q: "Búsuló Juhász (Citadella) bus stop, Budapest", en: "Bus 27 · Búsuló Juhász (Citadella)", hu: "27-es busz · Búsuló Juhász (Citadella)" },
  { cat: "transit", q: "Móricz Zsigmond körtér M4 metro station, Budapest", en: "Móricz Zsigmond körtér · M4 and trams", hu: "Móricz Zsigmond körtér · M4 és villamosok" },
  { cat: "transit", q: "Szent Gellért tér – Műegyetem M4 metro station, Budapest", en: "Szent Gellért tér · M4 and trams", hu: "Szent Gellért tér · M4 és villamosok" },
  { cat: "transit", q: "Sánc utca bus stop, Hegyalja út, Budapest", en: "Sánc utca · buses 110, 112 to the centre; bus 27", hu: "Sánc utca · 110-es, 112-es busz a belvárosba; 27-es busz" },
  { cat: "parks", q: "Citadella, Gellért Hill, Budapest", en: "Citadella", hu: "Citadella", fixed: { lat: C.CITADELLA_LAT, lng: C.CITADELLA_LNG } },
  { cat: "parks", q: "Liberty Statue, Gellért Hill, Budapest", en: "Liberty Statue", hu: "Szabadság-szobor" },
  { cat: "parks", q: "Filozófusok kertje, Gellérthegy, Budapest", en: "Philosophers' Garden", hu: "Filozófusok kertje" },
  { cat: "parks", q: "Jubileumi park, Gellérthegy, Budapest", en: "Jubilee Park", hu: "Jubileumi park" }
];

let G = null, GM = {}, gmap = null, homeMk = null, homeIw = null, elev = null;
const poiMarkers = [];
let activeCat = "all";
const dist = (a, b) => Math.hypot((a.lat - b.lat) * M_LAT, (a.lng - b.lng) * mLng(a.lat));
const pinIcon = (color, size) => ({
  url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="${color}" stroke="#fff" stroke-width="3"/></svg>`),
  scaledSize: new GM.Size(size, size), anchor: new GM.Point(size / 2, size / 2)
});

function osmFallback() {
  const lat = HOME.lat, lng = HOME.lng, dx = 0.009, dy = 0.0045;
  document.getElementById("mapCanvas").innerHTML =
    `<iframe title="Map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - dx},${lat - dy},${lng + dx},${lat + dy}&layer=mapnik&marker=${lat},${lng}"></iframe>`;
  document.getElementById("svThumb").hidden = true;
}

function homePopupHtml() {
  let h = `<div style="font:14px/1.5 Inter,sans-serif;max-width:240px"><strong>${esc(t("map.property"))}</strong>`;
  if (elev) {
    h += `<br>${esc(t("pin.elev", { e: Math.round(elev.home) }))}`;
    if (elev.diff > 0) h += `<br><span style="color:#2f5443;font-weight:600">${esc(t("pin.diff", { d: Math.round(elev.diff), place: elev.place }))}</span>`;
  }
  return h + "</div>";
}

async function geocodeHome() {
  if (C.PROPERTY_PIN_EXACT) return null;
  const cached = cache.get("home");
  if (cached) return cached;
  const near = r => r && dist(r, { lat: C.PROPERTY_LAT, lng: C.PROPERTY_LNG }) < 2000 ? r : null;
  try {
    const { Geocoder } = await G.importLibrary("geocoding");
    const res = await new Geocoder().geocode({ address: C.ADDRESS, region: "hu" });
    const loc = res.results[0]?.geometry?.location;
    const r = near(loc && { lat: loc.lat(), lng: loc.lng() });
    if (r) { cache.set("home", r); return r; }
  } catch (e) {}
  try {
    const { Place } = await G.importLibrary("places");
    const { places } = await Place.searchByText({ textQuery: C.ADDRESS, fields: ["location"], maxResultCount: 1 });
    const loc = places[0]?.location;
    const r = near(loc && { lat: loc.lat(), lng: loc.lng() });
    if (r) { cache.set("home", r); return r; }
  } catch (e) {}
  return null;
}

async function loadPois() {
  let data = cache.get("places-v2");
  if (!data) {
    data = { curated: [], dining: [] };
    const { Place } = await G.importLibrary("places");
    for (const c of CURATED) {
      let loc = c.fixed || null;
      if (!loc) {
        try {
          const { places } = await Place.searchByText({ textQuery: c.q, fields: ["location"], maxResultCount: 1,
            locationBias: { center: { lat: HOME.lat, lng: HOME.lng }, radius: 3000 } });
          const l = places[0]?.location;
          if (l && dist({ lat: l.lat(), lng: l.lng() }, HOME) < 3000) loc = { lat: l.lat(), lng: l.lng() };
        } catch (e) {}
      }
      if (loc) data.curated.push({ i: CURATED.indexOf(c), ...loc });
    }
    try {
      const { places } = await Place.searchNearby({ fields: ["displayName", "location"],
        locationRestriction: { center: { lat: HOME.lat, lng: HOME.lng }, radius: 1000 },
        includedPrimaryTypes: ["restaurant", "cafe", "bakery", "supermarket", "grocery_store"], maxResultCount: 15 });
      data.dining = places.filter(p => p.location).map(p => ({ name: p.displayName, lat: p.location.lat(), lng: p.location.lng() }));
    } catch (e) {}
    cache.set("places-v2", data);
  }
  const iw = new GM.InfoWindow();
  const add = (pos, cat, labelFn) => {
    const m = new GM.Marker({ position: pos, map: gmap, icon: pinIcon(CATS[cat], 18) });
    m.addListener("click", () => { iw.setContent(`<div style="font:14px Inter,sans-serif"><strong>${esc(labelFn())}</strong></div>`); iw.open(gmap, m); });
    poiMarkers.push({ m, cat, labelFn });
  };
  data.curated.forEach(p => { const c = CURATED[p.i]; add({ lat: p.lat, lng: p.lng }, c.cat, () => c[lang]); });
  data.dining.forEach(p => add({ lat: p.lat, lng: p.lng }, "dining", () => p.name));
  applyFilter();
  updateMapLang();
}
function applyFilter() {
  poiMarkers.forEach(({ m, cat }) => m.setVisible(activeCat === "all" || activeCat === cat));
  document.querySelectorAll("#mapFilters button").forEach(b => b.classList.toggle("on", b.dataset.cat === activeCat));
}
function updateMapLang() {
  poiMarkers.forEach(({ m, labelFn }) => m.setTitle(labelFn()));
  if (homeMk) homeMk.setTitle(t("map.property"));
  if (homeIw) homeIw.setContent(homePopupHtml());
}

async function computeElevation() {
  const k = "elev-" + citySpot.name;
  let r = cache.get(k);
  if (!r) {
    try {
      const { ElevationService } = await G.importLibrary("elevation");
      const { results } = await new ElevationService().getElevationForLocations({
        locations: [{ lat: HOME.lat, lng: HOME.lng }, { lat: citySpot.lat, lng: citySpot.lng }] });
      r = { home: results[0].elevation, city: results[1].elevation };
      cache.set(k, r);
    } catch (e) { return; }
  }
  elev = { home: r.home, diff: r.home - r.city, place: citySpot.name };
  if (homeIw) homeIw.setContent(homePopupHtml());
  renderAir();
}

async function setupStreetView() {
  const btn = document.getElementById("svThumb");
  try {
    const meta = await (await fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?location=${HOME.lat},${HOME.lng}&radius=100&source=outdoor&key=${encodeURIComponent(KEY)}`)).json();
    if (meta.status !== "OK") { btn.hidden = true; return; }
    const pano = meta.location;
    const img = document.getElementById("svImg");
    img.src = `https://maps.googleapis.com/maps/api/streetview?size=480x240&location=${HOME.lat},${HOME.lng}&radius=100&source=outdoor&key=${encodeURIComponent(KEY)}`;
    img.onerror = () => btn.hidden = true;
    img.alt = "Street View";
    btn.hidden = false;
    btn.onclick = () => {
      const heading = (Math.atan2((HOME.lng - pano.lng) * mLng(HOME.lat), (HOME.lat - pano.lat) * M_LAT) / RAD + 360) % 360;
      const sv = gmap.getStreetView();
      sv.setPosition(pano); sv.setPov({ heading, pitch: 12 }); sv.setVisible(true);
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    };
  } catch (e) { btn.hidden = true; }
}

async function initGoogleMap() {
  const { Map, InfoWindow } = await G.importLibrary("maps");
  const { Marker } = await G.importLibrary("marker");
  const { Size, Point, ControlPosition } = await G.importLibrary("core");
  Object.assign(GM, { InfoWindow, Marker, Size, Point, ControlPosition });
  const geo = await geocodeHome();
  if (geo) setHome(geo.lat, geo.lng);
  const CP = GM.ControlPosition || {};
  gmap = new Map(document.getElementById("mapCanvas"), {
    center: { lat: HOME.lat, lng: HOME.lng }, zoom: 16, mapTypeId: "hybrid",
    mapTypeControl: true, mapTypeControlOptions: { mapTypeIds: ["hybrid", "roadmap"], position: CP.TOP_LEFT },
    zoomControl: true, zoomControlOptions: { position: CP.RIGHT_CENTER },
    cameraControl: false, streetViewControl: true, streetViewControlOptions: { position: CP.RIGHT_CENTER },
    fullscreenControl: true, clickableIcons: true
  });
  homeIw = new InfoWindow();
  homeMk = new Marker({ position: { lat: HOME.lat, lng: HOME.lng }, map: gmap, zIndex: 999 }); // default red drop pin
  homeMk.addListener("click", () => { homeIw.setContent(homePopupHtml()); homeIw.open(gmap, homeMk); });
  updateMapLang();
  setupStreetView();
  return true;
}

function loadGoogle() {
  return new Promise((resolve, reject) => {
    window.gm_authFailure = () => { osmFallback(); reject(new Error("auth")); };
    window.__gmReady = () => { G = google.maps; resolve(); };
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(KEY)}&callback=__gmReady&loading=async&v=weekly&language=${lang}`).catch(reject);
  });
}

/* ---------------- Air quality (Google Air Quality API) ---------------- */
let air = null;
const POLL = { pm25: "PM2.5", pm10: "PM10", no2: "NO₂", o3: "O₃", co: "CO", so2: "SO₂", nh3: "NH₃", nmhc: "NMHC" };
const aqBand = v => v >= 80 ? 5 : v >= 60 ? 4 : v >= 40 ? 3 : v >= 20 ? 2 : 1;
async function aqLookup(p) {
  const r = await fetch(`https://airquality.googleapis.com/v1/currentConditions:lookup?key=${encodeURIComponent(KEY)}`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ location: { latitude: p.lat, longitude: p.lng }, universalAqi: true })
  });
  if (!r.ok) throw new Error("aq " + r.status);
  const j = await r.json();
  const ix = (j.indexes || []).find(i => i.code === "uaqi");
  if (!ix || typeof ix.aqi !== "number") throw new Error("aq data");
  return { aqi: ix.aqi, pol: ix.dominantPollutant || "", time: j.dateTime };
}
async function loadAir() {
  let d = cache.get("air-v1", 30);
  if (!d) {
    const home = await aqLookup(HOME);
    const spots = await Promise.all(CITY_SPOTS.map(s => aqLookup(s).then(v => ({ ...v, spot: s })).catch(() => null)));
    const ok = spots.filter(Boolean);
    if (!ok.length) throw new Error("no city data");
    const worst = ok.reduce((a, b) => b.aqi < a.aqi ? b : a);
    d = { home, city: worst };
    cache.set("air-v1", d);
  }
  air = d;
  citySpot = d.city.spot;
  renderAir();
}
function fillAqCard(el, v) {
  el.querySelector(".v").textContent = Math.round(v.aqi);
  el.querySelector(".aq-cat").textContent = t("aq." + aqBand(v.aqi));
  el.querySelector(".aq-pol").textContent = v.pol ? t("air.dominant", { p: POLL[v.pol] || v.pol.toUpperCase() }) : "";
}
function renderAir() {
  const sec = document.getElementById("air");
  const badge = document.getElementById("elevBadge");
  if (elev && elev.diff > 0) {
    badge.textContent = t("air.elevBadge", { e: Math.round(elev.home), d: Math.round(elev.diff) });
    badge.hidden = false;
  }
  if (!air) { sec.hidden = true; return; }
  fillAqCard(document.getElementById("aqHome"), air.home);
  const city = document.getElementById("aqCity");
  fillAqCard(city, air.city);
  city.querySelector(".aq-place").textContent = air.city.spot.name;
  const diff = Math.round(air.home.aqi - air.city.aqi);
  document.getElementById("aqCaption").textContent =
    diff >= 8 ? t("air.capBetter", { d: diff, place: air.city.spot.name }) :
    diff > -3 ? t("air.capClose") : t("air.capNeutral");
  const when = air.home.time ? new Intl.DateTimeFormat(lang === "hu" ? "hu-HU" : "en-GB",
    { timeZone: "Europe/Budapest", hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" }).format(new Date(air.home.time)) : "";
  document.getElementById("aqFoot").textContent = t("air.foot", { time: when });
  sec.hidden = false;
}

/* ---------------- Weather pill (Google Weather API) ---------------- */
let wx = null;
const WX_DIR_HU = { N: "É", S: "D", E: "K", W: "Ny" };
const cardinalShort = c => (c || "").split("_").map(w => w[0]).join("");
async function loadWeather() {
  const k = "wx-" + lang;
  let d = cache.get(k, 20);
  if (!d) {
    const r = await fetch(`https://weather.googleapis.com/v1/currentConditions:lookup?key=${encodeURIComponent(KEY)}&location.latitude=${HOME.lat}&location.longitude=${HOME.lng}&languageCode=${lang}&unitsSystem=METRIC`);
    if (!r.ok) throw new Error("wx");
    const j = await r.json();
    if (typeof j.temperature?.degrees !== "number") throw new Error("wx data");
    d = { temp: j.temperature.degrees, text: j.weatherCondition?.description?.text || "", icon: j.weatherCondition?.iconBaseUri || "",
          wind: j.wind?.speed?.value, dir: cardinalShort(j.wind?.direction?.cardinal) };
    cache.set(k, d);
  }
  wx = d; wx.lang = lang;
  renderWeather();
}
function renderWeather() {
  const el = document.getElementById("weatherPill");
  if (!wx) { el.hidden = true; return; }
  if (wx.lang !== lang) { loadWeather().catch(() => {}); return; }
  const dir = lang === "hu" ? wx.dir.split("").map(c => WX_DIR_HU[c] || c).join("") : wx.dir;
  const parts = [`<b>${esc(t("wx.place"))}</b>`, `${Math.round(wx.temp)} °C`];
  if (wx.text) parts.push(esc(wx.text));
  if (typeof wx.wind === "number") parts.push(esc(t("wx.wind", { s: Math.round(wx.wind), d: dir })));
  el.innerHTML = (wx.icon ? `<img src="${esc(wx.icon)}.svg" alt="">` : "") + parts.join('<span class="wp-sep">·</span>');
  el.hidden = false;
}

/* ---------------- Schools (static list, from OpenStreetMap) ---------------- */
const SCHOOLS = [
  ["Budapest School", "school", 380], ["Ádám Jenő Általános Iskola", "school", 730],
  ["Tigris Utcai Óvoda", "kg", 840], ["Budai Ciszterci Szent Imre Gimnázium", "school", 910]
];
function renderSchools() {
  const ul = document.getElementById("schoolList");
  ul.innerHTML = SCHOOLS.map(([n, k, d]) =>
    `<li><span><span class="sn">${esc(n)}</span><span class="st">${esc(t("school." + k))}</span></span><span class="sd">${esc(t("school.walk", { m: Math.max(1, Math.round(d / 80)), d }))}</span></li>`).join("");
}

/* ---------------- Map links ---------------- */
const addrQ = encodeURIComponent(C.ADDRESS);
document.getElementById("gmapsLink").href = `https://www.google.com/maps/search/?api=1&query=${addrQ}`;
document.getElementById("citadellaWalk").href =
  `https://www.google.com/maps/dir/?api=1&origin=${addrQ}&destination=${C.CITADELLA_LAT},${C.CITADELLA_LNG}&travelmode=walking`;

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
applyLang(detectLang());
setSeason("today");

if (!KEY) {
  osmFallback();
} else {
  const mapDone = loadGoogle().then(initGoogleMap).catch(() => { osmFallback(); return false; });
  // Air quality and weather use REST endpoints; run them once the pin is settled (or Maps failed).
  mapDone.then(async ok => {
    try { await loadAir(); } catch (e) { air = null; renderAir(); }
    if (ok) computeElevation();
  });
}
})();
