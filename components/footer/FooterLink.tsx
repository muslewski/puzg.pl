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
        "transition-transform hover:scale-[102%] px-6 py-3 bg-gray-800/30 rounded-lg shadow-lg",
        className
      )}
    >
      {children}
    </Link>
  );
}
