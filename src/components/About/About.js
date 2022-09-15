import React from "react";
import "./About.scss";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <span>About Us</span>
          <div className="text">
            <span>
              Michael Freeman's prodigious talents playing reed instruments
              brought him from his childhood home of New Orleans to Berklee
              College of Music, where Michael's ska band was signed to Tim
              Armstrong's Hellcat Records. After successive Vans' Warped Tours,
              Michael realized that living in a van with ten other guys, playing
              the same nine songs repeatedly was not as glamorous as he'd
              envisioned. Subsequently, Michael quit the band and re-enrolled in
              college to earn his Bachelor's degree.
              <br />
              <br />
              But, Michael could never quit music, leading him to pursue a MM
              from NYU and ultimately an internship in the mcgarrybowen music
              department, which was led at that time by Rob Kaplan. Michael
              learned the craft of integrating music into advertising and
              excelled to the point where he, up until recently, ran Ogilvy's
              music department.
              <br />
              <br />
              Rob's journey from mcgarrybowen took him to Sony Music Publishing,
              where he represented the catalog to advertisers, brands and
              consumer products manufacturers globally, and then to form his own
              music supervision and production company, Wool & Tusk.
              <br />
              <br />
              Now, Rob and Michael have reunited to create the Department of
              Music, your outsourced, in-house music department for any and all
              music needs. Drop us a note and we'd love to tell you more.
              <br />
            </span>
          </div>
        </div>
      </div>
      <Link to="contact" smooth={true} duration={750}>
        <ExpandCircleDownIcon className="circle" />
      </Link>
    </div>
  );
};

export default About;
