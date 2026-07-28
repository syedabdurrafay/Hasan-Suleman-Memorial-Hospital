import { services } from '../content.js'
import './Services.css'

const icons = {
  'Treatment wards': (
    <path d="M4 20V9l8-5 8 5v11M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'Emergency treatment': (
    <path d="M12 3v8h8v2h-8v8h-2v-8H2v-2h8V3z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'Free healthcare': (
    <path
      d="M12 20.5S3.5 15.2 3.5 9.4A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.8c0 5.8-8.5 11.1-8.5 11.1z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__head">
          <p className="eyebrow">What the hospital will offer</p>
          <h2 className="services__title">Built around three commitments</h2>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="services__card">
              <svg
                className="services__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {icons[s.title]}
              </svg>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
