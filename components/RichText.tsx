import SimpleText from "@/components/card/SimpleText";
import { ReactNode } from "react";

// Updated tag types to include ul and li
type Tag =
  | "p"
  | "b"
  | "strong"
  | "i"
  | "ul"
  | "li"
  | "br"
  | "ol"
  | "h3"
  | "SimpleText";

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
        strong: (chunks: ReactNode) => (
          <strong className="font-semibold">{chunks}</strong>
        ),
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        ul: (chunks: ReactNode) => <ul>{chunks}</ul>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
        br: () => <br />,
        ol: (chunks: ReactNode) => <ol>{chunks}</ol>,
        h3: (chunks: ReactNode) => <h3>{chunks}</h3>,
        SimpleText: (chunks: ReactNode) => <SimpleText>{chunks}</SimpleText>,
      })}
    </span>
  );
}

// Example
{
  /* <RichText gap="0rem">{(tags) => t.rich("", tags)}</RichText>; */
}
