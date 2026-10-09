import Link from "next/link";
import { HeartHandshake, Users, Heart, Briefcase, MapPin, Leaf, ClipboardList, ArrowRight } from "lucide-react";
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
              <p className="text-grey-text leading-relaxed">
                We are working towards Net Zero by 2050, in line with PPN 06/21. Our Carbon Reduction Plan sets out our baseline, our targets and the practical measures in place in our homes, from energy use to recycling. Young people learn to run a household efficiently as part of their independence skills.
              </p>
              <Link
                href="/carbon-reduction-plan"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-green-dark transition-colors group"
              >
                Read our Carbon Reduction Plan
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-grey-mid rounded-2xl p-7">
                <dl className="space-y-3 text-sm">
                  {[
                    ["Net Zero target", "2050"],
                    ["Aligned with", "PPN 06/21"],
                    ["Plan reviewed", "Each October"],
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
            Ashden Support Ltd. Social Value. Reviewed annually each October. Company No. 17013754.
          </p>
        </div>
      </section>
    </>
  );
}
