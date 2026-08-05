export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  number: string;
  excerpt: string;
  image?: string;
  body: string[];
  bullets?: string[];
  bullets2?: string[];
}

export const services: Service[] = [
  {
    slug: "specialty-chemicals-supply",
    title: "Specialty Chemicals Supply",
    shortTitle: "Specialty Chemicals Supply",
    number: "01",
    excerpt:
      "Our Chemical Business Unit is involved in the import, export, and tripartite trade of high-value-added chemicals.",
    image: "/speciality-chemicals.png",
    body: [
      "Our Chemical Business Unit is involved in the import, export, and tripartite trade of high-value-added chemicals. The Unit imports various high-quality chemicals and other products for marketing to domestic manufacturers of chemical and pharmaceutical industries. The Unit has close cooperative ties with many major chemical suppliers mainly from North America, Europe, and Asia.",
    ],
  },
  {
    slug: "custom-capabilities",
    title: "Custom Synthesis Capabilities",
    shortTitle: "Custom Synthesis Capabilities",
    number: "02",
    excerpt: "We provide the service in custom synthesis.",
    image: "/custom-synthesis.png",
    body: [
      "Are you looking for a compound that is not commercially available? An impurity needed in your process? Are you looking for a small quantity of a standard used in pharmacological screening?",
      "We take up these projects and other compounds at the request of our clients, all under strict confidentiality.",
      "Each product is supported by full analytic documentation and MSDS. And if you need the compound and the preparation method, we are prepared to supply you with a reproducible, well-documented method.",
      "Our team consists of a small group of Ph.D. chemists with considerable academic and industrial experience in the synthesis of a wide range of organic compounds.",
      "The expertise of our highly experienced team allows us to offer a flexible custom synthesis service for organic compounds of all types. We can supply quantities ranging from grams to kilograms. We offer competitive prices and delivery times of products meeting your specifications. We can work with your proposed process, a literature process available, or we can develop a process ourselves, as appropriate.",
      "For more \u201copen-ended\u201d projects, we also offer a contract research service. If you have a need for exploratory, collaborative R&D synthesis, we can work with your team of chemists as collaborators or consultants to help you to achieve your goal.",
      "Building on expertise in organic chemistry and in the development of novel pharmaceuticals, we undertake the synthesis of known pharmacologically active agents and research chemicals.",
      "Our chemists have experience in a wide range of areas, including heterocycles, amino acids, steroids, water- and air-sensitive chemicals. Our staff\u2019s skill in scaling-up the reactions from milligram to kilogram quantities enables us to generate quantities suitable for in vitro research systems to larger pharmacological studies.",
    ],
    bullets: [
      "Chemical intermediaries",
      "Pharmaceuticals",
      "Catalysts and ligands",
      "Preparation of API impurities for use as reference compounds in subsequent analyses",
      "Replacement of labor- and cost-intensive extraction processes by novel synthetic procedures",
    ],
    bullets2: [
      "Chemical standards/solutions Lead-like or drug-like compounds",
      "Metabolite Standard",
      "Polymers",
      "Custom synthesis of reagents for R&D projects (e.g. from patents or publications)",
      "Custom synthesis of reference compounds (also first-time synthesis, with no available procedures)",
      "Supply of small quantities of exclusive highly pure specialty chemicals",
    ],
  },
  {
    slug: "material-characterization",
    title: "Material Characterization and Analytical Testing",
    shortTitle: "Material Characterization and Analytical Testing",
    number: "03",
    excerpt:
      "When it comes to understanding the physical structure, chemical properties and composition of materials, our company offers the breadth of experience, diversity of analytical techniques.",
    image: "/material.png",
    body: [
      "When it comes to understanding the physical structure, chemical properties and composition of materials, our company offers the breadth of experience, diversity of analytical techniques. We don\u2019t just perform testing; we drive commercial success\u2014through thoughtfully designed investigations, technically superior analyses and expert interpretation of data.",
    ],
    bullets: [
      "Spectroscopy: FTIR, NMR, Raman, UV-Vis",
      "Chromatography: GC, LC, GPC, IC",
      "Mass Spectrometry: LC/MS, GC/MS, Pyrolysis GC/MS, MALDI",
      "Thermal: DSC, DTA, TGA",
      "Elemental: ICP-OES",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    shortTitle: "Consultation",
    number: "04",
    excerpt: "We provide support with the help of government universities.",
    image: "/consultation.png",
    body: [
      "The pharmaceutical world is dominated by innovative ideas and new technology, but innovation alone cannot facilitate success. Innovators need a great start and support to further their ideas and explore newer and better avenues.",
      "Government Universities and the Central labs are the pool of unique knowledge and expertise that is essential for the success of any budding pharmaceutical entrepreneur or even well-established research-based pharmaceutical company. At SciTech, we are collaborating with universities and premium institutes in India and outside and creating a platform to connect institutional scientific knowledge base with Industry need. We are building up a database of research work going on in different universities and central labs and soon same will be available to industries for research collaboration. All these universities and central government institutes are full of conventional and advanced analytical instruments that are underutilized and at the same time majority of companies not able to afford the procurement of these instruments. We SciTech tied up with such institutes and supporting industry to provide analytical services along with the scientific report by our experts which meets compliance and regulatory requirements.",
    ],
    bullets: [
      "GMP services",
      "API and Formulation Development (Human and Veterinary)",
      "Setting up of Quality and Compliance systems",
      "Setting up API and Formulation R&D and Pilot plant",
      "Third-party vendor audits and vendor qualification",
      "DMF Filings",
      "Dossier preparation for global submission",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/our-services",
    children: [
      ...services.map((s) => ({
        label: s.shortTitle,
        href: `/service/${s.slug}`,
      })),
      { label: "SciTech Fragrances", href: "/service/scitech-fragrances" },
    ],
  },
  { label: "Useful Resources", href: "/useful-resources" },
  { label: "SciTech Product", href: "/service/scitech-fragrances" },
  { label: "Contact Us", href: "/contacts" },
];