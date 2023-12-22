import Head from "next/head";
import * as React from "react";

export interface SeoProps {
  title?: string;
}

export default function Seo({ title = "My CV - HiNT Dev" }: SeoProps) {
  return (
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* -------------- */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content="I am developer. This is my website" />
      {/* -------------- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hint.id.vn" />
      <meta property="og:title" content="My CV - HiNT Dev" />
      <meta
        property="og:description"
        content="I am developer. This is my website"
      />
      <meta
        property="og:image"
        content="https://metatags.io/images/meta-tags.png"
      />
      {/* twitter -------------- */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hint.id.vn" />
      <meta property="twitter:title" content="My CV - HiNT Dev" />
      <meta
        property="twitter:description"
        content="I am developer. This is my website"
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/images/meta-tags.png"
      />
    </Head>
  );
}
