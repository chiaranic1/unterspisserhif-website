const media = {
  logo: "assets/logo-unterspisser.png",
  home: [
    "assets/home-hero-1.jpg",
    "assets/home-hero-2.jpg",
    "assets/home-hero-3.jpg",
    "assets/home-hero-4.jpg",
    "assets/home-hero-5.jpg",
    "assets/home-hero-6.jpg",
    "assets/home-hero-7.jpg",
  ],
  hosts: "assets/hosts.jpg",
  cow: "assets/cow.jpg",
  sun: "assets/apartment-sun.jpg",
  calendula: "assets/apartment-calendula.jpg",
  sunHero: "assets/apartment-sun-hero.jpg",
  calendulaHero: "assets/apartment-calendula-hero.jpg",
};

const seasons = [
  { key: "inverno", title: "Winter", photo: "assets/winter.jpg", icon: "assets/season-winter.png" },
  { key: "primavera", title: "Frühling", photo: "assets/spring.jpg", icon: "assets/season-spring.png" },
  { key: "estate", title: "Sommer", photo: "assets/summer.jpg", icon: "assets/season-summer.png" },
  { key: "autunno", title: "Herbst", photo: "assets/autumn.jpg", icon: "assets/season-autumn.png" },
];

const seasonPages = {
  inverno: {
    title: "Winterurlaub in St. Peter am Eingang des Grödnertals",
    lead: "Unsere Lage im Grödnertal ist ideal für den Winterurlaub: schneller Zugang zum Dolomiti Superski, Pisten der Sella Ronda und Weihnachtsmärkte. Perfekt für Skifahrer, Schneeschuhwanderer und Rodler. Bushaltestelle verfügbar, um sich ohne Auto fortzubewegen. Jedes Jahr findet der Weltcup im alpinen Skirennsport statt.",
    section: "Seiser Alm",
    copy: "Die Seiser Alm bietet 23 Liftanlagen und 60 km Pisten für Ski und Snowboard sowie 60 km gut ausgebaute Loipen, die auch von internationalen Teams geschätzt werden. Es gibt 30 km Schneeschuhwanderwege, und mit dem Gardena / Seiser Alm Skipass kann man das gesamte Gebiet erkunden. Der 'Dolomiti Superski Pass' ermöglicht den Zugang zu 360 Liftanlagen, einschließlich der Sella Ronda, dem größten Skigebiet der Welt.",
    photo: "assets/winter-seiser-alm.jpg",
    gallery: ["assets/winter-dolomites.jpg", "assets/winter.jpg"],
  },
  primavera: {
    title: "Spaziergänge und Wanderungen in Sankt Peter",
    lead: "Machen Sie eine Wanderung im Frühling und genießen Sie die Natur. Sankt Peter und das Grödnertal sind perfekt für Mountainbikes und bieten auch Museen und Schlösser zum Besichtigen.",
    section: "Die Kontraste der Natur",
    copy: "Im Frühling zeigt sich die Landschaft in zwei Stimmungen: Die Berge sind mit weißem Schnee bedeckt, während die Täler voller blühender Bäume und blühender Wiesen sind. Man kann bis Ostern Ski fahren, während die Blumen zu blühen beginnen und die Bäche plätschern. Auch Städte wie Klausen, Brixen und Bozen öffnen wieder ihre Cafés im Freien.",
    photo: "assets/spring-church.jpg",
    gallery: ["assets/spring-flowers.jpg", "assets/spring-mountain.jpg"],
  },
  estate: {
    title: "Sommerurlaub in Sankt Peter - Wandern,Mountainbike...",
    lead: "In Südtirol können Sie Wanderungen je nach Wetter und Ihrer Stimmung planen. Sankt Peter ist ein idealer Ausgangspunkt für Spaziergänge, Klettertouren und Radwege in den Dolomiten, mit Aufstiegsanlagen, die zu Almen und Hütten führen.",
    section: "",
    copy: "",
    photo: "assets/summer-hike.jpg",
    gallery: ["assets/summer-valley.jpg", "assets/summer.jpg"],
  },
  autunno: {
    title: "Sankt Peter leuchtet in goldgelb",
    lead: "Im Herbst färben sich die Wälder goldgelb und das kühlere Klima macht Wanderungen in Südtirol ideal. Im Tal beginnt das „Törggelen“, eine traditionelle Mahlzeit mit lokalen Spezialitäten. Die nahegelegenen Städte Klausen, Brixen und Bozen laden zum Einkaufen und Museumsbesuchen ein.",
    section: "Die goldene Saison im Grödnertal",
    copy: "Die herbstliche Landschaft zieht viele Wanderer an, dank der milden Temperaturen im Tal und den Wanderwegen im unteren Gebirge. Im Herbst wird der „Almabtrieb“ gefeiert, die Rückkehr des geschmückten Viehs, begleitet von traditionellen Festen mit reichlich Essen und Musik.",
    photo: "assets/autumn-landscape.jpg",
    gallery: ["assets/autumn.jpg", "assets/autumn-landscape.jpg"],
  },
};

