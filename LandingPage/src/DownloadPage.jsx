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
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 px-6 py-3 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-10 w-12 object-contain" alt="GreenAtlas logo" src={Logo} />
            <h1 className="font-['Poppins',Helvetica] text-lg font-semibold text-[#303d32]">GreenAtlas</h1>
          </div>

          <button
            onClick={() => {
              window.location.href = '/'
            }}
            className="rounded-md border border-[#303d3226] bg-[#e5f5e8] px-4 py-2 text-sm text-[#303d32] cursor-pointer transition-colors hover:bg-[#d4e8d1]"
          >
            Back to Home
          </button>
        </div>
      </header>

      <main className="bg-linear-to-b from-[#e5f5e8] via-white to-[#e5f5e8] px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
          <section className="text-center">
            <h2 className="font-['Merriweather',serif] text-4xl font-bold text-[#303d32] md:text-5xl">
              Download GreenAtlas App
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Experience the full power of AR botanical exploration on your mobile device. Download the GreenAtlas app for Android.
            </p>
          </section>

          <section className="w-full rounded-2xl border border-neutral-200 bg-white p-6 text-center md:p-10">
            <svg className="mx-auto block" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" fill="white" fill-opacity="0.6"/>
<path d="M64.0001 64V96M64.0001 96L80.0001 85.3333M64.0001 96L48.0001 85.3333M69.3334 16H43.7334C37.7601 16 34.7734 16 32.4907 17.1627C30.4838 18.1853 28.852 19.817 27.8294 21.824C26.6667 24.1067 26.6667 27.0933 26.6667 33.0667V94.9333C26.6667 100.907 26.6667 103.893 27.8294 106.176C28.852 108.183 30.4838 109.815 32.4907 110.837C34.7681 112 37.7547 112 43.7174 112H84.2827C90.2454 112 93.2267 112 95.5041 110.837C97.5147 109.813 99.1467 108.181 100.171 106.176C101.333 103.893 101.333 100.917 101.333 94.9547V48M69.3334 16C70.8587 16.016 71.8187 16.0747 72.7414 16.2933C73.8365 16.56 74.8641 16.9867 75.8241 17.5733C76.9014 18.2347 77.8241 19.1573 79.6641 21.0027L96.3361 37.6693C98.1814 39.5147 99.0987 40.432 99.7601 41.5093C100.347 42.4729 100.773 43.5004 101.04 44.592C101.253 45.5147 101.317 46.48 101.333 48M69.3334 16V30.9333C69.3334 36.9067 69.3334 39.8933 70.4961 42.176C71.5187 44.183 73.1504 45.8147 75.1574 46.8373C77.4347 48 80.4214 48 86.3841 48H101.333" stroke="#D4D4D4" stroke-opacity="0.4" stroke-width="9.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h3 className="mt-4 font-['Merriweather',serif] text-xl font-bold text-[#303d32]">Click to Download</h3>
            <p className="mt-2 text-sm text-neutral-600">QR code will be available when app launches</p>
          </section>

          <section className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
            <h3 className="text-center font-['Merriweather',serif] text-2xl font-bold text-[#303d32]">What's Included</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuresData.map((feature) => (
                <article key={feature.id} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5171561a]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-['Merriweather',serif] text-base font-bold text-[#303d32]">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p className="text-sm text-neutral-500">
            <span className="font-bold">System Requirements:</span> ARCore support for Android
          </p>
        </div>
      </main>

      <footer className="bg-[#517156] px-6 py-8 text-center text-sm text-neutral-200 md:px-10">
        © 2026 GreenAtlas. Promoting plant biodiversity awareness and conservation education.
      </footer>
    </div>
  )
}
