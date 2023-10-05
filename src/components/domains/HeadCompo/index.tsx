"use client";

import Head from "next/head";
import React from "react";

export interface props {
  title?: string;
  description?: string;
  ogUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  currentPathId?: string;
}

// OGP
const Title = "Historedge.com";
const Description =
  "歴史にフォーカスした事業をするRen Shimosawaのポートフォリオサイトです。";
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP-100.jpg?alt=media&token=607b69df-42b7-47fd-b5fe-11b042b6f16f";
const domain = "https://historedge.com";

const HeadCompo: React.FC<props> = ({
  title,
  description,
  ogUrl,
  ogImage,
  noindex,
  currentPathId,
}) => {
  const currentPath = domain + currentPathId;
  return (
    <head>
      <title>{title ?? Title}</title>
      <link rel="icon" href="/site-favicon.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description ?? Description} />
      <meta property="description" content={description ?? Description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl ?? currentPath} />
      <meta property="og:title" content={title ?? Title} />
      <meta property="og:description" content={description ?? Description} />
      <meta property="og:image" content={ogImage ?? OgpImage} />
      <meta property="fb:app_id" content="622490378799539" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl ?? currentPath} />
      <meta property="twitter:title" content={title ?? Title} />
      <meta
        property="twitter:description"
        content={description ?? Description}
      />
      <meta property="twitter:image" content={ogImage ?? OgpImage} />
      <link rel="canonical" href={currentPath} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="shortcut icon" href="site-favicon.png" />
      <link rel="apple-touch-icon" href="site-favicon.png" />
      <link rel="icon" type="image/png" href="site-favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
        as="font"
      />
      <link
        rel="stylesheet"
        as="font"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="preconnect"
        as="font"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
  );
};

export default HeadCompo;
