import { ExternalLink } from "lucide-react";

import { KeployLogo } from "@/components/keploy-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SAMPLE_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <KeployLogo className="h-6 w-auto shrink-0" />
        <span className="hidden font-mono text-sm text-muted-foreground sm:inline">
          record → test
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
