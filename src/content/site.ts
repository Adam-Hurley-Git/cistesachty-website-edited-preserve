import {
  Camera,
  ClipboardCheck,
  FileText,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  SprayCan,
  Users,
  Building2,
  Wrench,
} from "lucide-react";

import cisteni from "@/assets/extracted/cisteni.jpg";
import domecek from "@/assets/extracted/domecek.jpg";
import final from "@/assets/extracted/final.png";
import kamera from "@/assets/extracted/kamera.jpg";
import sachta from "@/assets/extracted/sachta-kamera.jpg";

export const company = {
  name: "Čisté šachty",
  owner: "Filip Tuček",
  phoneDisplay: "",
  phoneHref: "",
  email: "",
  address: "",
  ico: "",
  region: "Hodonín a okolí",
};

export const navItems = [
  { to: "/", label: "Domů" },
  { to: "/sluzby", label: "Služby" },
  { to: "/pro-svj", label: "Pro SVJ" },
  { to: "/pro-spravce", label: "Pro správce" },
  { to: "/cenik", label: "Ceník" },
  { to: "/o-nas", label: "O nás" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const heroBadges = [
  "Bez vstupu do bytů",
  "Fotodokumentace a protokol",
  "Pro SVJ, BD a správce",
];

export const homeTrustPoints = [
  "Místní firma pro Hodonín a okolí",
  "Bez vstupu do bytů",
  "Fotodokumentace a protokol po práci",
  "Jasný postup od kontroly po předání dokumentace",
];

export const homeAudience = [
  {
    title: "SVJ",
    body: "Potřebujete mít jasný přehled o stavu šachet, podklady pro výbor a dokumentaci po provedení prací.",
    icon: Users,
  },
  {
    title: "Bytová družstva",
    body: "Řešíte více bytových jednotek najednou a potřebujete spolehlivý postup bez zbytečných komplikací pro obyvatele.",
    icon: Building2,
  },
  {
    title: "Správci nemovitostí",
    body: "Hledáte partnera, který komunikuje věcně, dodrží domluvený termín a po práci předá vše potřebné pro vaše klienty.",
    icon: Wrench,
  },
];

export const services = [
  {
    title: "Čištění a dezinfekce odvětrávacích šachet",
    body: "Mechanické odstranění nánosů a nečistot z odvětrávacích šachet včetně dezinfekce jako součásti standardní služby.",
    image: cisteni,
    icon: SprayCan,
    href: "/sluzby",
  },
  {
    title: "Kontrola kamerou",
    body: "Prověření stavu šachty před prací i po dokončení, aby byl výsledek doložitelný.",
    image: kamera,
    icon: Camera,
    href: "/sluzby",
  },
  {
    title: "Fotodokumentace a protokol",
    body: "Po práci předáváme přehledný výstup pro výbor, správce nebo technickou evidenci domu.",
    image: sachta,
    icon: FileText,
    href: "/pro-svj",
  },
  {
    title: "Doporučení další údržby",
    body: "Po kontrole nebo čištění navrhneme další postup podle skutečného stavu šachet.",
    image: domecek,
    icon: ClipboardCheck,
    href: "/kontakt",
  },
];

export const serviceHighlights = [
  {
    title: "Čištění a dezinfekce odvětrávacích šachet",
    body: "Hlavní služba pro panelové a bytové domy, SVJ, bytová družstva a správce nemovitostí. Dezinfekce je součástí standardního čištění.",
    image: cisteni,
  },
  {
    title: "Kontrola kamerou",
    body: "Stav šachty ověřujeme podle rozsahu zakázky i kamerou, aby byl výsledek jasně doložitelný.",
    image: kamera,
  },
  {
    title: "Fotodokumentace a protokol",
    body: "Po práci předáváme přehledný výstup pro výbor, správce nebo technickou evidenci domu.",
    image: sachta,
  },
  {
    title: "Doporučení další údržby",
    body: "Po kontrole nebo čištění navrhneme další postup podle skutečného stavu šachet.",
    image: domecek,
  },
];

export const processSteps = [
  {
    title: "Bezplatná kontrola a úvodní posouzení",
    body: "Domluvíme si termín, podíváme se na typ objektu a zhodnotíme, co bude potřeba řešit.",
    icon: Search,
  },
  {
    title: "Návrh postupu a orientační nacenění",
    body: "Vysvětlíme vám rozsah prací, způsob provedení a co ovlivňuje cenu.",
    icon: ClipboardCheck,
  },
  {
    title: "Čištění bez vstupu do bytů",
    body: "Práce probíhá ze střechy nebo ze společných prostor, aby byl zásah do běžného provozu domu co nejmenší.",
    icon: SprayCan,
  },
  {
    title: "Předání dokumentace",
    body: "Po dokončení dostanete fotodokumentaci, protokol a doporučení další údržby.",
    icon: FileText,
  },
];

export const proofItems = [
  "fotodokumentace po dokončení",
  "protokol o provedených pracích",
  "doporučení další údržby",
  "srozumitelný výstup pro výbor nebo správce",
];

export const whyItems = [
  {
    title: "Specializace na bytové domy",
    body: "Nejsme obecný HVAC katalog. Zaměřujeme se na panelové a bytové domy a tomu přizpůsobujeme celý postup.",
    icon: Home,
  },
  {
    title: "Bez vstupu do bytů",
    body: "Ve většině případů pracujeme ze střechy nebo ze společných prostor, takže obyvatele domu zatěžujeme co nejméně.",
    icon: ShieldCheck,
  },
  {
    title: "Místní firma z Hodonína",
    body: "Lepší dostupnost, rychlejší domluva a znalost typických objektů v regionu.",
    icon: MapPin,
  },
  {
    title: "Jasný postup od začátku do konce",
    body: "Každá zakázka má srozumitelný průběh — víte, co se bude dít, jak a proč, a co dostanete po dokončení.",
    icon: FileText,
  },
];

export const homeFaq = [
  {
    question: "Jak probíhá čištění šachet?",
    answer:
      "Nejprve provedeme kontrolu stavu, navrhneme postup a po odsouhlasení zakázky provedeme čištění. Práce probíhá tak, aby byl zásah do provozu domu co nejmenší. Po dokončení předáváme dokumentaci a doporučení další údržby.",
  },
  {
    question: "Musíte vstupovat do bytů?",
    answer:
      "Ve většině případů ne. Pracujeme ze střechy nebo ze společných prostor, takže není nutné organizovat vstupy do jednotlivých bytů.",
  },
  {
    question: "Co dostaneme po dokončení?",
    answer:
      "Fotodokumentaci, protokol o provedených pracích a doporučení další údržby podle rozsahu zakázky a skutečného stavu šachet.",
  },
  {
    question: "Pro koho je služba určena?",
    answer:
      "Nejčastěji pro SVJ, bytová družstva a správce nemovitostí, kteří řeší bytové nebo panelové domy s centrálním odvětráním.",
  },
  {
    question: "Co ovlivňuje cenu?",
    answer:
      "Cenu ovlivňuje hlavně počet šachet, velikost a výška objektu, míra zanesení a rozsah požadované dokumentace. Přesnou cenu potvrdíme po úvodním posouzení konkrétního domu.",
  },
];

export const testimonials = [
  {
    quote:
      "Nechali jsme si vyčistit odvětrávací šachty včetně dezinfekce a byli jsme spokojeni. Vše proběhlo rychle, bez problémů a podle domluvy. Určitě můžeme doporučit",
    author: "Vlastimil Bartaušic",
    role: "Předseda SVJ sídl. Dukelských hrdinů 22,23, Břeclav",
  },
  {
    quote:
      "Zdravím pane Tučku i Vašeho kolegu, chtěla bych Vám poděkovat touto cestou za Vaši profesionální a perfektně odvedenou práci v našem bytovém domě, kde jste provedli dezinfekci a odmaštění větracích šachet a tím jste také přispěli ke zkvalitnění bydlení uživatelům jednotlivých bytů. Věřím, že se postupně přidají i další bytové domy a využijí Vašich kvalitních a hlavně potřebných služeb.",
    author: "Marie Tomková",
    role: "Předseda SVJ Slovácká 2710/2, Břeclav",
  },
  {
    quote:
      "Jde vidět, že čištění moc pomohlo a šachty jsou v daleko lepším stavu než před čištěním. Určitě Vaši firmu doporučím dalším předsedům! Moc děkuji za výborně odvedenou práci a perfektní jednání! Videa jsou super dokumentace.",
    author: "Petr Jahoda",
    role: "Předseda SVJ Pražská 8, Znojmo",
  },
];

export const towns = [
  "Hodonín",
  "Kyjov",
  "Veselí nad Moravou",
  "Strážnice",
  "Rohatec",
  "Dubňany",
  "Bzenec",
];

export const pageImages = {
  hero: final,
  service: cisteni,
  camera: kamera,
  documentation: sachta,
  roof: domecek,
};
