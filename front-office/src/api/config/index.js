const configDev = {
  BASE_URL: 'http://localhost:3000/'
}
const configStaging = {
  BASE_URL: 'https://test-api.asnordsud.com/'
}
const configProd = {
  BASE_URL: 'https://test-api.asnordsud.com/'
}

let config
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_BACK === 'staging') {
    config = configStaging
  } else {
    config = configProd
  }
} else {
  config = configDev
}
export default config
