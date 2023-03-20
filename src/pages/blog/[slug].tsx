import Comments from "@/components/Comment";
import Header from "@/components/Header";
import { sanityClient } from "@/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
      </Head>
      <Header />
      <div className="max-w-5xl mx-auto p-5 flex flex-col space-y-5">
        <RoughNotationGroup show>

        <PortableText components={serializers} value={data.body} />
        </RoughNotationGroup>
        <Comments />
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
    revalidate: 60 * 60,
  };
};
