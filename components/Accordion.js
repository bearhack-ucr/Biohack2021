import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "../styles/Accordion.module.css";

const Faq = ({ question, answer }) => {
  return (
    <AccordionItem className={styles.accordionItem}>
      <AccordionItemHeading className={styles.accordionItemHeading}>
        <AccordionItemButton className={styles.accordionItemButton}>
          {question}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={styles.accordionItemPanel}>
        <p>{answer}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default function AccordionComponent() {
  return (
    <Accordion className={styles.accordion}>
      <Faq
        question="What is a hackathon?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu risus quis varius quam."
      />
      <Faq
        question="Who can join?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu risus quis varius quam."
      />
      <Faq
        question="Do I need to be a CS major or minor to join?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu risus quis varius quam."
      />
      <Faq
        question="How do I register?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu risus quis varius quam."
      />
      <Faq
        question="Does this event cost money?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu risus quis varius quam."
      />
    </Accordion>
  );
}
