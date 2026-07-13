import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Users, Moon, ClipboardList, BookOpen, Home } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Service",
  description:
    "What Ashden Support provides: 1:1 staffing, sleep-in overnight cover, support planning and keywork for looked-after young people aged 16 and 17 in Birmingham.",
};

const staffingFacts = [
  { icon: Users, title: "1:1 keyworker model", body: "Each young person has a named keyworker who leads on their support plan, conducts regular keywork sessions, and is the main point of contact for commissioners." },
  { icon: Moon, title: "Sleep-in staff overnight", body: "A member of staff sleeps in at the property every night. Young people are not left unsupervised at any point overnight." },
  { icon: ClipboardList, title: "Support planning", body: "We produce an individual support plan for each resident within 28 days of placement. Plans are reviewed regularly and shared with the placing authority." },
  { icon: BookOpen, title: "Daily logs and reports", body: "Staff complete daily logs. Significant events are recorded and reported to the placing authority. Incident reports follow a standard format." },
  { icon: Home, title: "Qualified staff", body: "All staff hold relevant qualifications in children and young people's workforce. Ongoing training is a requirement of the role, not an add-on." },
];

export default function OurServicePage() {
  return (
    <>
      <CredentialsStrip />

      {/* Page header */}
      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              What we provide
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[1.0]">
              Our Service
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              Semi-independent supported accommodation for looked-after young people aged 16 and 17. This is not a children&apos;s home. Staff support residents to develop independence skills and prepare for adult life.
            </p>
          </div>
        </div>
      </section>

      {/* The property */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                The property
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                19 The Worthings, Stirchley, Birmingham B30 3AE.
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  The property is a three-bedroom house in a residential street in Stirchley, south Birmingham. At full capacity it accommodates three young people. Each resident has their own bedroom.
                </p>
                <p>
                  The house has a shared kitchen, living room, and bathroom. It is furnished and equipped. All utility bills are included in the placement fee.
                </p>
                <p>
                  Stirchley has good transport links into Birmingham city centre and is well served by local amenities, including supermarkets, GP surgeries, and public transport. The area is residential and appropriate for young people working towards independent living.
                </p>
                <p>
                  Photography of the actual property is available on request. We do not use stock images to represent our accommodation.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src="/images/study.jpg"
                  alt="Young person developing skills"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-green-faint border border-green-light rounded-2xl p-7 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Address</p>
                    <p className="text-sm font-semibold text-charcoal">19 The Worthings</p>
                    <p className="text-sm text-grey-text">Stirchley, Birmingham B30 3AE</p>
                  </div>
                </div>
                <div className="border-t border-green-light pt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Bedrooms</p>
                    <p className="font-semibold text-charcoal">3</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Max residents</p>
                    <p className="font-semibold text-charcoal">3</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Age range</p>
                    <p className="font-semibold text-charcoal">16 and 17</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-grey-text mb-1">Bills included</p>
                    <p className="font-semibold text-charcoal">Yes</p>
                  </div>
                </div>
                <div className="border-t border-green-light pt-4">
                  <div className="flex items-start gap-3">
                    <Home className="w-4 h-4 text-green mt-0.5 shrink-0" />
                    <p className="text-sm text-grey-text">
                      Property type: three-bedroom terraced house in a residential area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing model */}
      <section className="bg-warm-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-14">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Staffing and support
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 leading-[1.05]">
              How the service runs.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {staffingFacts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-grey-mid rounded-2xl p-8"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center mb-5">
                    <Icon className="w-4.5 h-4.5 text-green" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-sm text-grey-text leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What support looks like */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                In practice
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                What a young person placed here can expect.
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  Young people placed at Ashden Support live in a shared house and manage their own daily routine. This is semi-independent living. Staff are present and available but do not run the house for residents.
                </p>
                <p>
                  Each resident has scheduled keywork sessions with their named keyworker. These cover practical skills development, progress toward goals set in the support plan, and any issues the young person wants to raise.
                </p>
                <p>
                  We support residents to access education, training, and employment where appropriate. We work with the placing authority on this as part of the support plan. We do not duplicate the role of the social worker or personal adviser.
                </p>
                <p>
                  Where a young person has health needs, we liaise with relevant services but do not provide health care. Our focus is on the independent living skills and the stability of the placement.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
                What is not in scope
              </span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                What this service is not.
              </h2>
              <div className="space-y-4 text-grey-text leading-relaxed">
                <p>
                  Ashden Support is not a children&apos;s home and does not operate as one. It is regulated under the Supported Accommodation (England) Regulations 2023, not the Children&apos;s Homes (England) Regulations 2015.
                </p>
                <p>
                  We do not accept young people under 16. We do not accept young people who require residential care, enhanced therapeutic provision, or placement within a secure or semi-secure setting.
                </p>
                <p>
                  We are a small provider. We do not have capacity to accommodate young people with complex or multiple high-level needs that would require staffing or resource beyond a standard 1:1 supported accommodation model.
                </p>
                <p>
                  If a referral does not match what we can provide, we will say so at the point of assessment rather than after a placement begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-white py-16">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-grey-mid bg-white rounded-2xl p-8 md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
              Want to make a referral?
            </h3>
            <p className="text-sm text-grey-text">
              See the For Professionals page for referral process, cohort information and response times.
            </p>
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
