import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import "./Footer.css";
// import logoWhiteImage from "./assets/logo-white.png";
// import pages from "../../utils/pages";

const contacts = [
  { icon: faLocationDot, info: "Theni" },
  { icon: faPhone, info: "+91 9123456780" },
  { icon: faEnvelope, info: "aasiyandev@gmail.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

// const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <container>
        <div className="container grid footer-margin">
          <nav className="site-footer-nav">
            <h4>Sitemap</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Certificate</li>
              <li>Videos</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="site-footer-contact">
            <h4>Contact us</h4>
            <address>
              {contacts.map((contact, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </p>
              ))}
            </address>
          </div>
          <div className="site-footer-social">
            <h4>Connect with us</h4>
            {socials.map((social, index) => (
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </container>
    </footer>
  );
};

export default Footer;
