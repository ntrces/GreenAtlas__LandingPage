import { useState, useRef, useLayoutEffect } from 'react'
import logoImage from './assets/Logo.png'

const navLinks = [
  {
    label: 'About',
    shortLabel: 'About',
    targetId: 'about',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    label: 'Announcements',
    shortLabel: 'News',
    targetId: 'announcements',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    label: 'AR Gallery',
    shortLabel: 'AR',
    targetId: 'ar-gallery',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    label: 'Conservation',
    shortLabel: 'Protect',
    targetId: 'conservation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Species',
    shortLabel: 'Species',
    targetId: 'species',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    label: 'Download',
    shortLabel: 'APK',
    isExternalUrl: '/download',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
]

export const NavigationBarSection = () => {
  const [activeTargetId, setActiveTargetId] = useState(null)
  const [hideTitle, setHideTitle] = useState(false)
  const headerContainerRef = useRef(null)
  const logoImageRef = useRef(null)
  const logoTitleRef = useRef(null)
  const navContainerRef = useRef(null)
  const titleWidthRef = useRef(110)

  useLayoutEffect(() => {
    const checkCollision = () => {
      if (!headerContainerRef.current || !logoImageRef.current || !navContainerRef.current) return
      const navRect = navContainerRef.current.getBoundingClientRect()

      if (logoTitleRef.current) {
        const titleRect = logoTitleRef.current.getBoundingClientRect()
        if (titleRect.width > 0) {
          titleWidthRef.current = titleRect.width
        }
        if (titleRect.right + 8 >= navRect.left) {
          setHideTitle(true)
        }
      } else {
        const logoRect = logoImageRef.current.getBoundingClientRect()
        if (navRect.left - logoRect.right >= titleWidthRef.current + 20) {
          setHideTitle(false)
        }
      }
    }

    checkCollision()
    const resizeObserver = new ResizeObserver(checkCollision)
    if (headerContainerRef.current) resizeObserver.observe(headerContainerRef.current)
    if (navContainerRef.current) resizeObserver.observe(navContainerRef.current)
    window.addEventListener('resize', checkCollision)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkCollision)
    }
  }, [hideTitle])

  const scrollToTopSection = () => {
    setActiveTargetId(null)
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.location.href = '/'
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (item) => {
    if (item.isExternalUrl) {
      window.location.href = item.isExternalUrl
      return
    }

    setActiveTargetId(item.targetId)

    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.location.href = `/#${item.targetId}`
      return
    }

    const section = document.getElementById(item.targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[#fffffff2] px-2 sm:px-4 md:px-16 backdrop-blur-sm">
      <div ref={headerContainerRef} className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-1 sm:gap-4">
        <button
          type="button"
          onClick={scrollToTopSection}
          className="flex shrink-0 items-center gap-1.5 sm:gap-2 text-left"
        >
          <img
            ref={logoImageRef}
            className="h-8 w-9 sm:h-10 sm:w-11.75 shrink-0 object-contain"
            alt="GreenAtlas logo"
            src={logoImage}
          />
          {!hideTitle && (
            <div ref={logoTitleRef} className="flex flex-col shrink-0">
              <div className="font-['Poppins',Helvetica] text-base sm:text-lg font-semibold leading-7 text-[#303d32] whitespace-nowrap">
                GreenAtlas
              </div>
            </div>
          )}
        </button>

        <nav ref={navContainerRef} className="flex shrink-0 items-center gap-0.5 sm:gap-1.5 md:gap-8">
          {navLinks.map((item) => {
            const isActive = activeTargetId === item.targetId
            return (
              <button
                key={item.label}
                type="button"
                title={item.label}
                aria-label={item.label}
                onClick={() => handleNavClick(item)}
                className={`flex flex-col md:flex-row items-center justify-center p-1 sm:px-2 sm:py-1 rounded-lg md:rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#5171561a] text-[#517156] font-semibold'
                    : 'text-neutral-700 hover:text-[#517156] hover:bg-neutral-100'
                }`}
              >
                <span className="flex items-center justify-center text-[#517156] md:hidden" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap mt-0.5 md:mt-0 font-medium md:font-normal">
                  <span className="md:hidden">{item.shortLabel}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
