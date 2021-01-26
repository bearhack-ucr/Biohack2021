import Image from "next/image";
import styles from "../styles/Common.module.css";
import Landingstyles from "../styles/Landing.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Landing() {
  return (
    <main className={Landingstyles.main}>
      <h2 className={Landingstyles.subtitle}>Welcome to</h2>
      <h1 className={Landingstyles.title}>Biohack 2021</h1>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Sign Up! &rarr;</h3>
        </a>

        <Link to="Hero"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className={styles.card}
        >
          <h3>Learn More &rarr;</h3>
        </Link>
      </div>
    </main>
  );
}
