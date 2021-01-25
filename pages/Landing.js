import Image from "next/image";
import styles from "../styles/Common.module.css";
import Landingstyles from "../styles/Landing.module.css";

export default function Landing() {
  return (
    <main className={Landingstyles.main}>
      <h2 className={Landingstyles.subtitle}>Welcome to</h2>
      <h1 className={Landingstyles.title}>Biohack 2021</h1>
    </main>
  );
}
