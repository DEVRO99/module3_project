import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaViber } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Column 1: Brand & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-primary tracking-tight mb-4">
                Devro
              </h2>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed">
                Crafting seamless digital experiences with modern web
                technologies
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Email Pill */}
              <a
                href="mailto:devathlon25@gmail.com"
                className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0b0d10]/90 border border-white/10 hover:border-primary/40 transition-colors w-full max-w-sm"
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">
                  devathlon25@gmail.com
                </span>
              </a>

              {/* Location Pill */}
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0b0d10]/90 border border-white/10 w-full max-w-sm">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-white/80">
                  Hlaing TharYar, Yangon
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-base font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm text-white/60">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-primary transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect With Me & Social Buttons */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-base font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Let's connect and create something amazing together.
            </p>

            <div className="flex items-start gap-4">
              {/* GitHub */}
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href="https://github.com/DEVRO99"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/50 text-primary shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:bg-primary/20 hover:scale-105 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <span className="text-[11px] text-white/40">GitHub</span>
              </div>

              {/* Viber */}
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href="viber://chat?number=%2B959443412110"
                  aria-label="Viber Contact"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#7360f2]/10 border border-[#7360f2]/40 text-[#7360f2] shadow-[0_0_15px_rgba(115,96,242,0.15)] hover:bg-[#7360f2]/20 hover:scale-105 transition-all"
                >
                  <FaViber className="w-5 h-5" />
                </a>
                <a
                  href="tel:+959443412110"
                  className="text-[11px] text-white/50 hover:text-primary transition-colors tracking-tight"
                >
                  +959443412110
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 DEVRO. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;