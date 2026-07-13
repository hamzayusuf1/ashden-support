import { ShieldCheck } from "lucide-react";

export default function CredentialsStrip({ inline = false }: { inline?: boolean }) {
  const items = [
    "Ofsted-registered · URN 2907824",
    "ICO registered",
    "Company No. 17013754",
  ];

  if (inline) {
    return (
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 bg-green-light text-charcoal text-[0.72rem] font-semibold px-3 py-1.5 rounded-full"
          >
            <ShieldCheck className="w-3 h-3 text-green shrink-0" />
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-green-faint border-b border-green-light">
      <div className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[0.72rem] font-semibold text-charcoal-soft uppercase tracking-[0.1em]">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-1.5">
              {i > 0 && <span className="hidden sm:inline text-grey-mid mr-8">·</span>}
              <ShieldCheck className="w-3.5 h-3.5 text-green shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
