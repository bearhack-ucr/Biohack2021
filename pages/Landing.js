import Image from "next/image"
import styles from "../styles/Common.module.css";

export default function Landing() {
    return (
        <main className={styles.main}>
            <div>
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