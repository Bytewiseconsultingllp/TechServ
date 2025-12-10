import React from "react";
import "./Footer.css"; // (Create this file – CSS is provided below)

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">

        {/* Header Section */}
        <div className="footer-header">
          <div className="footer-logo">
            <img src="/iwhite.png" alt="Logo" />
          </div>

          <div className="footer-social-links">
            <ul>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="row">
          <div className="col footer-links">
            <h3>Quick Link</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/vision">Vision</a></li>
              <li><a href="#!">Training</a></li>
              <li><a href="#!">Resources</a></li>
            </ul>
          </div>

          <div className="col footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="#!">Public Cloud</a></li>
              <li><a href="#!">Microsoft 365</a></li>
              <li><a href="#!">Google Workplace</a></li>
              <li><a href="#!">Zoho Workplace</a></li>
            </ul>
          </div>

          <div className="col footer-links">
            <h3>&nbsp;</h3>
            <ul>
              <li><a href="#!">Managed Services</a></li>
              <li><a href="#!">App Development</a></li>
              <li><a href="#!">Contact Us</a></li>
            </ul>
          </div>

          <div className="col footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="tel:+123456789">+123 456 789</a></li>
              <li><a href="mailto:info@domain.com">info@Domain.com</a></li>
              <li>Bangalore</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
