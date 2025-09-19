export type Item = { title: string; image: string; creditUrl: string; blurb?: string };

const data: Item[] = [
  {
    title: "Lamassu — The Met (CC0)",
    image: "https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg",
    creditUrl: "https://www.metmuseum.org/art/collection/search/322610",
    blurb: "Protective winged bull from Neo-Assyrian palace gateways."
  },
  {
    title: "Jerwan Aqueduct — Wikimedia (CC BY-SA)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Jerwan_Aqueduct.jpg",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Jerwan_Aqueduct.jpg",
    blurb: "Early stone aqueduct near Nineveh attributed to Sennacherib."
  },
  {
    title: "Relief panel (Ashurnasirpal II) — The Met (CC0)",
    image: "https://images.metmuseum.org/CRDImages/an/original/DP375421.jpg",
    creditUrl: "https://www.metmuseum.org/art/collection/search/322613",
    blurb: "Palace relief from Kalhu (Nimrud), 9th century BCE."
  }
];

export default data;
