import { motion } from 'framer-motion'

const cases = [
  {
    img: 'https://images.unsplash.com/photo-1604147706289-40f3d329f2f3?q=80&w=1600&auto=format&fit=crop',
    title: 'Aether Finance',
    desc: 'Brand identity and product site for a fintech startup.',
  },
  {
    img: 'https://images.unsplash.com/photo-1604145559206-e3bce0040e9b?q=80&w=1600&auto=format&fit=crop',
    title: 'North Studio',
    desc: 'Editorial redesign and content system.',
  },
  {
    img: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1600&auto=format&fit=crop',
    title: 'Verve Apps',
    desc: 'SaaS web experience and component library.',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Selected Work</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <motion.a
              key={c.title}
              href="#"
              className="group rounded-xl overflow-hidden border border-neutral-200 bg-white"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt="case" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900">{c.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm mt-3 text-[#407BFF]">View Case Study →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
