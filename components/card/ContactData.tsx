import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function ContactData({
  contactData: { mail, phone },
}: {
  contactData: {
    mail: string;
    phone: string;
  };
}) {
  return (
    <div className="flex flex-col gap-4 text-brandPrimaryBlue text-base md:text-lg 3xl:text-xl font-outfit font-normal">
      <a
        className="flex gap-3 items-center hover:text-brandNavyBlue/75 transition-colors "
        href={`mailto:${mail}`}
      >
        <IoMailSharp />
        {mail}
      </a>
      <a
        className="flex gap-3 items-center hover:text-brandNavyBlue/75 transition-colors "
        href={`tel:${phone}`}
      >
        <FaPhone />
        {phone}
      </a>
    </div>
  );
}
