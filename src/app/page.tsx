'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Register the service worker to enable PWA installability + offline support.
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('[PWA] Service worker registered'))
        .catch((err) => console.warn('[PWA] SW registration failed:', err))
    }
  }, [])

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
