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
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[#fffffff2] px-4 backdrop-blur-sm md:px-16">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={scrollToTopSection}
          className="flex items-center gap-2 text-left cursor-pointer"
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
              aria-current={activeTargetId === link.targetId ? 'page' : undefined}
              className="h-9 whitespace-nowrap px-1 text-sm transition-colors cursor-pointer"
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
            className="h-9 rounded-full bg-[#517156] px-4 text-sm text-white cursor-pointer transition-colors hover:bg-[#3c5a41]"
          >
            Download Now
          </button>
        </nav>
      </div>
    </header>
  )
}
