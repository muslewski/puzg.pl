import Image from "next/image";

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
        className="flex gap-3 items-center hover:text-brandDark transition-colors "
        href={`mailto:${mail}`}
      >
        <div className="relative h-6 w-6">
          <Image
            src="/images/icons/Mail.svg"
            fill
            className="object-cover"
            alt="Mail Icon"
          />
        </div>
        {mail}
      </a>
      <a
        className="flex gap-3 items-center hover:text-brandDark transition-colors "
        href={`tel:${phone}`}
      >
        <div className="relative h-6 w-6">
          <Image
            src="/images/icons/Calling.svg"
            fill
            className="object-cover"
            alt="Mail Icon"
          />
        </div>
        {phone}
      </a>
    </div>
  );
}
