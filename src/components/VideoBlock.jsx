import './VideoBlock.css'

export default function VideoBlock({ src, title, caption, className = '' }) {
  return (
    <figure className={`video-block ${className}`.trim()}>
      <video
        className="video-block__video"
        src={src}
        controls
        preload="metadata"
        playsInline
      />
      {(title || caption) && (
        <figcaption className="video-block__caption">
          {title && <span className="video-block__title">{title}</span>}
          {caption && <span className="video-block__desc">{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}
