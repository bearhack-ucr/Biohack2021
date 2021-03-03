import Image from "next/image";
import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function Nav() {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isHome, setIsHome] = useState(0);

  useEffect(() => {
    setIsHome(router.pathname == "/");
  }, [router.pathname]);

  if (!isHome) {
    return (
      <nav className={Navstyles.navwrapper}>
        <div className={Navstyles.navigation}>
          <ul className={Navstyles.navlistcontainer}>
            <li className={Navstyles.navlistlink}>
              <a href="/">Home</a>
            </li>
            <li className={Navstyles.navlogo}>
              <a href="/" className="logo">
                <Image
                  src="/logos/black-1-trans.png"
                  alt="Biohack logo"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li className={Navstyles.navlistlink}>
            {!isAuthenticated() && (
                  <a
                    href={`https://cms.citrushack.com/connect/google`}
                  >
                    Sign Up &rarr;
                  </a>
              )}
              {isAuthenticated() && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault;
                      signIn({
                        token: "",
                        expiresIn: 0,
                        tokenType: "",
                        authState: "",
                      });
                    }}
                    className="signup"
                  >
                    Sign Out &rarr;
                  </a>
                )}
            </li>
          </ul>

          <ul className={Navstyles.navlistcontainer}>
            <li className={Navstyles.navsignup}></li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className={Navstyles.navwrapper}>
      <div className={Navstyles.navigation}>
        <ul className={Navstyles.navlistcontainer}>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Home
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              About
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="PastWinners"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Winners
            </Link>
          </li>
          <li className={Navstyles.navlogo}>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="logo"
              className="logo"
            >
              <Image
                src="/logos/black-1-trans.png"
                alt="Biohack logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Questions"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Faq
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Help"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Help
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Sponsors"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Sponsors
            </Link>
          </li>
        </ul>
        <ul className={Navstyles.navlistcontainer}>
          <li className={Navstyles.navsignup}>
            {!isAuthenticated() && (
              <div className={"link"}>
                <a
                  href={`https://cms.citrushack.com/connect/google`}
                  className="signup"
                >
                  Sign Up
                </a>
              </div>
            )}
            {isAuthenticated() && (
              <div className={"link"}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault;
                    signIn({
                      token: "",
                      expiresIn: 0,
                      tokenType: "",
                      authState: "",
                    });
                  }}
                  className="signup"
                >
                  Sign Out
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
