import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import HeroSlider from "@/components/HeroSlider";

const strengths = [
  { label: "Material Characterization", value: 90 },
  { label: "Custom Synthesis", value: 80 },
  { label: "Specialty Chemical Supply", value: 70 },
];

const serviceIcons: Record<string, string> = {
  "specialty-chemicals-supply": "biotech",
  "custom-capabilities": "flip_camera_ios",
  "material-characterization": "search_check",
  consultation: "school",
  "regulatory-servicing": "verified",
};

const serviceAccents = [
  {
    border: "border-hero-blue/15 hover:border-hero-blue",
    blob: "bg-hero-blue/15",
    iconBg: "bg-hero-blue",
    text: "text-hero-blue",
  },
  {
    border: "border-action-orange/15 hover:border-action-orange",
    blob: "bg-action-orange/15",
    iconBg: "bg-action-orange",
    text: "text-action-orange",
  },
  {
    border: "border-slate-blue/15 hover:border-slate-blue",
    blob: "bg-slate-blue/15",
    iconBg: "bg-slate-blue",
    text: "text-slate-blue",
  },
  {
    border: "border-deep-navy/15 hover:border-deep-navy",
    blob: "bg-deep-navy/15",
    iconBg: "bg-deep-navy",
    text: "text-deep-navy",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />



      {/* Services teaser */}
      <section className="py-section-gap container-page">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-label-md mb-3 text-hero-blue">
            Reliable &amp; High-Quality Services
          </p>
          <h2 className="text-headline-lg text-deep-navy">
            For Custom Synthesis and Material Characterization
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, i) => {
            const accent = serviceAccents[i % serviceAccents.length];
            return (
              <div
                key={service.slug}
                className={`group relative flex aspect-square flex-col overflow-hidden rounded-2xl border-2 ${accent.border} bg-lab-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
              >
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${accent.blob} opacity-60 transition-transform duration-500 group-hover:scale-125`}
                />
                <span
                  className={`relative text-label-sm font-bold ${accent.text}`}
                >
                  0{i + 1}
                </span>
                <div
                  className={`relative mb-4 mt-3 flex h-14 w-14 items-center justify-center rounded-xl ${accent.iconBg} text-lab-white shadow-md`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {serviceIcons[service.slug]}
                  </span>
                </div>
                <h3 className="text-title-lg relative mb-2 text-deep-navy">
                  {service.title}
                </h3>
                <p className="text-body-md relative mb-4 line-clamp-4 flex-1 text-on-surface-variant">
                  {service.excerpt}
                </p>
                <Link
                  href={`/service/${service.slug}`}
                  className={`text-label-md relative inline-flex items-center gap-1 font-bold ${accent.text} transition-all group-hover:gap-2`}
                >
                  READ MORE
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our strength */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-label-md mb-3 text-hero-blue">Our Strength</p>
            <h2 className="text-headline-lg mb-6 text-deep-navy">
              An Ideal Contract Partner, End to End
            </h2>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              We are an ideal contract partner for material
              characterization, custom synthesis, and specialty chemical
              supply. We have all the expertise required for developing a
              process that is robust, transferable, and scalable to meet
              your requirements.
            </p>

            <div className="space-y-6">
              {strengths.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-title-lg text-deep-navy">
                    <span>{item.label}</span>
                    <span className="text-hero-blue">{item.value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-outline-variant">
                    <div
                      className="progress-bar-fill h-full rounded-full bg-hero-blue"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-outline-variant bg-lab-white p-10 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-action-orange/10 text-action-orange">
              <span className="material-symbols-outlined text-3xl">
                search_check
              </span>
            </div>
            <p className="text-label-md mb-2 text-hero-blue">
              Material Characterization and Analytical Testing
            </p>
            <p className="text-body-md mb-7 text-on-surface-variant">
              When it comes to understanding the physical structure,
              chemical properties and composition of materials, our company
              offers the breadth of experience, diversity of analytical
              techniques.
            </p>
            <Link
              href="/service/material-characterization"
              className="inline-flex items-center gap-2 rounded-lg bg-hero-blue px-6 py-3 text-label-md font-semibold text-lab-white transition-colors hover:bg-deep-navy"
            >
              Learn More
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>



{/* SciTech Products banner */}
<section className="relative flex h-[560px] items-end overflow-hidden sm:h-[640px]">
  <Image
    src="/about-us.png"
    alt="SciTech Products team"
    fill
    sizes="100vw"
    className="object-cover"
  />
  <div className="relative z-10 w-full max-w-xl bg-deep-navy p-10 text-lab-white sm:p-12">
    <Image
      src="/scitech-logobg2.png"
      alt="SciTech Products"
      width={56}
      height={53}
      className="mb-5 h-14 w-auto rounded p-1"
    />
    <h2 className="text-headline-lg mb-5 uppercase leading-tight">
      SciTech Products
    </h2>
    <p className="text-body-lg mb-8 text-surface-container-highest/90">
      An Ambernath, Thane (Maharashtra) based research firm behind
      DrChemLab &mdash; supplying specialty chemicals, custom
      synthesis, and a full line of SciTech Fragrances, all backed by
      quality precision in every analysis.
    </p>
    <div className="flex flex-wrap gap-6">
      <Link
        href="/about-us"
        className="text-label-md font-bold uppercase tracking-wide underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        About SciTech Products
      </Link>
      <Link
        href="/service/scitech-fragrances"
        className="text-label-md font-bold uppercase tracking-wide underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        Fragrance Catalogue
      </Link>
    </div>
  </div>
</section>


      {/* Latest news */}
      <section className="py-section-gap container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-label-md mb-3 text-hero-blue">Updates</p>
            <h2 className="text-headline-lg text-deep-navy">
              News &amp; Blogs
            </h2>
          </div>
          <Link
            href="/blog/material-characterization-blog"
            className="text-label-md font-semibold text-hero-blue"
          >
            View All Posts &rarr;
          </Link>
        </div>

        <article className="grid grid-cols-1 gap-8 rounded-lg border border-outline-variant bg-lab-white p-8 sm:grid-cols-[220px_1fr] sm:p-10">
          <div className="relative aspect-video overflow-hidden rounded-lg sm:aspect-square">
            <Image
              src="/custom-synthesis.png"
              alt="Material Characterization"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-label-sm mb-3 text-on-surface-variant">
              Oct 14, 2020 &middot; Analytical Testing
            </p>
            <h3 className="text-title-lg mb-3 text-deep-navy">
              <Link
                href="/blog/material-characterization-blog"
                className="hover:text-hero-blue"
              >
                Material Characterization &ndash; Blog
              </Link>
            </h3>
            <p className="text-body-md mb-5 text-on-surface-variant">
              Understanding physical structure and chemical properties
              requires breadth of experience and diversity in analytical
              techniques.
            </p>
            <Link
              href="/blog/material-characterization-blog"
              className="text-label-md font-semibold text-action-orange"
            >
              Read Full Article &rarr;
            </Link>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="border-y border-outline-variant bg-hero-blue/5 py-section-gap">
        <div className="container-page text-center">
          <h2 className="text-headline-lg mb-6 text-deep-navy">
            Ready to Advance Your Research?
          </h2>
          <p className="text-body-lg mx-auto mb-10 max-w-2xl text-on-surface-variant">
            Consult with our team of industry veterans and dynamic chemists
            to solve your most complex analytical challenges.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contacts" className="btn-primary">
              Get a Custom Quote
            </Link>
            <Link
              href="/contacts"
              className="rounded-lg border border-hero-blue px-10 py-4 text-title-lg text-hero-blue transition-all hover:bg-hero-blue hover:text-lab-white"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}