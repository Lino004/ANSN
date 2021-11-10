import HTTP from '@/api/HTTP'

const URL_BASE = 'ping'

export async function Get () {
  const response = await HTTP.get(`${URL_BASE}`)
  return response
}
export async function Post () {
  const response = await HTTP.post(`${URL_BASE}`)
  return response
}
export async function Put () {
  const response = await HTTP.put(`${URL_BASE}`)
  return response
}
export async function Delete () {
  const response = await HTTP.delete(`${URL_BASE}`)
  return response
}
