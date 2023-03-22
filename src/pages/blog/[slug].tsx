import Comments from "@/components/Comment";
import Header from "@/components/Header";
import { sanityClient } from "@/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Footer from "@/components/Footer";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import moment from "moment";
const serializers = {
  types: {
    codeBlock: ({ value }: any) => (
      <SyntaxHighlighter
        showLineNumbers
        className="rounded"
        style={dracula}
        language={"javascript"}
      >
        {value.code}
      </SyntaxHighlighter>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <RoughNotation
        padding={1}
        iterations={2}
        color="#B1AFFF"
        multiline
        type="underline"
      >
        {children}
      </RoughNotation>
    ),
    strong: ({ children }: any) => (
      <RoughNotation
        padding={5}
        iterations={1}
        color="#B1AFFF"
        multiline
        type="highlight"
      >
        {children}
      </RoughNotation>
    ),
  },
};
export default function Blog({ data }: { data: any }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.cover} />
      </Head>
      <Header />
      <div className="max-w-5xl pt-24 mx-auto p-5 flex flex-col space-y-5">
        <h1 className="font-bold text-3xl">{data.title}</h1>
        <div className="flex space-x-5 items-center">
          <Image
            src={urlFor(data.authorImage).url()}
            width={30}
            height={30}
            alt="author"
            className="rounded-full"
          />
          <span className="font-bold">{data.author}</span>
          <span>•</span>
          <span className="font-bold">
            Published at {moment(data.publishedAt).format("MMM Do YYYY")}
          </span>
        </div>
        <Image src={data.cover} width={1920} height={1080} alt="banner" />
        <RoughNotationGroup show>
          <PortableText components={serializers} value={data.body} />
        </RoughNotationGroup>
        <Comments />
      </div>
      <Footer />
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
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      description,
      body,
      cover,
      "authorImage": author->image,
      "author": author->name,
    }`,
    { slug: params.slug }
  );
  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
};
