import { useEffect } from 'react'

export default function DownloadTrigger() {
  useEffect(() => {
    // Small delay to ensure the UI renders before the browser starts the download/redirect
    const timer = setTimeout(() => {
      window.location.href = '/GreenAtlas.apk'
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#e5f5e8] via-white to-[#e5f5e8] px-4 text-center">
      <div className="relative mb-8">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-[#51715622] border-t-[#517156]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="#517156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <h1 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-3xl">
        Starting Download
      </h1>
      <p className="mt-4 max-w-xs text-neutral-600 md:text-lg">
        The GreenAtlas APK is being prepared for your device.
      </p>
      
      <div className="mt-10 rounded-xl bg-white p-6 shadow-sm border border-neutral-100">
        <p className="text-sm text-neutral-500">
          If the download doesn't start in a few seconds,
        </p>
        <a 
          href="/GreenAtlas.apk" 
          download 
          className="mt-2 inline-block font-bold text-[#517156] underline hover:text-[#3c5a41]"
        >
          Click here to try again
        </a>
      </div>
      
      <footer className="absolute bottom-8 text-xs text-neutral-400">
        © 2026 GreenAtlas • Security Verified APK
      </footer>
    </div>
  )
}
