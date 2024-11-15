export default function FooterCopyright({ title }: { title: string }) {
  return (
    <span className="text-lg self-center">
      &copy; {new Date().getFullYear()} {title}
    </span>
  );
}