const apartments = {
  girasole: {
    title: "Sonnenblume",
    image: media.sunHero,
    roomImage: media.sun,
    roomCaption: "Girasole",
    gallery: [
      media.sun,
      "assets/apartment-sun-bedroom.jpg",
      "assets/apartment-sun-interior.jpg",
      "assets/apartment-sun-bathroom.jpg",
      "assets/apartment-sun-kitchen.jpg",
    ],
    floorplan: "assets/apartment-floorplan.jpg",
    intro: "60 m² großes Apartment mit Wohnzimmer, Küche, 2 Doppelzimmern, jeweils einem Badezimmer und einem Balkon.",
    description: "Unsere Apartments verfügen über einen komfortablen Wohnbereich mit Essbereich, Schlafsofa, Flachbildfernseher und einer Küchenzeile mit Glaskeramikkochfeld (4 Kochplatten), Dunstabzugshaube, Geschirrspüler, Kühlschrank mit Gefrierfach und Ofen. Geschirr, Kaffeemaschine und Wasserkocher sind ebenfalls vorhanden.",
    serviceHeading: "Dienstleistungen und Komfort",
    services: [
      "Apartment mit zwei Schlafzimmern, Schlafsofa, zwei Badezimmern mit Dusche, WC, Bidet und Waschbecken",
      "Handtücher, Bettwäsche und Geschirrtücher sind inklusive; Haartrockner verfügbar",
      "Großer Balkon, Rasenfläche zum Entspannen und Sonnenliegen",
      "Parkplatz vor dem Haus",
      "Rauchen in den Zimmern ist verboten",
      "Brötchenservice auf Anfrage",
      "Wohnzimmer mit einer Auswahl an Produkten (Marmeladen, Sirupe, Speck, Wurst, Eier, frisches Fleisch und Würstchen auf Anfrage)",
      "Wohnzimmer mit Brettspielen, Karten und Büchern",
      "Kostenlose Bettwäsche- und Handtuchwechsel für Aufenthalte von mehr als einer Woche",
      "Wäscherei verfügbar für 5 € mit Wäscheständer im Apartment, Bügeleisen und Bügelbrett auf Anfrage",
      "Skiraum und Schuhwärmer",
      "Erste-Hilfe-Set und Feuerlöscher im Eingangsbereich",
      "Kostenloses Wi-Fi",
      "Kinderbett, Hochstuhl und Wickeltisch auf Anfrage",
      "Kräutergarten zur Verfügung",
      "Bushaltestelle 200 m entfernt, Busse alle halbe Stunde",
      "Kinderspielplatz mit Rutsche, Schaukel, Sandkasten, Pedaltraktor, Trampolin und Tor zum Fußballspielen",
    ],
  },
  ringelblume: {
    title: "Ringelblume",
    image: media.calendulaHero,
    roomImage: media.calendula,
    roomCaption: "Calendola",
    gallery: [
      media.calendula,
      "assets/apartment-calendula-bedroom.jpg",
      "assets/apartment-calendula-interior.jpg",
      "assets/apartment-calendula-bathroom.jpg",
      "assets/apartment-calendula-kitchen.jpg",
    ],
    floorplan: "assets/apartment-floorplan.jpg",
    intro: "60 m² großes Apartment mit Wohnzimmer, Küche, 2 Doppelzimmern, jeweils einem Badezimmer und einem Balkon.",
    description: "Unsere Apartments verfügen über einen komfortablen Wohnbereich mit Essbereich, Schlafsofa, Flachbildfernseher und einer Küchenzeile mit Glaskeramikkochfeld (4 Kochplatten), Dunstabzugshaube, Geschirrspüler, Kühlschrank mit Gefrierfach und Ofen. Geschirr, Kaffeemaschine und Wasserkocher sind ebenfalls vorhanden.",
    serviceHeading: "Service und Komfort",
    services: [
      "Handtücher, Haartrockner, Bettwäsche, Geschirrtücher und Wi-Fi inklusive",
      "Jedes Apartment verfügt über einen großen Balkon; Rauchen in den Zimmern verboten",
      "Parkplatz vor dem Haus; Rasenfläche zum Entspannen und Sonnenliegen",
      "Brötchenservice auf Anfrage; kostenloser Wäschewechsel einmal pro Woche; Waschmaschine verfügbar",
      "Gemeinsamer Raum mit einer Auswahl an Produkten (Marmeladen, Sirupe, Speck, Wurst, Eier und frisches Fleisch je nach Saison); Brettspiele, Karten und Bücher",
      "Skiraum mit Schuhwärmer",
      "Erste-Hilfe-Set und Feuerlöscher im Eingangsbereich",
      "Kinderbett, Hochstuhl und Wickeltisch auf Anfrage; Kinderspielplatz mit Rutsche, Schaukel, Sandkasten, Pedaltraktor, Trampolin und Tor zum Fußballspielen",
    ],
  },
};

