// noinspection JSUnusedGlobalSymbols

import React, { useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../styles/modules/grid.module.scss";
import Image from "next/image";
import Style from "./styles.module.scss";
import Footer from "../../components/Footer";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
import training from "../img/training.png";
import opportunities from "../img/oppertunities.png";
import tools from "../img/tools.png";
import LayoutContext from "../../components/layout/LayoutContext";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import clsx from "clsx";

export const pageSettings: PageSettings = {
  path: "/partners",
  linkContent: <>Partners</>,
};

const Index: React.FunctionComponent = () => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const titleDuration = 1;
    let delay = 1;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );

    delay += titleDuration / 2;
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration / 2, delay }
    );
  }, []);

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle([
            "Partnerships",
            "Transforming the potential of data for good",
          ])}
        </title>
      </Head>
      <ReactFullpage
        licenseKey={"A33F98B7-1BF24B82-AB8933EF-A1EC533E"}
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className={clsx(Style.hero, "section")}>
                <div className={clsx(Grid.container, Grid.marginCenter)}>
                  <div className={clsx(Grid.row)}>
                    <div className={clsx(Grid.colXs12, Style.contentCenter)}>
                      <h1 ref={titleRef}>Be a hero for your customers.</h1>
                      <p ref={subtitleRef}>
                        Deploy Nexus to solve your customers problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={clsx(Style.value, "section")}>
                <div className={clsx(Grid.container, Grid.marginCenter)}>
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "black" : "white")
                    }
                  >
                    <div className={clsx(Grid.row, Style.valueContent)}>
                      <div className={clsx(Grid.colLgOffset3, Grid.colXs12)}>
                        <h3>
                          We value our friends. This is more than business for
                          us.
                        </h3>
                        <p>
                          Torch.AI's strong partner ecosystem is foundational to
                          our mission of "Transforming the potential of data for
                          good.” Often, we co-invest in solutions alongside our
                          more established partners, but we have also enjoyed
                          great success providing support to new and emerging
                          partners.
                        </p>
                      </div>
                    </div>
                  </InView>
                </div>
              </div>
              <div className={clsx(Style.benefitsPartners, "section")}>
                <div className={clsx(Grid.container, Grid.marginCenter)}>
                  <div className={clsx(Grid.row, Style.benefitsPartnersTitle)}>
                    <h3>Benefits for our partners.</h3>
                  </div>
                  <div
                    className={clsx(Grid.row, Style.benefitsPartnersContent)}
                  >
                    <div
                      className={clsx(
                        Grid.colXs12,
                        Grid.colLg3,
                        Style.benefitsPartnersItem
                      )}
                    >
                      <div>
                        <Image
                          src={training}
                          alt={
                            "Picture of a man in headphones on a conference call"
                          }
                        />
                      </div>
                      <h5>Training.</h5>
                      <p>
                        Access a robust set of training and enablement content.
                        Get friendly with our Solution Architects to guarantee
                        success of your program.
                      </p>
                    </div>
                    <div
                      className={clsx(
                        Grid.colXs12,
                        Grid.colLg3,
                        Style.benefitsPartnersItem
                      )}
                    >
                      <div>
                        <Image
                          src={opportunities}
                          alt={"Picture of people around a conference table"}
                        />
                      </div>
                      <h5>Customer Opportunities.</h5>
                      <p>
                        Our partners enjoy new sales opportunities, sourced by
                        Torch.AI, and aligned to their core competencies.
                      </p>
                    </div>
                    <div
                      className={clsx(
                        Grid.colXs12,
                        Grid.colLg3,
                        Style.benefitsPartnersItem
                      )}
                    >
                      <div>
                        <Image
                          src={tools}
                          alt={
                            "Picture of a woman in front of a pair of screens showing dashboards"
                          }
                        />
                      </div>
                      <h5>Tools.</h5>
                      <p>
                        Access a wide variety of sales, marketing, ML modeling,
                        and other technical tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={clsx(Style.change, "section")}>
                <div className={clsx(Grid.container, Grid.marginCenter)}>
                  <div className={clsx(Grid.row)}>
                    <div className={clsx(Grid.colXs12, Style.changeTitle)}>
                      <h2>Help us change the world.</h2>
                      <p>Interested in becoming a partner?</p>
                      <p>
                        Contact us for more information{" "}
                        <a href="mailto:partners@torch.ai">
                          {" "}
                          partners@torch.ai{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;