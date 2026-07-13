import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, ClipboardList, UserCircle, CheckCircle2 } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashden Support | Ofsted-Registered Supported Accommodation, Birmingham",
  description:
    "Ashden Support Ltd provides Ofsted-registered supported accommodation for looked-after young people aged 16 and 17. URN 2907824.",
};

const pillars = [
  {
    icon: Users,
    label: "The service",
    title: "Our Service",
    description:
      "How we support young people: staffing model, keywork, support planning, overnight cover, and what a placement with us involves.",
    href: "/our-service",
  },
  {
    icon: ClipboardList,
    label: "Making a referral",
    title: "For Professionals",
    description:
      "Who we support, the referral process, what happens after placement, documentation, policies, and safeguarding contact.",
    href: "/for-professionals",
  },
  {
    icon: UserCircle,
    label: "The operator",
    title: "About",
    description:
      "Named leadership, professional background, how Ashden Support was established, and the independent complaints route.",
    href: "/about",
  },
];

const principles = [
  "Every young person has a named keyworker who remains consistent throughout their placement.",
  "Appropriate staffing is maintained at all times, including sleep-in cover every night.",
  "Support plans are written within 28 days of placement and shared with the placing authority.",
  "We assess each referral carefully. If a placement is not right for this young person, we say so.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero split screen */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-24 bg-warm-white">
          <CredentialsStrip inline />
          <div className="mt-10 max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-charcoal leading-[1.08] mb-7 tracking-tight">
              Supporting looked-after young people towards independence.
            </h1>
            <p className="text-lg text-grey-text leading-relaxed mb-4">
              Ashden Support Ltd is an Ofsted-registered provider of semi-independent supported accommodation for young people aged 16 and 17. We support young people who are looked after, leaving care, or placed by a local authority.
            </p>
            <p className="text-base text-grey-text leading-relaxed mb-10">
              Our focus is practical: daily living skills, consistent keywork, and a stable base from which young people can move on positively.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/for-professionals"
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold py-4 px-7 rounded-full transition-all text-sm group"
              >
                Make a referral enquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/our-service"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-faint text-charcoal font-semibold py-4 px-7 rounded-full transition-all text-sm border border-grey-mid"
              >
                About the service
              </Link>
            </div>
          </div>
        </div>

        {/* Right: image panel with green overlay */}
        <div className="hidden lg:flex flex-col justify-between relative overflow-hidden p-12 xl:p-16">
          <Image
            src="/images/view-1.jpg"
            alt="Birmingham cityscape"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Green overlay */}
          <div className="absolute inset-0 bg-green/80" />
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
          {/* Top label */}
          <div className="relative">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Ashden Support Ltd
            </span>
          </div>
          {/* Bottom credential card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-7 max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                Regulatory status
              </p>
              <div className="space-y-3 text-sm text-white/85">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                  <span>Ofsted-registered · URN 2907824</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                  <span>Supported Accommodation (England) Regulations 2023</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                  <span>Company No. 17013754</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                  <span>Registered with the ICO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-cream py-16 md:py-20 border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-5">
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green mb-8">
            How we work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[4rem] bg-green rounded-full shrink-0 mt-1" />
                <p className="text-sm text-charcoal leading-relaxed font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-forest py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-14">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green-mid">
              Navigate the site
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 leading-[1.05]">
              What commissioners typically look for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green/40 rounded-2xl p-8 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-green/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-green-mid" />
                  </div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/40 mb-2">
                    {p.label}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-6">{p.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-mid group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the operator */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                The operator
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-[1.05]">
                A named person runs this service. You can reach them directly.
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  Hamza Yusuf is the Registered Service Manager and Nominated Individual for Ashden Support Ltd. He holds day-to-day responsibility for the service and is the main point of contact for commissioners.
                </p>
                <p>
                  Ashden Support was established to deliver a focused, accountable service for young people who need consistent support and a stable environment. Our approach centres on clear documentation, open communication with placing authorities, and consistent relationships between staff and young people.
                </p>
                <p>
                  All staff are qualified and receive regular ongoing training. Safeguarding is led by the RSM and is central to how the service runs.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-green-dark transition-colors group"
              >
                More about the operator
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image
                  src="/images/support.jpg"
                  alt="Young person receiving support"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-green rounded-2xl p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-5">
                  Key contacts
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Registered Service Manager</p>
                    <p className="font-display text-xl font-bold">Hamza Yusuf</p>
                    <p className="text-sm text-white/65 mt-0.5">Nominated Individual</p>
                  </div>
                  <div className="border-t border-white/15 pt-5">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Placement enquiries</p>
                    <a href="mailto:info@ashdensupport.co.uk" className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                      info@ashdensupport.co.uk
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+447507112497" className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                      +44 7507 112 497
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Safeguarding lead</p>
                    <p className="text-sm text-white/85">Hamza Yusuf (RSM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Looking to place a young person?
          </h2>
          <p className="text-grey-text leading-relaxed mb-8 max-w-xl mx-auto">
            We respond to all referral enquiries within 24 hours on working days. If the placement is not right for us, we will say so clearly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/for-professionals"
              className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold py-4 px-7 rounded-full transition-all text-sm group"
            >
              Referral information
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:info@ashdensupport.co.uk"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-faint text-charcoal font-semibold py-4 px-7 rounded-full transition-all text-sm border border-grey-mid"
            >
              info@ashdensupport.co.uk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
