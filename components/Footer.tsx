import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-primary text-lab-white">
      <div className="container-page grid grid-cols-1 gap-gutter pb-10 pt-20 md:grid-cols-4">
        <div className="col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/scitech-logobg2.png"
              alt="SciTech Products"
              width={40}
              height={38}
              className="h-10 w-auto rounded p-1"
            />
            <span className="text-title-lg font-heading text-lab-white">
              DrChemLab
            </span>
          </div>
          <p className="text-body-md text-surface-container-highest/80">
            <strong className="text-lab-white">SciTech Products</strong> is an
            Ambernath, Thane (Maharashtra) based Research firm. Clinical
            precision in every analysis for high-value research.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/DrChemLab1"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-action-orange"
              aria-label="Twitter"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
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
            <li>
              <Link
                href="/service/scitech-fragrances"
                className="transition-colors hover:text-lab-white"
              >
                SciTech Fragrances
              </Link>
            </li>
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
                MATERIAL CHARACTERIZATION &ndash; BLOG
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
            <a href="https://twitter.com/DrChemLab1" target="_blank" rel="noreferrer" className="transition-colors hover:text-action-orange">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}