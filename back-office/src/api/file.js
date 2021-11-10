import HTTP from '@/api/HTTP'

const URL_BASE = ''

export async function UploadFile (files, path) {
  const formData = new FormData()
  files.forEach((file, i) => {
    formData.append(`file${i}`, file)
  })
  const response = await HTTP.post(`${URL_BASE}uploadFile`, formData, {
    params: {
      path
    }
  })
  return response
}

export async function DeleteFile (urls) {
  const response = await HTTP.post(`${URL_BASE}deleteFile`, {
    urls
  })
  return response
}
