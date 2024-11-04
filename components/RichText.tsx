import { ReactNode } from "react";

// Updated tag types to include ul and li
type Tag = "p" | "b" | "i" | "ul" | "li";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <div className="prose flex flex-col gap-7">
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        ul: (chunks: ReactNode) => <ul>{chunks}</ul>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
      })}
    </div>
  );
}
