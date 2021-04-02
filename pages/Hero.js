import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <main className={Herostyles.main}>
      <div className={Herostyles.wrapper}>
        <div className={Herostyles.calendar}>
          <Image
            src="/assets/calendar.webp"
            alt="Calendar for Biohack"
            width={1000}
            height={1000}
          />
        </div>
        <div className={Herostyles.text}>
          <h1 className={styles.title}>What is BioHack?</h1>
          <p className={styles.description}>
            BioHack is a 24-hour bioengineering focused, health and medicine
            themed, virtual hackathon at the University of California,
            Riverside. <br />
            <br /> Our mission is to inspire new hackers to collaborate with
            students and sponsors throughout computer science and
            bioengineering. We encourage students of any background and in any
            field of study to participate in our inclusive event. We also
            motivate our participants to foster strong, professional
            relationships with industrial and academic sponsors. <br />
            <br /> By hosting BioHack within the Inland Empire, our goal is to
            have sponsors and students foster connections with engineers
            throughout the bioengineering and computer science community across
            California.
          </p>
        </div>
      </div>
    </main>
  );
}
