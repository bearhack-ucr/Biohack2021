import styles from "../styles/Common.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <a href="https://www.facebook.com/UCRBioHack/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/biohack_ucr/?hl=en">
          <FaInstagramSquare />
        </a>
        <a href="https://www.linkedin.com/company/biohackucr/">
          <FaLinkedin />
        </a>
      </div>
      <div className={styles.contactlink}>
        <a href="mailto:biohack.ucr@gmail.com">biohack.ucr@gmail.com</a>
      </div>
      Scrapbooked with ❤️ and ☕ from the Biohack team.
    </div>
  );
}
