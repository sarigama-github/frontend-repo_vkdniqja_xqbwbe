export default function Testimonials() {
  const items = [
    {
      quote: 'They pushed our thinking and delivered a brand were genuinely proud of.',
      name: 'Maya Patel',
      role: 'CMO, North Studio',
    },
    {
      quote: 'The collaboration felt seamless. Results were immediate and measurable.',
      name: 'Ethan Wu',
      role: 'Founder, Aether Finance',
    },
    {
      quote: 'Clean, modern, and on-point. They made complex simple.',
      name: 'Jules Martin',
      role: 'Product Lead, Verve',
    },
  ]

  return (
    <section className="py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-neutral-200 bg-white p-6">
              <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600">{t.name} · {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
