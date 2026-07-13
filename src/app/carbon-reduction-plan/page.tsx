import { Leaf, Target, Info, Zap, Car, ShoppingBasket, Recycle, Bike, Laptop, Sprout, CheckCircle2 } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Reduction Plan | Ashden Support",
  description:
    "Ashden Support Ltd's Carbon Reduction Plan: our commitment to reducing environmental impact and achieving Net Zero by 2050, aligned with PPN 06/21.",
};

const measures = [
  {
    icon: Zap,
    title: "Energy-efficient properties",
    body: "We fit LED lighting and energy-efficient appliances as standard across all our services. We do not purchase high-energy equipment when lower-rated alternatives are available at reasonable cost.",
  },
  {
    icon: Target,
    title: "Smart energy monitoring",
    body: "Smart meters and energy monitors are installed at our properties, giving staff and residents real-time visibility of consumption. This data feeds directly into our annual reviews.",
  },
  {
    icon: ShoppingBasket,
    title: "Responsible procurement",
    body: "We give preference to locally sourced food and sustainable household products where cost-effective. We avoid single-use plastics and consider environmental impact when making purchasing decisions.",
  },
  {
    icon: Recycle,
    title: "Waste reduction and recycling",
    body: "Recycling and composting are part of the daily routine in our services. Managing waste responsibly is a practical life skill. We model it and explain why it matters.",
  },
  {
    icon: Bike,
    title: "Low-carbon staff travel",
    body: "Staff are encouraged to use public transport, walk, or cycle where practical. Vehicle journeys are consolidated where possible. We keep a travel log to track and review use over time.",
  },
  {
    icon: Laptop,
    title: "Digital-first operations",
    body: "Support plans, records, and communications are held digitally. Printing is kept to a minimum. We use cloud-based systems in place of paper processes wherever we can.",
  },
  {
    icon: Sprout,
    title: "Sustainability as a life skill",
    body: "Young people in our services take part in the sustainability practices of the home. Understanding how to manage energy, reduce food waste, and make sensible household choices is part of preparing for independent living. We explain the reasons. We do not just post rules on a wall.",
  },
];

const targets = [
  {
    label: "From day one",
    sublabel: "Each service",
    title: "Measures in place before a service opens",
    body: "LED lighting, energy-efficient appliances, smart monitoring, responsible procurement, and digital-first operations are in place before the first resident moves in. This plan is published and accessible from the start.",
    anchor: false,
  },
  {
    label: "Year 1",
    sublabel: "Each service",
    title: "Complete a formal baseline emissions assessment",
    body: "Within the first year of each service operating, we will quantify emissions across Scope 1, 2, and 3 and publish the results. This becomes the reference point for all future reduction targets for that service.",
    anchor: false,
  },
  {
    label: "Year 2",
    sublabel: "Each service",
    title: "20% reduction in Scope 2 emissions against baseline",
    body: "Using the Year 1 baseline, we aim to reduce electricity and gas consumption by at least 20% by the end of Year 2. This involves ongoing smart monitoring, resident engagement, and reviewing tariff options including renewable energy suppliers.",
    anchor: false,
  },
  {
    label: "Every 2 years",
    sublabel: "Ongoing",
    title: "Interim reviews across all scopes",
    body: "Progress against all emission scopes is reviewed at least every two years. Where targets are not being met, we identify the reasons and adjust our approach. Interim review reports are published on this page.",
    anchor: false,
  },
  {
    label: "Annually",
    sublabel: "Each October",
    title: "CRP reviewed and updated",
    body: "This document is reviewed and updated each October. If our operations change materially before the next scheduled review, we update it sooner. The date of the last review is shown at the bottom of this page.",
    anchor: false,
  },
  {
    label: "2050",
    sublabel: "Net Zero",
    title: "Net Zero greenhouse gas emissions",
    body: "Ashden Support Ltd commits to achieving Net Zero emissions by 2050, in line with the UK Government's legally binding target. We will develop a detailed pathway as our baseline data matures and as decarbonisation options for small accommodation providers become clearer.",
    anchor: true,
  },
];

