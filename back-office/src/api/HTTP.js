/* eslint-disable no-console */

import axios from 'axios'
import router from '../router'
import store from '../store'
import config from './config'

const HTTP = axios.create()
HTTP.interceptors.request.use((request) => {
  request.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + store.getters.token
  }
  if (request.url.indexOf('http') === -1) {
    request.url = config.BASE_URL + request.url
  }
  return request
}, (error) => {
  return Promise.reject(error)
})

HTTP.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('logout')
    router.push({ name: 'Login' })
  }
  throw error
})

export default HTTP
