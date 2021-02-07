import styles from "../styles/Common.module.css";
import Volunteerstyles from "../styles/Volunteer.module.css";
import Image from "next/image";

export default function Volunteer() {
  return (
    <main className={Volunteerstyles.main}>
      <div className={Volunteerstyles.wrapper}>
        <div className={Volunteerstyles.images}>
          <Image
            src="/assets/website-elements.png"
            alt="Miscellaneous elements"
            width={2080}
            height={2700}
          />
        </div>
        <div className={Volunteerstyles.text}>
          <h1 className={`${styles.title} ${Volunteerstyles.title}`}>
            Get Involved
          </h1>
          <p className={`${styles.description} ${Volunteerstyles.description}`}>
            Interested in the behind-the-scenes of BioHack? Join our committees
            or be a volunteer during the day! Click on the speech bubbles to get
            to the sign-up forms.
          </p>
          <div className={`${styles.grid} ${Volunteerstyles.grid}`}>
            <a
              href="https://nextjs.org/docs"
              className={`${styles.card} ${Volunteerstyles.card}`}
            >
              <h3>Mentors &rarr;</h3>
            </a>

            <a
              href="https://nextjs.org/docs"
              className={`${styles.card} ${Volunteerstyles.card}`}
            >
              <h3>Volunteers &rarr;</h3>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
