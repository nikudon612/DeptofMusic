import React from "react";
import "./Navbar.scss";
import Eagle from "../../Assets/DoM-BrandAssets_LogoMark-V1.png";
import Logo from "../..//Assets/DoM-BrandAssets_Logo1-Wordmark-Black.png";
import { Link } from "react-scroll";

// import MenuIcon from "@material-ui/icons/Menu";
// import FullLogo from "../../Assets/DOMHeaderLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="headerContainer">
        <a href="/" className="logoLinks">
          <img className="eagle" src={Eagle} alt="Dept. of Music Eagle Logo" />
          <img className="logo" src={Logo} alt="Dept. of Music Text Logo" />
          {/* <img className="logo" src={FullLogo} alt="Dept. of Music Text Logo" /> */}
        </a>
      </div>
      <div className="links">
        <Link to="work" smooth={true} duration={750}>
          Work
        </Link>
        <Link to="about" smooth={true} duration={750}>
          About
        </Link>
        <Link to="contact" smooth={true} duration={750}>
          Contact
        </Link>
        {/* <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
      </div>
      <div className="hamburger">{/* <MenuIcon /> */}</div>
    </div>
  );
};

export default Navbar;
