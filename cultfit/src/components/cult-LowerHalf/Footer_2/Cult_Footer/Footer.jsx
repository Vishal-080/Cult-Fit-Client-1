import "./Footer.css";
import logo from "./images/cult-logo-white SVG.svg";
import storeLogo from "./images/Frame 4.svg";
import socialLogo from "./images/social-logo.svg";
import Footer2 from "../Footer2";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inside-container">
        <div className="flex flexmargin">
          <div>
            <img src={logo} alt="work-out" className="logo-img" />
            <p className="footer-text">
              At cult.fit, we make group workouts fun, daily food healthy & tasty,
              mental fitness easy with yoga & meditation, and medical & lifestyle
              care hassle-free. #BeBetterEveryDay
            </p>
          </div>

          <div className="footer-link">
            <p>CONTACT US</p>
            <p>BLOG</p>
            <p>PARTNER.FIT</p>
            <p>TALKS</p>
            <p>CAREERS</p>
          </div>

          <div className="footer-links">
            <p>CULTFIT FOR BUSINESSES</p>
            <p>CULT FRANCHISE</p>
            <p>CULT PASS NETWORK</p>
            <p>CORPORATE PARTNERSHIPS</p>
          </div>

          <div className="socialdiv">
            <img src={storeLogo} alt="work-out" className="apps-logo" />
          </div>
        </div>
        <Footer2 />
        <div className="flex">
          <div className="footer-other-links">
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
          </div>

          <div>
            <img src={socialLogo} alt="work-out" className="social-logo" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
