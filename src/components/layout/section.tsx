import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-20 sm:py-24 lg:py-28", className)} {...props} />;
}
