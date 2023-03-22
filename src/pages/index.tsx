import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../utils/sanity.client";
import moment from "moment";
export default function index({ blogs }: any) {
  return (
    <>
      <Head>
        <title>nur&apos;s blog</title>
      </Head>
      <Header />
      <div className="max-w-5xl pt-24 mx-auto p-5 flex flex-col space-y-5">
        <span className="font-bold text-4xl">Latest Blogs</span>
        {blogs.map((blog: any) => (
          <div key={blog._id} className="flex  space-y-2 flex-col">
            <Link
              href={"/blog/" + blog.slug.current}
              className="font-bold   cursor-pointer"
            >
              {blog.title}
            </Link>
            <p className="text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export async function getServerSideProps() {
  //get 5 latest posts
  const blogs = await sanityClient.fetch(
    `*[_type == "blog" && draft!=true] | order(publishedAt desc) [0..5] {
      _id,
      draft,
      title,
      description,
      slug,
      publishedAt,
      "author": author->name,
    }`
  );

  return {
    props: {
      blogs,
    },
  };
}
