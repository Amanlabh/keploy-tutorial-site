// The banner Keploy's CLI prints on startup, reproduced verbatim.
const BANNER = `       ▓██▓▄
    ▓▓▓▓██▓█▓▄
     ████████▓▒
          ▀▓▓███▄      ▄▄   ▄               ▌
         ▄▌▌▓▓████▄    ██ ▓█▀  ▄▌▀▄  ▓▓▌▄   ▓█  ▄▌▓▓▌▄ ▌▌   ▓
       ▓█████████▌▓▓   ██▓█▄  ▓█▄▓▓ ▐█▌  ██ ▓█  █▌  ██  █▌ █▓
      ▓▓▓▓▀▀▀▀▓▓▓▓▓▓▌  ██  █▓  ▓▌▄▄ ▐█▓▄▓█▀ █▓█ ▀█▄▄█▀   █▓█
       ▓▌                           ▐█▌                   █▌
        ▓                                         OPEN SOURCE`;

export function Hero() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </span>
        <span className="ml-1 font-mono text-xs text-muted-foreground">
          colima ssh — samples-go/mux-mysql
        </span>
      </div>

      <div className="overflow-x-auto p-5">
        <pre
          aria-label="Keploy open source ASCII logo"
          className="w-fit bg-gradient-to-br from-brand-amber via-brand to-brand bg-clip-text font-mono text-[clamp(5.5px,1.5vw,11px)] leading-[1.15] font-bold text-transparent"
        >
          {BANNER}
        </pre>

        <div className="mt-5 space-y-1 font-mono text-xs sm:text-[13px]">
          <p className="text-foreground">
            <span className="text-brand">$</span>{" "}
            <span className="text-muted-foreground">sudo -E env PATH=$PATH</span>{" "}
            keploy record -c &quot;./main&quot;
          </p>
          <p className="text-muted-foreground">
            🐰 Keploy agent is ready to record test cases and mocks.
          </p>
          <p className="text-brand-amber">
            🟠 Keploy has captured test cases for the user&apos;s application.
          </p>
        </div>
      </div>
    </div>
  );
}
