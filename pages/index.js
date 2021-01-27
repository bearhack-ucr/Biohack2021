import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";

import Landing from "./Landing";
import Hero from "./Hero";
import PastWinners from "./PastWinners";
import Faq from "./Faq";
import Sponsors from "./Sponsors";
import Volunteer from "./Volunteer";
import Team from "./Team";

import Footer from "../components/Footer";

import { Element, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Element name="Home">
          <Landing />
        </Element>
        <Element name="Hero">
          <Hero />
        </Element>
        <Element name="PastWinners">
          <PastWinners />
        </Element>
        <Element name="Questions">
          <Faq />
        </Element>
        <Element name="Help">
          <Volunteer />
        </Element>
        <Element name="Sponsors">
          <Sponsors />
        </Element>
        <Element name="Team">
          <Team />
        </Element>
      </div>
      <Footer />
    </Container>
  );
}
