import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>À propos de moi</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Développeur web passionné avec 5 années d’expériences dans la
              création de sites et d&apos;applications web modernes, intuitifs
              et performants. Mon expertise couvre tout le processus de
              développement, de la conception de l’interface utilisateur à
              l’implémentation backend, en passant par l’optimisation des
              performances et l’accessibilité.
            </p>
            <p>
              Chaque projet est une opportunité de créer des interfaces fluides
              et réactives, garantissant une expérience utilisateur de qualité.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Wordpress</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>ANNÉES D&apos;EXPÉRIENCES</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJETS RÉALISÉS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>CLIENTS SATISFAITS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
