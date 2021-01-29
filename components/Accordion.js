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
        answer="A hackathon is a weekend-long event that invites curious minds to learn and build something new. You may pick up a project of your choosing to work on during the event, to dive into a topic you've been meaning to explore. You also get to meet new friends as you work in a team of up to 4!"
      />
      <Faq
        question="Who can attend?"
        answer="This event is open to all college students! You do not need any prior skills or qualifications to attend."
      />
      <Faq
        question="Do I need to be a CS major or minor to participate?"
        answer="No! Biohack encourages any and all students who are curious about coding and health to participate in our workshops and create a project. We also host beginner friendly workshops where participants can learn new skills that they can utilize in their project submissions."
      />
      <Faq
        question="How do I register?"
        answer="Priority Registration will open soon. Please keep an eye out on our social media platforms to hear the announcement. Once applications are open, you will be able to register through this website."
      />
      <Faq
        question="Does this event cost money?"
        answer="No! This event is completely free to all participants."
      />
      <Faq
        question="Will there be hardware available?"
        answer="Due to the virtual format of this year, we are unfortunately unable to provide hardware as we did in previous years. That said, if you do possess your own hardware/equipment, please feel free to utilize them in your own projects."
      />
      <Faq
        question="What should I bring?"
        answer="All you need is access to the internet!"
      />
      <Faq
      question="Where do I sleep?"
      answer="Because we are virtual this year, you are able to sleep in the luxury of your own home, unlike previous years."
       />
    </Accordion>
  );
}
