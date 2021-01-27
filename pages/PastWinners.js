import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";
import Winnerstyles from "../styles/PastWinners.module.css";
import Image from "next/image";
import Card from "../components/Card";

export default function PastWinners() {
  return (
    <main className={Winnerstyles.main}>
      <section>
        <h1 className={styles.title}>Past Winners</h1>
        <div className={Winnerstyles.cardContainer}>
          <div className={Winnerstyles.section}>
            <div className={Winnerstyles.cell}>
              <Image
                src="/placeholder.jpg"
                alt="Filler"
                width={500}
                height={500}
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
          </div>
          <div className={Winnerstyles.section}>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Card
                picture="/placeholder.jpg"
                title="The Mandolorian"
                caption="First place winner"
                description="After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic."
              />
            </div>
            <div className={Winnerstyles.cell}>
              <Image
                src="/placeholder.jpg"
                alt="Filler"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
