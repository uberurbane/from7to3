import Link from "next/link";

const footerLinks = {
  System: [
    { label: "Feature Ledger", href: "/system" },
    { label: "Token Capacity", href: "/system" },
    { label: "Migration Mandate", href: "/system" },
    { label: "Runtime Governance", href: "/system" },
  ],
  Resources: [
    { label: "Templates", href: "/templates" },
    { label: "Executive Workshop", href: "/workshop" },
    { label: "Diagnostic", href: "/#lead-capture" },
    { label: "Book", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                TLC
              </span>
              <span className="text-sm font-medium text-foreground/80">
                Token Learning Control
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for governing AI-native organizations.
            </p>
            <p className="text-xs text-muted-foreground/60">
              From 7 to 3 — the authority layer.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground/50 uppercase">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Token Learning Control. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Govern AI like capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
