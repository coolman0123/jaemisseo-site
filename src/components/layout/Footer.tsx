"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/">
              <span className="text-2xl font-bold text-gradient">Jaemisseo</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              재밌게 이것저것 만드는
              <br />
              소프트웨어 회사
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:funpeopl.hq@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  funpeopl.hq@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Jaemisseo. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Made with fun in Korea
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
