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
    description: 'Access to structured data, including classification, characteristics, and importance.',
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
    description: 'View plant species in augmented reality for a more immersive and engaging learning experience.',
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
    description: 'All plant information is carefully documented and validated for accuracy.',
  },
]

export default function DownloadPage() {
  const downloadUrl = 'https://github.com/ntrces/GreenAtlas/releases/latest/download/GreenAtlas.apk'

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
              Experience the full power of AR botanical exploration on your mobile device. Scan the QR code or download the official APK for Android.
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
            <p className="mt-2 text-sm text-neutral-600">Scan the QR code with your phone camera or click the button below to download directly.</p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-center">
              {/* QR Code Container */}
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl border-2 border-[#51715633] bg-white p-3.5 shadow-md transition-transform hover:scale-105">
                  <QRCodeCanvas 
                    value={downloadUrl} 
                    size={170} 
                    level="H" 
                    marginSize={1}
                    imageSettings={{
                      src: Logo,
                      height: 36,
                      width: 36,
                      excavate: true,
                    }}
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#303d32]">Scan to Download</span>
                <p className="max-w-[200px] text-center text-xs text-neutral-500">
                  Point your phone's camera to download directly to your mobile device.
                </p>
              </div>

              <div className="hidden h-40 w-px bg-neutral-200 md:block"></div>

              {/* Direct APK Download Button */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href={downloadUrl}
                  download="GreenAtlas.apk"
                  className="group relative flex w-full max-w-[240px] items-center gap-3 overflow-hidden rounded-xl border-2 border-[#303d32] bg-[#303d32] px-8 py-4 text-white transition-all hover:bg-[#242f26] hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L2 18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Android Package</div>
                    <div className="font-bold text-sm">Download APK</div>
                  </div>
                </a>
                <p className="max-w-[200px] text-center text-xs text-neutral-500">
                  Direct APK file download for Android.
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-xs text-neutral-500">
              APK Size: ~221 MB • Compatible with Android 8.0+
            </p>
          </section>

          {/* User Manual for APK / Onboarding Guide */}
          <section className="w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-10 lg:p-12">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#5171561a] px-3.5 py-1 text-xs font-semibold text-[#517156]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                New User Guide
              </span>
              <h3 className="mt-3 font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-3xl">
                User Manual for APK
              </h3>
              <p className="mt-2 max-w-xl text-xs text-neutral-600 md:text-sm">
                Follow this step-by-step guide after downloading and installing GreenAtlas on your mobile device.
              </p>
            </div>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
              <div>
                <h4 className="flex items-center gap-2 font-['Poppins',Helvetica] text-base font-bold text-[#303d32] md:text-lg">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#303d32] text-xs font-bold text-white">
                    1
                  </span>
                  Getting Started & Account Setup
                </h4>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:gap-6">
                  {/* Step 1.1 */}
                  <div className="rounded-2xl border border-neutral-100 bg-[#f9fbf9] p-5 transition-all hover:border-[#51715640] hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5e8] text-[#517156]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#517156] uppercase tracking-wider">
                          Step 1.1
                        </span>
                        <h5 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">
                          First-Time Launch & Walkthrough
                        </h5>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-neutral-600 md:text-sm">
                      When you open GreenAtlas for the first time:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 md:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          <strong className="font-semibold text-[#303d32]">Welcome Tour:</strong> Swipe through the introduction screens to learn about the mission, features, and tools available in GreenAtlas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          <strong className="font-semibold text-[#303d32]">Skip or Finish:</strong> You may tap <code className="rounded bg-[#e5f5e8] px-1.5 py-0.5 text-xs font-semibold text-[#303d32]">Skip</code> at any time to proceed directly to the authentication screen, or complete the walkthrough by tapping <code className="rounded bg-[#303d32] px-1.5 py-0.5 text-xs font-semibold text-white">Get Started</code>.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 1.2 */}
                  <div className="rounded-2xl border border-neutral-100 bg-[#f9fbf9] p-5 transition-all hover:border-[#51715640] hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5e8] text-[#517156]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="8.5" cy="7" r="4"/>
                          <line x1="20" y1="8" x2="20" y2="14"/>
                          <line x1="23" y1="11" x2="17" y2="11"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#517156] uppercase tracking-wider">
                          Step 1.2
                        </span>
                        <h5 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">
                          Account Registration (Sign Up)
                        </h5>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 md:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          On the launch screen, select <code className="rounded bg-[#e5f5e8] px-1.5 py-0.5 text-xs font-semibold text-[#303d32]">Sign Up</code>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <div>
                          <span>Fill in your details:</span>
                          <ul className="mt-1.5 space-y-1 pl-3 text-xs text-neutral-600">
                            <li>• Full Name</li>
                            <li>• Email Address</li>
                            <li>• Password (must meet security requirements)</li>
                            <li>
                              • Role Selection (<span className="font-medium text-[#303d32]">Standard User / Visitor</span> or <span className="font-medium text-[#303d32]">Employee / Field Officer</span>)
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          Tap <code className="rounded bg-[#303d32] px-1.5 py-0.5 text-xs font-semibold text-white">Create Account</code>.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 1.3 */}
                  <div className="rounded-2xl border border-neutral-100 bg-[#f9fbf9] p-5 transition-all hover:border-[#51715640] hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5e8] text-[#517156]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#517156] uppercase tracking-wider">
                          Step 1.3
                        </span>
                        <h5 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">
                          Logging In
                        </h5>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 md:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>Open the login screen.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>Enter your registered Email Address and Password.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          Tap <code className="rounded bg-[#303d32] px-1.5 py-0.5 text-xs font-semibold text-white">Log In</code>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>Upon successful login, you will be taken directly to your personalized dashboard based on your user role.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 1.4 */}
                  <div className="rounded-2xl border border-neutral-100 bg-[#f9fbf9] p-5 transition-all hover:border-[#51715640] hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5e8] text-[#517156]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#517156] uppercase tracking-wider">
                          Step 1.4
                        </span>
                        <h5 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">
                          Profile Setup & Management
                        </h5>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-neutral-600 md:text-sm">
                      You can update your personal information and security settings at any time:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 md:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          Open the side menu or navigation bar and tap <code className="rounded bg-[#e5f5e8] px-1.5 py-0.5 text-xs font-semibold text-[#303d32]">Profile</code>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          <strong className="font-semibold text-[#303d32]">Edit Profile:</strong> Update your profile picture, display name, contact information, or bio. Tap <code className="rounded bg-[#303d32] px-1.5 py-0.5 text-xs font-semibold text-white">Save Changes</code>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          <strong className="font-semibold text-[#303d32]">Change Password:</strong> Select Change Password, enter your current password followed by your new password, and confirm.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#517156]"></span>
                        <span>
                          <strong className="font-semibold text-[#303d32]">Theme Customization:</strong> Toggle between Light Mode and Dark Mode to suit your viewing preferences.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
