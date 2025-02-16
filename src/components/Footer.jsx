import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Updated Footer Top with a Newsletter Subscription CTA */}
      <div className="footer-top">
        <p className="cta-text">
          Stay updated with our latest breaking news! Subscribe to our newsletter for exclusive content and updates.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
      </div>

      <div className="footer-menu">
        {/* Help Desk Section */}
        <div className="help-desk">
          <h4 className="service-time">Help Desk</h4>
          <p className="phone-number">(+1) 123-456-7890</p>
          <p className="service-hours">24/7 Customer Service</p>
        </div>

        {/* Footer Navigation Links */}
        <ul className="footer-nav">
          <li><Link to ="">Home | </Link></li>
          <li><Link to="/about">About | </Link></li>
          <li><Link to="/contact" >Contact Us | </Link></li>
          <li><Link to="/userpolicy">User Policy | </Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div>
          <p>&copy; 2025 Prabanjam News. All rights reserved.</p>
        </div>
        <div>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
