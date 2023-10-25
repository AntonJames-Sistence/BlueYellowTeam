import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);

    setSubmitted(true);
    setName("");
    setEmail("");
  };

  return (
    <div id="footer-wrapper">
      <div id="footer-cont">
        <div id="footer-left">
          <img id="byf-logo" src="../../public/byf-logo.svg" />
          <span id="legal">
            Blue and Yellow is a 501(c)3 registered non-profit organization.
            Please reach out to ola@blueyellowfoundation.org to receive your
            donation receipt for tax deduction purposes.
          </span>
          <div id="social-links">
            <a
              className="social-link"
              href="https://www.facebook.com/BlueYellowFoundation"
            >
              {" "}
              <i className=" fa-brands fa-facebook-f" />
              FACEBOOK
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/blueyellowfoundation/"
            >
              {" "}
              <i className=" fab fa-instagram"></i> INSTAGRAM
            </a>
            <a
              className="social-link"
              href="https://www.gofundme.com/f/vvyptk-support-ukraine"
            >
              {" "}
              <i className=" fas fa-piggy-bank"></i> Gofundme
            </a>
          </div>
          <span id="copyright">© Blue & Yellow Foundation</span>
        </div>
        <div id="newsletter-signup">
          <form id="newsletter-form" onSubmit={handleSubmit}>
            <span id="newsletter-header">NEWSLETTER</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <button>SUBSCRIBE</button>

            {submitted && !name.length && !email.length ? (
              <span id="signup-thanks">
                Thank you! You have successfully subscribed.
              </span>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
