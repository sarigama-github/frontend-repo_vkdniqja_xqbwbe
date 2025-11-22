import { Brush, MonitorSmartphone, PenTool, Code2 } from 'lucide-react'

const services = [
  {
    icon: Brush,
    title: 'Branding & Identity',
    desc: 'Naming, voice, visuals, systems',
  },
  {
    icon: MonitorSmartphone,
    title: 'UI/UX & Web Design',
    desc: 'Websites, product design, prototyping',
  },
  {
    icon: PenTool,
    title: 'Content & Creative',
    desc: 'Campaigns, visuals, strategy',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Webflow, Framer, custom dev',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-10">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-lg bg-[#407BFF]/10 text-[#407BFF] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
              <p className="text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
