import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSocialMedia({ findUs }: { findUs: string }) {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-semibold">{findUs}</span>
      <div className="flex flex-wrap gap-8 text-white">
        <a
          href=""
          className="hover:text-blue-600 transition-all hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(59,130,246,0.5)]"
        >
          <FaFacebook size="42" />
        </a>
        <a
          href=""
          className="hover:text-pink-500 transition-all hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(236,72,153,0.5)]"
        >
          <FaInstagram size="42" />
        </a>
        <a
          href=""
          className="hover:text-red-600 transition-all hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(220,38,38,0.5)]"
        >
          <FaYoutube size="44" />
        </a>
        <a
          href=""
          className="hover:text-[#0e76a8] transition-all hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(14,118,168,0.5)]"
        >
          <FaLinkedin size="42" />
        </a>
        <a
          href=""
          className="hover:text-[#657786] transition-all hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(101,119,134,0.5)]"
        >
          <FaXTwitter size="42" />
        </a>
      </div>
    </div>
  );
}
