import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-primary text-lab-white">
      <div className="container-page grid grid-cols-1 gap-gutter pb-10 pt-20 md:grid-cols-4">
        <div className="col-span-1 space-y-6">
          <Image
            src="/DrChemLab-4-Blue-font.png"
            alt="DrChemLab"
            width={160}
            height={46}
            className="h-9 w-auto brightness-0 invert sm:h-10"
          />
          <div className="flex items-center gap-2">
            <Image
              src="/scitech-logobg2.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />
            <span className="text-label-md font-semibold text-lab-white">
              SciTech Products
            </span>
          </div>
          <p className="text-body-md text-surface-container-highest/80">
            <span className="mr-1 inline-block rounded-full bg-hero-blue/15 px-2.5 py-0.5 font-semibold text-hero-blue">
              SciTech Products
            </span>
            (a Dr Chem Lab venture) is a technology-driven company based in Ambernath, Thane, Maharashtra, India.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/DrChemLab1"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-action-orange"
              aria-label="X (formerly Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="mailto:info@drchemlab.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-action-orange"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-title-lg font-heading text-action-orange">
            Useful Links
          </h4>
          <ul className="text-label-md space-y-4 text-surface-container-highest/80">
            <li>
              <Link href="/about-us" className="transition-colors hover:text-lab-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-services" className="transition-colors hover:text-lab-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="transition-colors hover:text-lab-white">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-title-lg font-heading text-action-orange">
            Our Services
          </h4>
          <ul className="text-label-md space-y-4 text-surface-container-highest/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/service/${s.slug}`}
                  className="transition-colors hover:text-lab-white"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-title-lg font-heading text-action-orange">
            Recent Post
          </h4>
          <div className="space-y-4">
            <Link href="/blog/material-characterization-blog" className="group block">
              <span className="text-label-sm mb-1 block text-outline-variant">
                October 14, 2020
              </span>
              <span className="text-label-md text-surface-container-highest/80 transition-colors group-hover:text-lab-white">
                MATERIAL CHARACTERIZATION – BLOG
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <p className="text-label-sm text-center text-outline-variant md:text-left">
            &copy; {new Date().getFullYear()} DrChemLab Scientific Research.
            All rights reserved. Clinical precision in every analysis.
          </p>
          <div className="text-label-sm flex gap-gutter text-outline-variant">
            <a
              href="https://twitter.com/DrChemLab1"
              target="_blank"
              rel="noreferrer"
              aria-label="X (formerly Twitter)"
              className="transition-colors hover:text-action-orange"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}