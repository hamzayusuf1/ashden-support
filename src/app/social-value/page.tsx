import {
  HeartHandshake,
  Users,
  Heart,
  Briefcase,
  MapPin,
  Leaf,
  ClipboardList,
  Info,
  Zap,
  Target,
  ShoppingBasket,
  Recycle,
  Bike,
  Laptop,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Value",
  description:
    "Ashden Support's social value commitments: outcomes for young people, responsible employment, community contribution and environmental responsibility.",
};

const youngPeople = [
  "Education, employment and training is a priority from the first week of placement. Keyworkers work with each young person and their Virtual School to agree realistic next steps, and progress is tracked as a key measure of the service.",
  "Independent living skills are taught through everyday life: cooking, budgeting, looking after a home and travelling independently. Young people leave knowing how to sustain a tenancy and who to contact when something goes wrong.",
  "Move-on is planned with the young person, their social worker and their personal adviser, so that leaving Ashden is a step forward rather than a cliff edge.",
  "Mental wellbeing is supported through consistent relationships with staff who know each young person well, and through access to services including CAMHS and Kooth.",
];

const measures = [
  {
    icon: Zap,
    title: "Energy-efficient homes",
    body: "We fit LED lighting and energy-efficient appliances as standard in our homes. We do not purchase high-energy equipment when lower-rated alternatives are available at reasonable cost.",
  },
  {
    icon: Target,
    title: "Smart energy monitoring",
    body: "Smart meters and energy monitors are installed in our homes, giving staff and young people real-time visibility of consumption. This data feeds directly into our annual reviews.",
  },
  {
    icon: ShoppingBasket,
    title: "Responsible procurement",
    body: "We give preference to locally sourced food and sustainable household products where cost-effective. We avoid single-use plastics and consider environmental impact when making purchasing decisions.",
  },
  {
    icon: Recycle,
    title: "Waste reduction and recycling",
    body: "Recycling and composting are part of the daily routine in our homes. Managing waste responsibly is a practical life skill. We model it and explain why it matters.",
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
    body: "Young people in our homes take part in the sustainability practices of the home. Understanding how to manage energy, reduce food waste, and make sensible household choices is part of preparing for independent living. We explain the reasons. We do not just post rules on a wall.",
  },
];

