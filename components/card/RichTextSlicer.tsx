import React from "react";

interface RichTextSlicerProps {
  children: React.ReactNode;
  limit: number;
}

export const RichTextSlicer: React.FC<RichTextSlicerProps> = ({
  children,
  limit,
}) => {
  const count = { words: 0 };

  function sliceText(node: React.ReactNode): React.ReactNode | null {
    if (count.words >= limit) return null;

    if (typeof node === "string") {
      const words = node.split(" ");
      const remainingWords = limit - count.words;

      if (words.length > remainingWords) {
        count.words += remainingWords;
        return words.slice(0, remainingWords).join(" ") + "...";
      } else {
        count.words += words.length;
        return node;
      }
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, (child) =>
          sliceText(child)
        ),
      } as React.Attributes);
    }

    return node;
  }

  return <>{sliceText(children)}</>;
};
