import styles from "../styles/Common.module.css";
import Volunteerstyles from "../styles/Volunteer.module.css";
import Image from "next/image";

export default function Volunteer() {
  return (
    <main className={Volunteerstyles.main}>
      <div className={Volunteerstyles.wrapper}>
        <div className={Volunteerstyles.images}>
          <Image
            src="/assets/website-elements.png"
            alt="Miscellaneous elements"
            width={2080}
            height={2700}
          />
        </div>
        <div className={Volunteerstyles.text}>
          <h1 className={`${styles.title} ${Volunteerstyles.title}`}>Get Involved</h1>
          <p className={`${styles.description} ${Volunteerstyles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
            sapien sit amet metus efficitur semper. Integer id luctus enim.
            Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
            Suspendisse vitae libero magna. Pellentesque sodales at urna nec
            rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
            lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
            sed.
          </p>
          <div className={`${styles.grid} ${Volunteerstyles.grid}`}>
            <a href="https://nextjs.org/docs" className={`${styles.card} ${Volunteerstyles.card}`}>
              <h3>Join Here &rarr;</h3>
            </a>

            <a href="https://nextjs.org/docs" className={`${styles.card} ${Volunteerstyles.card}`}>
              <h3>Join Here &rarr;</h3>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
