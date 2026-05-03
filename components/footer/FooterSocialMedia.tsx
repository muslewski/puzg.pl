"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialMediaLinks = [
  { href: "#", icon: FaFacebook, label: "Facebook" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
  { href: "#", icon: FaLinkedin, label: "LinkedIn" },
  { href: "#", icon: FaXTwitter, label: "Twitter / X" },
];

export default function FooterSocialMedia({ findUs }: { findUs: string }) {
  return (
    <>
      <h3 className="!bg-none !text-white text-[11px] uppercase tracking-[0.18em] font-semibold font-outfit">
        {findUs}
      </h3>
      <ul className="list-none !pl-0 !flex !flex-row flex-wrap gap-3">
        {socialMediaLinks.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="flex items-center justify-center h-9 w-9 rounded-full text-white/55 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandWashedBlue/60"
            >
              <Icon size={18} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
