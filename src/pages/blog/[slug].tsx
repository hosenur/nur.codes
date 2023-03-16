import Comments from "@/components/Comment";
import Header from "@/components/Header";
import { sanityClient } from "@/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import React from "react";

export default function Blog({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <div className="max-w-5xl mx-auto p-5 flex flex-col space-y-5">
        <PortableText value={data.body} />
        <Comments/>
      </div>
    </>
  );
}
export const getStaticPaths = async () => {
  const data = await sanityClient.fetch(`*[_type == "blog"]{
          _id,
          slug {
              current
          }
      }`);
  const paths = data.map((product: any) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }: any) => {
  const data = await sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug: params.slug }
  );
  return {
    props: {
      data,
    },
  };
};