const arrow = '<svg class="icon" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const logo = `<img class="brand-logo" src="${media.logo}" alt="Unterspisserhof">`;
const languages = [
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "en", name: "English" },
];

function header(active = "") {
  const isCurrent = (key) => active === key ? 'aria-current="page"' : "";
  const options = languages.map(({ code, name }) => `<button type="button" data-language="${code}" lang="${code}">${name}</button>`).join("");
  return `<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
  <header class="site-header" id="top"><div class="header-inner wrap">
    <a class="brand" href="index.html" aria-label="Unterspisserhof — Home">${logo}</a>
    <div class="header-actions">
      <div class="language-switcher">
        <button class="language-current" type="button" aria-expanded="false" aria-controls="language-options" aria-label="Sprache auswählen">DE <span aria-hidden="true">⌄</span></button>
        <div class="language-options" id="language-options" hidden>${options}</div>
      </div>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Menü öffnen"><span></span><span></span></button>
    </div>
  </div></header>
  <div class="menu-layer" id="site-menu" aria-hidden="true">
    <button class="menu-backdrop" type="button" aria-label="Menü schließen" tabindex="-1"></button>
    <aside class="menu-drawer" role="dialog" aria-modal="true" aria-label="Website-Navigation">
      <div class="drawer-panel">
        <div class="drawer-languages" aria-label="Sprache auswählen">${options}</div>
        <button class="menu-close" type="button" aria-label="Menü schließen"><span></span><span></span></button>
        <nav class="drawer-nav" aria-label="Hauptnavigation">
          <a href="index.html" ${isCurrent("home")}>HOME</a>
          <div class="drawer-group">
            <span>WOHNUNGEN</span>
            <a href="girasole.html" ${isCurrent("girasole")}>SONNENBLUME</a>
            <a href="ringelblume.html" ${isCurrent("ringelblume")}>RINGELBLUME</a>
          </div>
          <div class="drawer-group">
            <span>JAHRESZEITEN</span>
            ${seasons.map(({ key, title }) => `<a href="${key}.html" ${isCurrent(key)}>${title}</a>`).join("")}
          </div>
          <a href="attivita.html" ${isCurrent("attivita")}>AKTIVITÄTEN</a>
          <a href="prenota.html" ${isCurrent("prenota")}>BUCHEN</a>
        </nav>
      </div>
    </aside>
  </div>`;
}

function footer() {
  return `<footer class="site-footer"><div class="wrap footer-inner">
    <a class="footer-brand" href="index.html" aria-label="Unterspisserhof — Home">${logo}</a>
    <p>Unterspisserhof · St. Peter · Südtirol</p>
    <a class="back-top" href="#top">Nach oben ↑</a>
  </div></footer>`;
}

function seasonCards() {
  return seasons.map((season) => `<a class="season-card" href="${season.key}.html">
    <img src="${season.photo}" alt="${season.title}" loading="lazy"><img class="season-card-icon" src="${season.icon}" alt="" loading="lazy">
    <span>${season.title}</span>
  </a>`).join("");
}

