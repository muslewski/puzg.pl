import { ReactNode } from "react";

// Updated tag types to include ul and li
type Tag = "p" | "b" | "i" | "ul" | "li" | "br" | "ol" | "h3";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
  gap?: string;
};

export default function RichText({ children, gap = "1.75rem" }: Props) {
  return (
    <span className="prose flex flex-col" style={{ gap }}>
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        ul: (chunks: ReactNode) => <ul>{chunks}</ul>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
        br: () => <br />,
        ol: (chunks: ReactNode) => <ol>{chunks}</ol>,
        h3: (chunks: ReactNode) => <h3>{chunks}</h3>,
      })}
    </span>
  );
}

// Example
{
  /* <RichText gap="0rem">{(tags) => t.rich("", tags)}</RichText>; */
}
