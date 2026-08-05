"use client";

import { Check, Copy } from "lucide-react";
import {
  Children,
  isValidElement,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";

type AnyProps = Record<string, unknown>;

/**
 * Wraps each fenced code block in a macOS-style window.
 *
 * rehype-pretty-code emits <figure>[<figcaption title>]<pre data-language>,
 * so the title bar is built from those and the figcaption itself is dropped.
 */
export function CodeWindow({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const nodes = Children.toArray(children).filter(isValidElement) as ReactElement<AnyProps>[];
  const caption = nodes.find(
    (n) => (n.props as AnyProps)["data-rehype-pretty-code-title"] !== undefined,
  );
  const pre = nodes.find((n) => (n.props as AnyProps)["data-language"] !== undefined);

  // Without an explicit title, name the block by what it is rather than by
  // its highlighter grammar — "output" reads better than "text".
  const fallbacks: Record<string, string> = {
    bash: "shell",
    text: "output",
    json: "response",
    http: "response",
    diff: "patch",
    yaml: "yaml",
  };
  const language = (pre?.props["data-language"] as string) ?? "code";
  const label =
    (caption?.props.children as ReactNode) ?? fallbacks[language] ?? language;

  async function copy() {
    const text = ref.current?.querySelector("pre")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard is unavailable outside a secure context — leave the icon alone.
    }
  }

  return (
    <div
      ref={ref}
      className="my-6 overflow-hidden rounded-xl border bg-card shadow-sm"
    >
      <div className="flex items-center gap-3 border-b bg-brand/[0.06] py-2.5 pr-2 pl-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-3 rounded-full bg-[#ec6a5f]" />
          <span className="size-3 rounded-full bg-[#f4bf50]" />
          <span className="size-3 rounded-full bg-[#61c454]" />
        </span>

        <span className="truncate font-mono text-xs text-muted-foreground">
          {label}
        </span>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="ml-auto shrink-0 text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="text-brand" /> : <Copy />}
        </Button>
      </div>

      {pre}
    </div>
  );
}
