export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="lowercase font-semibold tracking-wide">scribl</div>
          <nav className="flex items-center gap-6 text-sm">
            {['Work','Services','About','Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Scribl. All rights reserved.</div>
      </div>
    </footer>
  )
}
