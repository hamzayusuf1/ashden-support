import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-flex items-center shrink-0">
      <Image
        src={variant === "light" ? "/images/logo-light.png" : "/images/logo.png"}
        alt="Ashden Support"
        width={326}
        height={120}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
}
