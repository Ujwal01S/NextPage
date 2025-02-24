import Link from "next/link";
import React from "react";

export default function LinkList() {
  return (
    <div className="text-2xl flex items-center w-full justify-between px-14 py-4 font-semibold  bg-black text-white">
      <span>
        <Link href="/">Featured Food</Link>
      </span>
      <ul className="flex gap-4 text-lg">
        <li>
          <Link href="/events">All Food</Link>
        </li>

        <li>
          <Link href="/share-food">Share Food</Link>
        </li>
      </ul>
    </div>
  );
}
