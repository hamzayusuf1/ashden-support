import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const PHONE_DISPLAY = "+44 7507 112 497";
const PHONE_TEL = "+447507112497";

const pages = [
  { href: "/our-service", label: "Our Service" },
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
  { href: "/social-value", label: "Social Value" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo-light.png"
                alt="Ashden Support"
                width={160}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mt-6 max-w-sm">
              Ofsted-registered supported accommodation for looked-after young people aged 16 and 17. Stirchley, Birmingham.
            </p>
            <div className="mt-5 text-xs text-white/30 space-y-1 font-medium uppercase tracking-wide">
              <p>URN 2907824 · Company No. 17013754</p>
              <p>Supported Accommodation (England) Regulations 2023</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/65">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-mid shrink-0 mt-0.5" />
                <span>19 The Worthings, Stirchley, Birmingham B30 3AE</span>
              </div>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-green-mid shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a href="mailto:info@ashdensupport.co.uk" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-green-mid shrink-0" />
                info@ashdensupport.co.uk
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-[0.72rem] uppercase tracking-[0.18em] text-white/35 mb-5">
              Pages
            </h3>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-green-mid transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display font-semibold text-[0.72rem] uppercase tracking-[0.18em] text-white/35 mb-5">
              Contacts
            </h3>
            <div className="space-y-5 text-sm text-white/65">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Placement enquiries</p>
                <a href="mailto:info@ashdensupport.co.uk" className="hover:text-green-mid transition-colors">
                  info@ashdensupport.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Complaints</p>
                <a href="mailto:complaints@ashdensupport.co.uk" className="hover:text-green-mid transition-colors">
                  complaints@ashdensupport.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Safeguarding</p>
                <p>Contact the RSM: hamza@ashdensupport.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/25">
          <p>&copy; 2026 Ashden Support Ltd. All rights reserved.</p>
          <p>Ofsted URN 2907824</p>
        </div>
      </div>
    </footer>
  );
}
