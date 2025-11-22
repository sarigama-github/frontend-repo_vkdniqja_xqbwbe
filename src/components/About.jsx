export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
            Creative thinking. Strategic design. Modern execution.
          </h2>
          <p className="text-neutral-700">
            We combine brand strategy with contemporary design to help companies make their next move. From naming and identity to complex digital products, our work is crafted for clarity, distinction, and momentum.
          </p>
        </div>
        <div className="space-y-4">
          <ul className="space-y-3">
            {[
              'Senior-level team with startup speed',
              'Systems thinking for brand and product',
              'Design measured by business outcomes',
              'Transparent process and tight collaboration',
            ].map((item) => (
              <li key={item} className="p-4 border border-neutral-200 rounded-lg bg-white text-sm text-neutral-700">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex -space-x-3 pt-2">
            {[1,2,3].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt="team" className="w-10 h-10 rounded-full border-2 border-white" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
