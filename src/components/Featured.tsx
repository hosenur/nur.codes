import urlFor from "@/utils/urlFor";
import Image from "next/image";
import React from "react";

export default function Featured({ data }: any) {
  return (
    <div className="h-96 flex flex-col space-y-3">
      <Image className="rounded-lg" width={1920} height={1080} src={data.cover} alt="test" />
      <div className="flex justify-between">

      <h1 className="text-xl">Featured ✨ {data.title}</h1>
      <div>
        <Image className="rounded-full" width={50} height={50} src={urlFor(data.authorImage).url()} alt="test" />
      </div>
      </div>
      <p>{data.description}</p>
    </div>
  );
}
