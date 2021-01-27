import styles from "../styles/Common.module.css";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className ={styles.contact}>
        <a href="https://www.facebook.com/CitrusHack/"><FaFacebookSquare/></a>
        <a href="https://twitter.com/citrushack?lang=en"><FaInstagramSquare/></a>
        <a href="https://www.instagram.com/citrushack_ucr/?hl=en"><FaLinkedin/></a>
      </div>
      <div className={styles.contactlink}>
        <a href="mailto:biohack.ucr@gmail.com">
          biohack.ucr@gmail.com
        </a>
      </div>
      <div className={styles.teamlink}>
        Powered by love and coffee from the Biohack team.
      </div>
    </div>
  );
}
