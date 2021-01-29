import styles from "../styles/Common.module.css";
import Sponsorstyles from "../styles/Sponsors.module.css";

export default function Sponsors() {
  return (
    <main className={Sponsorstyles.main}>
      <h1 className={styles.title}>Thank you to our Sponsors!</h1>
      <a href="/SponsorUs" className={`${styles.card} ${Sponsorstyles.card}`}>
        <h3>Sponsor us!&rarr;</h3>
      </a>
    </main>
  );
}
