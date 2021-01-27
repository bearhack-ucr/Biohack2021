import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

const Profile = ({ image, link, name, position }) => {
return (
	<div>
	<Link href={link} target="_blank" rel="noreferrer noopener">
		<a className={Teamstyles.link}>
		<div className={Teamstyles.profile}>
			<img className={Teamstyles.image} src={image} alt="Profile picture" width={220} height={220} />
			<h3 className={Teamstyles.nameText}>{name}</h3>
			<p className={Teamstyles.positionText}>{position}</p>
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
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Dwaraknath Ravichandran"
            position="Director"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="David Villafuerte"
            position="Director"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Joshua Bermudez"
            position="Operations Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Aneesh Sharma"
            position="Operations Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Carissa Lo"
            position="Marketing Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Queenie Xu"
            position="Marketing Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Brandon To"
            position="Sponsorship Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Cammy Ngo"
            position="Sponsorship Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Ajeet Kokatay"
            position="Web Dev Lead"
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Rajbir Johar"
            position="Web Dev Lead"
          />
        </div>
        <div className={Teamstyles.contactWrapper}>
          <div className={styles.contact}>
            <a href="https://www.facebook.com/UCRBioHack/"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagramSquare/></a>
            <a href="https://www.linkedin.com/company/biohackucr/"><FaLinkedin/></a>
          </div>
          <div className={styles.contactlink}>
            <a href="mailto:biohack.ucr@gmail.com">
              biohack.ucr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
