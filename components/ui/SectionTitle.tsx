import { cn } from "@/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-lavender">{eyebrow}</p>
      ) : null}
      <h2 className="headline-display text-4xl leading-tight md:text-6xl">{title}</h2>
      {subtitle ? <p className="mt-6 max-w-3xl text-base text-muted md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
