import React from "react";
import { bold, book, medium } from "./fonts";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-zinc-900 max-w-7xl border-zinc-800 p-20 border-r-2 border-l-2 mx-auto min-h-screen text-white flex flex-col gap-10">
      <div className="w-2/3 flex flex-col gap-5">
        <Image
          src="https://ik.imagekit.io/kydj5j026nb/image-min_IQzmBOsmi.jpg"
          width={80}
          height={80}
          className="rounded-full"
          alt="Hosenur Rahaman"
          />
        <h1 className={"text-5xl font-bold " + bold.className}>
          Software Designer, CS Student, and Linux Enthusiast.
        </h1>
        <p className={"text-zinc-500 " + medium.className}>
          I am Hosenur Rahaman, a software designer based in India currently
          pursuing my CS Degree. I build stuffs for the mobile and web,
          sometimes I also write articles on tech stuff which I publish on this
          blog, feel free to check out my other sites and socials.
        </p>
        <div className="text-xl flex gap-5">
          <IonIcon
            name="logo-instagram"
            className="text-zinc-500 hover:text-zinc-400 transition-all ease-in-out duration-300 cursor-pointer"
          />
          <IonIcon
            name="logo-github"
            className="text-zinc-500 hover:text-zinc-400 transition-all ease-in-out duration-300 cursor-pointer"
          />
          <IonIcon
            name="logo-twitter"
            className="text-zinc-500 hover:text-zinc-400 transition-all ease-in-out duration-300 cursor-pointer"
          />
          <IonIcon
            name="logo-linkedin"
            className="text-zinc-500 hover:text-zinc-400 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-1/2">

      <div className={medium.className+" flex flex-col gap-2.5"}>
        <p className="text-zinc-500">September 4, 2003</p>
        <h1 className="text-lg">Why I moved from React Native to Flutter?</h1>
        <p className={"text-zinc-500 "+book.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit qui dolorum culpa molestiae vitae corrupti quisquam vel totam recusandae.corrupti quisquam vel totam recusandae</p>
      </div>
    </div>
      </div>
  );
}
