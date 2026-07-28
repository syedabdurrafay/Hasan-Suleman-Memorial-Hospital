import { hero } from '../content.js'
import heroVideo from '../assets/FHSMH-Video-Dec-30th-1.mp4'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Hasan Suleman Memorial Hospital construction progress video"
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero__overlay" />

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
      </div>
    </section>
  )
}