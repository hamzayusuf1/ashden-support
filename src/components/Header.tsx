"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const PHONE_DISPLAY = "+44 7507 112 497";
const PHONE_TEL = "+447507112497";

const navLinks = [
  { href: "/our-service", label: "Our Service" },
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/96 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm border-b border-grey-mid" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.875rem] font-medium transition-colors ${
                pathname === link.href
                  ? "text-green"
                  : "text-charcoal hover:text-green"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-[0.875rem] font-medium text-charcoal hover:text-green transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/for-professionals"
            className="bg-green hover:bg-green-dark text-white text-[0.875rem] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Make a Referral
          </Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-1">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Call us"
            className="p-2.5 text-charcoal hover:text-green transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-grey-mid bg-white">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm font-medium transition-colors border-b border-grey-light last:border-0 ${
                  pathname === link.href ? "text-green" : "text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/for-professionals"
              className="mt-3 bg-green hover:bg-green-dark text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
            >
              Make a Referral
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
