import HTTP from '@/api/HTTP'

const URL_BASE = 'projet'

export async function GetAll (params) {
  const response = await HTTP.get(`${URL_BASE}/all`, {
    params
  })
  return response
}

export async function GetOne (id) {
  const response = await HTTP.get(`${URL_BASE}/${id}`)
  return response
}
