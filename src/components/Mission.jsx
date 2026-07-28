import { useEffect, useState } from 'react'
import { mission } from '../content.js'
import photo1 from '../assets/1.png'
import photo2 from '../assets/2.png'
import photo3 from '../assets/3.png'
import './Mission.css'

const missionImages = [
  { src: photo1, alt: 'Hasan Suleman Memorial Hospital under construction' },
  { src: photo2, alt: 'HSMH hospital building along the National Highway, Malir' },
  { src: photo3, alt: 'Construction progress at Hasan Suleman Memorial Hospital' },
]

export default function Mission() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % missionImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="mission section">
      <div className="mission__card">
        <div className="mission__copy">
          <p className="eyebrow">{mission.eyebrow}</p>
          <h2 className="mission__title">{mission.title}</h2>
          <p className="mission__body">{mission.body}</p>
          <a href={mission.cta.href} className="btn btn--gold">
            {mission.cta.label}
          </a>
        </div>

        <div className="mission__media">
          <div className="mission__slideshow">
            {missionImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`mission__slide ${i === index ? 'is-active' : ''}`}
              />
            ))}
          </div>

          <div className="mission__dots">
            {missionImages.map((_, i) => (
              <button
                key={i}
                className={`mission__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}