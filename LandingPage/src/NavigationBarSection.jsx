import logoImage from './assets/Logo.png'

const navLinks = [
  { 
    label: 'About', 
    targetId: 'about',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    )
  },
  { 
    label: 'Announcements', 
    targetId: 'announcements',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    )
  },
  { 
    label: 'AR Gallery', 
    targetId: 'ar-gallery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
      </svg>
    )
  },
  { 
    label: 'Conservation', 
    targetId: 'conservation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  { 
    label: 'Species', 
    targetId: 'species',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 20 20"/>
      </svg>
    )
  },
]


export const NavigationBarSection = () => {
  const scrollToTopSection = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[#fffffff2] px-2 md:px-16 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={scrollToTopSection}
          className="flex items-center gap-2 text-left shrink-0 mr-2 md:mr-6"
        >

          <img
            className="h-6 w-6 md:h-10 md:w-11.75 object-contain"
            alt="GreenAtlas logo"
            src={logoImage}
          />
          <div className="hidden md:flex flex-col">
            <div className="font-['Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-[#303d32] whitespace-nowrap">
                GreenAtlas
            </div>
          </div>
        </button>





        <nav className="flex-1 min-w-0 flex items-center justify-end gap-2 md:gap-6">
          <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar px-2 py-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.targetId)}
                className="group relative flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg text-neutral-600 transition-all hover:bg-[#51715611] hover:text-[#517156]"
              >
                {/* Icon for small screens */}
                <span className="md:hidden">
                  {link.icon}
                </span>

                {/* Label for large screens */}
                <span className="hidden md:block whitespace-nowrap text-sm font-medium">
                  {link.label}
                </span>

                {/* Hover label for small screens */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-[#303d32] px-2 py-1 text-[10px] font-medium text-white transition-all group-hover:scale-100 md:hidden whitespace-nowrap z-50">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = '/download'
            }}
            className="h-8 md:h-9 shrink-0 rounded-full bg-[#517156] px-3 md:px-5 text-[11px] md:text-sm font-semibold text-white shadow-sm hover:bg-[#3c5a41] transition-colors"
          >
            Explore Now
          </button>
        </nav>



      </div>
    </header>
  )
}
