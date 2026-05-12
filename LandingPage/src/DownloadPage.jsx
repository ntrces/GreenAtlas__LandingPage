import { QRCodeCanvas } from 'qrcode.react'
import Logo from './assets/Logo.png'

const featuresData = [
  {
    id: 1,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9.16669 16.6667C7.70341 16.6711 6.2919 16.1254 5.21212 15.1379C4.13234 14.1503 3.46316 12.793 3.3373 11.3351C3.21144 9.87724 3.6381 8.42532 4.53265 7.26731C5.4272 6.10929 6.7243 5.32977 8.16669 5.08335C12.9167 4.16669 14.1667 3.73335 15.8334 1.66669C16.6667 3.33335 17.5 5.15002 17.5 8.33335C17.5 12.9167 13.5167 16.6667 9.16669 16.6667Z" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66663 17.5C1.66663 15 3.20829 13.0333 5.89996 12.5C7.91663 12.1 9.99996 10.8333 10.8333 10" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Detailed Plant Information',
    description:
      'Access to structured data, including classification, characteristics, and importance.',
  },
  {
    id: 2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14.1667 1.66669H5.83341C4.91294 1.66669 4.16675 2.41288 4.16675 3.33335V16.6667C4.16675 17.5872 4.91294 18.3334 5.83341 18.3334H14.1667C15.0872 18.3334 15.8334 17.5872 15.8334 16.6667V3.33335C15.8334 2.41288 15.0872 1.66669 14.1667 1.66669Z" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 15H10.0083" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Interactive AR Visualization',
    description:
      'View plant species in augmented reality for a more immersive and engaging learning experience.',
  },
  {
    id: 3,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14.1667 1.66669H5.83341C4.91294 1.66669 4.16675 2.41288 4.16675 3.33335V16.6667C4.16675 17.5872 4.91294 18.3334 5.83341 18.3334H14.1667C15.0872 18.3334 15.8334 17.5872 15.8334 16.6667V3.33335C15.8334 2.41288 15.0872 1.66669 14.1667 1.66669Z" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 15H10.0083" stroke="#517156" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Verified Species Data',
    description:
      'All plant information is carefully documented and validated for accuracy.',
  },
]

export default function DownloadPage() {
  const downloadUrl = `${window.location.origin}/get-app`

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 px-4 py-2 backdrop-blur md:px-10 md:py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-8 w-10 object-contain md:h-10 md:w-12" alt="GreenAtlas logo" src={Logo} />
            <h1 className="font-['Poppins',Helvetica] text-base font-semibold text-[#303d32] md:text-lg">GreenAtlas</h1>
          </div>

          <button
            onClick={() => {
              window.location.href = '/'
            }}
            className="rounded-md border border-[#303d3226] bg-[#e5f5e8] px-3 py-1.5 text-xs font-medium text-[#303d32] cursor-pointer transition-colors hover:bg-[#d4e8d1] md:px-4 md:py-2 md:text-sm"
          >
            Back to Home
          </button>
        </div>
      </header>

      <main className="bg-linear-to-b from-[#e5f5e8] via-white to-[#e5f5e8] px-4 py-8 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:gap-14">
          <section className="text-center">
            <h2 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-4xl lg:text-5xl">
              Download GreenAtlas App
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600 md:mt-6 md:text-base md:leading-8">
              Experience the full power of AR botanical exploration on your mobile device. Scan the QR code to download for Android.
            </p>
          </section>

          <section className="w-full rounded-2xl border border-neutral-200 bg-white p-6 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#5171561a] md:h-20 md:w-20">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="#517156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L2 18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18L22 17" stroke="#517156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-['Merriweather',serif] text-xl font-bold text-[#303d32] md:text-2xl">Get GreenAtlas for Android</h3>
            <p className="mt-2 text-sm text-neutral-600">Scan the QR code below to download the official APK.</p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
              <div className="flex flex-col items-center gap-4">
                <div className="group relative overflow-hidden rounded-2xl border-4 border-[#303d32] bg-white p-4 shadow-xl transition-all hover:scale-105">
                  <QRCodeCanvas 
                    value={downloadUrl} 
                    size={180} 
                    level="H" 
                    includeMargin={false}
                    imageSettings={{
                      src: Logo,
                      x: undefined,
                      y: undefined,
                      height: 40,
                      width: 40,
                      excavate: true,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/10 opacity-0 transition-opacity group-hover:opacity-100">
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#303d32]">Scan to Download</span>
                  <a href="/GreenAtlas.apk" download className="mt-1 text-[10px] text-neutral-500 underline hover:text-[#517156]">
                    Or click here to download directly
                  </a>
                </div>
              </div>

              <div className="hidden h-40 w-px bg-neutral-200 md:block"></div>

              <div className="flex flex-col items-center gap-4">
                <a 
                  href="/app/index.html" 
                  className="group relative flex w-full 'max-w-[240px]' items-center gap-3 overflow-hidden rounded-xl border-2 border-[#303d32] bg-white px-8 py-4 text-[#303d32] transition-all hover:bg-[#f8faf8] hover:shadow-lg active:scale-95"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3C14.5013 5.43828 15.9228 8.63803 16 12C15.9228 15.362 14.5013 18.5617 12 21C9.49872 18.5617 8.07725 15.362 8 12C8.07725 8.63803 9.49872 5.43828 12 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Browser Access</div>
                    <div className="font-bold">Launch Web App</div>
                  </div>
                </a>
                <p className="'max-w-[200px]' text-center text-xs text-neutral-500">
                  Prefer not to install? Try our lightweight web version instead.
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-xs text-neutral-500">
              APK Size: ~104 MB • Web: Any modern browser
            </p>
          </section>

          <section className="w-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-8 lg:p-12">
            <h3 className="text-center font-['Merriweather',serif] text-xl font-bold text-[#303d32] md:text-2xl">What's Included</h3>
            <div className="mt-6 grid gap-4 md:mt-8 md:gap-6 md:grid-cols-3">
              {featuresData.map((feature) => (
                <article key={feature.id} className="flex items-start gap-2 md:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5171561a] md:h-10 md:w-10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">{feature.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-neutral-600 md:mt-2 md:text-sm md:leading-6">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p className="text-xs text-neutral-500 md:text-sm">
            <span className="font-bold">System Requirements:</span> ARCore support for Android
          </p>
        </div>
      </main>

      <footer className="bg-[#517156] px-4 py-6 text-center text-xs text-neutral-200 md:px-10 md:py-8 md:text-sm">
        © 2026 GreenAtlas. Promoting plant biodiversity awareness and conservation education.
      </footer>
    </div>
  )
}
