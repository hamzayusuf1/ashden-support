import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Mail, FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Referral information for social workers, brokerage teams, placement teams and commissioning managers working with Ashden Support Ltd.",
};

const steps = [
  { n: "01", title: "Initial contact", body: "Send a referral summary to info@ashdensupport.co.uk or call +44 7507 112 497. Include the young person's age, current local authority, and a brief outline of their current situation and needs." },
  { n: "02", title: "Acknowledgement within 24 hours", body: "We review planned referrals within 24 hours on working days. We will either confirm we have capacity and want to proceed to assessment, or advise we are unable to take the referral and explain why." },
  { n: "03", title: "Emergency referrals", body: "Emergency and same-day referrals are assessed on an accelerated basis. We only accept a placement once we are satisfied it is safe for the young person and for the young people already living there." },
  { n: "04", title: "Assessment", body: "We review the referral information and, where appropriate, arrange a pre-placement discussion. We will tell you clearly if the young person is not suitable for this service before any placement is agreed. Every matching decision is recorded as a written risk assessment, and the views of young people already living in the home are taken into account." },
  { n: "05", title: "Placement agreement", body: "We issue a placement agreement before the young person moves in. This sets out fees, notice periods, reporting arrangements, and the terms of the placement." },
  { n: "06", title: "Move-in and induction", body: "The young person is introduced to the home, their keyworker, and the house routines. The RSM is available during the move-in period. A named keyworker is allocated within 48 hours of placement and a support plan is co-produced with the young person in the same period." },
];

const docs = [
  "Individual support plan (within 48 hours of placement)",
  "Daily logs, available to the placing authority on request",
  "Significant events, reported to the placing authority on the same working day",
  "Progress reviews at the frequency agreed with the placing authority",
  "Missing from Home and Care notifications, in line with statutory requirements",
  "Placement agreement prior to move-in",
  "End of placement report",
];

const policies = [
  "Safeguarding Children and Young People",
  "Missing from Home and Care",
  "Criminal Exploitation and County Lines",
  "Behaviour Management",
  "Counter Bullying",
  "Substance Misuse (Drugs and Alcohol)",
  "Complaints and Representations",
  "Safer Recruitment",
  "Equality, Diversity and Inclusion",
  "Data Protection and Information Security",
];

const commitments = [
  { title: "Named manager, always", body: "Hamza Yusuf is the named RSM and your main point of contact throughout any placement. You will not be passed between departments." },
  { title: "24-hour referral response", body: "All referral enquiries receive a written response within 24 hours on working days. We confirm capacity and suitability before moving to assessment." },
  { title: "Transparent about fit", body: "We carry out a pre-placement assessment on every referral. If a young person is not right for this service, we say so promptly." },
  { title: "Support plan within 48 hours", body: "A support plan is co-produced with every young person within 48 hours of placement and shared with the placing authority. Progress is tracked using the Outcomes Star." },
  { title: "Significant events reported same day", body: "Significant events are reported in writing to the placing authority on the same working day. Daily logs are available on request." },
  { title: "Safer recruitment and training", body: "Staff are recruited through safer recruitment and complete a face-to-face induction before working unsupervised. Training and supervision are ongoing, and staff without a relevant qualification are supported towards a Level 3 qualification." },
];

