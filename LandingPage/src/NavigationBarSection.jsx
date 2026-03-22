import logoImage from './assets/Logo.png'

const navLinks = [
  { label: 'About', targetId: 'about' },
  { label: 'AR Gallery', targetId: 'ar-gallery' },
  { label: 'Conservation', targetId: 'conservation' },
  { label: 'Species', targetId: 'species' },
]

export const NavigationBarSection = () => {
  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[#fffffff2] px-4 backdrop-blur-sm md:px-16">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 text-left"
        >
          <img
            className="h-10 w-11.75"
            alt="GreenAtlas logo"
            src={logoImage}
          />
          <div className="flex flex-col">
            <div className="font-['Poppins',Helvetica] text-lg font-semibold leading-7 text-[#303d32] whitespace-nowrap">
                GreenAtlas
            </div>
          </div>
        </button>

        <nav className="flex items-center gap-4 overflow-x-auto md:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.targetId)}
              className="h-9 whitespace-nowrap text-sm text-neutral-700 transition-colors hover:text-[#3c5a41]"
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              window.location.href = '/download'
            }}
            className="h-9 rounded-full bg-[#517156] px-4 text-sm text-white"
          >
            Explore Now
          </button>
        </nav>
      </div>
    </header>
  )
}