function homePage() {
  const slideImages = media.home.map((src, index) => `<img src="${src}" alt="" class="hero-slide${index === 0 ? " is-active" : ""}" ${index ? "" : "fetchpriority=\"high\""}>`).join("");
  return `<main id="inhalt">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-gallery" aria-hidden="true">${slideImages}</div><div class="hero-shade"></div>
      <div class="hero-copy wrap">
        <h1 id="home-title">Fühl dich<br>wie zu Hause</h1>
        <p>Genießen Sie Ihren Urlaub auf unserem Bauernhof in St. Peter, am Eingang zum Grödner Tal.Verbringen Sie Ihren Urlaub auf unserem Bauernhof umgeben von den sonnigen Bergen Südtirols und einer wunderschöner Landschaft.</p>
        <a class="button button-light" href="#wohnungen">Unsere Ferienwohnungen ${arrow}</a>
      </div>
    </section>
    <section class="welcome section-pad">
      <div class="welcome-copy"><h2>Marlies &amp; Norbert</h2><p>Wir freuen uns, Sie auf unserem von Natur umgebenen Bauernhof herzlich willkommen zu heißen. Hier können Sie zur Ruhe kommen, die frische Bergluft genießen und die herzliche Gastfreundschaft sowie die Schönheit Südtirols erleben. Wir freuen uns darauf, Ihren Aufenthalt zu etwas ganz Besonderem zu machen.</p><div class="host-signature"><span>Gastgeber</span></div></div>
      <figure class="host-photo"><img src="${media.hosts}" alt="Marlies und Norbert" loading="lazy"></figure>
    </section>
    <section class="nature-band" aria-label="Urlaub in der Natur"><img src="${media.cow}" alt="Kuh am Unterspisserhof" loading="lazy"><div class="nature-title"><span>Ein Urlaub in der</span><strong>Natur</strong></div></section>
    <section class="apartments section-pad" id="wohnungen">
      <div class="section-heading"><h2>Unsere<br>Ferienwohnungen</h2>
        <p>Unsere Ferienwohnungen bieten eine angenehme und entspannte Atmosphäre – ideal für einen Urlaub inmitten der Natur. Die warme Stimmung und der Bergblick machen Ihren Aufenthalt unvergesslich.</p>
      </div>
      <div class="apartment-grid">${Object.entries(apartments).map(([key, apartment]) => `<a class="apartment-card" href="${key}.html">
        <img src="${apartment.roomImage}" alt="Ferienwohnung ${apartment.title}" loading="lazy"><span class="card-number">0${key === "girasole" ? 1 : 2}</span>
        <div class="apartment-card-title"><p>Ferienwohnung</p><h3>${apartment.title}</h3><span class="card-link">Erfahre mehr ${arrow}</span></div>
      </a>`).join("")}</div>
    </section>
    <section class="activities section-pad"><div class="section-heading"><h2>Freizeitaktivitäten</h2>
      <p>Jede Jahreszeit bietet neue Möglichkeiten, die Natur und die Umgebung in vollen Zügen zu genießen. Lassen Sie sich von den verschiedenen Erlebnissen inspirieren, die die Region zu bieten hat, und die darauf ausgerichtet sind, Ihren Aufenthalt zu jeder Jahreszeit zu bereichern.</p>
    </div><div class="season-grid">${seasonCards()}</div></section>
    <section class="booking-strip"><p>Unterspisserhof · St. Peter</p><h2>Buch deinen nächsten Urlaub</h2><a class="button button-outline" href="prenota.html">Buchen ${arrow}</a></section>
  </main>`;
}

