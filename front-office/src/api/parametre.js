import HTTP from '@/api/HTTP'

const URL_BASE = 'parametre'

export async function GetOne (cle) {
  const response = await HTTP.get(`${URL_BASE}/public/${cle}`)
  return response
}
