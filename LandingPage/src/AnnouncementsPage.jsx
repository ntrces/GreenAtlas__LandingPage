import { useState, useEffect } from 'react'
import { NavigationBarSection } from './NavigationBarSection'
import { supabase } from './supabaseClient'
import logoImage from './assets/Logo.png'

const fallbackAnnouncements = [
  {
    headline_title: 'Community Tree Planting Activity',
    event_date: 'May 25, 2026',
    content: 'Join us for our annual community tree planting event to help restore the local ecosystem and promote biodiversity in Cavite Protected Area.',
    location: 'Cavite Protected Area - Main Entrance',
    contact: 'denr.cavite@gov.ph | (046) 430-5201',
  },
  {
    headline_title: 'AR Botanical Gallery Workshop',
    event_date: 'June 10, 2026',
    content: 'A hands-on workshop on how to use the GreenAtlas AR app for plant identification and learning about local flora.',
    location: 'Trece Martires City Hall - Conference Room',
    contact: 'greenatlas.support@email.com',
  },
  {
    headline_title: 'Wildlife Photography Contest',
    event_date: 'July 15, 2026',
    content: 'Capture the beauty of nature and win prizes. Open to all amateur photographers. Submit your best shots taken within the protected areas.',
    location: 'Online Submission',
    contact: 'contest@greenatlas.org',
  },
  {
    headline_title: 'Eco-Tourism Seminar',
    event_date: 'August 5, 2026',
    content: 'Learn about sustainable eco-tourism practices and how you can contribute to preserving our natural heritage while promoting local tourism.',
    location: 'Cavite Convention Center',
    contact: 'seminar@greenatlas.org',
  },
]

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnnouncements()
    window.scrollTo(0, 0)
  }, [])

  const fetchAnnouncements = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('is_archived', false)
        .order('created_at', { ascending: false })

      if (error) throw error
      
      if (data && data.length > 0) {
        setAnnouncements(data)
      } else {
        setAnnouncements(fallbackAnnouncements)
      }
    } catch (error) {
      console.error('Error fetching announcements:', error)
      setAnnouncements(fallbackAnnouncements)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f3f7f1] text-neutral-800">
      <NavigationBarSection />

      <main className="pt-8 pb-24 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <button 
              onClick={() => window.location.href = '/'} 
              className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm transition-all hover:border-[#517156] hover:text-[#517156] hover:shadow"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-['Merriweather',serif] text-4xl font-bold text-[#303d32] md:text-5xl">
              All Announcements
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Stay updated with the latest events, workshops, and activities organized by GreenAtlas and DENR-Cavite.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {loading ? (
              <div className="col-span-full py-20 text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#517156] border-t-transparent" />
                <p className="mt-4 text-neutral-500">Fetching latest announcements...</p>
              </div>
            ) : announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <article
                  key={index}
                  className="group relative w-full h-full overflow-hidden rounded-3xl border border-[#51715622] bg-white p-6 shadow-sm transition-all hover:shadow-md flex flex-col"
                >
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-[#517156]" />
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-xs lg:text-sm font-semibold text-[#517156] uppercase tracking-wider">
                        Upcoming Event
                      </span>
                      <span className="text-xs lg:text-sm text-neutral-400">{announcement.event_date || announcement.date}</span>
                    </div>
                    
                    <h3 className="mt-4 font-['Merriweather',serif] text-xl lg:text-2xl font-bold text-[#303d32] group-hover:text-[#517156] transition-colors">
                      {announcement.headline_title || announcement.title}
                    </h3>
                    
                    <p className="mt-3 flex-grow text-sm lg:text-base leading-relaxed text-neutral-600">
                      {announcement.content}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-[#517156]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium text-neutral-700">{announcement.location}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-[#517156]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-neutral-500">{announcement.contact}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-lg text-neutral-500">No announcements at the moment. Check back later!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-[#517156] px-4 py-8 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <img src={logoImage} alt="GreenAtlas logo" className="h-10 w-10 rounded-full bg-white object-cover md:h-14 md:w-14" />
              <h2 className="font-['Poppins',Helvetica] text-xl font-semibold md:text-3xl">GreenAtlas</h2>
            </div>
            <p className="mt-2 text-xs text-neutral-200 md:mt-3 md:text-sm">
              Exploring plant biodiversity through augmented reality and science
              education
            </p>
            <p className="mt-1 text-xs text-neutral-300 md:mt-2">
              In partnership with the Department of Environment and Natural
              Resources - Cavite 
            </p>
          </div>

          <div className="mt-6 border-t border-white/20 pt-6 md:mt-10 md:pt-10">
            <h3 className="text-center font-['Merriweather',serif] text-lg font-bold md:text-2xl">
              DENR Contact Information
            </h3>

            <div className="mt-4 grid gap-3 md:mt-8 md:gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR Main Office</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">DENR Bldg. Visayas Avenue, Diliman</p>
                <p className="text-xs md:text-sm">Quezon City Metro Manila 1100 Philippines</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(02) 8925-8277</p>
                <p className="text-xs md:text-sm">0939-918-0169</p>
                 <p className="text-xs md:text-sm">0939-938-0876</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">actioncenter@denr.gov.ph</p>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR Cavite</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">Provincial Capitol Compound</p>
                <p className="text-xs md:text-sm">Brgy.Gregorio, Trece Martires City, Cavite</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(046) 430-5201</p>
                <p className="text-xs md:text-sm">0939-224-9336</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">penro.cavite@denr.gov.ph</p>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR CALABARZON</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">DENR CALABARZON Compound, Mayapa Main Road (Along SLEX)</p>
                 <p className="text-xs md:text-sm">Barangay Mayapa Calamba City Laguna 4027 Philippines</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(049) 540-DENR (3367) local 100</p>
                <p className="text-xs md:text-sm">0945-621-5007</p>
                <p className="text-xs md:text-sm">0908-334-0224</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">r4a@denr.gov.ph</p>
              </article>

            </div>

            <div className="mt-4 rounded-lg border border-red-300 bg-[#82181a4c] p-3 text-center md:mt-8 md:rounded-2xl md:p-6">
              <p className="font-['Merriweather',serif] text-base font-bold md:text-xl">
                Report Environmental Violations
              </p>
              <p className="mt-1 text-xs text-neutral-200 md:mt-2 md:text-sm">
                For illegal logging, wildlife trafficking, and urgent
                environmental concerns
              </p>
              <p className="mt-2 font-['Merriweather',serif] text-2xl font-bold md:mt-3 md:text-4xl">8888</p>
              <p className="mt-0.5 text-xs text-neutral-200 md:mt-1">DENR Hotline</p>
            </div>
          </div>

          <p className="mt-6 border-t border-white/20 pt-4 text-center text-xs text-neutral-200 md:mt-10 md:pt-8 md:text-sm">
            © 2026 GreenAtlas. Promoting plant biodiversity awareness and
            conservation education.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://www.gbif.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group transition-all hover:scale-110 opacity-70 hover:opacity-100"
              title="GBIF - Global Biodiversity Information Facility"
            >
               <img src="https://www.google.com/s2/favicons?domain=gbif.org&sz=128" alt="GBIF" className="h-6 w-6 rounded-full bg-white p-0.5" />
            </a>
            <a 
              href="http://www.stuartxchange.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group transition-all hover:scale-110 opacity-70 hover:opacity-100"
              title="StuartXchange - Philippine Alternative Medicine"
            >
               <img src="https://www.google.com/s2/favicons?domain=stuartxchange.org&sz=128" alt="StuartXchange" className="h-6 w-6 rounded-full bg-white p-0.5" />
            </a>
            <a 
              href="https://www.globinmed.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group transition-all hover:scale-110 opacity-70 hover:opacity-100"
              title="GLOBinMED"
            >
               <img src="https://www.google.com/s2/favicons?domain=globinmed.com&sz=128" alt="GLOBinMED" className="h-6 w-6 rounded-full bg-white p-0.5" />
            </a>
            <a 
              href="https://www.philippineplants.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group transition-all hover:scale-110 opacity-70 hover:opacity-100"
              title="Co's Digital Flora of the Philippines"
            >
               <img src="https://www.google.com/s2/favicons?domain=philippineplants.org&sz=128" alt="Co's Digital Flora" className="h-6 w-6 rounded-full bg-white p-0.5" />
            </a>
            <a 
              href="https://www.worldfloraonline.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group transition-all hover:scale-110 opacity-70 hover:opacity-100"
              title="World Flora Online"
            >
               <img src="https://www.google.com/s2/favicons?domain=worldfloraonline.org&sz=128" alt="World Flora Online" className="h-6 w-6 rounded-full bg-white p-0.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
