export default function FooterCopyright({ title }: { title: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/45">
      <span>&copy; {new Date().getFullYear()} {title}. Wszelkie prawa zastrzeżone.</span>
      <span className="text-white/35">Grudziądz, Polska</span>
    </div>
  );
}
