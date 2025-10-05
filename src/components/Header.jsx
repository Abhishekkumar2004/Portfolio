import React from "react";
import { navLinks } from "../Data/nav";
import logo from "../assets/images/logo.png";
import resumePDF from "../assets/AbhishekKumar(Resume).pdf";

const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="1000">
      <nav className="navBar">
        <div className="logo" data-aos="fade-right" data-aos-duration="1000">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div
          className="navItem"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <ul>
            {navLinks.map((link, idx) => (
              <li
                key={link.id}
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
                data-aos-duration="800"
              >
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rightNav"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <a href={resumePDF} download>
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
