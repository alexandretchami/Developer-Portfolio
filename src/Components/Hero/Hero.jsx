import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Je suis Alexandre TCHAMI</span>, développeur Web basé en FRANCE.</h1>
        <p>je suis spécialisé dans la création de sites Web et d&apos;applications Web réactifs et centrés sur l&apos;utilisateur.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connectez-vous avec moi</AnchorLink></div>
            <div className="hero-resume">
            <a href="/alexandre_cv.pdf" download="AlexandreTCHAMI_CV.pdf" className='download-link'>
              Mon CV
            </a>
            </div>
        </div>
    </div>
  )
}

export default Hero