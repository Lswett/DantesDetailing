import type { Metadata } from "next";
import Link from "next/link";
import { Menu } from "lucide-react";
import "@fontsource/teko/500.css";
import "@fontsource/teko/600.css";
import "@fontsource/teko/700.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
import "./globals.css";
import { siteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "Dante's Detailing | Mobile Auto Detailing in Genesee County",
  description:
    "Mobile exterior washes, interior detailing, and headlight restoration serving Genesee County, Michigan.",
};

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Memberships", "/memberships"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Dante's Detailing home">
            <span>Dante&apos;s</span>
            <strong>Detailing</strong>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <Link className="button button-red header-cta" href="/book">
            Book Now
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu size={24} />
            </summary>
            <div className="mobile-panel">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <Link className="button button-red" href="/book">
                Book Now
              </Link>
            </div>
          </details>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Link className="brand" href="/">
              <span>Dante&apos;s</span>
              <strong>Detailing</strong>
            </Link>
            <p>{siteSettings.serviceArea} mobile detailing. We come to you.</p>
            <p>
              <a href={`tel:${siteSettings.phone.replace(/[^0-9]/g, "")}`}>{siteSettings.phone}</a>
              {" / "}
              <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </p>
            <Link className="button button-red" href="/book">
              Book Now
            </Link>
          </div>
          <div className="footer-links">
            {navItems.slice(1).map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/admin">Admin</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
