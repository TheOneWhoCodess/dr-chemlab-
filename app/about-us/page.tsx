import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
};

const expertise = [
  { label: "Custom Synthesis", value: 90 },
  { label: "Analytical Testing & Characterization", value: 85 },
  { label: "KSM & Pharmaceutical Intermediates", value: 80 },
  { label: "Specialty Chemical Sourcing & Supply", value: 90 },
  { label: "Fragrance Development & Replication", value: 75 },
];

const values = [
  {
    icon: "verified",
    title: "Quality",
    body: "Every product and service is delivered to meet both national and international quality standards, with technical excellence at the core of every project.",
  },
  {
    icon: "handshake",
    title: "Integrity",
    body: "We operate with transparency and honesty in every partnership, building long-term trust with researchers, manufacturers, and industrial partners.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    body: "We support the scientific community with reliable, cost-effective, and scientifically driven solutions that accelerate research and reduce development timelines.",
  },
  {
    icon: "diversity_3",
    title: "Customer Satisfaction",
    body: "We work closely with every customer to understand their unique technical requirements and deliver practical, economically viable solutions that create lasting value.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="SciTech Products — A Dr Chem Lab Venture"
        description="A technology-driven company based in Ambernath, Thane, Maharashtra, India, dedicated to providing high-quality scientific products and specialized research services to the pharmaceutical, biotechnology, chemical, fragrance, and life sciences industries."
        height="h-[600px]"
        image="/about-us2.png"
      />

      {/* Bento grid */}
      <section className="py-section-gap container-page">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="flex flex-col justify-center border border-outline-variant bg-lab-white p-10 clinical-shadow md:col-span-8">
            <h2 className="text-headline-lg mb-6 text-deep-navy">
              Our Core Expertise
            </h2>
            <p className="text-body-lg mb-6 leading-relaxed text-on-surface-variant">
              Our core expertise includes custom synthesis, analytical
              testing and characterization, Key Starting Material (KSM) and
              pharmaceutical intermediate development, specialty chemical
              sourcing and supply, and fragrance development and replication
              for a wide range of industrial and commercial applications.
            </p>
            <p className="text-body-md text-on-surface-variant">
              With a strong focus on quality, consistency, and regulatory
              compliance, we strive to deliver products and services that
              meet the evolving needs of research laboratories,
              manufacturers, and industrial partners — supported by reliable,
              cost-effective, and scientifically driven solutions built to
              national and international quality standards.
            </p>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded md:col-span-4 md:h-[400px]">
            <Image
              src="/custom-synthesis.png"
              alt="Custom synthesis at SciTech Products"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between bg-primary p-8 text-lab-white md:col-span-4">
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-action-orange">
                groups
              </span>
              <h3 className="text-headline-md mb-4">Our Team</h3>
              <p className="text-body-md text-tertiary-fixed/80">
                Our multidisciplinary team comprises experienced scientists,
                chemists, analytical experts, and industry professionals with
                extensive knowledge in research, product development,
                quality assurance, and process optimization.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-label-sm uppercase tracking-widest text-action-orange/80">
                Research Driven
              </span>
            </div>
          </div>

          <div className="border border-outline-variant bg-surface-container-low p-8 md:col-span-8">
            <h3 className="text-title-lg mb-8 text-deep-navy">
              Our Core Expertise, In Focus
            </h3>
            <div className="space-y-6">
              {expertise.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between">
                    <span className="text-label-md text-on-surface">
                      {item.label}
                    </span>
                    <span className="text-label-md text-action-orange">
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-outline-variant">
                    <div
                      className="progress-bar-fill h-full bg-action-orange"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-section-gap bg-lab-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="eyebrow">Our Mission</span>
            <h2 className="text-headline-lg text-deep-navy">
              Empowering the Scientific Community
            </h2>
            <p className="text-body-lg leading-relaxed text-on-surface-variant">
              At SciTech Products, our mission is to empower the scientific
              community by providing comprehensive technical support
              throughout every stage of the product life cycle — from
              early-stage research and process development to analytical
              validation, scale-up, and commercial supply.
            </p>
            <p className="text-body-md text-on-surface-variant">
              By partnering with researchers, startups, academic
              institutions, and pharmaceutical organizations, we aim to
              accelerate innovation, reduce development timelines, and
              contribute to the advancement of life sciences for the benefit
              of society.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-section-gap bg-primary">
        <div className="container-page text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-headline-lg mb-8 italic text-lab-white">
              &ldquo;Delivering Quality Products and Scientific Services at
              Competitive Prices.&rdquo;
            </h2>
            <p className="text-body-md mb-8 text-on-primary-container">
              This philosophy reflects our commitment to providing
              exceptional value without compromising on quality, enabling our
              customers to achieve their research and business objectives
              with confidence.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-action-orange" />
              <span className="text-label-md uppercase tracking-widest text-on-primary-container">
                The SciTech Products Philosophy
              </span>
              <div className="h-px w-12 bg-action-orange" />
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-section-gap container-page">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="text-headline-lg mb-4 text-deep-navy">
              Our Values &amp; Commitment
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Quality, integrity, innovation, and customer satisfaction are
              the cornerstones of our organization. Every project we
              undertake is executed with a commitment to technical
              excellence, transparency, and continuous improvement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group border border-outline-variant bg-lab-white p-8 transition-colors hover:border-action-orange"
            >
              <span className="material-symbols-outlined mb-6 block text-4xl text-slate-blue transition-colors group-hover:text-action-orange">
                {value.icon}
              </span>
              <h4 className="text-title-lg mb-4 text-deep-navy">
                {value.title}
              </h4>
              <p className="text-body-md text-on-surface-variant">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}