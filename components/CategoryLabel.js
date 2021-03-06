import React from "react";
import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };
  return (
    <div
      className={`px-2 py-1  text-gray-100 bg-red-600 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
