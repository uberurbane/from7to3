"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "System", href: "/system" },
  { label: "Templates", href: "/templates" },  { label: "Executive Workshop", href: "/workshop" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="shrink-0">
            <img
              src="/tlc-banner.png"
              alt="Token Learning Control"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center xl:flex">
            <Button
              asChild
              className="h-8 bg-teal px-4 text-xs font-semibold tracking-wide text-teal-foreground hover:bg-teal/90"
            >
              <Link href="/templates#lead-capture">
                Get Starter Kit
              </Link>
            </Button>
          </div>

          <button
            className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 pb-6 pt-4 xl:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="mt-3 h-9 w-full bg-teal text-xs font-semibold tracking-wide text-teal-foreground hover:bg-teal/90"
            >
              <Link
                href="/templates#lead-capture"
                onClick={() => setMobileOpen(false)}
              >
                Get Starter Kit
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
