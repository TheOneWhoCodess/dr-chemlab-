import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { resourceGroups } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Useful Resources",
};

export default function UsefulResourcesPage() {
  return (
    <>
      <PageHero
  eyebrow="Reference Library"
  title="Useful Resources"
  description="Curated pharmacopoeia, database, patent search, and industry association links for our research partners."
  height="h-[340px]"
  image="/resources.png"
/>

      <section className="py-section-gap container-page">
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2">
          {resourceGroups.map((group) => (
            <div
              key={group.title}
              className="border border-outline-variant bg-lab-white p-7 clinical-shadow"
            >
              <h2 className="text-title-lg mb-5 text-deep-navy">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-body-md group flex items-start gap-2 text-on-surface-variant transition-colors hover:text-action-orange"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[16px] text-slate-blue transition-colors group-hover:text-action-orange">
                        link
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
