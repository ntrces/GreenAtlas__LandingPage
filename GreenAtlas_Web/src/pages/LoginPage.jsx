import { useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { isAdminLoggedIn, signInAdmin } from '../auth/adminAuth'
import Logo from '../assets/Logo.png'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const redirectTarget = useMemo(() => {
    const fromRoute = location.state?.from
    return typeof fromRoute === 'string' ? fromRoute : '/dashboard'
  }, [location.state])

  if (isAdminLoggedIn()) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await signInAdmin(email, password)
      navigate(redirectTarget, { replace: true })
    } catch {
      setError('Invalid email or password.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_bottom_left,#cfe1c9,transparent_42%),#d4dfd7] p-4">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center gap-3">
          <img className="h-14 w-14 object-contain" src={Logo} alt="GreenAtlas logo" />
          <div className="text-center font-(--font-heading) text-3xl leading-9 text-[#303d32]">
            Admin Portal
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 rounded-xl border border-[rgba(48,61,50,0.15)] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col items-center gap-2 px-6 py-3">
            <div className="text-base leading-4 font-semibold text-[#303d32]">Sign In</div>
            <p className="m-0 text-center text-sm leading-6 text-[#517156]">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 px-0 pb-6">
            <div className="flex flex-col gap-2 px-6">
              <label className="text-sm leading-3.5 font-medium text-[#303d32]" htmlFor="input-1">
                Email Address *
              </label>

              <div className="flex w-full items-center gap-2 rounded-md border border-[rgba(48,61,50,0.15)] bg-white p-2.5 focus-within:border-[#517156] focus-within:ring-2 focus-within:ring-[#517156]/15">
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[#517156]" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.659 4.664L8.668 8.48a1.308 1.308 0 0 1-1.338 0L1.333 4.664" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.326 2.665H2.665a1.332 1.332 0 0 0-1.332 1.332v7.996a1.332 1.332 0 0 0 1.332 1.333h10.661a1.333 1.333 0 0 0 1.333-1.333V3.997a1.333 1.333 0 0 0-1.333-1.332Z" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <input
                  className="w-full border-0 bg-transparent text-sm text-[#425945] outline-none placeholder:text-[rgba(81,113,86,0.5)]"
                  id="input-1"
                  placeholder="your.email@example.com"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 px-6">
              <label htmlFor="input-2" className="text-sm leading-3.5 font-medium text-[#303d32]">
                Password *
              </label>

              <div className="flex w-full items-center gap-2 rounded-md border border-[rgba(48,61,50,0.15)] bg-white p-2.5 focus-within:border-[#517156] focus-within:ring-2 focus-within:ring-[#517156]/15">
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[#517156]" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.66 7.329H3.332A1.333 1.333 0 0 0 2 8.662v4.664a1.333 1.333 0 0 0 1.332 1.333h9.328a1.333 1.333 0 0 0 1.333-1.333V8.662a1.333 1.333 0 0 0-1.333-1.333Z" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.664 7.329V4.664a3.332 3.332 0 0 1 6.663 0V7.33" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <input
                  id="input-2"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  className="w-full border-0 bg-transparent text-sm text-[#425945] outline-none placeholder:text-[rgba(81,113,86,0.5)]"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="inline-flex h-4 w-4 items-center justify-center bg-transparent p-0 text-[#517156] transition hover:text-[#364c39]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.374 8.228a.668.668 0 0 1 0-.464A10.71 10.71 0 0 1 4.011 4.54a7.972 7.972 0 0 1 3.984-1.208c1.418 0 2.806.421 3.984 1.21a10.71 10.71 0 0 1 2.638 3.223.668.668 0 0 1 0 .464 10.71 10.71 0 0 1-2.638 3.223 7.972 7.972 0 0 1-3.984 1.209 7.972 7.972 0 0 1-3.984-1.209 10.71 10.71 0 0 1-2.637-3.223Z" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.995 9.994a2 2 0 1 0 0-3.998 2 2 0 0 0 0 3.998Z" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {error ? (
              <p className="px-6 text-sm text-[#b52323]">{error}</p>
            ) : null}

            <button
              type="submit"
              className="mx-6 w-[calc(100%-3rem)] rounded-md bg-[#517156] px-6 py-2.5 text-sm leading-5 font-medium text-white transition hover:bg-[#364c39] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
