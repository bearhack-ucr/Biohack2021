import React, { Component } from "react";
import styles from "../styles/Accordion.module.css";
import QuestionAnswer from "./QuestionAnswer.js";

export default class Accordion extends Component {
  render() {
    return (
      <div className={styles.accordion}>
        <QuestionAnswer
          question="What is a hackathon?"
          answer="A hackathon is a weekend-long event that invites curious minds to learn and build something new. You may pick up a project of your choosing to work on during the event, to dive into a topic you've been meaning to explore. You also get to meet new friends as you work in a team of up to 4!"
        />
        <QuestionAnswer
          question="Who can attend?"
          answer="This event is open to all college students! You do not need any prior skills or qualifications to attend."
        />
        <QuestionAnswer
          question="Do I need to be a CS major or minor to participate?"
          answer="No! Biohack encourages any and all students who are curious about coding and health to participate in our workshops and create a project. We also host beginner friendly workshops where participants can learn new skills that they can utilize in their project submissions."
        />
        <QuestionAnswer
          question="How do I register?"
          answer="Priority Registration will open soon. Please keep an eye out on our social media platforms to hear the announcement. Once applications are open, you will be able to register through this website."
        />
        <QuestionAnswer
          question="Does this event cost money?"
          answer="No! This event is completely free to all participants."
        />
        <QuestionAnswer
          question="Will there be hardware available?"
          answer="Due to the virtual format of this year, we are unfortunately unable to provide hardware as we did in previous years. That said, if you do possess your own hardware/equipment, please feel free to utilize them in your own projects."
        />
        <QuestionAnswer
          question="What should I bring?"
          answer="All you need is access to the internet!"
        />
        <QuestionAnswer
          question="Where do I sleep?"
          answer="Because we are virtual this year, you are able to sleep in the luxury of your own home, unlike previous years."
        />
        <QuestionAnswer
          question="What if I don't know how to use Discord/Hop In?"
          answer={[
            "Support for navigating Discord/Hop In will be readily available during the Hackathon, but it is recommended that you familiarize yourself with these services prior to the event.",
            "You can learn more about ",
            <a style={{textDecoration:"underline"}} href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord">
              Discord here, 
            </a>,
            " and ",
            <a style={{textDecoration:"underline"}} href="https://support.hopin.to/en/articles/3803879-1-master-the-attendee-experience">
              Hop In here.
            </a>,
          ]}
        />
        <QuestionAnswer
          question="Am I required to enter with a team?"
          answer="Participating in the event within a team is not mandatory (although it is recommended, and accommodations can be made should you desire to join a team during check-in)."
        />
        <QuestionAnswer
          question="How many people can be in my team?"
          answer="The maximum number of hackers in a team is 4 participants."
        />
        <QuestionAnswer
          question="Can I submit a project I already made?"
          answer="No! Projects determined to be pre-made or submitted at a previous hackathon will not be considered."
        />
        <QuestionAnswer
          question="Do I require prior experience with computer programming to attend?"
          answer="Prior knowledge is not required to attend the event and go to workshops!"
        />
        <QuestionAnswer
          question="Do I have to create a project?"
          answer="Creating a project is not required to attend the event! If you would like to exclusively go to the workshops, you may do so."
        />
        <QuestionAnswer
          question="What if my question is not listed? "
          answer="Feel free to contact BioHack at biohack.ucr@gmail.com with your questions."
        />
      </div>
    );
  }
}
