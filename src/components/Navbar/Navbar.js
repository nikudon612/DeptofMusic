import React, { useState } from "react";
import "./Navbar.scss";
import Eagle from "../../Assets/DoM-BrandAssets_LogoMark-V1.png";
import Logo from "../..//Assets/DoM-BrandAssets_Logo1-Wordmark-Black.png";
import { Link } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="headerContainer">
        <div className="logoLinks">
          <img
            className="logo"
            src={Eagle}
            alt="Dept. of Music Text Logo"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="logo-container">
        <img
          className="eagle"
          src={Logo}
          alt="Dept. of Music Eagle Logo"
          onClick={handleClick}
        />
        {/* <img
          className="eagle-color"
          src={HoverLogo}
          alt="Dept. of Music Eagle Logo"
          onClick={handleClick}
        /> */}
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
      </div>
      <div className="hamburger">
        <IconButton>
          <MenuIcon onClick={() => setOpen(true)} />
        </IconButton>
        <div className="swipe-menu">
          <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <div>
              <IconButton>
                <ChevronRightIcon onClick={() => setOpen(false)} />
              </IconButton>
            </div>
            <List>
              <ListItem>
                <div className="links-ham">
                  <Link
                    to="work"
                    smooth={true}
                    duration={750}
                    onClick={() => setOpen(false)}
                  >
                    Work
                  </Link>
                  <Link
                    to="about"
                    smooth={true}
                    duration={750}
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={750}
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="team"
                    smooth={true}
                    duration={750}
                    onClick={() => setOpen(false)}
                  >
                    Team
                  </Link>
                </div>
              </ListItem>
            </List>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
