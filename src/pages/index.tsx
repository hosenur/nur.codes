import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../utils/sanity.client";
import moment from "moment";
export default function index({ blogs }: any) {
  console.log(blogs);
  return (
    <>
      <Head>
        <title>nur&apos;s blog</title>
      </Head>
      <Header />
      <div className="max-w-5xl mx-auto p-5 flex flex-col space-y-5">
        <span className="font-bold text-4xl">Latest Blogs</span>
        {blogs.map((blog: any) => (
          <div key={blog._id}>
            <Link href={"/blog/"+blog.slug.current} className="font-bold text-lg   blog-title cursor-pointer w-max link--metis relative">
              {blog.title}
            </Link>
            <p className="text-lg">{blog.description}</p>
            <span>
              Published on {moment(blog.publishedAt).format("MMM Do YYYY")} by{" "}
              {blog.author}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
export async function getServerSideProps() {
  //get 5 latest posts
  const blogs = await sanityClient.fetch(
    `*[_type == "blog"] | order(publishedAt desc) [0..5] {
      _id,
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
