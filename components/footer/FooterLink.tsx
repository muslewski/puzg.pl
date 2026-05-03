import { Link } from "@/i18n/routing";
import { ComponentProps } from "react";
import clsx from "clsx";

interface FooterLinkProps {
  href: ComponentProps<typeof Link>["href"];
  children: React.ReactNode;
  className?: string;
}

export default function FooterLink({
  href,
  children,
  className = "",
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-white/65 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
