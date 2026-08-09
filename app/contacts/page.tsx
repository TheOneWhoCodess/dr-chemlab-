import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
};

const quickContacts = [
  {
    icon: "call",
    label: "Hotline",
    lines: ["+91 88281 36860"],
  },
  {
    icon: "chat",
    label: "SMS / WhatsApp",
    lines: ["+91 88281 36860"],
  },
  {
    icon: "mail",
    label: "Email",
    lines: [
      "info@drchemlab.com",
      "sales@drchemlab.com",
      "scitechproducts@drchemlab.com",
      "scitechfrag@drchemlab.com"
    ],
  },
];

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultInquiryType = type === "fragrance" ? "fragrance" : "general";

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Please choose from the options below to resolve your questions and contact us."
        height="h-[340px]"
        image="/contacts.png"
      />

      <section className="py-section-gap container-page">
        {/* Address - highlighted */}
        <div className="mx-auto mb-12 flex max-w-3xl items-start gap-4 border-l-4 border-action-orange bg-primary p-8">
          <Image
            src="/scitech-logobg2.png"
            alt="SciTech Products"
            width={48}
            height={45}
            className="mt-0.5 h-12 w-auto shrink-0"
          />
          <div>
            <span className="text-title-lg mb-1 block font-bold text-lab-white">
              SciTech Products
            </span>
            <address className="text-body-md not-italic leading-relaxed text-tertiary-fixed/80">
              H-209, K2 Premises CHS, Anand Nagar, Ambernath (Thane)
              <br />
              Additional MIDC Ambernath
              <br />
              Thane, Maharashtra, 421506, India
            </address>
          </div>
        </div>

        {/* Unified message card */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-lab-white shadow-xl lg:grid-cols-[1.3fr_1fr]">
          {/* Form panel */}
          <div className="p-8 sm:p-10">
            <h2 className="text-headline-md mb-2 text-deep-navy">
              Send Us a Message
            </h2>
            <p className="text-body-md mb-8 text-on-surface-variant">
              Do you have a question? A complaint? Or need any help to choose
              the right product from us? Feel free to contact us.
            </p>
            <ContactForm defaultInquiryType={defaultInquiryType} />
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between bg-primary p-8 text-lab-white sm:p-10 lg:m-4 lg:rounded-2xl">
            <div>
              <h3 className="text-title-lg mb-8 leading-snug">
                Hi! We Are Always Here To Help You.
              </h3>
              <div className="space-y-4">
                {quickContacts.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl bg-white/10 p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </span>
                    <div>
                      <p className="text-label-sm uppercase tracking-wide text-tertiary-fixed/80">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-body-md font-semibold">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-label-sm mb-4 uppercase tracking-widest text-tertiary-fixed/80">
                Connect With Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/DrChemLab1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-action-orange"
                  aria-label="Twitter"
                >
                  <span className="material-symbols-outlined text-lg">
                    alternate_email
                  </span>
                </a>
                <a
                  href="mailto:info@drchemlab.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-action-orange"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-lg">
                    mail
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}