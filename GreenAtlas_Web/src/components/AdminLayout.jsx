import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { signOutAdmin } from '../auth/adminAuth'
import { navItems } from '../constants/navigation'
import Logo from '../assets/Logo.png'

function NavItemIcon({ icon }) {
  const icons = {
    DB: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M10 14V8.66667C10 8.48986 9.92976 8.32029 9.80474 8.19526C9.67971 8.07024 9.51014 8 9.33333 8H6.66667C6.48986 8 6.32029 8.07024 6.19526 8.19526C6.07024 8.32029 6 8.48986 6 8.66667V14" />
        <path d="M2 6.66666C1.99995 6.47271 2.04222 6.28108 2.12386 6.10514C2.20549 5.9292 2.32453 5.77319 2.47267 5.64799L7.13933 1.64799C7.37999 1.4446 7.6849 1.33301 8 1.33301C8.3151 1.33301 8.62001 1.4446 8.86067 1.64799L13.5273 5.64799C13.6755 5.77319 13.7945 5.9292 13.8761 6.10514C13.9578 6.28108 14 6.47271 14 6.66666V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V6.66666Z" />
      </svg>
    ),
    AR: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14" />
        <path d="M12 11.3333V6" />
        <path d="M8.6665 11.3335V3.3335" />
        <path d="M5.3335 11.3335V9.3335" />
      </svg>
    ),
    VA: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M13.3332 8.66664C13.3332 12 10.9998 13.6666 8.2265 14.6333C8.08128 14.6825 7.92353 14.6802 7.77984 14.6266C4.99984 13.6666 2.6665 12 2.6665 8.66664V3.99997C2.6665 3.82316 2.73674 3.65359 2.86177 3.52857C2.98679 3.40355 3.15636 3.33331 3.33317 3.33331C4.6665 3.33331 6.33317 2.53331 7.49317 1.51997C7.63441 1.39931 7.81407 1.33301 7.99984 1.33301C8.1856 1.33301 8.36527 1.39931 8.5065 1.51997C9.67317 2.53997 11.3332 3.33331 12.6665 3.33331C12.8433 3.33331 13.0129 3.40355 13.1379 3.52857C13.2629 3.65359 13.3332 3.82316 13.3332 3.99997V8.66664Z" />
        <path d="M6 7.99984L7.33333 9.33317L10 6.6665" />
      </svg>
    ),
    FR: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 4.6665V13.9998" />
        <path d="M2.00016 12C1.82335 12 1.65378 11.9298 1.52876 11.8047C1.40373 11.6797 1.3335 11.5101 1.3335 11.3333V2.66667C1.3335 2.48986 1.40373 2.32029 1.52876 2.19526C1.65378 2.07024 1.82335 2 2.00016 2H5.3335C6.04074 2 6.71902 2.28095 7.21911 2.78105C7.71921 3.28115 8.00016 3.95942 8.00016 4.66667C8.00016 3.95942 8.28111 3.28115 8.78121 2.78105C9.28131 2.28095 9.95959 2 10.6668 2H14.0002C14.177 2 14.3465 2.07024 14.4716 2.19526C14.5966 2.32029 14.6668 2.48986 14.6668 2.66667V11.3333C14.6668 11.5101 14.5966 11.6797 14.4716 11.8047C14.3465 11.9298 14.177 12 14.0002 12H10.0002C9.46973 12 8.96102 12.2107 8.58595 12.5858C8.21088 12.9609 8.00016 13.4696 8.00016 14C8.00016 13.4696 7.78945 12.9609 7.41438 12.5858C7.0393 12.2107 6.5306 12 6.00016 12H2.00016Z" />
      </svg>
    ),
    PM: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 5.3335C11.3137 5.3335 14 4.43807 14 3.3335C14 2.22893 11.3137 1.3335 8 1.3335C4.68629 1.3335 2 2.22893 2 3.3335C2 4.43807 4.68629 5.3335 8 5.3335Z" />
        <path d="M2 3.3335V12.6668C2 13.1973 2.63214 13.706 3.75736 14.081C4.88258 14.4561 6.4087 14.6668 8 14.6668C9.5913 14.6668 11.1174 14.4561 12.2426 14.081C13.3679 13.706 14 13.1973 14 12.6668V3.3335" />
        <path d="M2 8C2 8.53043 2.63214 9.03914 3.75736 9.41421C4.88258 9.78929 6.4087 10 8 10C9.5913 10 11.1174 9.78929 12.2426 9.41421C13.3679 9.03914 14 8.53043 14 8" />
      </svg>
    ),
    MT: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M5.3335 1.3335V4.00016" />
        <path d="M10.6665 1.3335V4.00016" />
        <path d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" />
        <path d="M2 6.6665H14" />
      </svg>
    ),
    AL: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M10.0002 1.3335H6.00016C5.63197 1.3335 5.3335 1.63197 5.3335 2.00016V3.3335C5.3335 3.70169 5.63197 4.00016 6.00016 4.00016H10.0002C10.3684 4.00016 10.6668 3.70169 10.6668 3.3335V2.00016C10.6668 1.63197 10.3684 1.3335 10.0002 1.3335Z" />
        <path d="M10.6665 2.6665H11.9998C12.3535 2.6665 12.6926 2.80698 12.9426 3.05703C13.1927 3.30708 13.3332 3.64622 13.3332 3.99984V13.3332C13.3332 13.6868 13.1927 14.0259 12.9426 14.276C12.6926 14.526 12.3535 14.6665 11.9998 14.6665H3.99984C3.64622 14.6665 3.30708 14.526 3.05703 14.276C2.80698 14.0259 2.6665 13.6868 2.6665 13.3332V3.99984C2.6665 3.64622 2.80698 3.30708 3.05703 3.05703C3.30708 2.80698 3.64622 2.6665 3.99984 2.6665H5.33317" />
        <path d="M8 7.3335H10.6667" />
        <path d="M8 10.6665H10.6667" />
        <path d="M5.3335 7.3335H5.34016" />
        <path d="M5.3335 10.6665H5.34016" />
      </svg>
    ),
    UM: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M10.6668 14V12.6667C10.6668 11.9594 10.3859 11.2811 9.88578 10.781C9.38568 10.281 8.70741 10 8.00016 10H4.00016C3.29292 10 2.61464 10.281 2.11454 10.781C1.61445 11.2811 1.3335 11.9594 1.3335 12.6667V14" />
        <path d="M10.6665 2.08545C11.2383 2.2337 11.7448 2.56763 12.1063 3.03482C12.4678 3.50202 12.664 4.07604 12.664 4.66678C12.664 5.25752 12.4678 5.83154 12.1063 6.29874C11.7448 6.76594 11.2383 7.09987 10.6665 7.24812" />
        <path d="M14.6665 13.9998V12.6664C14.6661 12.0756 14.4694 11.5016 14.1074 11.0346C13.7454 10.5677 13.2386 10.2341 12.6665 10.0864" />
        <path d="M6.00016 7.33333C7.47292 7.33333 8.66683 6.13943 8.66683 4.66667C8.66683 3.19391 7.47292 2 6.00016 2C4.5274 2 3.3335 3.19391 3.3335 4.66667C3.3335 6.13943 4.5274 7.33333 6.00016 7.33333Z" />
      </svg>
    ),
  }

  return <span className="link-icon">{icons[icon] || icon}</span>
}

