// noinspection JSUnusedGlobalSymbols

import Static from "../../styles/modules/static.module.scss";
import Footer from "../../components/Footer";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement, useContext } from "react";
import LayoutContext from "../../components/layout/LayoutContext";
import { getNewsEntries, getPageEntries } from "../../contentful/client";
import { TypeNews } from "../../generated/contentful";
import ContentfulContent from "../../components/ContentfulContent";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPageEntries();

  return {
    paths: res.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ item: TypeNews }> = async ({
  params,
}) => {
  const { items } = await getPageEntries({
    "fields.slug": params.slug as string,
  });

  return {
    props: { item: items[0] },
  };
};

const Slug = ({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const { content } = item.fields;
  return (
    <>
      <Head>
        <title>{item.fields.title} | Torch.AI</title>
      </Head>
      <section>
        <header className={`${Static["service-header"]}`}>
          <InView
            as="div"
            onChange={(inView) => setNavColor(inView ? "white" : "black")}
          >
            <div className={`${Static["service"]}`}>
              <div className={`${Static["content"]}`}>
                <div className={`post flow`}>
                  <h3>{item.fields.title}.</h3>
                  <p>
                    <em>{item.fields.summary} </em>
                  </p>
                </div>
              </div>
            </div>
          </InView>
        </header>
        {/* <InView as='div' onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}> */}
        <div className={`${Static["service-content"]} post `}>
          <ContentfulContent content={content} />
        </div>
        {/* </InView> */}
      </section>
      <Footer />
    </>
  );
};

export default Slug;
