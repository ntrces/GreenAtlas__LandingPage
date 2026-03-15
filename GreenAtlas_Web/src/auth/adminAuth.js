import { supabase } from '../lib/supabaseClient'

const AUTH_KEY = 'greenatlas_admin_auth'

let adminLoggedIn = window.localStorage.getItem(AUTH_KEY) === 'true'

function setAdminSessionState(session) {
  adminLoggedIn = Boolean(session)
  window.localStorage.setItem(AUTH_KEY, adminLoggedIn ? 'true' : 'false')
}

supabase.auth.onAuthStateChange((_event, session) => {
  setAdminSessionState(session)
})

export function isAdminLoggedIn() {
  return adminLoggedIn
}

export function saveAdminSession(isLoggedIn) {
  adminLoggedIn = isLoggedIn
  window.localStorage.setItem(AUTH_KEY, isLoggedIn ? 'true' : 'false')
}

export async function refreshAdminSession() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    setAdminSessionState(null)
    return false
  }

  setAdminSessionState(data.session)
  return Boolean(data.session)
}

export async function signInAdmin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  setAdminSessionState(data.session)
  return data
}

export async function signOutAdmin() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw error
  }

  setAdminSessionState(null)
}