function AdminLayout() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOutAdmin()
    } finally {
      navigate('/login', { replace: true })
    }
  }

  return (
    <div className="portal-shell">
      <aside className="sidebar">
        <div className="sidebar-head">
          <img className="sidebar-logo" alt="GreenAtlas logo" src={Logo} />
          <div className="sidebar-brand-copy">
            <p className="sidebar-brand-title">GreenAtlas</p>
            <p className="sidebar-brand-subtitle">Cavite Protected Area</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Admin tabs">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
              to={item.path}
            >
              <NavItemIcon icon={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <span className="logout-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M10 5H5v14h5" />
              <path d="M14 8l5 4-5 4" />
              <path d="M18.5 12H9" />
            </svg>
          </span>
          <span>Sign Out</span>
        </button>
      </aside>

      <main className="portal-main">
        <header className="portal-topbar">
          <div className="topbar-welcome">
            <img className="topbar-welcome-logo" alt="GreenAtlas logo" src={Logo} />
            <p className="topbar-welcome-text">Welcome, Admin</p>
          </div>

          <div className="topbar-spacer" aria-hidden="true" />

          <div className="topbar-actions">
            <button className="notify-btn" type="button" aria-label="Notifications">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 9a5 5 0 1 1 10 0v4l2 2H5l2-2z" />
                <path d="M10 18a2 2 0 0 0 4 0" />
              </svg>
              <span className="notify-badge">2</span>
            </button>
            <button className="admin-pill" type="button">
              <span className="admin-pill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3" />
                  <path d="M5 19c0-3 3.1-5 7-5s7 2 7 5" />
                </svg>
              </span>
              <span>DENR Admin</span>
            </button>
          </div>
        </header>

        <section className="portal-content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default AdminLayout