function apartmentPage(key) {
  const apartment = apartments[key];
  return `<main id="inhalt">
    <section class="page-hero apartment-hero"><img src="${apartment.image}" alt="Ferienwohnung ${apartment.title}" fetchpriority="high"><div class="page-hero-title"><p class="eyebrow">Ferienwohnung</p><h1>${apartment.title}</h1></div></section>
    <section class="apartment-intro section-pad wrap">
      <div class="apartment-gallery">
        <div class="apartment-slideshow" aria-label="Wohnungs-Fotogalerie">
          ${apartment.gallery.map((src, index) => `<button class="apartment-slide${index === 0 ? " is-active" : ""}" type="button" data-apartment-slide="${index}" aria-label="${apartment.roomCaption} ${index + 1}" aria-hidden="${index !== 0}" tabindex="${index === 0 ? "0" : "-1"}"><img src="${src}" alt="${apartment.roomCaption} ${index + 1}" ${index ? 'loading="lazy"' : 'fetchpriority="high"'}></button>`).join("")}
        </div>
        <div class="apartment-slide-dots" role="group" aria-label="Wohnungs-Fotogalerie">
          ${apartment.gallery.map((_, index) => `<button class="apartment-slide-dot${index === 0 ? " is-active" : ""}" type="button" data-apartment-dot="${index}" aria-label="Foto ${index + 1} anzeigen" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}
        </div>
      </div>
      <div><p class="eyebrow">Ferienwohnung</p><p>${apartment.intro}</p><p>${apartment.description}</p></div>
    </section>
    <section class="apartment-plan section-pad">
      <div class="apartment-plan-inner wrap">
        <div><p class="eyebrow">${apartment.title}</p><h2>Grundriss</h2><p>${apartment.intro}</p></div>
        <figure><img src="${apartment.floorplan}" alt="Grundriss" loading="lazy"><figcaption>60 m²</figcaption></figure>
      </div>
    </section>
    <dialog class="apartment-lightbox" aria-label="Wohnungs-Fotogalerie">
      <button class="apartment-lightbox-close" type="button" aria-label="Galerie schließen">×</button>
      <div class="apartment-lightbox-track">${apartment.gallery.map((src, index) => `<figure class="apartment-lightbox-photo" data-apartment-lightbox-photo="${index}"><img src="${src}" alt="${apartment.roomCaption} ${index + 1}" draggable="false"></figure>`).join("")}</div>
    </dialog>
    <section class="services section-pad wrap">
      <div class="section-heading"><p class="eyebrow">${apartment.title}</p><h2>${apartment.serviceHeading}</h2></div>
      <ul class="service-list">${apartment.services.map((service, index) => `<li><span>0${index + 1}</span><p>${service}</p></li>`).join("")}</ul>
    </section>
    <section class="booking-strip"><p>Unterspisserhof · St. Peter</p><h2>Buch deinen nächsten Urlaub</h2><a class="button button-outline" href="prenota.html">Buchen ${arrow}</a></section>
  </main>`;
}

function activitiesPage() {
  return `<main id="inhalt">
    <section class="page-hero activities-hero"><img src="assets/summer.jpg" alt="Freizeitaktivitäten im Grödnertal" fetchpriority="high"><div class="page-hero-title"><h1>Freizeitaktivitäten</h1></div></section>
    <section class="activities section-pad"><div class="section-heading"><h2>Freizeitaktivitäten</h2>
      <p>Jede Jahreszeit bietet neue Möglichkeiten, die Natur und die Umgebung in vollen Zügen zu genießen. Lassen Sie sich von den verschiedenen Erlebnissen inspirieren, die die Region zu bieten hat, und die darauf ausgerichtet sind, Ihren Aufenthalt zu jeder Jahreszeit zu bereichern.</p>
    </div><div class="season-grid">${seasonCards()}</div></section>
  </main>`;
}

function seasonPage(data) {
  const seasonKey = document.body.dataset.page;
  const seasonStickers = {
    inverno: [
      ["❄️", "Im Winter glitzert der Schnee auf den Dolomiten."],
      ["⛷️", "Im Grödnertal warten Skipisten und Langlaufloipen."],
      ["🏔️", "Die Dolomiten laden zu Wanderungen und Bergtouren ein."],
    ],
    primavera: [
      ["🌷", "Im Frühling blühen Wiesen und Blumen im Tal."],
      ["🦋", "Die Natur erwacht und Schmetterlinge kehren zurück."],
      ["🌱", "Auf den Wiesen sprießen die ersten Kräuter und Pflanzen."],
    ],
    estate: [
      ["☀️", "Die langen Sommertage sind ideal für Ausflüge in die Berge."],
      ["🏔️", "Die Dolomiten laden zu Wanderungen und Bergtouren ein."],
      ["🌼", "Im Sommer blühen die Almwiesen in den Dolomiten."],
    ],
    autunno: [
      ["🍂", "Im Herbst färben sich die Wälder golden."],
      ["🍄", "Nach dem Regen zeigen sich Pilze im Wald."],
      ["🌰", "Im Herbst kann man Kastanien sammeln und beim traditionellen Törggelen genießen."],
    ],
  }[seasonKey];
  const hasSeasonFeature = Boolean(data.section && data.copy);
  return `<main id="inhalt">
    <section class="page-hero season-hero"><img src="${data.photo}" alt="${data.title}" fetchpriority="high" draggable="false"><div class="page-hero-title"><h1>${data.title}</h1></div></section>
    <section class="season-intro section-pad wrap"><div class="season-icon" aria-hidden="true">✳</div><p>${data.lead}</p></section>
    ${hasSeasonFeature ? `<section class="season-feature section-pad">
      <div class="wrap season-feature-inner"><div><p class="eyebrow">${seasons.find((season) => season.key === seasonKey)?.title}</p><h2>${data.section}</h2><p>${data.copy}</p><div class="season-links">${seasons.map((season) => `<a href="${season.key}.html">${season.title}</a>`).join("")}</div></div>
      <img src="${data.photo}" alt="${data.section}" loading="lazy" draggable="false">
      </div>
    </section>` : ""}
    <section class="season-gallery wrap" aria-label="Saison-Fotowand">
      <div class="season-board-photos">${data.gallery.map((src, index) => `<figure class="season-polaroid" style="--photo-tilt:${index ? "1.1deg" : "-1.2deg"}"><img src="${src}" alt="${data.section || data.title} ${index + 1}" loading="lazy" draggable="false"><figcaption>${seasons.find((season) => season.key === seasonKey)?.title}</figcaption></figure>`).join("")}
        <span class="drag-hand" aria-hidden="true">👆</span>
      </div>
      <div class="season-stickers" aria-label="Verschiebbare Saison-Sticker">${seasonStickers.map(([sticker, description], index) => `<button class="season-sticker" type="button" title="${description}" style="--sticker-x:${18 + index * 31}%;--sticker-y:${index % 2 ? 68 : 18}%" aria-label="Saison-Tipp anzeigen">${sticker}</button>`).join("")}</div>
    </section>
    <dialog class="season-tip-dialog" aria-label="Saison-Tipp">
      <p class="season-tip-message"></p>
      <button class="season-tip-back" type="button" aria-label="Zurück zur Fotowand"><span aria-hidden="true">←</span><span>Zurück</span></button>
    </dialog>
  </main>`;
}

function bookingPage() {
  return `<main id="inhalt" class="booking-page">
    <section class="page-hero booking-hero"><img src="${media.home[0]}" alt="Urlaub auf dem Unterspisserhof" fetchpriority="high"><div class="page-hero-title"><h1>Buch deinen nächsten<br>Urlaub</h1></div></section>
    <section class="booking-message section-pad"><a class="button button-dark" href="https://info2289918.wixsite.com/unterspisserbiohof/b-u-c-h-e-n" target="_blank" rel="noopener noreferrer">Buch deinen nächsten Urlaub ${arrow}</a></section>
  </main>`;
}

const page = document.body.dataset.page || "home";
const shell = document.querySelector("#site-shell");
if (!shell) throw new Error("Element #site-shell nicht gefunden.");
let content;
if (page === "home") content = homePage();
else if (page === "girasole" || page === "ringelblume") content = apartmentPage(page);
else if (page === "attivita") content = activitiesPage();
else if (page === "prenota") content = bookingPage();
else if (seasonPages[page]) content = seasonPage(seasonPages[page]);
else throw new Error(`Nicht konfigurierte Seite: ${page}`);

shell.innerHTML = `${header(page)}${content}${footer()}`;

const availableLanguages = ["de", "it", "en"];
const storedLanguage = localStorage.getItem("unterspisser-language");
const language = availableLanguages.includes(storedLanguage) ? storedLanguage : "de";
const menuLayer = document.querySelector("#site-menu");
const menuButton = document.querySelector(".menu-toggle");
const menuCloseButton = document.querySelector(".menu-close");
const languageTranslations = window.siteTranslations;

function translatePage(selectedLanguage) {
  const translations = languageTranslations[selectedLanguage] || {};
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = textWalker.nextNode())) {
    const originalText = node.nodeValue;
    const text = originalText.trim();
    if (!text || !translations[text]) continue;
    const start = originalText.indexOf(text);
    node.nodeValue = `${originalText.slice(0, start)}${translations[text]}${originalText.slice(start + text.length)}`;
  }

  document.querySelectorAll("[aria-label], [title], [alt]").forEach((element) => {
    for (const attribute of ["aria-label", "title", "alt"]) {
      const originalValue = element.getAttribute(attribute);
      if (originalValue && translations[originalValue]) {
        element.setAttribute(attribute, translations[originalValue]);
      }
    }
  });

  document.documentElement.lang = selectedLanguage;
  document.querySelector(".language-current").innerHTML = `${selectedLanguage.toUpperCase()} <span aria-hidden="true">⌄</span>`;
  const heading = document.querySelector("main h1");
  const titleTranslations = {
    de: { home: "Home" },
    it: { home: "Home" },
    en: { home: "Home" },
  };
  const headingText = heading?.innerText.trim().replace(/\s+/g, " ") || "";
  const translatedHeading = translations[headingText] || headingText;
  document.title = `${titleTranslations[selectedLanguage][page] || translatedHeading} | Unterspisserhof`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `${document.title}. ${translations["Unsere Ferienwohnungen bieten eine angenehme und entspannte Atmosphäre – ideal für einen Urlaub inmitten der Natur. Die warme Stimmung und der Bergblick machen Ihren Aufenthalt unvergesslich."] || "Willkommen am Unterspisserhof in St. Peter."}`;
  document.querySelectorAll(".drawer-languages [data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });
}

translatePage(language);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const seasonPhotos = [...document.querySelectorAll(".season-hero > img, .season-feature-inner > img, .season-polaroid")];
const seasonTipDialog = document.querySelector(".season-tip-dialog");
const seasonTipMessage = seasonTipDialog?.querySelector(".season-tip-message");
const seasonTipBack = seasonTipDialog?.querySelector(".season-tip-back");
let activeSticker;
let activeDrag = null;

function draggablePoint(element) {
  return { x: Number(element.dataset.dragX || 0), y: Number(element.dataset.dragY || 0) };
}

function beginDrag(event) {
  if (event.button !== undefined && event.button !== 0) return;
  const element = event.currentTarget;
  const point = draggablePoint(element);
  activeDrag = {
    element,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    originX: point.x,
    originY: point.y,
    moved: false,
  };
  element.classList.add("is-dragging");
  element.setPointerCapture(event.pointerId);
}

function moveDrag(event) {
  if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
  const deltaX = event.clientX - activeDrag.startX;
  const deltaY = event.clientY - activeDrag.startY;
  if (Math.hypot(deltaX, deltaY) > 6) activeDrag.moved = true;
  if (!activeDrag.moved) return;
  const x = activeDrag.originX + deltaX;
  const y = activeDrag.originY + deltaY;
  activeDrag.element.dataset.dragX = String(x);
  activeDrag.element.dataset.dragY = String(y);
  activeDrag.element.style.translate = `${x}px ${y}px`;
  activeDrag.element.closest(".season-board-photos")?.classList.add("has-dragged");
}

function endDrag(event, cancelled = false) {
  if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
  const { element, moved } = activeDrag;
  activeDrag = null;
  element.classList.remove("is-dragging");
  if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
  element.dataset.suppressClick = String(moved || cancelled);
}

function moveByKeyboard(element, event) {
  if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const point = draggablePoint(element);
  const offset = event.shiftKey ? 24 : 8;
  const x = point.x + (event.key === "ArrowRight" ? offset : event.key === "ArrowLeft" ? -offset : 0);
  const y = point.y + (event.key === "ArrowDown" ? offset : event.key === "ArrowUp" ? -offset : 0);
  element.dataset.dragX = String(x);
  element.dataset.dragY = String(y);
  element.style.translate = `${x}px ${y}px`;
}

document.querySelectorAll(".apartment-gallery").forEach((gallery) => {
  const slides = [...gallery.querySelectorAll(".apartment-slide")];
  const dots = [...gallery.querySelectorAll(".apartment-slide-dot")];
  const lightbox = document.querySelector(".apartment-lightbox");
  const lightboxPhotos = [...(lightbox?.querySelectorAll(".apartment-lightbox-photo") || [])];
  const closeButton = lightbox?.querySelector(".apartment-lightbox-close");
  const apartmentName = languageTranslations[language][slides[0]?.querySelector("img")?.alt.replace(/ \d+$/, "")] || slides[0]?.querySelector("img")?.alt.replace(/ \d+$/, "") || "";
  const copy = {
    de: { photo: "Foto", show: (number) => `Foto ${number} anzeigen`, open: "Foto vergrößern" },
    it: { photo: "foto", show: (number) => `Mostra foto ${number}`, open: "Apri la galleria fotografica" },
    en: { photo: "photo", show: (number) => `Show photo ${number}`, open: "Open the photo gallery" },
  }[language];
  let currentIndex = 0;

  const setActiveSlide = (index) => {
    currentIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.tabIndex = active ? 0 : -1;
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
  };

  slides.forEach((slide, index) => {
    const image = slide.querySelector("img");
    const label = `${apartmentName}, ${copy.photo.toLowerCase()} ${index + 1}`;
    image.alt = label;
    slide.setAttribute("aria-label", `${label}. ${copy.open}`);
    slide.addEventListener("click", () => {
      lightbox?.showModal();
      lightboxPhotos[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
    });
  });

  dots.forEach((dot, index) => {
    dot.setAttribute("aria-label", copy.show(index + 1));
    dot.addEventListener("click", () => setActiveSlide(index));
  });

  closeButton?.addEventListener("click", () => lightbox?.close());
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener("close", () => slides[currentIndex]?.focus());

  if (!reducedMotion && slides.length > 1) {
    window.setInterval(() => {
      if (lightbox?.open) return;
      setActiveSlide((currentIndex + 1) % slides.length);
    }, 5000);
  }
});

seasonPhotos.forEach((photo) => {
  const image = photo.matches("img") ? photo : photo.querySelector("img");
  photo.tabIndex = 0;
  photo.setAttribute("role", "group");
  const numberedAlt = image.alt.match(/^(.*) (\d+)$/);
  if (numberedAlt && languageTranslations[language][numberedAlt[1]]) {
    image.alt = `${languageTranslations[language][numberedAlt[1]]} ${numberedAlt[2]}`;
  }
  const photoAction = {
    de: "Mit Maus oder Finger ziehen, um das Foto zu verschieben. Mit den Pfeiltasten schrittweise bewegen.",
    it: "Trascina con il mouse o il dito per spostare la foto. Usa le frecce per muoverla a piccoli passi.",
    en: "Drag with your mouse or finger to move the photo. Use the arrow keys to nudge it.",
  }[language];
  photo.setAttribute("aria-label", `${image.alt}. ${photoAction}`);
  photo.addEventListener("pointerdown", beginDrag);
  photo.addEventListener("pointermove", moveDrag);
  photo.addEventListener("pointerup", endDrag);
  photo.addEventListener("pointercancel", (event) => endDrag(event, true));
  photo.addEventListener("keydown", (event) => moveByKeyboard(photo, event));
  photo.addEventListener("dragstart", (event) => event.preventDefault());
  photo.addEventListener("click", (event) => {
    if (photo.dataset.suppressClick !== "true") return;
    event.preventDefault();
    photo.dataset.suppressClick = "false";
  });
});

document.querySelectorAll(".season-sticker").forEach((sticker) => {
  sticker.addEventListener("pointerdown", beginDrag);
  sticker.addEventListener("pointermove", moveDrag);
  sticker.addEventListener("pointerup", (event) => endDrag(event));
  sticker.addEventListener("pointercancel", (event) => endDrag(event, true));
  sticker.addEventListener("click", (event) => {
    if (sticker.dataset.suppressClick === "true") {
      event.preventDefault();
      sticker.dataset.suppressClick = "false";
      return;
    }
    if (!seasonTipDialog || !seasonTipMessage) return;
    activeSticker = sticker;
    seasonTipMessage.textContent = sticker.title;
    seasonTipDialog.showModal();
    seasonTipBack?.focus();
  });
  sticker.addEventListener("keydown", (event) => moveByKeyboard(sticker, event));
});

seasonTipBack?.addEventListener("click", () => seasonTipDialog?.close());
seasonTipDialog?.addEventListener("click", (event) => {
  if (event.target === seasonTipDialog) seasonTipDialog.close();
});
seasonTipDialog?.addEventListener("close", () => {
  activeSticker?.focus();
  activeSticker = undefined;
});

const revealElements = document.querySelectorAll([
  ".site-header .brand",
  ".hero-copy > *",
  ".page-hero-title",
  ".welcome-copy",
  ".nature-title",
  ".section-heading",
  ".host-photo",
  ".apartment-card",
  ".season-card",
  ".apartment-intro > div",
  ".service-list li",
  ".season-intro",
  ".season-feature-inner > div",
  ".booking-strip > *",
  ".booking-message > *",
].join(", "));
const revealImages = document.querySelectorAll("main img:not(.hero-slide):not(.season-card-icon)");
const typewriterTargets = document.querySelectorAll([
  "main h1",
  "main h2",
  "main h3",
  "main p:not(.eyebrow)",
].join(", "));

const typewriterSet = new Set(typewriterTargets);
typewriterTargets.forEach((element, index) => {
  element.style.setProperty("--typewriter-delay", `${Math.min(index * 45, 360)}ms`);
});

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("reveal-on-scroll", "is-visible"));
  revealImages.forEach((image) => image.classList.add("reveal-image", "is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      if (typewriterSet.has(entry.target)) entry.target.classList.add("typewriter-text");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
    revealObserver.observe(element);
  });
  revealImages.forEach((image) => {
    image.classList.add("reveal-image");
    revealObserver.observe(image);
  });
  if (!reducedMotion) typewriterTargets.forEach((element) => revealObserver.observe(element));
}

function setMenuOpen(open) {
  if (!menuLayer || !menuButton) return;
  menuLayer.classList.toggle("is-open", open);
  menuLayer.setAttribute("aria-hidden", String(!open));
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  document.body.classList.toggle("menu-is-open", open);
  if (open) menuCloseButton?.focus();
  else menuButton.focus();
}

menuButton?.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});
menuCloseButton?.addEventListener("click", () => setMenuOpen(false));
document.querySelector(".menu-backdrop")?.addEventListener("click", () => setMenuOpen(false));
menuLayer?.querySelectorAll(".drawer-nav a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuLayer?.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});

function selectLanguage(selectedLanguage) {
  if (!availableLanguages.includes(selectedLanguage)) {
    throw new Error(`Unsupported language: ${selectedLanguage}`);
  }
  localStorage.setItem("unterspisser-language", selectedLanguage);
  window.location.reload();
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => selectLanguage(button.dataset.language));
});
const languageSwitcher = document.querySelector(".language-switcher");
const languageCurrent = document.querySelector(".language-current");
languageCurrent?.addEventListener("click", () => {
  const isOpen = languageCurrent.getAttribute("aria-expanded") === "true";
  languageCurrent.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector(".language-options").hidden = isOpen;
});
document.addEventListener("click", (event) => {
  if (languageSwitcher && !languageSwitcher.contains(event.target)) {
    languageCurrent?.setAttribute("aria-expanded", "false");
    const options = document.querySelector(".language-options");
    if (options) options.hidden = true;
  }
});

const slides = [...document.querySelectorAll(".hero-slide")];
if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let activeSlide = 0;
  window.setInterval(() => {
    slides[activeSlide].classList.remove("is-active");
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add("is-active");
  }, 5000);
}
