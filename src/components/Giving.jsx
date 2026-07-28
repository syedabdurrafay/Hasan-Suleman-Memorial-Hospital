import { useEffect, useState } from 'react'
import { givingIntro, givingOptions } from '../content.js'
import givingPhoto1 from '../assets/3.png'
import givingPhoto2 from '../assets/2.png'
import givingPhoto3 from '../assets/1.png'
import DonationModal from './DonationModal.jsx'
import './Giving.css'

// Add/remove images here — the carousel adapts automatically.
const givingPhotos = [
  { src: givingPhoto1, alt: 'Construction supported by donations at HSMH' },
  { src: givingPhoto2, alt: 'Interior finishing work at HSMH' },
  { src: givingPhoto3, alt: 'Hospital grounds under construction' },
]

function GivingCarousel({ images, intervalMs = 4500 }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || images.length <= 1) return
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [paused, images.length, intervalMs])

  return (
    <div
      className="giving__media"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`giving__media-slide${i === active ? ' is-active' : ''}`}
        >
          <img src={img.src} alt={img.alt} />
        </div>
      ))}

      {images.length > 1 && (
        <div className="giving__media-dots">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`giving__media-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Giving() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="giving" className="giving section">
        <div className="container">
          <div className="giving__intro">
            <div className="giving__head">
              <p className="eyebrow">{givingIntro.eyebrow}</p>
              <h2 className="giving__title">{givingIntro.title}</h2>
              <p className="giving__body">{givingIntro.body}</p>
            </div>

            <GivingCarousel images={givingPhotos} />
          </div>

          <div className="giving__grid">
            {givingOptions.map((opt) => (
              <article key={opt.title} className="giving__card">
                <h3 className="giving__card-title">{opt.title}</h3>
                <p className="giving__card-body">{opt.body}</p>
                <button
                  className="btn btn--primary btn--sm giving__cta"
                  onClick={() => setModalOpen(true)}
                >
                  Donate now
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}