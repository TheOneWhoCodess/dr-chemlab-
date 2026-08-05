"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/services";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-outline-variant bg-lab-white">
      <nav className="container-page flex h-20 w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/DrChemLab-4-Blue-font.png"
            alt="DrChemLab"
            width={160}
            height={46}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`text-label-md px-4 py-2 transition-colors ${
                    isActive(link.href)
                      ? "border-b-2 border-action-orange text-action-orange"
                      : "text-on-surface-variant hover:text-slate-blue"
                  }`}
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-1 rounded-lg border border-outline-variant bg-lab-white p-2 opacity-0 clinical-shadow transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-label-md block rounded-md px-4 py-2.5 text-on-surface transition-colors hover:bg-surface-container-low hover:text-action-orange"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-md px-4 py-2 transition-colors ${
                  isActive(link.href)
                    ? "border-b-2 border-action-orange text-action-orange"
                    : "text-on-surface-variant hover:text-slate-blue"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contacts" className="btn-primary !px-6 !py-2 hidden sm:inline-flex">
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-deep-navy">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-outline-variant bg-lab-white lg:hidden">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="text-label-md flex w-full items-center justify-between py-3 font-semibold text-on-surface"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[18px]">
                      {mobileServicesOpen ? "remove" : "add"}
                    </span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col pb-2 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-label-md py-2 text-on-surface-variant"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-md border-b border-outline-variant py-3 font-semibold text-on-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contacts"
              className="btn-primary mt-4 justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}