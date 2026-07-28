import { events } from '../content.js'
import VideoBlock from './VideoBlock.jsx'
import decRecap from '../assets/FHSMH-Video-Dec-30th-1.mp4'
import './Events.css'

export default function Events() {
  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="events__head">
          <p className="eyebrow">{events.eyebrow}</p>
          <h2 className="events__title">{events.title}</h2>
        </div>

        <div className="events__grid">
          {events.items.map((ev) => (
            <article
              key={ev.city}
              className={`events__card ${ev.featured ? 'events__card--featured' : ''}`}
            >
              <span className="events__city mono">{ev.city}</span>
              <h3 className="events__name">{ev.name}</h3>
              {ev.date && (
                <p className="events__meta">
                  {ev.date} · {ev.venue}
                </p>
              )}
              <button
                className={`btn btn--sm ${ev.featured ? 'btn--gold' : 'btn--ghost'}`}
              >
                {ev.cta}
              </button>
            </article>
          ))}
        </div>

        <div className="events__recap">
          <VideoBlock
            src={decRecap}
            title="Highlights from our December gathering"
            caption="A look back at the community that came together to support this project."
          />
        </div>

        <p className="events__past">{events.pastNote}</p>
      </div>
    </section>
  )
}
