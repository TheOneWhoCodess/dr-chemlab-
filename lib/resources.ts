export interface ResourceGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Pharmacopoeia",
    links: [
      { label: "The US Pharmacopoeia (USP)", href: "http://www.usp.org/" },
      {
        label: "The British Pharmacopoeia (BP)",
        href: "https://www.pharmacopoeia.com/",
      },
      {
        label: "The European Pharmacopoeia (Ph.Eur.)",
        href: "https://www.edqm.eu/",
      },
      {
        label: "The Japanese Pharmacopoeia (JP)",
        href: "http://jpdb.nihs.go.jp/jp14e/",
      },
      {
        label: "The International Pharmacopoeia (IP)",
        href: "http://www.who.int/medicines/publications/pharmacopoeia/en/",
      },
      {
        label: "Indian Pharmacopoeia Commission (IPC)",
        href: "http://www.ipc.gov.in/",
      },
    ],
  },
  {
    title: "Database",
    links: [
      { label: "SciFinder", href: "https://scifinder.cas.org/" },
      {
        label: "ChemSpider SyntheticPages",
        href: "http://cssp.chemspider.com/",
      },
      { label: "Organic Syntheses", href: "http://www.orgsyn.org/" },
    ],
  },
  {
    title: "Patent Search",
    links: [
      {
        label: "The United States Patent and Trademark Office (USPTO)",
        href: "https://www.uspto.gov/",
      },
      { label: "European Patent Office (EPO)", href: "https://www.epo.org/" },
    ],
  },
  {
    title: "Society/ Associations/Organizations",
    links: [
      { label: "American Chemical Society", href: "http://www.acs.org/" },
      {
        label: "Drug, Chemical and Allied Trade Association",
        href: "https://dcat.org/",
      },
      {
        label: "National Association of Chemical Distributors",
        href: "https://www.nacd.com/",
      },
      {
        label: "Synthetic Organic Chemical Manufacturers Association",
        href: "http://www.socma.com/",
      },
      { label: "The US Food and Drug Administration (FDA)", href: "https://www.fda.gov/" },
      {
        label: "The US FDA Center for Drug Evaluation and Research",
        href: "http://www.fda.gov/cder/",
      },
      {
        label:
          "The US FDA Current Good Manufacturing Practice (CGMP) Regulations",
        href: "http://www.fda.gov/drugs/developmentapprovalprocess/manufacturing/ucm090016.htm",
      },
      {
        label: "The US Center for Disease Control and Prevention (CDC)",
        href: "http://www.cdc.gov/",
      },
      {
        label: "The US Department of Health & Human Services",
        href: "http://www.hhs.gov/",
      },
      {
        label: "The US National Institute of Health (NIH)",
        href: "http://www.nih.gov/",
      },
      {
        label: "The US National Library of Medicine (NLM)",
        href: "http://www.nlm.nih.gov/",
      },
      { label: "The World Health Organization (WHO)", href: "http://www.who.int/en/" },
      {
        label: "The Current Good Manufacturing Practices (cGMP)",
        href: "http://www.cgmp.com/",
      },
      { label: "The Merck Index", href: "http://www.merckbooks.com/mindex/" },
      {
        label: "The Martindale Health Science Guide",
        href: "http://www.martindalecenter.com/",
      },
      {
        label: "PharmWeb \u2013 Pharmaceutical Information on the Internet",
        href: "http://www.pharmweb.net/",
      },
      { label: "Royal Society of Chemistry (RSC)", href: "http://www.rsc.org/" },
    ],
  },
];