export default function TopTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <div className="w-fit bg-gradient-to-r from-brandPrimaryBlue/75 via-[#3493E5]/50 to-brandWashedBlue/25 pb-1 rounded-[18px]  lg:rounded-[24px] border-b-2 border-double border-brandWashedBlue/65">
        <div className="bg-white px-6 lg:px-10 py-2 rounded-[16px] lg:rounded-[22px]">
          <h1 className="text-primaryBlue-700  text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl md:leading-snug xl:leading-snug 3xl:leading-snug font-extrabold font-montserrat">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}
