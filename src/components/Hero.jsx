import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
            We turn ideas into brands worth remembering.
          </h1>
          <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
            Scribl is a modern creative agency crafting branding, websites, and digital experiences for forward-thinking companies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-[#407BFF] text-white font-medium shadow-[0_20px_40px_-20px_rgba(64,123,255,0.7)] hover:translate-y-[-1px] transition">
              Start a Project
            </a>
            <a href="#work" className="px-6 py-3 rounded-md border border-neutral-200 text-neutral-900 hover:bg-neutral-50 transition">
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
