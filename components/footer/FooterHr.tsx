export default function FooterHr() {
  return (
    <div className="relative flex items-center" aria-hidden>
      <span className="w-1.5 h-1.5 bg-brandBrightBlue/70 rounded-full" />
      <hr className="flex-grow h-px border-0 bg-gradient-to-r from-white/10 via-white/25 to-white/10 mx-2" />
      <span className="w-1.5 h-1.5 bg-brandBrightBlue/70 rounded-full" />
    </div>
  );
}
