import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { sanityClient } from "../utils/sanity.client";
export default function index({ featuredBlog }: any) {
  console.log(featuredBlog);
  return (
    <>
      <Head>
        <title>nur&apos;s blog</title>
      </Head>
      <Header />
      <div className="max-w-5xl mx-auto p-5 flex flex-col space-y-5">
        <Featured data={featuredBlog[0]} />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  //get the author also along with blog
  const featuredBlog = await sanityClient.fetch(
    `*[_type == "blog" && featured == true]{
      title,
      slug,
      description,
      cover,
      "author": author->name,
      "authorImage": author->image
    }`
  );
  return {
    props: {
      featuredBlog,
    },
  };
}
