import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { CustomForm } from "./CustomForm";

const Footer = props=> {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the FlowerCart newsletter to receive our best deals and updates
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe any time.
        </p>
        
        <MailchimpSubscribe
          url={'https://gmail.us7.list-manage.com/subscribe/post?u=fc4dff2d4f3722d2beb75ec9c&amp;id=4d2f675655'}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
        
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              FlowerCart <i class="fas fa-seedling"/>
            </Link>
          </div>
          <small className="website-rights"> FlowerCart 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
