import fs from "fs";
import path from "path";
import { BsFileEarmarkText } from "react-icons/bs";
import { IoMdDocument } from "react-icons/io";
import React from "react";

type Document = {
  title: string;
  href: string;
  icon: JSX.Element;
  date: string;
};

export function getDocuments(): Document[] {
  const PUBLIC_FILES_PATH = path.join(process.cwd(), "public", "files");

  // Function to get file extension icon
  const getFileIcon = (extension: string): JSX.Element => {
    switch (extension.toLowerCase()) {
      case ".pdf":
        return <IoMdDocument className="w-6 h-6" />;
      case ".doc":
      case ".docx":
      default:
        return <BsFileEarmarkText className="w-6 h-6" />;
    }
  };

  // Function to format date
  const formatDate = (date: string | number | Date): string => {
    const d = new Date(date);
    return `Aktualizacja: ${d.getDate().toString().padStart(2, "0")}.${(
      d.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${d.getFullYear()}`;
  };

  // Recursive function to scan directory
  const scanDirectory = (dirPath: string, baseDir: string = ""): Document[] => {
    const documents: Document[] = [];
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        documents.push(...scanDirectory(fullPath, path.join(baseDir, item)));
      } else {
        const extension = path.extname(item);
        documents.push({
          title: item,
          href: path.join(baseDir, item),
          icon: getFileIcon(extension),
          date: formatDate(stat.mtime),
        });
      }
    }

    return documents;
  };

  return scanDirectory(PUBLIC_FILES_PATH);
}

export function getLastFiveDocuments(documents: Document[]): Document[] {
  // Sort documents by date in descending order and get the last three
  const sortedDocuments = documents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return sortedDocuments.slice(0, 5);
}
