export default function FooterCopyright({ title }: { title: string }) {
  return (
    <span className="text-base">
      &copy; {new Date().getFullYear()} {title}
    </span>
  );
}
