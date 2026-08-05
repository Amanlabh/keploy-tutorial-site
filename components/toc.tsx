"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Heading = { id: string; text: string };

/**
 * Builds itself from the rendered headings instead of a hand-kept list, so the
 * MDX stays the single source of truth.
 */
export function Toc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("main h2[id]"),
    );
    setHeadings(nodes.map((n) => ({ id: n.id, text: n.textContent ?? "" })));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      // Only count a heading once it reaches the upper third of the viewport.
      { rootMargin: "-80px 0px -66% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-semibold">On this page</p>
      <ul className="space-y-2.5 border-l">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "-ml-px block border-l pl-4 leading-snug transition-colors",
                activeId === h.id
                  ? "border-foreground font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
