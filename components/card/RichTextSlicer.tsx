import React from "react";

export function RichTextSlicer(
  node: React.ReactNode,
  limit: number,
  count: { words: number } = { words: 0 }
): React.ReactNode | null {
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
        RichTextSlicer(child, limit, count)
      ),
    } as React.Attributes);
  }

  return node;
}
