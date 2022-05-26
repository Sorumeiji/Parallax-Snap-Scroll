// noinspection JSUnusedGlobalSymbols

import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";
import { getAllPageEntries, getPageEntries } from "../../contentful/client";
import { TypePage } from "../../generated/contentful";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getAllPageEntries({
    "fields.slug[exists]": true,
  });

  return {
    paths: items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ page: TypePage }> = async ({
  params,
}) => {
  const { items } = await getPageEntries({
    "fields.slug": params.slug as string,
  });

  return {
    props: { page: items[0] },
  };
};

const Slug = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <title>{page.fields.title} | Torch.AI</title>
      </Head>
      <ContentfulPage page={page} />
      <Footer />
    </>
  );
};

export default Slug;