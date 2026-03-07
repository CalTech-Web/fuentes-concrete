"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";

const serviceLinks = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

const navLinks = [
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/services",
    children: serviceLinks,
  },
  { label: "Careers", href: "/#hiring" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Fuentes Concrete Inc."
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-lime transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {/* Dropdown */}
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-charcoal-dark border border-white/10 rounded-xl shadow-2xl py-2 w-64">
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm text-lime font-semibold hover:bg-white/5 transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-white/10 my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-lime hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-lime transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:5596736444"
              className="hidden sm:inline-flex items-center gap-2 bg-lime text-charcoal-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-light transition-colors"
            >
              <Phone className="h-4 w-4" />
              (559) 673-6444
            </a>
            <a
              href="tel:5596736444"
              className="sm:hidden inline-flex items-center justify-center bg-lime text-charcoal-dark p-2 rounded-lg"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                if (mobileOpen) setServicesOpen(false);
              }}
              className="md:hidden text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-dark border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-white/70 hover:text-lime px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 border-l border-white/10 pl-3 mt-1 mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-lime text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-white/60 text-sm px-3 py-1.5 rounded-lg hover:text-lime hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-lime px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
