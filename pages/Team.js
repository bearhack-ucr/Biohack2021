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
			<img className={Teamstyles.image} src={image} alt="Profile picture" width={150} height={150} />
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
            image="/team_pictures/dwarak.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Dwaraknath Ravichandran"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/david.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="David Villafuerte"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/joshua.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Joshua Bermudez"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/aneesh.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Aneesh Sharma"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/carissa.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Carissa Lo"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/queenie.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Queenie Xu"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/brandon.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Brandon To"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/team_pictures/cammy.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Cammy Ngo"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/team_pictures/ajeet.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Ajeet Kokatay"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/team_pictures/rajbir.JPG"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Rajbir Johar"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
        </div>

        <div className={Teamstyles.credits}>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Operations Committee</h3>
            <div className={Teamstyles.committeeList}>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
          </div>
          </div>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Marketing Committee</h3>
            <div className={Teamstyles.committeeList}>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
          </div>
          </div>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Sponsorship Committee</h3>
            <div className={Teamstyles.committeeList}>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            <p>
              John Doe
            </p>
            </div>
          </div>
          <div className={Teamstyles.col}>
            <h3 className={Teamstyles.committeeTitle}>Web Dev Committee</h3>
            <div className={Teamstyles.committeeList}>
              <p>
                John Doe
              </p>
              <p>
                John Doe
              </p>
              <p>
                John Doe
              </p>
              <p>
                John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
