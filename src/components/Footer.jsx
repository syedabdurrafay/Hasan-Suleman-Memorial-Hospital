import logo from '../assets/logo.jpeg'
import { footer } from '../content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <img
            src={logo}
            alt="Hasan Suleman Memorial Hospital"
            className="footer__logo"
          />

          <h3 className="footer__brand-name">
            Hasan Suleman Memorial Hospital
          </h3>

          <p className="footer__tagline">
            Building Hasan Suleman Memorial Hospital as a lasting
            <strong> Sadaqah Jariyah</strong> to provide compassionate,
            affordable and quality healthcare for the underserved communities
            of Malir District, Karachi.
          </p>
        </div>

        <div className="footer__contact">
          <h4>Contact Us</h4>

          <a href={`mailto:${footer.email}`}>
            {footer.email}
          </a>

          <p>{footer.address}</p>

          <a href={`tel:${footer.phone.replace(/[^0-9+]/g, '')}`}>
            {footer.phone}
          </a>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>

          <ul>
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <span>{footer.copyright}</span>

        <span>{footer.credit}</span>
      </div>
    </footer>
  )
}