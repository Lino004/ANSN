import HTTP from '@/api/HTTP'

const URL_BASE = 'user'

export async function Auth (email, password) {
  const response = await HTTP.post(`${URL_BASE}/auth`, { email, password })
  return response
}