export default function ForProfessionalsPage() {
  return (
    <>
      <CredentialsStrip />

      {/* Page header */}
      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-3xl">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Placement information
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[1.0]">
                For Professionals
              </h1>
              <p className="text-xl text-grey-text leading-relaxed">
                For social workers, brokerage and placement teams, commissioning managers, and anyone else making or considering a referral to Ashden Support.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/shaking-hands.jpg"
                  alt="Professional meeting"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Who we support
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Cohort
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  We support looked-after young people aged 16 and 17, including care leavers and unaccompanied asylum-seeking children (UASC). We are based in Birmingham, in the West Midlands, and accept referrals from placing authorities across England.
                </p>
                <p>
                  All referrals go through a pre-placement assessment. We look at each young person&apos;s current needs, history, and whether semi-independent living is appropriate at this point. We take a practical view and work with the referring professional to understand the full picture before agreeing a placement.
                </p>
                <p>
                  Where a young person&apos;s needs require residential care under the Children&apos;s Homes (England) Regulations 2015, or exceed what a supported accommodation model can safely provide, we will tell you clearly and promptly so you can continue your search.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-green-faint border border-green-light rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold text-charcoal mb-4">Quick reference</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Age range", "16 and 17"],
                    ["Cohort", "LAC, care leavers, UASC"],
                    ["Placement type", "Semi-independent supported accommodation"],
                    ["Regulation", "Supported Accommodation (England) Regulations 2023"],
                    ["Ofsted URN", "2907824"],
                    ["Geographic area", "Placing authorities across England. Based in Birmingham, West Midlands."],
                    ["Staff qualifications", "Safer recruitment, face-to-face induction, ongoing training"],
                    ["Response time", "Within 24 hours on working days"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 border-b border-green-light pb-3 last:border-0 last:pb-0">
                      <dt className="text-grey-text">{label}</dt>
                      <dd className="font-semibold text-charcoal text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral process */}
      <section className="bg-warm-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-14">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              How it works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 leading-[1.05]">
              Referral process
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white border border-grey-mid rounded-2xl p-7 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-1">
                  <span className="font-display text-2xl font-extrabold text-green/30">{step.n}</span>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-grey-text leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens after placement */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Ongoing
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                What happens after a placement begins.
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  A named keyworker is allocated within 48 hours of placement. The RSM is present or available throughout the induction period.
                </p>
                <p>
                  A support plan is co-produced with the young person within 48 hours of placement and sent to the placing authority. It covers daily living, education and employment, health, relationships, and goals for the placement period. Keywork sessions are held at least twice a week.
                </p>
                <p>
                  Progress reviews are held at the frequency agreed with the placing authority. The RSM attends reviews where requested. Between reviews, daily logs are available on request and significant events are reported to the placing authority on the same working day.
                </p>
                <p>
                  Hamza Yusuf remains your named point of contact for the duration of the placement. If anything significant happens, you will hear from us first.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                What we report
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Reporting to placing authorities.
              </h2>
              <ul className="space-y-3">
                {docs.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green mt-0.5 shrink-0" />
                    <span className="text-sm text-grey-text">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our commitments */}
      <section className="bg-green py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-10">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/50">
              Our standards
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 leading-[1.05]">
              What you can expect from us.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/15 rounded-2xl p-6">
                <ShieldCheck className="w-5 h-5 text-white/60 mb-4" />
                <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-warm-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-10">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Available on request
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
              Key policies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {policies.map((policy) => (
              <div key={policy} className="flex items-start gap-3 bg-white border border-grey-mid rounded-xl p-4">
                <FileText className="w-4 h-4 text-green mt-0.5 shrink-0" />
                <span className="text-sm text-grey-text">{policy}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-grey-text">
            To request any policy, email{" "}
            <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
              info@ashdensupport.co.uk
            </a>
            . We aim to respond within one working day.
          </p>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-faint border border-green-light rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-green shrink-0 mt-0.5" />
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">Safeguarding</h2>
                <p className="text-grey-text mt-1 text-sm">For urgent safeguarding concerns, contact the relevant local authority MASH directly. For concerns about a young person placed with us, contact the DSL first.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Designated safeguarding lead</p>
                <p className="font-semibold text-charcoal">Hamza Yusuf</p>
                <p className="text-grey-text">Registered Service Manager</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Direct contact</p>
                <a href="mailto:hamza@ashdensupport.co.uk" className="text-green hover:underline font-medium block">
                  hamza@ashdensupport.co.uk
                </a>
                <a href="tel:+447507112497" className="text-green hover:underline font-medium block mt-1">
                  +44 7507 112 497
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Framework</p>
                <p className="text-charcoal">Working Together to Safeguard Children 2023. All concerns referred to the appropriate local authority MASH.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Make a referral
              </span>
              <h2 className="font-display text-4xl font-bold text-white mt-3 mb-4 leading-[1.05]">
                Ready to refer?
              </h2>
              <p className="text-white/70 leading-relaxed">
                Contact us by email or phone. We respond within 24 hours on working days. If we cannot take the placement, we will tell you promptly so you can continue your search.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:info@ashdensupport.co.uk"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-colors group"
              >
                <Mail className="w-5 h-5 text-green shrink-0" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-green transition-colors">
                    info@ashdensupport.co.uk
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-green transition-colors" />
              </a>
              <a
                href="tel:+447507112497"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-colors group"
              >
                <Phone className="w-5 h-5 text-green shrink-0" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-sm font-semibold text-white group-hover:text-green transition-colors">
                    +44 7507 112 497
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-green transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
