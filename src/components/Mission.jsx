import { mission } from '../content.js'
import missionPhoto from '../assets/2.png'
import './Mission.css'

export default function Mission() {
  return (
    <section id="about" className="mission section">
      <div className="container mission__card">
        <div className="mission__copy">
          <p className="eyebrow">{mission.eyebrow}</p>
          <h2 className="mission__title">{mission.title}</h2>
          <p className="mission__body">{mission.body}</p>
          <a href={mission.cta.href} className="btn btn--gold">
            {mission.cta.label}
          </a>
        </div>
        <div className="mission__media">
          <img src={missionPhoto} alt="Hasan Suleman Memorial Hospital building" />
        </div>
      </div>
    </section>
  )
}