export default function CarbonReductionPlanPage() {
  return (
    <>
      <CredentialsStrip />

      {/* Page header */}
      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-green mb-5">
              <Leaf className="w-3.5 h-3.5" />
              Sustainability
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-2 mb-6 leading-[1.0]">
              Carbon Reduction Plan
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              Ashden Support Ltd&apos;s commitment to reducing our environmental impact and reaching Net Zero by 2050. Aligned with PPN 06/21.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-green py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Our commitment</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.1]">
            Ashden Support Ltd commits to achieving Net Zero greenhouse gas emissions by 2050.
          </h2>
          <div className="space-y-4 text-white/75 leading-relaxed text-[1.05rem]">
            <p>
              We are a small company. Our direct environmental footprint is modest compared to larger providers. That is not a reason to treat this lightly.
            </p>
            <p>
              The young people we work with will live with the consequences of decisions made today. Part of what we do is help them develop responsible habits around energy, waste, and consumption. We should hold ourselves to the same standard.
            </p>
            <p>
              This is a working document, not a tender requirement. It sets out what we are doing, what we are committing to, and when we will report back.
            </p>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-4 text-grey-text leading-relaxed">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                About us
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
                Organisational context
              </h2>
              <p>
                Ashden Support Ltd provides Ofsted-registered supported accommodation for looked-after young people aged 16 and 17. We are based in Birmingham and operate in line with the Supported Accommodation (England) Regulations 2023.
              </p>
              <p>
                We are a small organisation. Our environmental footprint comes mainly from the accommodation we operate, staff travel, and the day-to-day running of our services. This plan covers all of that.
              </p>
              <p>
                Sustainability is built into how we run our services. Teaching young people to manage energy use, reduce waste, and make sensible choices about household resources is part of preparing them for independent living. That is not separate from this plan. It is part of it.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-green-faint border border-green-light rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-5 h-5 text-green shrink-0" />
                  <h3 className="font-display text-lg font-bold text-charcoal">At a glance</h3>
                </div>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Organisation", "Ashden Support Ltd"],
                    ["Location", "Birmingham"],
                    ["Sector", "Supported accommodation for young people"],
                    ["Regulation", "Supported Accommodation (England) Regulations 2023"],
                    ["Ofsted URN", "2907824"],
                    ["Company No.", "17013754"],
                    ["Net Zero target", "2050"],
                    ["Aligned with", "PPN 06/21"],
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

      {/* Baseline emissions */}
      <section className="bg-cream py-20 md:py-24 border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Emissions profile
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Baseline emissions
            </h2>
            <p className="text-grey-text leading-relaxed">
              As a new organisation, we do not yet have a full year of operational data from which to calculate a formal emissions baseline. We will complete a baseline assessment covering all three scopes within our first year of operation and publish the results. This is standard practice for new organisations and is accepted under PPN 06/21 guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Scope 1: Direct",
                title: "Combustion and owned vehicles",
                desc: "Emissions we produce directly.",
                items: ["Company vehicles used for staff travel and resident activities", "Gas heating at our accommodation properties"],
              },
              {
                label: "Scope 2: Indirect",
                title: "Purchased energy",
                desc: "Emissions from energy we buy.",
                items: ["Electricity consumption at our properties (lighting, appliances, heating)", "Gas for heating and hot water"],
              },
              {
                label: "Scope 3: Value chain",
                title: "Indirect and supply chain",
                desc: "Wider emissions linked to our activities.",
                items: ["Staff commuting to and from our properties", "Food and household consumables for residents", "Waste generated at our properties"],
              },
            ].map((scope) => (
              <div key={scope.label} className="bg-white border border-grey-mid rounded-2xl p-7">
                <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-green bg-green-light px-3 py-1 rounded-full mb-4">
                  {scope.label}
                </span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{scope.title}</h3>
                <p className="text-sm text-grey-text mb-4">{scope.desc}</p>
                <ul className="space-y-2">
                  {scope.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-grey-text">
                      <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border-l-4 border-green rounded-r-xl px-6 py-5">
            <p className="text-sm text-grey-text leading-relaxed">
              <span className="font-semibold text-charcoal">Baseline timeline:</span> A formal quantified baseline (in kg CO<sub>2</sub>e) covering all three scopes will be completed within Year 1 of operations and published here. All subsequent annual reviews will measure progress against this baseline.
            </p>
          </div>
        </div>
      </section>

      {/* Reduction measures */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              What we are doing
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Carbon reduction measures
            </h2>
            <p className="text-grey-text leading-relaxed">
              These are the measures we have committed to across our services. Some are practical decisions about how our accommodation is run. Others are part of how we support young people every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {measures.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex gap-5 bg-warm-white border border-grey-mid rounded-2xl p-7">
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-charcoal mb-2">{m.title}</h3>
                    <p className="text-sm text-grey-text leading-relaxed">{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="bg-cream py-20 md:py-24 border-t border-cream-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Targets and timeline
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Our commitments over time
            </h2>
            <p className="text-grey-text leading-relaxed">
              These targets are proportionate to our size and honest about where we are starting from. Where we do not yet have data, we have committed to collecting it.
            </p>
          </div>
          <div className="space-y-4">
            {targets.map((t) => (
              <div
                key={t.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-start rounded-2xl border p-7 md:p-8 ${
                  t.anchor
                    ? "bg-green border-green"
                    : "bg-white border-grey-mid"
                }`}
              >
                <div className="md:col-span-2">
                  <div className={`rounded-xl px-4 py-3 text-center inline-block md:w-full ${t.anchor ? "bg-white/15" : "bg-green-light"}`}>
                    <p className={`font-display text-xl font-extrabold leading-tight ${t.anchor ? "text-white" : "text-green"}`}>
                      {t.label}
                    </p>
                    <p className={`text-[0.65rem] font-semibold uppercase tracking-wider mt-1 ${t.anchor ? "text-white/60" : "text-grey-text"}`}>
                      {t.sublabel}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className={`font-display text-lg font-bold mb-2 ${t.anchor ? "text-white" : "text-charcoal"}`}>
                    {t.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${t.anchor ? "text-white/75" : "text-grey-text"}`}>
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-white py-12 border-t border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-xs text-grey-text">
            Ashden Support Ltd. Carbon Reduction Plan. Reviewed annually each October. Aligned with PPN 06/21. Company No. 17013754.
          </p>
        </div>
      </section>
    </>
  );
}
