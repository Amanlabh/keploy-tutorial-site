import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

import { Callout } from "@/components/callout";
import { Stats } from "@/components/stats";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type El<T extends keyof HTMLElementTagNameMap> = ComponentPropsWithoutRef<T>;

const components: MDXComponents = {
  h1: (props: El<"h1">) => (
    <h1
      className="mt-2 mb-6 scroll-mt-24 text-4xl font-bold tracking-tight text-balance sm:text-5xl"
      {...props}
    />
  ),
  h2: (props: El<"h2">) => (
    <h2
      className="mt-14 mb-4 scroll-mt-24 border-b pb-2 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props: El<"h3">) => (
    <h3
      className="mt-10 mb-3 scroll-mt-24 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props: El<"h4">) => (
    <h4 className="mt-8 mb-2 scroll-mt-24 text-base font-semibold" {...props} />
  ),
  p: (props: El<"p">) => (
    <p className="my-4 leading-7 text-foreground/90" {...props} />
  ),
  ul: (props: El<"ul">) => (
    <ul className="my-4 ml-6 list-disc space-y-2 marker:text-muted-foreground" {...props} />
  ),
  ol: (props: El<"ol">) => (
    <ol
      className="my-4 ml-6 list-decimal space-y-2 marker:text-muted-foreground"
      {...props}
    />
  ),
  li: (props: El<"li">) => <li className="leading-7 pl-1.5" {...props} />,
  a: (props: El<"a">) => (
    <a
      className="font-medium underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props: El<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: El<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-border py-1 pl-5 text-muted-foreground italic [&_strong]:text-foreground [&_strong]:not-italic"
      {...props}
    />
  ),
  hr: () => <Separator className="my-12" />,

  // Inline code. Fenced blocks arrive already wrapped in <pre> by rehype-pretty-code.
  code: (props: El<"code">) => (
    <code
      className="rounded-md border bg-muted px-[0.4em] py-[0.2em] font-mono text-[0.85em] break-words"
      {...props}
    />
  ),
  pre: ({ children, ...props }: El<"pre">) => (
    <div className="group relative my-6">
      {"data-language" in props && typeof props["data-language"] === "string" ? (
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 z-10 font-mono text-[10px] tracking-wide uppercase opacity-70"
        >
          {props["data-language"] as string}
        </Badge>
      ) : null}
      <pre
        className="overflow-x-auto rounded-lg border bg-muted/40 py-4 text-[13px] leading-relaxed [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[13px]"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),

  // Markdown tables render through shadcn's Table primitives.
  table: (props: El<"table">) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border">
      <Table {...props} />
    </div>
  ),
  thead: (props: El<"thead">) => <TableHeader {...props} />,
  tbody: (props: El<"tbody">) => <TableBody {...props} />,
  tr: (props: El<"tr">) => <TableRow {...props} />,
  th: (props: El<"th">) => (
    <TableHead className="font-semibold text-foreground" {...props} />
  ),
  td: (props: El<"td">) => <TableCell className="align-top" {...props} />,

  Callout,
  Badge,
  Stats,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
