import Link from "next/link";
import styles from "../styles/Common.module.css";
import landingstyles from "../styles/Landing.module.css";
import { useIsAuthenticated } from "react-auth-kit";
import { FaChevronRight } from "react-icons/fa";

export default function SignUpButton() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <a
      href={`${
        isAuthenticated()
          ? "/account"
          : "https://cms.biohackucr.com/connect/google"
      }`}
      className={`${styles.card} ${styles.wiggle} ${landingstyles.card}`}
    >
      <h3>{`${isAuthenticated() ? "My Account " : "Sign Up"}`} &rarr;</h3>
    </a>
  );
}
