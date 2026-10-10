'use client'

export default function Home() {
  return (
    <iframe
      src="/gallery/index.html"
      title="Actress Gallery"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        margin: 0,
        padding: 0,
        display: 'block',
      }}
      allow="fullscreen"
    />
  )
}
