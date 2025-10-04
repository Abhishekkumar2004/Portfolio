import React from "react";
import heroImg from "../assets/images/contact.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contactSection"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 data-aos="fade-down" data-aos-duration="1000">
        Contact Me
      </h2>
      <div className="contactMe">
        <div
          className="contactLeft"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={heroImg} alt="Contact Illustration" />
        </div>

        <div
          className="contactRight"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3 data-aos="fade-up" data-aos-delay="300">
            Get In Touch
          </h3>
          <form
            action="https://formspree.io/f/mpwjnarn"
            method="POST"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="email">E-Mail:</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" id="phone" required />

            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" required />

            <label htmlFor="query">Query:</label>
            <textarea name="query" id="query" required></textarea>

            <button
              type="submit"
              id="btn"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
