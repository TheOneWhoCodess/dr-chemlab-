import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        height="h-[340px]"
        image="/about-us.png"
      />

      <section className="py-section-gap container-page grid grid-cols-1 gap-gutter lg:grid-cols-[2fr_1fr]">
        <article className="border border-outline-variant bg-lab-white p-8 clinical-shadow sm:p-10">
          {service.image ? (
            <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mb-8 aspect-[16/10] w-full rounded bg-gradient-to-br from-slate-blue to-deep-navy" />
          )}
          <h2 className="text-headline-md mb-5 text-deep-navy">{service.title}</h2>
          <div className="text-body-md space-y-4 text-on-surface-variant">
            {service.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {service.bullets && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((item) => (
                <li key={item} className="text-body-md flex items-start gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] text-slate-blue">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {service.bullets2 && (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets2.map((item) => (
                <li key={item} className="text-body-md flex items-start gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] text-slate-blue">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </article>

        <aside className="space-y-8">
          <div className="border border-outline-variant bg-lab-white p-6 clinical-shadow">
            <h3 className="text-label-md mb-4 uppercase tracking-wide text-deep-navy">Posts</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/service/${s.slug}`}
                    className={`text-body-md transition-colors ${
                      s.slug === service.slug ? "font-semibold text-action-orange" : "text-on-surface-variant hover:text-slate-blue"
                    }`}
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary p-6 text-lab-white">
            <h3 className="text-label-md mb-2 uppercase tracking-wide text-action-orange">Contact us for help?</h3>
            <p className="text-body-md mb-5 text-tertiary-fixed/80">
              Contact with us through our representative or submit a business inquiry online.
            </p>
            <Link href="/contacts" className="btn-primary w-full">Contact Us</Link>
          </div>
        </aside>
      </section>
    </>
  );
}