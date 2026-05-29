"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "System", href: "/system" },
  { label: "Toolkit", href: "/calculator" },
  { label: "Templates", href: "/templates" },   
  //{ label: "Executive Workshop", href: "/workshop" },
  { label: "Book", href: "/book" },
  { label: "Read Chapter 1", href: "/sample-chapter" }, 
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#DDD8CE] bg-[#F5F0E8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="shrink-0 flex items-center"
          >
            <img
              src="/tlc-banner-gold.svg"
              alt="Token Learning Control"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#5A5248] transition-colors hover:text-[#1A1714]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center xl:flex">
            <Button
              asChild
              className="h-8 bg-[#9A7A3A] px-4 text-xs font-semibold tracking-wide text-[#F5F0E8] hover:bg-[#7A5E28]"
            >
              <Link href="/templates#lead-capture">
                Get Starter Kit
              </Link>
            </Button>
          </div>

          <button
            className="flex items-center justify-center rounded-md p-2 text-[#5A5248] hover:text-[#1A1714] xl:hidden"
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
        <div className="border-t border-[#DDD8CE] bg-[#F5F0E8] px-6 pb-6 pt-4 xl:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-[#5A5248] hover:text-[#1A1714]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="mt-3 h-9 w-full bg-[#9A7A3A] text-xs font-semibold tracking-wide text-[#F5F0E8] hover:bg-[#7A5E28]"
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
