import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { fragranceCategories, fragranceTotal } from "@/lib/fragrances";

export const metadata: Metadata = {
  title: "SciTech Fragrances",
};

// Wider "feature" cards for the preview grid (mirrors the reference layout,
// where Incense and Candle get larger tiles than Soap/Air Freshener/Diffuser)
const featuredSlugs = new Set(["incense-fragrances", "candle-fragrances"]);

export default function ScitechFragrancesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[420px] items-center overflow-hidden">
        <Image
          src="/Scitech-fragrances.png"
          alt="SciTech Fragrances"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-deep-navy/70" />
        <div className="container-page relative z-10 w-full">
          <div className="max-w-xl text-lab-white">
            <span className="text-label-sm mb-4 inline-block rounded-sm bg-action-orange px-3 py-1 uppercase tracking-widest">
              Product Catalogue
            </span>
            <h1 className="text-display-lg mb-5 leading-tight">
              SciTech Fragrances:
              <br />
              The Art of Scent
            </h1>
            <p className="text-body-lg mb-8 text-surface-container-highest/90">
              Founded on the principle that fragrances are more than just
              scents, Dr Chem Lab embarked on a fragrant odyssey to source,
              create, and share exceptional aromas &mdash; with every
              scent crafted to evoke emotion, precision, and lasting
              impression.
            </p>
            <a href="#solutions" className="btn-primary">
              Explore Collection
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </div>
        </div>
      </section>

      {/* Specialized Fragrance Solutions */}
      <section id="solutions" className="py-section-gap container-page scroll-mt-24">
        <div className="mb-14 text-center">
          <h2 className="text-headline-lg mb-3 text-deep-navy">
            Specialized Fragrance Solutions
          </h2>
          <div className="mx-auto h-1 w-16 bg-action-orange" />
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {fragranceCategories.map((cat) => {
            const preview = cat.products.slice(0, 6);
            const remaining = cat.products.length - preview.length;
            const wide = featuredSlugs.has(cat.slug);

            return (
              <div
                key={cat.slug}
                className={`group overflow-hidden border border-outline-variant bg-lab-white clinical-shadow ${
                  wide ? "md:col-span-2" : ""
                }`}
              >
               <div
  className={`relative overflow-hidden ${
    wide ? "h-40" : "h-32"
  }`}
>
  <Image
    src={cat.image}
    alt={cat.title}
    fill
    sizes={wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

<div className={`p-6 ${wide ? "md:columns-2 md:gap-6" : ""}`}>
  <div className="mb-4 flex items-center gap-2.5 [column-span:all]">
    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-container-low text-slate-blue">
      <span className="material-symbols-outlined text-xl">
        {cat.icon}
      </span>
    </span>
    <h3 className="text-title-lg text-deep-navy">{cat.title}</h3>

                  </div>
                </div>

                <div className={`p-6 ${wide ? "md:columns-2 md:gap-6" : ""}`}>
                  <ul className="space-y-2.5">
                    {preview.map((product) => (
                      <li
                        key={product}
                        className="text-body-md flex items-center gap-2 text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-[16px] text-action-orange">
                          check
                        </span>
                        {product}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`#${cat.slug}`}
                    className="text-label-md mt-4 inline-flex items-center gap-1 text-action-orange"
                  >
                    View all {cat.products.length}
                    {remaining > 0 ? ` (+${remaining} more)` : ""}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clinical Formulation Standards CTA */}
      <section className="bg-primary text-lab-white">
        <div className="container-page grid grid-cols-1 gap-gutter py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Image
              src="/DrChemLab-4-Blue-font.png"
              alt="SciTech Products"
              width={56}
              height={53}
              className="mb-4 h-14 w-auto rounded bg-white/95 p-1"
            />
            <h2 className="text-headline-lg mb-4">
              Clinical Formulation Standards
            </h2>
            <p className="text-body-lg mb-8 max-w-md text-on-primary-container">
              Every fragrance in our SciTech collection undergoes rigorous
              analytical testing for purity, stability, and safety
              compliance. We ensure that sensory excellence meets clinical
              chemical precision.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-action-orange">
                  call
                </span>
                <span className="text-label-md">+91 72088 44324</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-action-orange">
                  verified
                </span>
                <span className="text-label-md">IFRA Compliant</span>
              </div>
            </div>
          </div>

          <form className="space-y-4 rounded-lg bg-lab-white p-8 text-on-surface clinical-shadow">
            <h3 className="text-title-lg mb-1 text-deep-navy">
              Request a Sample Pack
            </h3>
            <p className="text-body-md mb-4 text-on-surface-variant">
              Tell us your application and we&apos;ll send curated samples.
            </p>
            <input
              type="text"
              placeholder="Full Name"
              className="text-body-md w-full rounded border border-outline-variant p-3.5 focus:border-action-orange focus:outline-none focus:ring-1 focus:ring-action-orange"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="text-body-md w-full rounded border border-outline-variant p-3.5 focus:border-action-orange focus:outline-none focus:ring-1 focus:ring-action-orange"
            />
            <Link
              href="/contacts"
              className="btn-primary w-full !bg-action-orange"
            >
              Request Technical Data Sheet
            </Link>
          </form>
        </div>
      </section>

      {/* Full fragrance directory */}
      <section className="py-section-gap container-page">
        <div className="mb-16 text-center">
          <span className="eyebrow mb-3 block">{fragranceTotal}+ Fragrances</span>
          <h2 className="text-headline-lg text-deep-navy">
            Full Fragrance Directory
          </h2>
        </div>

        <div className="space-y-16">
          {fragranceCategories.map((cat, i) => (
            <div
              key={cat.slug}
              id={cat.slug}
              className="scroll-mt-28 border border-outline-variant bg-lab-white p-8 clinical-shadow sm:p-10"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-lg ${
                      i % 2 === 0
                        ? "bg-surface-container-low text-slate-blue"
                        : "bg-primary text-action-orange"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {cat.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-headline-md text-deep-navy">
                      {cat.title}
                    </h3>
                    <p className="text-label-md text-on-surface-variant">
                      {cat.products.length} fragrances available
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.products.map((product) => (
                  <span
                    key={product}
                    className="text-label-md rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-on-surface transition-colors hover:border-action-orange hover:text-action-orange"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="container-page text-center">
          <h2 className="text-headline-lg mb-6 text-deep-navy">
            Sourcing a Fragrance for Your Product Line?
          </h2>
          <p className="text-body-lg mx-auto mb-10 max-w-2xl text-on-surface-variant">
            Reach out with your application &mdash; candles, diffusers, soap,
            incense, or air care &mdash; and our team will help you source
            or customize the right scent profile.
          </p>
          <div className="mx-auto mb-10 flex max-w-2xl flex-col justify-center gap-4 text-body-md sm:flex-row sm:flex-wrap">
            <a
              href="tel:+917208844324"
              className="flex items-center justify-center gap-2 rounded-lg border border-action-orange bg-action-orange/5 px-6 py-3 font-semibold text-action-orange transition-colors hover:bg-action-orange hover:text-lab-white"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              +91 72088 44324
            </a>
            <a
              href="mailto:scitechfrag@drchemlab.com"
              className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-6 py-3 text-on-surface-variant transition-colors hover:border-action-orange hover:text-action-orange"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              scitechfrag@drchemlab.com
            </a>
            <a
              href="mailto:scitechproducts@drchemlab.com"
              className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-6 py-3 text-on-surface-variant transition-colors hover:border-action-orange hover:text-action-orange"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              scitechproducts@drchemlab.com
            </a>
          </div>
          <Link href="/contacts" className="btn-primary">
            Send an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}