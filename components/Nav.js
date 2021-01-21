import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";

const StickyNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 5;
`;

export function Nav() {
  return (
    <StickyNav>
    <nav className={Navstyles.navigation}>
      <ul className={Navstyles.navlistcontainer}>
        <li className={Navstyles.navlistlink + " " + Navstyles.home}>
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
        <li className={Navstyles.navlistlink + " " + Navstyles.winners}>
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
        <li className={Navstyles.navlistlink + " " + Navstyles.faq}>
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
        <li className={Navstyles.navlistlink + " " + Navstyles.help}>
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
        <li className={Navstyles.navlistlink + " " + Navstyles.sponsors}>
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
    </nav>
    </StickyNav>
  );
}
