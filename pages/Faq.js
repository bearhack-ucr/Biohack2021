import styles from "../styles/Common.module.css";
import Faqstyles from "../styles/Faq.module.css";
import AccordionComponent from "../components/Accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <main className={Faqstyles.main}>
      <div className={Faqstyles.wrapper}>
        <h1 className={styles.title}>Questions?</h1>
        <p className={styles.description}>
          Here are the most commonly asked questions! Feel free to ask us any
          question you don't see on here.
        </p>
        <AccordionComponent />
      </div>
    </main>
  );
}
