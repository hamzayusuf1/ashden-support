import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ashden Support Ltd: named leadership, professional background, why the service was set up, and how the independent complaints route works.",
};

export default function AboutPage() {
  return (
    <>
      <CredentialsStrip />

      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              The organisation
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[1.0]">
              About Ashden Support
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              A small, Ofsted-registered supported accommodation service in Birmingham. Registered under the Supported Accommodation (England) Regulations 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Named leadership */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5 text-grey-text leading-relaxed">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Leadership
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 leading-[1.05]">
                Hamza Yusuf
              </h2>
              <p className="text-lg text-charcoal font-medium">Registered Service Manager and Nominated Individual</p>
              <p>
                Hamza Yusuf holds the roles of Registered Service Manager and Nominated Individual at Ashden Support Ltd. He is responsible for the day-to-day operation of the service, staff management, safeguarding, and the quality and consistency of support provided to residents.
              </p>
              <p>
                Ashden Support was established to offer a small-scale, professionally run alternative in the Birmingham market. A consistent observation in the sector is that larger providers are often unable to give individual young people the consistent, named support that semi-independent living requires. The 1:1 keyworker model and the small capacity of the service are deliberate design choices rather than constraints.
              </p>
              <p>
                The service operates from a single property in Stirchley. There are no plans to expand rapidly. The intention is to run one service well before considering further growth.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-green-faint border border-green-light rounded-2xl p-7 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Name</p>
                  <p className="font-display text-2xl font-bold text-charcoal">Hamza Yusuf</p>
                </div>
                <div className="border-t border-green-light pt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Role</p>
                    <p className="font-semibold text-charcoal">Registered Service Manager</p>
                    <p className="text-grey-text">Nominated Individual</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Organisation</p>
                    <p className="font-semibold text-charcoal">Ashden Support Ltd</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Contact</p>
                    <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                      info@ashdensupport.co.uk
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Phone</p>
                    <a href="tel:+447507112497" className="text-green hover:underline font-medium">
                      +44 7507 112 497
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complaints route */}
      <section className="bg-warm-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Independent oversight
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-8 leading-[1.05]">
              Complaints and representations
            </h2>
            <div className="space-y-4 text-grey-text leading-relaxed">
              <p>
                Ashden Support has a written complaints and representations policy. Complaints can be made by residents, placing authorities, or any person with a legitimate interest in the welfare of a young person placed with us.
              </p>
              <p>
                Complaints are first handled internally by the Registered Service Manager. Where a complaint is not resolved to the satisfaction of the complainant, or where a complaint is about the RSM, it is referred to the independent external reviewer.
              </p>
              <p>
                The independent reviewer for Ashden Support is <strong className="text-charcoal font-semibold">Yvan Ruronona</strong>. Complaints for independent review can be sent to{" "}
                <a href="mailto:complaints@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                  complaints@ashdensupport.co.uk
                </a>
                .
              </p>
              <p>
                Complaints can also be raised directly with Ofsted. Ofsted&apos;s contact details for concerns about registered providers are published on their website.
              </p>
            </div>

            <div className="mt-10 bg-white border border-grey-mid rounded-2xl p-7 space-y-4">
              <h3 className="font-display text-xl font-bold text-charcoal">Complaints contacts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Internal: RSM</p>
                  <p className="font-semibold text-charcoal">Hamza Yusuf</p>
                  <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline">
                    info@ashdensupport.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Independent reviewer</p>
                  <p className="font-semibold text-charcoal">Yvan Ruronona</p>
                  <a href="mailto:complaints@ashdensupport.co.uk" className="text-green hover:underline">
                    complaints@ashdensupport.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration details */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Registration
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-8 leading-[1.05]">
              Company and regulatory details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Legal name", value: "Ashden Support Ltd" },
                { label: "Company number", value: "17013754" },
                { label: "Registered address", value: "19 The Worthings, Stirchley, Birmingham B30 3AE" },
                { label: "Ofsted URN", value: "2907824" },
                { label: "Regulatory framework", value: "Supported Accommodation (England) Regulations 2023" },
                { label: "ICO registration", value: "Registered" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-warm-white border border-grey-mid rounded-xl p-5">
                  <p className="text-xs uppercase tracking-wider text-grey-text mb-1">{label}</p>
                  <p className="text-sm font-semibold text-charcoal">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-white py-16">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-grey-mid bg-white rounded-2xl p-8 md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Have a placement enquiry?</h3>
            <p className="text-sm text-grey-text">Referral process, cohort and response times are on the For Professionals page.</p>
          </div>
          <Link
            href="/for-professionals"
            className="shrink-0 inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-semibold py-3.5 px-6 rounded-full transition-colors text-sm group"
          >
            For Professionals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