const targets = [
  {
    label: "From day one",
    sublabel: "The service",
    title: "Measures in place",
    body: "LED lighting, energy-efficient appliances, smart monitoring, responsible procurement, and digital-first operations. These measures are in place. This plan is published and accessible.",
    anchor: false,
  },
  {
    label: "Year 1",
    sublabel: "The service",
    title: "Complete a formal baseline emissions assessment",
    body: "Within the first year of the service operating, we will quantify emissions across Scope 1, 2, and 3 and publish the results. This becomes the reference point for all future reduction targets.",
    anchor: false,
  },
  {
    label: "Year 2",
    sublabel: "The service",
    title: "20% reduction in Scope 2 emissions against baseline",
    body: "Using the Year 1 baseline, we aim to reduce electricity and gas consumption by at least 20% by the end of Year 2. This involves ongoing smart monitoring, engagement with young people, and reviewing tariff options including renewable energy suppliers.",
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
    title: "Plan reviewed and updated",
    body: "This plan is reviewed and updated each October. If our operations change materially before the next scheduled review, we update it sooner. The date of the last review is shown at the bottom of this page.",
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

const scopes = [
  {
    label: "Scope 1: Direct",
    title: "Combustion and owned vehicles",
    desc: "Emissions we produce directly.",
    items: ["The company vehicle used for staff travel and activities with young people", "Gas heating in our homes"],
  },
  {
    label: "Scope 2: Indirect",
    title: "Purchased energy",
    desc: "Emissions from energy we buy.",
    items: ["Electricity consumption in our homes (lighting, appliances, heating)", "Gas for heating and hot water"],
  },
  {
    label: "Scope 3: Value chain",
    title: "Indirect and supply chain",
    desc: "Wider emissions linked to our activities.",
    items: ["Staff commuting to and from our homes", "Food and household consumables for young people", "Waste generated in our homes"],
  },
];

export default function SocialValuePage() {
  return (
    <>
      <CredentialsStrip />

      {/* Page header */}
      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-green mb-5">
              <HeartHandshake className="w-3.5 h-3.5" />
              Social value
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-2 mb-6 leading-[1.0]">
              Social Value
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              The value Ashden Support creates goes beyond the placement itself. It shows in where young people are when they leave, in how we treat our staff, and in how our homes sit within their communities. This page sets out what we commit to and how we report on it.
            </p>
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="bg-green py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Our commitment</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.1]">
            The young people we support are the reason the service exists.
          </h2>
          <div className="space-y-4 text-white/75 leading-relaxed text-[1.05rem]">
            <p>
              A young person who leaves Ashden settled, with a tenancy they can hold and a plan for education or work, is the most important outcome we can deliver. Everything else on this page supports that.
            </p>
          </div>
        </div>
      </section>

      {/* Young people */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Outcomes
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
              Young people
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {youngPeople.map((item) => (
              <div key={item} className="flex gap-5 bg-warm-white border border-grey-mid rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-green" />
                </div>
                <p className="text-sm text-grey-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tackling isolation */}
      <section className="bg-cream py-20 md:py-24 border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Relationships
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Tackling isolation
              </h2>
              <p className="text-grey-text leading-relaxed">
                Many of the young people we support arrive with no family nearby, and some arrive in the UK alone. Staff help each young person build a life beyond their placement, through local activities, sport, faith and cultural groups, and friendships that last after they move on. Birthdays and milestones are marked.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-grey-mid rounded-2xl p-7 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-green" />
                </div>
                <p className="text-sm text-grey-text leading-relaxed">
                  Consistent relationships with staff who know each young person well are the foundation of how the service works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible employer */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Our staff
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Being a responsible employer
              </h2>
              <p className="text-grey-text leading-relaxed">
                We recruit our staff locally. Every member of staff receives face-to-face induction, monthly supervision and ongoing training. Staff without a relevant qualification are supported to work towards a Level 3 qualification. Where a suitable vacancy arises, care leavers are encouraged to apply and are supported through the recruitment process. Staff are trained in safeguarding, exploitation and domestic abuse awareness, which strengthens the wider community as well as the service.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-green-faint border border-green-light rounded-2xl p-7 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-green" />
                </div>
                <p className="text-sm text-grey-text leading-relaxed">
                  Staff are recruited locally and supported towards a Level 3 qualification where they do not already hold one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local economy and community */}
      <section className="bg-warm-white py-20 md:py-24 border-t border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                Our neighbourhoods
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Local economy and community
              </h2>
              <p className="text-grey-text leading-relaxed">
                We use local trades and suppliers for repairs, maintenance and household goods wherever this is practical. Our homes are ordinary, well-kept houses on their streets. We keep a low profile, respond quickly to any concern raised by neighbours, and support young people to be good neighbours. We work with local police, health and education services, and help young people make use of local amenities.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-grey-mid rounded-2xl p-7 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-green" />
                </div>
                <p className="text-sm text-grey-text leading-relaxed">
                  Based in Birmingham, in the West Midlands. We accept referrals from placing authorities across England.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment */}
      <section id="environment" className="bg-cream py-20 md:py-24 border-y border-cream-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                <Leaf className="w-3.5 h-3.5" />
                Sustainability
              </div>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Environment
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  We are working towards Net Zero by 2050, in line with PPN 06/21. Our Carbon Reduction Plan sets out our baseline, our targets and the practical measures in place in our homes, from energy use to recycling. Young people learn to run a household efficiently as part of their independence skills.
                </p>
                <p>
                  Our Carbon Reduction Plan is set out in full below.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-grey-mid rounded-2xl p-7">
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
                    <div key={label} className="flex justify-between gap-4 border-b border-grey-mid pb-3 last:border-0 last:pb-0">
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

      {/* Carbon Reduction Plan: commitment */}
      <section id="carbon-reduction-plan" className="bg-green py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">
            Carbon Reduction Plan
          </p>
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
              This plan sets out what we are doing, what we are committing to, and when we will report back.
            </p>
          </div>
        </div>
      </section>

      {/* Organisational context and baseline emissions */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-14 space-y-4 text-grey-text leading-relaxed">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Organisational context
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
              Where our emissions come from
            </h2>
            <p>
              Ashden Support Ltd provides Ofsted-registered supported accommodation for looked-after young people aged 16 and 17. We are based in Birmingham and operate in line with the Supported Accommodation (England) Regulations 2023.
            </p>
            <p>
              We are a small organisation. Our environmental footprint comes mainly from the accommodation we operate, staff travel, and the day-to-day running of our homes. This plan covers all of that.
            </p>
            <p>
              Sustainability is built into how we run our homes. Teaching young people to manage energy use, reduce waste, and make sensible choices about household resources is part of preparing them for independent living. That is not separate from this plan. It is part of it.
            </p>
          </div>

          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Emissions profile
            </span>
            <h3 className="font-display text-3xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Baseline emissions
            </h3>
            <p className="text-grey-text leading-relaxed">
              As a new organisation, we do not yet have a full year of operational data from which to calculate a formal emissions baseline. We will complete a baseline assessment covering all three scopes within our first year of operation and publish the results. This is standard practice for new organisations and is accepted under PPN 06/21 guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {scopes.map((scope) => (
              <div key={scope.label} className="bg-warm-white border border-grey-mid rounded-2xl p-7">
                <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-green bg-green-light px-3 py-1 rounded-full mb-4">
                  {scope.label}
                </span>
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{scope.title}</h4>
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
          <div className="mt-8 bg-warm-white border-l-4 border-green rounded-r-xl px-6 py-5">
            <p className="text-sm text-grey-text leading-relaxed">
              <span className="font-semibold text-charcoal">Baseline timeline:</span> A formal quantified baseline (in kg CO<sub>2</sub>e) covering all three scopes will be completed within Year 1 of operations and published here. All subsequent annual reviews will measure progress against this baseline.
            </p>
          </div>
        </div>
      </section>

      {/* Reduction measures */}
      <section className="bg-warm-white py-20 md:py-24 border-t border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              What we are doing
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Carbon reduction measures
            </h2>
            <p className="text-grey-text leading-relaxed">
              These are the measures in place in our homes. Some are practical decisions about how our accommodation is run. Others are part of how we support young people every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {measures.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex gap-5 bg-white border border-grey-mid rounded-2xl p-7">
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
      <section className="bg-cream py-20 md:py-24 border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Targets and timeline
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-4 leading-[1.05]">
              Our commitments over time
            </h2>
            <p className="text-grey-text leading-relaxed">
              These targets are proportionate to our size and honest about where we are starting from. Where we do not yet have data, we will collect it.
            </p>
          </div>
          <div className="space-y-4">
            {targets.map((t) => (
              <div
                key={t.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-start rounded-2xl border p-7 md:p-8 ${
                  t.anchor ? "bg-green border-green" : "bg-white border-grey-mid"
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

      {/* Measuring and reporting */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Accountability
            </span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
              Measuring and reporting
            </h2>
            <p className="text-grey-text leading-relaxed">
              We review these commitments every October, alongside our Carbon Reduction Plan. Progress is reported in our six-monthly quality of support review under Regulation 32 and is available to placing authorities on request.
            </p>
          </div>
          <div className="mt-10 bg-green-faint border border-green-light rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <ClipboardList className="w-6 h-6 text-green shrink-0" />
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-charcoal mb-1">Request our reporting</h3>
              <p className="text-sm text-grey-text">
                Placing authorities can request our quality of support review by emailing{" "}
                <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                  info@ashdensupport.co.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-white py-12 border-t border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-xs text-grey-text">
            Ashden Support Ltd. Social Value and Carbon Reduction Plan. Reviewed annually each October. Aligned with PPN 06/21. Company No. 17013754.
          </p>
        </div>
      </section>
    </>
  );
}
