export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden bg-[#407BFF] text-white p-10 md:p-14 shadow-[0_24px_60px_-20px_rgba(64,123,255,0.7)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
              <p className="mt-2 text-white/90">Well get back within 24 hours.</p>
            </div>
            <a href="#" className="px-6 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-white/90 transition self-start">Start a Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
