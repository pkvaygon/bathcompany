import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">Chikago</a>
              </li>
              <li>
                <a href="#">Suburbs</a>
              </li>
              <li>
                <a href="#">Wisconsin</a>
              </li>
              <li>
                <a href="#">North Indiana</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacts</h4>
            <ul>
              <li>
                <a href="#">+1(312)848-9008</a>
              </li>
              <li>
                <a href="#">almazkhannurkhan@gmail.com</a>
              </li>
              <li>
                <a href="#">What's app / Telegram</a>
              </li>
              <li>
                <a href="#">Gmail</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
