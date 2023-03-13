import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title>nur&apos;s blog</title>
      </Head>
      <Header/>
      <div className="max-w-5xl mx-auto p-5">
        <Featured />
      </div>
    </>
  )
}
