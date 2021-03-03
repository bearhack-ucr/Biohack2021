import styles from "../styles/Common.module.css";
import Faqstyles from "../styles/Faq.module.css";
import AccordionComponent from "../components/Accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <main className={Faqstyles.main}>
      <div className={Faqstyles.wrapper}>
        <div>
          <h1 className={styles.title}>FAQs</h1>
          <AccordionComponent />
        </div>
      </div>
      <div className={Faqstyles.strips}>
        <div className={Faqstyles.image}></div>
        {/* <Image src="/assets/strips.png" alt="Strips" height={800} width={600}/> */}
      </div>
    </main>
  );
}
