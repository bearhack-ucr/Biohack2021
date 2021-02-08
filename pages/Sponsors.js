import styles from "../styles/Common.module.css";
import Sponsorstyles from "../styles/Sponsors.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const hoverTrans = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Sponsors() {
  return (
    <main className={Sponsorstyles.main}>
      <div className={Sponsorstyles.wrapper}>
        <h1 className={`${styles.title} ${Sponsorstyles.title}`}>
          Thank you to our Sponsors!
        </h1>
        <a
          href="https://tinyurl.com/biohack2021-Sponsorship-Packet"
          className={`${styles.card} ${Sponsorstyles.card} ${styles.wiggle}`}
        >
          <h3>Sponsor us!&rarr;</h3>
        </a>
        <div className={Sponsorstyles.images}>
          <div className={`${Sponsorstyles.logoflex}`}>
            <motion.a href="https://bmesucr.weebly.com/">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={hoverTrans}
                src="/sponsors/bmes.png"
                className={`${Sponsorstyles.large}`}
                alt="bmes logo"
              ></motion.img>
            </motion.a>
            <motion.a href="https://www.cert.ucr.edu/">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={hoverTrans}
                src="/sponsors/cecert.png"
                className={`${Sponsorstyles.large}`}
                alt="cecert logo"
              ></motion.img>
            </motion.a>
            <motion.a href="https://techpartnerships.ucr.edu/">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={hoverTrans}
                src="/sponsors/officeoftech.png"
                className={`${Sponsorstyles.large}`}
                alt="bmes logo"
              ></motion.img>
            </motion.a>
            <motion.a href="https://acmucr.org">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={hoverTrans}
                src="/sponsors/acm_ucr.png"
                className={`${Sponsorstyles.standard2}`}
                alt="acm logo"
              ></motion.img>
            </motion.a>

            <motion.a href="https://www.kgi.edu">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={hoverTrans}
                src="/sponsors/kgi.png"
                className={`${Sponsorstyles.kgi}`}
                alt="kgi logo"
              ></motion.img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://www.digitalocean.com/"
            >
              <img
                src="/sponsors/digitalocean.png"
                className={`${Sponsorstyles.standard}`}
                alt="digitalocean logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://balsamiq.com/"
            >
              <img
                src="/sponsors/balsamiq.png"
                className={`${Sponsorstyles.standard2}`}
                alt="balsamiq logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://techpartnerships.ucr.edu/launchpad-ucr"
            >
              <img
                src="/sponsors/launchpad.png"
                className={`${Sponsorstyles.standard}`}
                alt="launchpad logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://cloud.google.com"
            >
              <img
                src="/sponsors/googlecloud.png"
                className={`${Sponsorstyles.standard}`}
                alt="gcp logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://linode.com/"
            >
              <img
                src="/sponsors/linode.png"
                className={`${Sponsorstyles.standard}`}
                alt="linode logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://www.twilio.com"
            >
              <img
                src="/sponsors/twilio.png"
                className={`${Sponsorstyles.standard}`}
                alt="twilio logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://www.sketch.com/"
            >
              <img
                className={`${Sponsorstyles.standard2}`}
                src="/sponsors/sketch.png"
                alt="sketch logo"
              ></img>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              href="https://www.wolfram.com/"
            >
              <img
                src="/sponsors/wolfram.png"
                className={`${Sponsorstyles.standard2}`}
                alt="wolfram logo"
              ></img>
            </motion.a>
          </div>
        </div>
      </div>
    </main>
  );
}
