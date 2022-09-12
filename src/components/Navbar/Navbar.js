import React from "react";
import "./Navbar.scss";
import Eagle from "../../Assets/DoM-BrandAssets_LogoMark-V1.png";
import Logo from "../..//Assets/DoM-BrandAssets_Logo1-Wordmark-Black.png";
<link rel="stylesheet" href="https://use.typekit.net/fzf4moa.css"></link>;
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="headerContainer">
        <a href="/" className="logoLinks">
          <img className="eagle" src={Eagle} alt="Dept. of Music Eagle Logo" />
          <img className="logo" src={Logo} alt="Dept. of Music Text Logo" />
        </a>
      </div>
      <div className="links">
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
