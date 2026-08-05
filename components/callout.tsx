import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  info: {
    icon: Info,
    wrap: "border-sky-500/30 bg-sky-500/5",
    accent: "text-sky-600 dark:text-sky-400",
  },
  warn: {
    icon: AlertTriangle,
    wrap: "border-amber-500/30 bg-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
  },
  success: {
    icon: CheckCircle2,
    wrap: "border-emerald-500/30 bg-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  danger: {
    icon: XCircle,
    wrap: "border-red-500/30 bg-red-500/5",
    accent: "text-red-600 dark:text-red-400",
  },
} as const;

export type CalloutType = keyof typeof variants;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, wrap, accent } = variants[type];

  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", wrap)}>
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", accent)} aria-hidden />
      <div className="min-w-0 flex-1 text-sm leading-relaxed [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {title ? (
          <p className={cn("mb-1 font-semibold", accent)}>{title}</p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
