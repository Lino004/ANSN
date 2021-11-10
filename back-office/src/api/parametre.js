import HTTP from '@/api/HTTP'

const URL_BASE = 'parametre'

export async function Create (data) {
  const response = await HTTP.post(`${URL_BASE}/create`, data)
  return response
}

export async function GetAll (params) {
  const response = await HTTP.get(`${URL_BASE}/all`, {
    params
  })
  return response
}

export async function GetOne (cle) {
  const response = await HTTP.get(`${URL_BASE}/${cle}`)
  return response
}

export async function Delete (id) {
  const response = await HTTP.delete(`${URL_BASE}/${id}`)
  return response
}

export async function UpdateMany (data) {
  const response = await HTTP.put(`${URL_BASE}/`, {
    data
  })
  return response
}
