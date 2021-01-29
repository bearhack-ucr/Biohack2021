import styles from "../styles/Common.module.css";
import Faqstyles from "../styles/Faq.module.css";
import AccordionComponent from "../components/Accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <main className={Faqstyles.main}>
      <div className={Faqstyles.wrapper}>
        <h1 className={styles.title}>FAQs</h1>
        <AccordionComponent />
      </div>
    </main>
  );
}
