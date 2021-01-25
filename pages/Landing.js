import Image from "next/image"
import styles from "../styles/Common.module.css";
import Landingstyles from "../styles/Landing.module.css"

export default function Landing() {
    return (
        <main className={Landingstyles.main}>
            <span className={Landingstyles.washitape1}></span>
            <div className={Landingstyles.logo}>
                <Image
                src="/logos/black-2-trans.png"
                alt="Biohack Logo"
                width={500}
                height={500}
                />
            </div>
            <span className={Landingstyles.washitape2}></span>
        </main>
    )
}