import { Card } from "@/components/ui/card";

const stats = [
  { value: "6", label: "curl commands sent" },
  { value: "7", label: "tests generated" },
  { value: "9", label: "MySQL mocks captured" },
  { value: "0", label: "lines of test code" },
] as const;

export function Stats() {
  return (
    <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <Card
          key={s.label}
          className="gap-1 rounded-lg border-l-2 border-l-brand p-4 transition-colors hover:bg-accent/40"
        >
          <span className="font-mono text-3xl leading-none font-semibold tabular-nums text-brand">
            {s.value}
          </span>
          <span className="text-xs leading-snug text-muted-foreground">
            {s.label}
          </span>
        </Card>
      ))}
    </div>
  );
}
