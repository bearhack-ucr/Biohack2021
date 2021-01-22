import Image from "next/image"
import styles from "../styles/Common.module.css";
import Landingstyles from "../styles/Landing.module.css"

export default function Landing() {
    return (
        <main className={Landingstyles.main}>
            <div className={Landingstyles.logo}>
                <Image
                src="/logos/blue-3-trans.png"
                alt="Biohack Logo"
                width={500}
                height={500}
                />
            </div>
        </main>
    )
}