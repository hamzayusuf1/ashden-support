import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import CredentialsStrip from "@/components/CredentialsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Policy list for Ashden Support Ltd. Copies available on request by emailing info@ashdensupport.co.uk.",
};

const policyList: {
  category: string;
  policies: { name: string; href?: string }[];
}[] = [
  {
    category: "Safeguarding",
    policies: [
      { name: "Safeguarding Children and Young People Policy" },
      { name: "Missing from Home and Care Policy" },
      { name: "Criminal Exploitation and County Lines Policy" },
      { name: "Counter Bullying Policy" },
    ],
  },
  {
    category: "Operations",
    policies: [
      { name: "Behaviour Management Policy" },
      { name: "Substance Misuse (Drugs and Alcohol) Policy" },
      { name: "Health and Safety Policy" },
      { name: "Fire Risk Assessment" },
      { name: "Business Continuity Plan" },
    ],
  },
  {
    category: "Staffing",
    policies: [
      { name: "Safer Recruitment Policy" },
      { name: "Staff Disciplinary, Grievance and Supervision Policy" },
      { name: "Whistleblowing Policy" },
      { name: "Equality, Diversity and Inclusion Policy" },
    ],
  },
  {
    category: "Young people",
    policies: [
      { name: "Statement of Purpose" },
      { name: "Young Person's Guide" },
      { name: "Complaints and Representations Policy" },
    ],
  },
  {
    category: "Governance",
    policies: [
      { name: "Data Protection and Information Security Policy" },
      { name: "Social Value and Carbon Reduction Plan", href: "/social-value" },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <CredentialsStrip />

      <section className="bg-warm-white border-b border-grey-mid">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-2xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-green">
              Governance
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[1.0]">
              Policies
            </h1>
            <p className="text-xl text-grey-text leading-relaxed">
              Copies of any policy listed here are available on request. Email{" "}
              <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                info@ashdensupport.co.uk
              </a>{" "}
              and we will respond within one working day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyList.map((group) => (
              <div key={group.category} className="bg-warm-white border border-grey-mid rounded-2xl p-7">
                <h2 className="font-display text-lg font-bold text-charcoal mb-5">{group.category}</h2>
                <ul className="space-y-3">
                  {group.policies.map((policy) => (
                    <li key={policy.name} className="flex items-start gap-2.5">
                      <FileText className="w-3.5 h-3.5 text-green mt-0.5 shrink-0" />
                      {policy.href ? (
                        <Link href={policy.href} className="text-sm text-green hover:underline">
                          {policy.name}
                        </Link>
                      ) : (
                        <span className="text-sm text-grey-text">{policy.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-faint border border-green-light rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Mail className="w-6 h-6 text-green shrink-0" />
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-charcoal mb-1">Request a policy</h3>
              <p className="text-sm text-grey-text">
                Email the title of the policy you need to{" "}
                <a href="mailto:info@ashdensupport.co.uk" className="text-green hover:underline font-medium">
                  info@ashdensupport.co.uk
                </a>
                . We aim to respond within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
