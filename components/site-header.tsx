import { ExternalLink } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SAMPLE_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <span
          aria-hidden
          className="grid size-6 shrink-0 place-items-center rounded-md bg-brand font-mono text-sm font-bold text-primary-foreground"
        >
          K
        </span>
        <span className="font-mono text-sm font-semibold tracking-tight">
          keploy
          <span className="text-muted-foreground"> record → test</span>
        </span>
        <Badge
          variant="secondary"
          className="hidden border-brand/25 bg-brand/10 font-normal text-brand sm:inline-flex"
        >
          Go · Mux · MySQL
        </Badge>

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            render={<a href={SAMPLE_URL} target="_blank" rel="noreferrer" />}
          >
            Sample
            <ExternalLink />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
