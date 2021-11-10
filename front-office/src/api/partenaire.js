import HTTP from '@/api/HTTP'

const URL_BASE = 'partenaire'

export async function GetAll (params) {
  const response = await HTTP.get(`${URL_BASE}/all`, {
    params
  })
  return response
}
