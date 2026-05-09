import { useState } from 'react'
import logoImage from './assets/Logo.png'

const navLinks = [
  { label: 'About', targetId: 'about' },
  { label: 'Announcements', targetId: 'announcements' },
  { label: 'AR Gallery', targetId: 'ar-gallery' },
  { label: 'Conservation', targetId: 'conservation' },
  { label: 'Species', targetId: 'species' },
]

export const NavigationBarSection = () => {
  const [activeTargetId, setActiveTargetId] = useState(null)

  const scrollToTopSection = () => {
    setActiveTargetId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (targetId) => {
    setActiveTargetId(targetId)

    const section = document.getElementById(targetId)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[#fffffff2] px-2 backdrop-blur-sm sm:px-3 md:px-16">
      <div className="mx-auto flex h-12 w-full max-w-6xl items-center justify-between gap-2 sm:h-14 md:h-16 md:gap-4">
        <button
          type="button"
          onClick={scrollToTopSection}
          className="flex flex-shrink-0 items-center gap-0.5 text-left cursor-pointer sm:gap-1 md:gap-2"
        >
          <img
            className="h-7 w-8 sm:h-8 sm:w-9 md:h-10 md:w-11.75"
            alt="GreenAtlas logo"
            src={logoImage}
          />
          <div className="hidden sm:flex flex-col">
            <div className="font-['Poppins',Helvetica] text-xs font-semibold leading-4 text-[#303d32] whitespace-nowrap sm:text-sm sm:leading-5 md:text-base md:leading-7">
                GreenAtlas
            </div>
          </div>
        </button>

        <nav className="flex flex-shrink items-center gap-0.5 overflow-x-auto sm:gap-1 md:gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.targetId)}
              aria-current={activeTargetId === link.targetId ? 'page' : undefined}
              className="h-8 flex-shrink-0 whitespace-nowrap px-0.5 text-xs transition-colors cursor-pointer sm:px-1 sm:text-xs md:h-9 md:px-2 md:text-sm"
              style={{
                borderBottom: activeTargetId === link.targetId ? '2px solid #3c5a41' : '2px solid transparent',
                color: activeTargetId === link.targetId ? '#2d4632' : '#737373',
              }}
              onMouseEnter={(e) => {
                if (activeTargetId !== link.targetId) {
                  e.currentTarget.style.borderBottomColor = '#3c5a41'
                  e.currentTarget.style.color = '#3c5a41'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTargetId !== link.targetId) {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                  e.currentTarget.style.color = '#737373'
                }
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              window.location.href = '/download'
            }}
            className="h-7 flex-shrink-0 rounded-full bg-[#517156] px-2 text-xs font-medium text-white cursor-pointer transition-colors hover:bg-[#3c5a41] sm:h-8 sm:px-2.5 sm:text-xs md:h-9 md:px-4 md:text-sm"
          >
            Download Now
          </button>
        </nav>
      </div>
    </header>
  )
}
