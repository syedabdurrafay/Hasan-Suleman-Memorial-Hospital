import { useEffect, useRef } from 'react'
import { progress } from '../content.js'
import VideoBlock from './VideoBlock.jsx'
import siteWalkthrough from '../assets/Progress-ection-video.mp4'
import yearInReview from '../assets/FHSMH-Progress-2025.mp4'
import './ProgressTimeline.css'

export default function ProgressTimeline() {
  const timelineRef = useRef(null)

  const total = progress.stages.length
  const doneCount = progress.stages.filter((s) => s.status === 'done').length
  const hasActive = progress.stages.some((s) => s.status === 'active')
  const progressPercent = ((doneCount + (hasActive ? 0.5 : 0)) / total) * 100

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect() // animate once
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="progress" className="progress section">
      <div className="container">
        <div className="progress__head">
          <p className="eyebrow">{progress.eyebrow}</p>
          <h2 className="progress__title">{progress.title}</h2>
          <p className="progress__body">{progress.body}</p>
        </div>

        <ol
          ref={timelineRef}
          className="progress__timeline"
          style={{ '--progress-fill': `${progressPercent}%` }}
        >
          {progress.stages.map((stage, i) => (
            <li
              key={stage.label}
              className={`progress__stage progress__stage--${stage.status}`}
              style={{ '--stage-index': i }}
            >
              <div className="progress__marker">
                {stage.status === 'done' ? '✓' : i + 1}
              </div>
              <div className="progress__stage-copy">
                <span className="progress__stage-label">{stage.label}</span>
                <span className="progress__stage-detail">{stage.detail}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="progress__videos">
          <VideoBlock
            src={siteWalkthrough}
            title="A walkthrough of the site"
            caption="See the grey structure and interior finishing work up close."
          />
          <VideoBlock
            src={yearInReview}
            title="2025, year in review"
            caption="How far construction came over the past year, Alhumdulillah."
          />
        </div>
      </div>
    </section>
  )
}