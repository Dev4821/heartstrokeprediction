import React from "react";
import "./Footer.css";
import mainLogo from "./assests/mainLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram,faTwitter,faTumblr,faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  
  return (
    <footer className="footer_h">
      <div className="container">
        <div className="row">
          <div className="footer_h-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
            </ul>
          </div>
          
          <div className="footer_h-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Symptoms</a>
              </li>
              <li>
                <a href="/">Prevention</a>
              </li>
              <li>
                <a href="/">Treatment</a>
              </li>
            </ul>
          </div>
          <div className="footer_h-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="/">GLA University</a>
              </li>
              <li>
                <a href="/">Campus 17km Stone, NH-19</a>
              </li>
              <li>
                <a href="/">Mathura-Delhi Road P.O. Chaumuhan</a>
              </li>
              <li>
                <a href="/">Mathura-281 406</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="Footer_hr" />
      <div className="style-0">
        <div className="style-1">
          <a href="/" className="style-2">
            <img
              src={mainLogo}
              alt=""
              className="style-3"
            />
          </a>
        </div>
        <div className="style-4">
          Copyright © Stroke Guardian private limited. All Rights Reserved.
        </div>
        <div className="style-5">
          <a href="/" className="social-link">
        
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/" className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="social-link">
          <FontAwesomeIcon icon={faTumblr} />
          </a>
          <a href="/" className="social-link">
          <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
