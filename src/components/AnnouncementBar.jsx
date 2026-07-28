import { announcement } from '../content.js'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const content = (
    <span className="announcement__item">
      <span className="announcement__dot" aria-hidden="true" />
      {announcement.text} — <span className="mono">{announcement.date}</span> ·{' '}
      {announcement.place}
      <a href={announcement.href} className="announcement__cta">
        {announcement.cta} →
      </a>
    </span>
  )

  return (
    <div className="announcement">
      <div className="announcement__marquee">
        <div className="announcement__track">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}