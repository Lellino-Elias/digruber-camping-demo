import type { CampsiteConfig } from "../types";

const IMG = "/campsites/digruber";

export const digruber: CampsiteConfig = {
  name: "Familie Digruber",
  shortName: "Digruber",
  slug: "digruber",
  ort: "Lackenhof am Ötscher",
  region: "Niederösterreich",
  brandKind: "Camping & Appartements",
  regionLong: "Mostviertel · Lackenhof am Ötscher · Niederösterreich",

  heroVariant: "center",

  claim: "Dein Ganzjahresplatz am Fuße des Ötschers",
  claimEmphasis: "am Fuße des Ötschers",
  emailDetail: "euer ganzjährig geöffneter Campingplatz mitten in der Natur",
  intro:
    "Direkt am Fuße des Ötschers, im Herzen des Mostviertels: 43 Stellplätze, das ganze Jahr geöffnet — ein Familienbetrieb, bei dem schon die Dauercamper seit Jahren wiederkommen.",

  logo: { src: `${IMG}/logo.png`, alt: "Familie Digruber – Haus Österreich" },

  statement: {
    text: "Bei Familie Digruber wachst du im Wohnwagen auf — und der Ötscher steht schon vor dem Vorzelt.",
    emphasis: "vor dem Vorzelt",
  },

  pillars: [
    {
      title: "Moderne Appartements",
      text: "Fünf Appartements für drei bis fünf Gäste — mit eigener Küche, Bad und Flat-TV im Zimmer.",
      image: { src: `${IMG}/gallery-c580f73166.webp`, alt: "Moderne Appartement-Küche mit Essbereich im Haus Digruber" },
    },
    {
      title: "Gemütliche Studios",
      text: "Zwei Studios für zwei bis drei Gäste — offener Wohn- und Schlafbereich mit eigener Küche.",
      image: { src: `${IMG}/gallery-3c349d253c.webp`, alt: "Appartement mit Doppelbett und Wohnbereich bei Familie Digruber" },
    },
    {
      title: "Sauna im Haus",
      text: "Finnische und Bio-Sauna für bis zu zwölf Personen — nach Voranmeldung für € 8 pro Person.",
      image: { src: `${IMG}/gallery-17fab66449.webp`, alt: "Finnische Sauna im Haus der Familie Digruber" },
    },
  ],

  usps: ["43 Stellplätze", "Ganzjährig geöffnet", "Strom, Gas & WLAN", "Sauna im Haus", "Am Fuße des Ötschers", "Familienbetrieb"],

  trust: {
    heading: "Warum Stammgäste immer wiederkommen",
    headingEmphasis: "wiederkommen",
    intro:
      "Ein Familienbetrieb am Fuße des Ötschers, der seinen Dauercampern für ihre Treue dankt: 43 Plätze, ganzjährig erschlossen — Erholung in intakter Natur im Herzen des Mostviertels.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-c450ea868e.webp`, alt: "Fuchswaldhütte am Skizentrum Großer Ötscher in Lackenhof mit verschneiten Pisten und Lift" },
  },

  camping: {
    heading: "Glücklich aufwachen am Ötscher",
    intro:
      "43 Stellplätze in intakter Natur, das ganze Jahr geöffnet — jeder Platz mit Strom, Gas, Kabel-TV und WLAN (Wasser Mai–Okt.), dazu ein fußbodenbeheiztes Campinghaus und die Sauna im Haus.",
    features: [
      {
        title: "Mitten in der Natur",
        text: "43 Stellplätze auf der Ötscherwiese, das ganze Jahr über geöffnet.",
        image: { src: `${IMG}/gallery-4c5753d94d.webp`, alt: "Luftaufnahme des Campingplatzes Digruber auf der Ötscherwiese in Lackenhof" },
      },
      {
        title: "Ganzjährig geöffnet",
        text: "Auch im Winter ein Zuhause — feste Plätze mit winterfestem Überdach unter dem verschneiten Ötscher.",
        image: { src: `${IMG}/gallery-5a65897062.webp`, alt: "Wohnwagen mit winterfestem Überdach am Campingplatz Digruber vor dem verschneiten Ötscher" },
      },
      {
        title: "Sauna & Ruheraum",
        text: "Nach dem Wandertag in die finnische oder Bio-Sauna — der Ruheraum im Haus lädt zum Verweilen ein.",
        image: { src: `${IMG}/gallery-bf1026c4d2.webp`, alt: "Ruheraum mit Sauna im Haus Österreich der Familie Digruber" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Lackenhof",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 bis Ybbs an der Donau, weiter über die B25 nach Lackenhof am Ötscher — 1,2 km bis zur Ötscherwiese." },
      { title: "Mit der Bahn", text: "Mit der Mariazellerbahn bis Kienberg-Gaming, von dort per Bus oder Taxi hinauf nach Lackenhof." },
      { title: "Lage", text: "Am Fuße des Ötschers, mitten im Mostviertel und nahe dem Naturpark Ötscher-Tormäuer." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ötscher",
    headingEmphasis: "Ötscher",
    intro: "Ein paar Aufnahmen vom Platz und der Region rund um den Ötscher.",
    tag: "Lackenhof am Ötscher",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ötscher",
    headingEmphasis: "am Ötscher",
    intro: "Wähle Zeitraum und Personen — Familie Digruber bestätigt dir deinen Stellplatz persönlich.",
    pricesArePlaceholder: false,
    priceNote: "Stellplatz € 12 + Erwachsener € 11 pro Nacht · Kinder ab € 4,50 · zzgl. Nächtigungsabgabe € 2,60 · Strom nach Verbrauch",
    highlight: { title: "Ganzjährig geöffnet", text: "Auch im Winter mit Strom, Gas, Kabel-TV und WLAN — dazu Dauercamper-Parzellen ab € 900." },
    categories: [
      { id: "stellplatz", label: "Stellplatz + 1 Erw. · pro Nacht", perNight: 23, perExtraGuest: 11 },
      { id: "appartement", label: "Appartement · pro Nacht", perNight: 160 },
    ],
  },

  kontakt: {
    tel: "+43 7480 5276",
    telHref: "tel:+4374805276",
    mail: "office@digruber.at",
    facebook: "https://www.facebook.com/gasthof.camping.digruber",
    adresse: "Ötscherwiese 18 · 3295 Lackenhof am Ötscher · Niederösterreich",
    coords: { lat: 47.8717938, lng: 15.1691909 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default digruber;
