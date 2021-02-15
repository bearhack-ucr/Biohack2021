import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ image, link, name, position, textClass }) => {
  return (
    <div>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <a className={Teamstyles.link}>
          <div className={Teamstyles.profile}>
            <img
              className={Teamstyles.image}
              src={image}
              alt="Profile picture"
              width={110}
              height={110}
            />
            <div className={textClass}>
              <h3 className={Teamstyles.nameText}>{name}</h3>
              <p className={Teamstyles.positionText}>{position}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Team() {
  return (
    <main className={Teamstyles.main}>
      <div className={Teamstyles.wrapper}>
        <div className={Teamstyles.grid}>
          <Profile
            image="/team_pictures/dwarak.webp"
            link="https://www.linkedin.com/in/dwarak-ravi/"
            name="Dwaraknath Ravichandran"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/david.webp"
            link="https://www.linkedin.com/in/davidpaulmvillafuerte/"
            name="David Villafuerte"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/joshua.webp"
            link="http://linkedin.com/in/joshua-thomas-bermudez"
            name="Joshua Bermudez"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/aneesh.webp"
            link="https://www.linkedin.com/in/aneesh-sharma/"
            name="Aneesh Sharma"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/carissa.webp"
            link="https://www.linkedin.com/in/carissa-lo/"
            name="Carissa Lo"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/queenie.webp"
            link="https://www.linkedin.com/in/queeniexu/"
            name="Queenie Xu"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/brandon.webp"
            link="https://www.linkedin.com/in/to-brandon/"
            name="Brandon To"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/cammy.webp"
            link="https://www.linkedin.com/in/cammy-ngo/"
            name="Cammy Ngo"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/ajeet.webp"
            link="https://www.linkedin.com/in/ajeet-kokatay-25470b195/"
            name="Ajeet Kokatay"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/rajbir.webp"
            link="https://www.linkedin.com/in/rajbirjohar/"
            name="Rajbir Johar"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
        </div>

        <div className={Teamstyles.credits}>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Operations Committee</h3>
            <div className={Teamstyles.committeeList}>
              <p>Jimmy Ho</p>
              <p>Gagan Mannur</p>
              <p>Allexa Ortiz</p>
              <p>Jannette Siahon</p>
              <p>Serena Solis</p>
              <p>Minh-Huy Tran</p>
            </div>
          </div>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Marketing Committee</h3>
            <div className={Teamstyles.committeeList}>
              <p>Dev Bhatt</p>
              <p>Yisi He</p>
              <p>Rachel Itow</p>
              <p>Paula Lau</p>
              <p>Poala Ong</p>
              <p>Mitha Senthilkumar</p>
              <p>Khadijeh Sudqi</p>
              <p>Nicky Xu</p>
            </div>
          </div>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Web Dev Committee</h3>
            <div className={Teamstyles.committeeList}>
              <p>J.S. Pescasio</p>
              <p>Edgar Melendrez</p>
              <p>Ann-Marina Miyaguchi</p>
              <p>Diane Shan</p>
              <p>Andre Tran</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
