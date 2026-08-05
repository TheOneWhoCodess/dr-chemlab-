"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/Hero1.png",
    highlight: "Science",
    prefix: "Advances Of",
    suffix: "Make Easier Life",
    paragraph: "",
  },
  {
    image: "/a2.jpg",
    highlight: "Science",
    prefix: "Advances Of",
    suffix: "Make Easier Life",
    paragraph:
      "Dr Chem Lab is a fast-emerging company in the field of Organic/Analytical chemistry and allied services. We are a research-based organisation providing a diverse product portfolio including Speciality Chemicals, reference standards, and custom synthesis.",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden bg-lab-white sm:h-[640px]">
      {/* Slide images (crossfade) */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Diagonal blue color-block panel */}
      <div
        className="absolute inset-y-0 left-0 z-10 w-[62%] bg-hero-blue sm:w-[48%]"
        style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-y-0 left-0 z-10 w-[62%] bg-hero-blue/90 sm:w-[48%]"
        style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }}
      />

      {/* Text content */}
      <div className="container-page relative z-20 flex h-full items-center">
        <div className="max-w-lg">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={`transition-all duration-700 ease-out ${
                i === active
                  ? "relative opacity-100 translate-x-0"
                  : "absolute opacity-0 -translate-x-6 pointer-events-none"
              }`}
            >
              <h1 className="text-display-lg mb-6 uppercase leading-tight text-deep-navy">
                {slide.prefix}{" "}
                <span className="hero-highlight px-2 text-lab-white">
                  {slide.highlight}
                </span>
                {slide.suffix ? (
                  <>
                    <br />
                    {slide.suffix}
                  </>
                ) : null}
              </h1>
              {slide.paragraph && (
                <p className="text-body-lg mb-8 text-on-surface-variant">
                  {slide.paragraph}
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <Link href="/our-services" className="btn-primary">
                  Explore Services
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot pagination */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:left-auto sm:right-10 sm:translate-x-0">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-action-orange" : "w-2.5 bg-lab-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}