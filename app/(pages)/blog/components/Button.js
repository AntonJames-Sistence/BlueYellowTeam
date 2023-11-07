"use client";
import Link from "next/link";

export default function Button({ text, url, css }) {
  return (
    <Link className={css} href={url}>
      {text}
    </Link>
  );
}
