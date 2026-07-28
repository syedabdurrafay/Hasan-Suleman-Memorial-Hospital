import { announcement } from '../content.js'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="container announcement__row">
        <p className="announcement__text">
          <span className="announcement__dot" aria-hidden="true" />
          {announcement.text} — <span className="mono">{announcement.date}</span> ·{' '}
          {announcement.place}
        </p>
        <a href={announcement.href} className="announcement__cta">
          {announcement.cta} →
        </a>
      </div>
    </div>
  )
}
