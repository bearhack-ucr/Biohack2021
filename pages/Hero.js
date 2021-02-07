import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import Image from "next/image";

export default function Hero() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const router = useRouter();
  const [authHookValue, setHookValue] = useState(false);

  useEffect(() => {
    setHookValue(isAuthenticated());
  }, []);

  return (
    <main className={Herostyles.main}>
      <div className={Herostyles.wrapper}>
        <div className={Herostyles.calendar}>
          <Image
            src="/assets/calendar.png"
            alt="Calendar for Biohack"
            width={1000}
            height={1000}
          />
        </div>
        <div className={Herostyles.text}>
          <h1 className={styles.title}>What is Biohack?</h1>
          <p className={styles.description}>
            BioHack is a 24-hour bioengineering focused, health and medicine
            themed, virtual hackathon at the University of California,
            Riverside. <br />
            <br /> Our mission is to encourage new hackers to collaborate with
            students and sponsors throughout computer science and
            bioengineering. We encourage students of any race and/or ethnicity,
            gender, and orientation, as well as any field of study, engineering
            or non-engineering, to participate in our event, to learn and
            develop valuable technical and teamwork skills in a safe and
            intellectual environment. We also encourage our participants to
            foster strong, professional relationships with industrial and
            academic sponsors. <br />
            <br /> And by hosting BioHack within the Inland Empire, our goal is
            to have sponsors and students spawn connections with engineers
            throughout the bioengineering and computer science community across
            California.
          </p>
          {/* <div className={styles.grid}>
        {!authHookValue && (
          <a
            href={`http://localhost:1337/connect/google`}
            className={`${styles.card} ${Herostyles.btn}`}
          >
            Sign Up
          </a>
        )}
        {authHookValue && (
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault;
              signOut();
            }}
            className={`${styles.card} ${Herostyles.btn}`}
          >
            Sign Out
          </a>
        )}
        {authHookValue && (
          <a href="/account" className={`${styles.card} ${Herostyles.btn}`}>
            My Application
          </a>
        )}
      </div> */}
        </div>
      </div>
    </main>
  );
}
