import { useEffect, useRef, useState } from 'react'
import './ImageSlideshow.css'

export default function ImageSlideshow({ images, interval = 4500 }) {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const restart = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, interval)
  }

  useEffect(() => {
    if (images.length <= 1) return undefined
    restart()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval])

  const goTo = (i) => {
    setActive(i)
    restart()
  }

  return (
    <div className="slideshow">
      <div className="slideshow__frame">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`slideshow__img${i === active ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="slideshow__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`slideshow__dot${i === active ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
