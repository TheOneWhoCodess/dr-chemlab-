import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  height = "h-[400px]",
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  height?: string;
  image?: string;
}) {
  return (
    <section className={`relative flex ${height} items-center overflow-hidden`}>
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-deep-navy/20" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-navy via-primary to-slate-blue" />
          <div className="absolute inset-0 z-0 bg-deep-navy/40" />
        </>
      )}
      <div className="container-page relative z-10 w-full">
        <div className="max-w-2xl text-lab-white">
          {eyebrow && (
            <span className="text-label-sm mb-4 inline-block uppercase tracking-widest text-action-orange">
              {eyebrow}
            </span>
          )}
          <h1 className="text-display-lg mb-6 leading-tight">{title}</h1>
          {description && (
            <p className="text-body-lg max-w-xl text-surface-container-highest/90">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}