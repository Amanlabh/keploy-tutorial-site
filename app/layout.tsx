import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { Toc } from "@/components/toc";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing a Go API Without Writing Tests — a Keploy walkthrough",
  description:
    "Record real traffic from a Go (Mux + MySQL) service and replay it as tests with the database switched off. A hands-on Keploy quickstart, including the gotchas.",
  openGraph: {
    title: "Testing a Go API Without Writing Tests",
    description:
      "A hands-on Keploy walkthrough: record a Mux + MySQL service, then replay 7 tests with zero containers running.",
    type: "article",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />

          <div className="mx-auto flex w-full max-w-6xl flex-1 gap-12 px-4 sm:px-6">
            <main className="min-w-0 max-w-3xl flex-1 pt-10 pb-24">{children}</main>
            <aside className="hidden w-56 shrink-0 lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto py-10">
                <Toc />
              </div>
            </aside>
          </div>

          <footer className="border-t py-8">
            <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground sm:px-6">
              Built with Next.js and MDX. Every command and output on this page was
              run on the machine described at the bottom of the article.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
