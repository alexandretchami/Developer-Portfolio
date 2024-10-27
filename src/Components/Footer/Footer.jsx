import "./Footer.css";
import footer_logo from "../../assets/footer_logo.png";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Je suis un Développeur Web originaire du CAMEROUN avec 05 ans
            d&apos;expérience.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Entrez votre email" />
          </div>
          <div className="footer-subscribe">S&apos;abonner</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left anchor-link">
          © 2022 Tous droits réservés | TchamiDev.
        </div>
        <div className="footer-bottom-right">
          <p className="anchor-link">Conditions d&apos;utilisation</p>
          <p className="anchor-link">politique de confidentialité</p>
          <p>
            <AnchorLink className="anchor-link" href="#contact">
              Connectez-vous avec moi
            </AnchorLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
