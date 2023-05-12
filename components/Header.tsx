import { medium } from "@/app/fonts";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full px-20 py-10 flex items-center justify-between">
      <Image
        src="https://ik.imagekit.io/kydj5j026nb/image-min_IQzmBOsmi.jpg"
        width={50}
        height={50}
        className="rounded-full opacity-0"
        alt="Hosenur Rahaman"
      />

      <div
        className={
          medium.className +
          " bg-zinc-800  px-10 py-2.5 rounded-full flex gap-5"
        }
      >
        <Link href="/">About</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Snippets</Link>
      </div>
      <div className="text-3xl">
        <IonIcon name="moon" className="text-zinc-500" />
      </div>
    </div>
  );
}
