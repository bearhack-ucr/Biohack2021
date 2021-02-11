import Image from "next/image";
import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export function Nav() {
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
          {/* <li className={Navstyles.navlistlink}>
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
          </li> */}
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
          <li className={Navstyles.navlistlink}>
            <Link
              to="Team"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Team
            </Link>
          </li>
        </ul>
        <ul className={Navstyles.navlistcontainer}>
          <li className={Navstyles.navsignup}>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
