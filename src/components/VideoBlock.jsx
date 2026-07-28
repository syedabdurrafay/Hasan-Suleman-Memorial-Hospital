import { useEffect, useRef, useState } from 'react'

export default function VideoBlock({ src, title, caption }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true)).catch(() => {})
        } else {
          video.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="video-block" ref={containerRef}>
      <div className="video-block__frame">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          controls
          className="video-block__el"
        />
        {!isPlaying && (
          <div className="video-block__overlay" onClick={togglePlay}>
            <span className="video-block__play-icon">▶</span>
          </div>
        )}
      </div>
      <div className="video-block__copy">
        <h3 className="video-block__title">{title}</h3>
        <p className="video-block__caption">{caption}</p>
      </div>
    </div>
  )
}