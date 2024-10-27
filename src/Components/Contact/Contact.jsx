import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5a00aed-ab80-4d23-a331-bdf39e65477b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Entrer en contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Parlons</h1>
          <p>
            je suis actuellement disponible pour entreprendre de nouveaux
            projets, alors n&apos;hésitez pas à m&apos;envoyer un message sur
            tout ce sur quoi vous souhaitez que je travaille. Vous pouvez me
            contacter à tout moment.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>
                <a
                  href="mailto:tchamistephane1@gmail.com"
                  className="contact-link"
                >
                  tchamistephane1@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>
                <a href="tel:+33658950856" className="contact-link">
                  +336-58-95-08-56
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Argenteuil, France</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Votre nom</label>
          <input type="text" placeholder="Entrez votre nom" name="name" />
          <label htmlFor="">Votre email</label>
          <input type="email" placeholder="Entrez votre email" name="email" />
          <label htmlFor="">Écrivez votre message ici</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Écrivez votre message ici"
          ></textarea>
          <button type="submit" className="contact-submit">
            Soumettre maintenant
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
