import logo from '../assets/logo.svg'
import { footer } from '../content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <img src={logo} alt="" className="footer__logo" />
          <span>Friends of HSMH</span>
          <p className="footer__tagline">
            Building Hasan Suleman Memorial Hospital, a Sadqa Jaria for the Malir District of
            Karachi.
          </p>
        </div>

        <div className="footer__contact">
          <h4>Contact us</h4>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <p>{footer.address}</p>
          <a href={`tel:${footer.phone.replace(/[^0-9+]/g, '')}`}>{footer.phone}</a>
        </div>

        <div className="footer__links">
          <h4>Useful links</h4>
          <ul>
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>{footer.copyright}</span>
        <span>{footer.credit}</span>
      </div>
    </footer>
  )
}
