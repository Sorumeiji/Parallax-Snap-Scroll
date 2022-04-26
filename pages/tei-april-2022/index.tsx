// noinspection JSUnusedGlobalSymbols

import React, { ReactElement } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPage } from "../../contentful/client";
import ContentfulContent from "../../components/ContentfulContent/ContentfulContent";
import Styles from "./styles.module.scss";
import Header from "./components/Header/Header";
import Container from "../../components/Container/Container";

export const getStaticProps: GetStaticProps<{
  page?: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/4dnKUurLPWlBXCQojRTIGA
  const page = await getPage("4dnKUurLPWlBXCQojRTIGA");

  return {
    props: {
      page,
    },
  };
};

const Index = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <title>{page.fields.title || "Content not found"} | Torch.AI</title>
      </Head>
      <section>
        <Header page={page} />
        <Container className={Styles.grid}>
          <main className={Styles.main}>
            {<ContentfulContent content={page.fields.content} />}
          </main>
          <aside className={Styles.aside}>
            {page.fields.aside && (
              <ContentfulContent content={page.fields.aside} />
            )}
          </aside>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Index;