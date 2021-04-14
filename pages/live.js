import Image from "next/image";
import Container from "../components/Container";
import Sponsors from "./Sponsors";
import Countdown from "../components/Countdown";

import Livestyles from "../styles/Live.module.css";
import styles from "../styles/Common.module.css";

const Judge = ({ picture, name, title, textClass }) => {
  return (
    <div className={Livestyles.judge}>
      <div className={Livestyles.judgePicture}>
        <Image
          src={picture}
          alt="Profile picture"
          width={100}
          height={100}
        />
      </div>
      <div className={textClass}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default function Live() {
  return (
    <Container main>
      <div classname={styles.container}>
        <div className={Livestyles.wrapper}>
          <Countdown 
            date="05/15/2021"
            textClass={Livestyles.countdown}
            timeClass={Livestyles.time}
            numberClass={Livestyles.number}
            unitClass={Livestyles.unit}
          />
        </div>
        <h2 className={Livestyles.title}>Judges</h2>
        <div className={Livestyles.judgeWrapper}>
          <div className={Livestyles.judgeGrid}>
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
            <Judge
              picture="/placeholder.jpg"
              name="The Mandalorian"
              title="Bounty Hunter"
              textClass={Livestyles.caption}
            />
          </div>
        </div>
        <h2 className={Livestyles.title}>Resources</h2>
        <div className={Livestyles.wrapper}>
          <a href="/live" className={Livestyles.link}>
              Resources &rarr;
          </a>
        </div>
        <div className={Livestyles.sponsorsWrapper}>
          <Sponsors />
        </div>
      </div>
    </Container>
  );
}
