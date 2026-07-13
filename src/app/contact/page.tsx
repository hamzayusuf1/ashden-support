import { Mail, Phone, MapPin, ShieldAlert, MessageCircle } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ashden Support Ltd. Placement enquiries, safeguarding contacts, complaints and general enquiries. Birmingham, B30 3AE.",
};

const contacts = [
  {
    icon: Mail,
    category: "Placement enquiries",
    name: null,
    detail: "info@ashdensupport.co.uk",
    href: "mailto:info@ashdensupport.co.uk",
    note: "For new referrals and placement discussions. We respond within 24 hours on working days.",
  },
  {
    icon: Phone,
    category: "Phone",
    name: null,
    detail: "+44 7507 112 497",
    href: "tel:+447507112497",
    note: "For urgent placement enquiries or safeguarding concerns. Available during business hours.",
  },
  {
    icon: ShieldAlert,
    category: "Safeguarding",
    name: "Hamza Yusuf (RSM)",
    detail: "info@ashdensupport.co.uk",
    href: "mailto:info@ashdensupport.co.uk",
    note: "Safeguarding concerns should be directed to the Registered Service Manager directly. For out-of-hours safeguarding, contact the relevant local authority MASH.",
  },
  {
    icon: MessageCircle,
    category: "Complaints and representations",
    name: "Yvan Ruronona (Independent Reviewer)",
    detail: "complaints@ashdensupport.co.uk",
    href: "mailto:complaints@ashdensupport.co.uk",
    note: "Complaints not resolved internally are referred to the independent reviewer. Complaints about the RSM should be sent here directly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <CredentialsStrip />

      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-2xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Get in touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[1.0]">
              Contact
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              Different contacts for different purposes. Use the right one and you will get a faster response.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.category}
                  className="bg-warm-white border border-grey-mid rounded-2xl p-8 flex flex-col gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-grey-text mb-1">
                      {c.category}
                    </p>
                    {c.name && (
                      <p className="text-sm font-semibold text-charcoal mb-1">{c.name}</p>
                    )}
                    <a
                      href={c.href}
                      className="text-base font-semibold text-green hover:text-green-dark transition-colors"
                    >
                      {c.detail}
                    </a>
                  </div>
                  <p className="text-sm text-grey-text leading-relaxed">{c.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Address / location */}
      <section className="bg-warm-white py-20 md:py-24 border-t border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Location
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                We are based in Stirchley, Birmingham.
              </h2>
              <div className="space-y-3 text-grey-text">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">19 The Worthings</p>
                    <p>Stirchley, Birmingham</p>
                    <p>B30 3AE</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-2 text-sm text-grey-text">
                <p>
                  We do not hold drop-in appointments at the property. All visits to the service are by prior arrangement.
                </p>
                <p>
                  For general enquiries, email{" "}
                  <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                    info@ashdensupport.co.uk
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="bg-white border border-grey-mid rounded-2xl p-7 space-y-5">
              <h3 className="font-display text-xl font-bold text-charcoal">Regulatory contacts</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Ofsted</p>
                  <p className="text-charcoal">To raise a concern about this service, contact Ofsted directly.</p>
                  <p className="text-grey-text mt-1">Registered provider URN: 2907824</p>
                </div>
                <div className="border-t border-grey-mid pt-4">
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">
                    Information Commissioner&apos;s Office
                  </p>
                  <p className="text-charcoal">
                    Ashden Support Ltd is registered with the ICO. Data protection enquiries should be directed to{" "}
                    <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline">
                      info@ashdensupport.co.uk
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
