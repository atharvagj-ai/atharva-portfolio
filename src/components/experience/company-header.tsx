import { experience } from "@/content/experience";

export function CompanyHeader() {
  const { publicis } = experience;
  return (
    <header className="mb-16 max-w-3xl sm:mb-20">
      <p className="mb-4 text-xs font-medium tracking-[0.18em] text-accent/80 uppercase">
        {publicis.eyebrow}
      </p>
      <h2 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
        {publicis.company}
      </h2>
      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-base text-muted">
        <span>{publicis.role}</span>
        <span aria-hidden="true" className="text-border">
          /
        </span>
        <span>{publicis.team}</span>
      </div>
    </header>
  );
}
