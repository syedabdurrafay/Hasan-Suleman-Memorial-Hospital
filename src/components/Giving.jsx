import { useState } from 'react'
import { givingIntro, givingOptions } from '../content.js'
import givingPhoto from '../assets/3.png'
import DonationModal from './DonationModal.jsx'
import './Giving.css'

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
            <div className="giving__media">
              <img src={givingPhoto} alt="Construction supported by donations at HSMH" />
            </div>
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