import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { fragranceTotal } from "@/lib/fragrances";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function OurServicesPage() {
  return (
    <>
     <PageHero
  eyebrow="Precision-Driven Research"
  title="Clinical Precision In Every Analysis"
  description="Providing diverse product portfolios and custom synthesis solutions for global research and pharmaceutical standards."
  height="h-[50vh] min-h-[400px]"
  image="/about-us.png"
/>
      {/* Core competencies bento */}
      <section className="py-section-gap container-page">
        <div className="mb-16 text-center">
          <h2 className="text-headline-lg mb-4 text-deep-navy">
            Our Core Competencies
          </h2>
          <div className="mx-auto h-1 w-20 bg-action-orange" />
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {/* Specialty Chemicals Supply */}
          <div className="group relative overflow-hidden border border-outline-variant text-lab-white clinical-shadow transition-all hover:border-slate-blue md:col-span-8">
            <Image
              src="/speciality-chemicals.png"
              alt=""
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/80 to-deep-navy/40" />
            <div className="relative flex h-full flex-col justify-between gap-8 p-10">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-action-orange">
                    inventory_2
                  </span>
                  <h3 className="text-headline-md">
                    Specialty Chemicals Supply
                  </h3>
                </div>
                <p className="text-body-md mb-6 max-w-lg text-surface-container-highest/90">
                  Our Chemical Business Unit manages the import, export, and
                  tripartite trade of high-value-added chemicals. We
                  specialize in USP, EP, IP, and JP pharmacopeial standards
                  to ensure global compliance.
                </p>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    "Pharmacopeial Impurities",
                    "Reference Standards",
                    "Process Impurities",
                    "High-Value Compounds",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-label-md flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-action-orange">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/service/specialty-chemicals-supply"
                className="text-label-md inline-flex items-center gap-2 font-bold text-action-orange transition-transform group-hover:translate-x-2"
              >
                LEARN MORE
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Custom Synthesis */}
          <div className="group relative flex flex-col justify-between overflow-hidden text-lab-white clinical-shadow md:col-span-4">
            <Image
              src="/custom-synthesis.png"
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative flex h-full flex-col justify-between p-10">
              <div>
                <span className="material-symbols-outlined mb-6 text-4xl text-action-orange">
                  biotech
                </span>
                <h3 className="text-headline-md mb-4">
                  Custom Synthesis Capabilities
                </h3>
                <p className="text-body-md mb-6 opacity-80">
                  Expert R&amp;D teams with hands-on experience in complex
                  chemical processes and troubleshooting scaling activities
                  for specific research needs.
                </p>
              </div>
              <Link
                href="/service/custom-capabilities"
                className="text-label-md w-full border border-white/30 py-4 text-center transition-all hover:bg-lab-white hover:text-primary"
              >
                View Capabilities
              </Link>
            </div>
          </div>

          {/* Material Characterization */}
          <div className="group relative overflow-hidden border border-outline-variant clinical-shadow md:col-span-6">
            <div className="relative h-40 overflow-hidden">
              <Image
                src="/material.png"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-surface-container p-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-slate-blue">
                search_check
              </span>
              <h3 className="text-headline-md mb-4 text-deep-navy">
                Material Characterization
              </h3>
              <p className="text-body-md mb-6 text-on-surface-variant">
                Understanding physical structures and chemical compositions
                through a diverse breadth of analytical techniques.
              </p>
              <div className="space-y-4">
                <div className="h-1 w-full overflow-hidden bg-outline-variant">
                  <div className="h-full w-[90%] bg-slate-blue" />
                </div>
                <span className="text-label-sm text-on-surface-variant">
                  90% ACCURACY RATING
                </span>
              </div>
            </div>
          </div>

          {/* Analytical testing teaser card - paired with Material Characterization */}
          <Link
            href="/service/material-characterization"
            className="group flex flex-col justify-center border border-outline-variant bg-surface-container-low p-8 clinical-shadow transition-colors hover:bg-surface-bright md:col-span-6"
          >
            <span className="material-symbols-outlined mb-4 text-3xl text-slate-blue">
              science
            </span>
            <h4 className="text-title-lg mb-2 text-deep-navy">
              Analytical Testing Parameters
            </h4>
            <p className="text-body-md mb-4 text-on-surface-variant">
              Turnaround times, methodology, and compliance standards for
              our core testing services.
            </p>
            <span className="text-label-md inline-flex items-center gap-1 font-bold text-slate-blue transition-transform group-hover:translate-x-2">
              Learn more
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </span>
          </Link>

          {/* Consultation - full width */}
          <div className="group relative overflow-hidden border border-outline-variant clinical-shadow md:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
              <div className="relative h-48 overflow-hidden sm:h-full">
                <Image
                  src="/consultation.png"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 280px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <Link
                href="/service/consultation"
                className="block bg-lab-white p-8 transition-colors hover:bg-surface-bright sm:p-10"
              >
                <span className="material-symbols-outlined mb-4 text-3xl text-action-orange">
                  school
                </span>
                <h4 className="text-title-lg mb-2 text-deep-navy">
                  Consultation
                </h4>
                <p className="text-body-md max-w-xl text-on-surface-variant">
                  Strategic support provided through partnerships with
                  leading government universities and industry veterans.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SciTech Fragrances */}
      <section className="container-page pb-section-gap">
        <Link
          href="/service/scitech-fragrances"
          className="group flex flex-col overflow-hidden border border-outline-variant bg-gradient-to-br from-primary to-slate-blue text-lab-white clinical-shadow transition-all hover:-translate-y-1 sm:flex-row"
        >
          <div className="flex-1 p-10 sm:p-12">
            <span className="text-label-sm mb-4 inline-block uppercase tracking-widest text-action-orange">
              New &middot; Product Catalogue
            </span>
            <h2 className="text-headline-lg mb-4">SciTech Fragrances</h2>
            <p className="text-body-lg mb-8 max-w-xl text-on-primary-container">
              {fragranceTotal}+ curated fragrances across candles, diffusers,
              air fresheners, incense, and soap &mdash; ready to source or
              customize for your product line.
            </p>
            <span className="text-label-md inline-flex items-center gap-2 font-bold text-action-orange transition-transform group-hover:translate-x-2">
              EXPLORE THE CATALOGUE
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
          <div className="flex flex-wrap content-center gap-3 border-t border-white/10 p-10 sm:w-80 sm:border-l sm:border-t-0 sm:p-12">
            {["local_fire_department", "air", "spa", "self_improvement", "soap"].map(
              (icon) => (
                <div
                  key={icon}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10"
                >
                  <span className="material-symbols-outlined text-2xl">
                    {icon}
                  </span>
                </div>
              )
            )}
          </div>
        </Link>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="container-page max-w-3xl text-center">
          <p className="eyebrow mb-3">Why Choose Our Services</p>
          <p className="text-headline-md leading-snug text-deep-navy">
            Dr Chem Lab provides a cost-effective &amp; innovative approach
            to help companies achieve success. We work closely with our
            clients for understanding their requirements and offer them
            time-bound solutions.
          </p>
        </div>
      </section>
    </>
  );
}