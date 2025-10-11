import React, { useState, useEffect } from "react";
import heroImg from "../assets/images/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    query: "",
  });

  // ✅ Reset form when page is loaded or user navigates back to this page
  useEffect(() => {
    const clearForm = () => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        query: "",
      });
    };

    // Clear on first mount
    clearForm();

    // Clear if page is shown again from browser cache (like when pressing "back")
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        clearForm();
      }
    });

    return () => {
      window.removeEventListener("pageshow", clearForm);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/mpwjnarn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          query: "",
        });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("⚠️ Network error. Please try again later.");
    }
  };

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

          {/* Handle form with React */}
          <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />

            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="phone"
            />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              autoComplete="address"
            />

            <label htmlFor="query">Query:</label>
            <textarea
              name="query"
              id="query"
              value={formData.query}
              onChange={handleChange}
              required
              autoComplete="query"
            ></textarea>

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
