import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'
import { nav } from '../content.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__row">
        <a href="#home" className="header__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Hasan Suleman Memorial Hospital logo" className="header__logo" />
          <span className="header__wordmark">
             <strong>Hasan Suleman Memorial Hospital</strong>
          </span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a href="#giving" className="btn btn--primary btn--sm header__donate">
            Donate now
          </a>
          <button
            className={`header__burger ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}