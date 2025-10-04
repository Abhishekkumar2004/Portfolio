import React from "react";
import { socials } from "../Data/socials";

const Footer = () => {
  return (
    <footer data-aos="fade-up" data-aos-duration="1000">
      <div className="footer">
        <div
          className="footLeft"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h3>Get in Touch</h3>
        </div>
        <div
          className="footRight"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <a href="mailto:abhishekkumar1221a@gmail.com">
            <button
              id="footerbtn"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </a>
        </div>
      </div>

      <div
        className="socialicons"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.icon.replace("fa-", "").replace("-", " ")}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
