import { useState } from 'react'
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
            Download Now
          </button>
        </nav>



      </div>
    </header>
  )
}
