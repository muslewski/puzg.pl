export default function FooterCopyright({ title }: { title: string }) {
  return (
    <span className="text-lg">
      &copy; {new Date().getFullYear()} {title}
    </span>
  );
}
