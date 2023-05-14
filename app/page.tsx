import React from "react";
import { bold, book, medium } from "./fonts";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Header from "@/components/Header";

export default function page() {
  return (
    <div className="px-5 md:px-20 py-5 md:py-10 flex flex-col gap-10">
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <Image
          src="https://ik.imagekit.io/kydj5j026nb/image-min_IQzmBOsmi.jpg"
          width={80}
          height={80}
          className="rounded-full"
          alt="Hosenur Rahaman"
        />
        <h1 className={"text-4xl md:text-5xl font-bold text-zinc-100 " + bold.className}>
          Software Designer, CS Student, and Linux Enthusiast.
        </h1>
        <p className={"text-zinc-500 text-base md:text-lg " + book.className}>
          I am Hosenur Rahaman, a software designer based in India currently
          pursuing my CS Degree. I build stuffs for the mobile and web,
          sometimes I also write articles on tech stuff which I publish on this
          blog, feel free to check out my other sites and socials.
        </p>
        <div className="text-xl flex gap-5">
          <IonIcon
            name="logo-instagram"
            className="text-zinc-500  hover:text-zinc-400 transition-all ease-in-out duration-300 cursor-pointer"
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
      <div className="flex flex-col  md:flex-row  w-full gap-10">
        <div className="w-full">
          <div className={medium.className + " flex flex-col gap-2.5"}>
            <p className="text-zinc-500">September 4, 2003</p>
            <h1 className="text-lg">
              Why I moved from React Native to Flutter?
            </h1>
            <p className={"text-zinc-500 " + book.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit qui dolorum culpa molestiae vitae corrupti quisquam vel totam
              recusandae.corrupti quisquam vel totam recusandae
            </p>  
          </div>
        </div>
        <div className="w-full border-zinc-800 border-2 rounded-lg p-5 flex flex-col gap-5">
          <span className="flex gap-2.5 items-center text-lg text-zinc-100">
            <IonIcon name="flash-outline" />

            <h1 className={medium.className}>Starters & Templates</h1>
          </span>
          <div className={"bg-zinc-800 px-5 py-2.5 rounded"}>
            <span className="flex items-center gap-2.5">

            <IonIcon name="logo-github" />
            <h1 className={medium.className}>Expo + Zustand</h1>
            </span>
          </div>
          <div className={"bg-zinc-800 px-5 py-2.5 rounded"}>
            <span className="flex items-center gap-2.5">

            <IonIcon name="logo-github" />
            <h1 className={medium.className}>React + Zustand + TailWind</h1>
            </span>
          </div>
          <div className={"bg-zinc-800 px-5 py-2.5 rounded"}>
            <span className="flex items-center gap-2.5">

            <IonIcon name="logo-github" />
            <h1 className={medium.className}>Expo + AppWrite</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
