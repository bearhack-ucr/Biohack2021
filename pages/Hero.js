import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { useRouter } from "next/router";
import {useEffect, useState} from 'react';
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

export default function Hero() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const router = useRouter();
  const [authHookValue, setHookValue] = useState(false);

  useEffect(() => {
    setHookValue(isAuthenticated());
  }, []);

  return (
    <main className={Herostyles.main}>
      <h1 className={styles.title}>Biohack 2021</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        sapien sit amet metus efficitur semper. Integer id luctus enim.
        Curabitur a arcu et arcu tincidunt lobortis eget sed risus. Suspendisse
        vitae libero magna. Pellentesque sodales at urna nec rutrum. Nulla lorem
        nisl, congue id aliquet vitae, malesuada sed lacus. Phasellus dapibus
        euismod leo, ut scelerisque tellus rhoncus sed.
      </p>
      <div className={styles.grid}>
      {!authHookValue && (
              <a
                href={`http://localhost:1337/connect/google`}
                className={`${styles.card} ${Herostyles.btn}`}
              >
                Sign Up
              </a>
      )}
      {authHookValue && (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault;
                signOut();
              }}
              className={`${styles.card} ${Herostyles.btn}`}
            >
              Sign Out
            </a>
        )}
        {authHookValue && (
            <a
              href="/account"
              className={`${styles.card} ${Herostyles.btn}`}
            >
              My Application
            </a>
        )}

      </div>
    </main>
  );
}
