import { hero } from '../content.js'
import ImageSlideshow from './ImageSlideshow.jsx'
import photo1 from '../assets/1.png'
import photo2 from '../assets/2.png'
import photo3 from '../assets/3.png'
import './Hero.css'

const heroImages = [
  { src: photo1, alt: 'Hasan Suleman Memorial Hospital under construction' },
  { src: photo2, alt: 'HSMH hospital building along the National Highway, Malir' },
  { src: photo3, alt: 'Construction progress at Hasan Suleman Memorial Hospital' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__row">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__body">{hero.body}</p>

          <div className="hero__ctas">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="hero__stats">
            {hero.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value mono">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__art">
          <ImageSlideshow images={heroImages} />
        </div>
      </div>
    </section>
  )
}
