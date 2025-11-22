import { useEffect, useRef } from 'react'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pinterest_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo_of_Twitter.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
]

export default function Logos() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let start = null
    const speed = 40 // px per second

    function step(ts) {
      if (!start) start = ts
      const progress = ts - start
      el.scrollLeft = (progress / (1000 / speed)) % el.scrollWidth
      requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="bg-[#F6F6F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-500 mb-6">Trusted by forward-thinking teams</p>
        <div ref={trackRef} className="overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="inline-flex items-center gap-12 pr-[50%]">
            {Array.from({ length: 2 }).map((_, pass) => (
              logos.map((src, i) => (
                <img key={`${pass}-${i}`} src={src} alt="logo" className="h-8 opacity-60" />
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
